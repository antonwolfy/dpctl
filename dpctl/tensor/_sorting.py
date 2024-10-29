#                       Data Parallel Control (dpctl)
#
#  Copyright 2020-2024 Intel Corporation
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

import dpctl.tensor as dpt
import dpctl.tensor._tensor_impl as ti
import dpctl.utils as du

from ._numpy_helper import normalize_axis_index
from ._tensor_sorting_impl import (
    _argsort_ascending,
    _argsort_descending,
    _sort_ascending,
    _sort_descending,
)
from ._tensor_sorting_radix_impl import (
    _radix_argsort_ascending,
    _radix_argsort_descending,
    _radix_sort_ascending,
    _radix_sort_descending,
    _radix_sort_dtype_supported,
)

__all__ = ["sort", "argsort"]


def _get_mergesort_impl_fn(descending):
    return _sort_descending if descending else _sort_ascending


def _get_radixsort_impl_fn(descending):
    return _radix_sort_descending if descending else _radix_sort_ascending


def sort(x, /, *, axis=-1, descending=False, stable=True, kind=None):
    """sort(x, axis=-1, descending=False, stable=True)

    Returns a sorted copy of an input array `x`.

    Args:
        x (usm_ndarray):
            input array.
        axis (Optional[int]):
            axis along which to sort. If set to `-1`, the function
            must sort along the last axis. Default: `-1`.
        descending (Optional[bool]):
            sort order. If `True`, the array must be sorted in descending
            order (by value). If `False`, the array must be sorted in
            ascending order (by value). Default: `False`.
        stable (Optional[bool]):
            sort stability. If `True`, the returned array must maintain the
            relative order of `x` values which compare as equal. If `False`,
            the returned array may or may not maintain the relative order of
            `x` values which compare as equal. Default: `True`.
        kind (Optional[Literal["stable", "mergesort", "radixsort"]]):
            Sorting algorithm. The default is `"stable"`, which uses parallel
            merge-sort or parallel radix-sort algorithms depending on the
            array data type.
    Returns:
        usm_ndarray:
            a sorted array. The returned array has the same data type and
            the same shape as the input array `x`.
    """
    if not isinstance(x, dpt.usm_ndarray):
        raise TypeError(
            f"Expected type dpctl.tensor.usm_ndarray, got {type(x)}"
        )
    nd = x.ndim
    if nd == 0:
        axis = normalize_axis_index(axis, ndim=1, msg_prefix="axis")
        return dpt.copy(x, order="C")
    else:
        axis = normalize_axis_index(axis, ndim=nd, msg_prefix="axis")
    a1 = axis + 1
    if a1 == nd:
        perm = list(range(nd))
        arr = x
    else:
        perm = [i for i in range(nd) if i != axis] + [
            axis,
        ]
        arr = dpt.permute_dims(x, perm)
    if kind is None:
        kind = "stable"
    if not isinstance(kind, str) or kind not in [
        "stable",
        "radixsort",
        "mergesort",
    ]:
        raise ValueError(
            "Unsupported kind value. Expected 'stable', 'mergesort', "
            f"or 'radixsort', but got '{kind}'"
        )
    if kind == "mergesort":
        impl_fn = _get_mergesort_impl_fn(descending)
    elif kind == "radixsort":
        if _radix_sort_dtype_supported(x.dtype.num):
            impl_fn = _get_radixsort_impl_fn(descending)
        else:
            raise ValueError(f"Radix sort is not supported for {x.dtype}")
    else:
        dt = x.dtype
        if dt in [dpt.bool, dpt.uint8, dpt.int8, dpt.int16, dpt.uint16]:
            impl_fn = _get_radixsort_impl_fn(descending)
        else:
            impl_fn = _get_mergesort_impl_fn(descending)
    exec_q = x.sycl_queue
    _manager = du.SequentialOrderManager[exec_q]
    dep_evs = _manager.submitted_events
    if arr.flags.c_contiguous:
        res = dpt.empty_like(arr, order="C")
        ht_ev, impl_ev = impl_fn(
            src=arr,
            trailing_dims_to_sort=1,
            dst=res,
            sycl_queue=exec_q,
            depends=dep_evs,
        )
        _manager.add_event_pair(ht_ev, impl_ev)
    else:
        tmp = dpt.empty_like(arr, order="C")
        ht_ev, copy_ev = ti._copy_usm_ndarray_into_usm_ndarray(
            src=arr, dst=tmp, sycl_queue=exec_q, depends=dep_evs
        )
        _manager.add_event_pair(ht_ev, copy_ev)
        res = dpt.empty_like(arr, order="C")
        ht_ev, impl_ev = impl_fn(
            src=tmp,
            trailing_dims_to_sort=1,
            dst=res,
            sycl_queue=exec_q,
            depends=[copy_ev],
        )
        _manager.add_event_pair(ht_ev, impl_ev)
    if a1 != nd:
        inv_perm = sorted(range(nd), key=lambda d: perm[d])
        res = dpt.permute_dims(res, inv_perm)
    return res


def _get_mergeargsort_impl_fn(descending):
    return _argsort_descending if descending else _argsort_ascending


def _get_radixargsort_impl_fn(descending):
    return _radix_argsort_descending if descending else _radix_argsort_ascending


def argsort(x, axis=-1, descending=False, stable=True, kind=None):
    """argsort(x, axis=-1, descending=False, stable=True)

    Returns the indices that sort an array `x` along a specified axis.

    Args:
        x (usm_ndarray):
            input array.
        axis (Optional[int]):
            axis along which to sort. If set to `-1`, the function
            must sort along the last axis. Default: `-1`.
        descending (Optional[bool]):
            sort order. If `True`, the array must be sorted in descending
            order (by value). If `False`, the array must be sorted in
            ascending order (by value). Default: `False`.
        stable (Optional[bool]):
            sort stability. If `True`, the returned array must maintain the
            relative order of `x` values which compare as equal. If `False`,
            the returned array may or may not maintain the relative order of
            `x` values which compare as equal. Default: `True`.
        kind (Optional[Literal["stable", "mergesort", "radixsort"]]):
            Sorting algorithm. The default is `"stable"`, which uses parallel
            merge-sort or parallel radix-sort algorithms depending on the
            array data type.

    Returns:
        usm_ndarray:
            an array of indices. The returned array has the  same shape as
            the input array `x`. The return array has default array index
            data type.
    """
    if not isinstance(x, dpt.usm_ndarray):
        raise TypeError(
            f"Expected type dpctl.tensor.usm_ndarray, got {type(x)}"
        )
    nd = x.ndim
    if nd == 0:
        axis = normalize_axis_index(axis, ndim=1, msg_prefix="axis")
        return dpt.zeros_like(
            x, dtype=ti.default_device_index_type(x.sycl_queue), order="C"
        )
    else:
        axis = normalize_axis_index(axis, ndim=nd, msg_prefix="axis")
    a1 = axis + 1
    if a1 == nd:
        perm = list(range(nd))
        arr = x
    else:
        perm = [i for i in range(nd) if i != axis] + [
            axis,
        ]
        arr = dpt.permute_dims(x, perm)
    if kind is None:
        kind = "stable"
    if not isinstance(kind, str) or kind not in [
        "stable",
        "radixsort",
        "mergesort",
    ]:
        raise ValueError(
            "Unsupported kind value. Expected 'stable', 'mergesort', "
            f"or 'radixsort', but got '{kind}'"
        )
    if kind == "mergesort":
        impl_fn = _get_mergeargsort_impl_fn(descending)
    elif kind == "radixsort":
        if _radix_sort_dtype_supported(x.dtype.num):
            impl_fn = _get_radixargsort_impl_fn(descending)
        else:
            raise ValueError(f"Radix sort is not supported for {x.dtype}")
    else:
        dt = x.dtype
        if dt in [dpt.bool, dpt.uint8, dpt.int8, dpt.int16, dpt.uint16]:
            impl_fn = _get_radixargsort_impl_fn(descending)
        else:
            impl_fn = _get_mergeargsort_impl_fn(descending)
    exec_q = x.sycl_queue
    _manager = du.SequentialOrderManager[exec_q]
    dep_evs = _manager.submitted_events
    index_dt = ti.default_device_index_type(exec_q)
    if arr.flags.c_contiguous:
        res = dpt.empty_like(arr, dtype=index_dt, order="C")
        ht_ev, impl_ev = impl_fn(
            src=arr,
            trailing_dims_to_sort=1,
            dst=res,
            sycl_queue=exec_q,
            depends=dep_evs,
        )
        _manager.add_event_pair(ht_ev, impl_ev)
    else:
        tmp = dpt.empty_like(arr, order="C")
        ht_ev, copy_ev = ti._copy_usm_ndarray_into_usm_ndarray(
            src=arr, dst=tmp, sycl_queue=exec_q, depends=dep_evs
        )
        _manager.add_event_pair(ht_ev, copy_ev)
        res = dpt.empty_like(arr, dtype=index_dt, order="C")
        ht_ev, impl_ev = impl_fn(
            src=tmp,
            trailing_dims_to_sort=1,
            dst=res,
            sycl_queue=exec_q,
            depends=[copy_ev],
        )
        _manager.add_event_pair(ht_ev, impl_ev)
    if a1 != nd:
        inv_perm = sorted(range(nd), key=lambda d: perm[d])
        res = dpt.permute_dims(res, inv_perm)
    return res
