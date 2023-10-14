#                       Data Parallel Control (dpctl)
#
#  Copyright 2020-2023 Intel Corporation
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

from random import randrange

import numpy as np
import pytest

import dpctl.tensor as dpt
from dpctl.tests.helper import get_queue_or_skip, skip_if_dtype_not_supported


def test_max_min_axis():
    get_queue_or_skip()

    x = dpt.reshape(
        dpt.arange((3 * 4 * 5 * 6 * 7), dtype="i4"), (3, 4, 5, 6, 7)
    )

    m = dpt.max(x, axis=(1, 2, -1))
    assert m.shape == (3, 6)
    assert dpt.all(m == x[:, -1, -1, :, -1])

    m = dpt.min(x, axis=(1, 2, -1))
    assert m.shape == (3, 6)
    assert dpt.all(m == x[:, 0, 0, :, 0])


def test_reduction_keepdims():
    get_queue_or_skip()

    n0, n1 = 3, 6
    x = dpt.ones((n0, 4, 5, n1, 7), dtype="i4")
    m = dpt.max(x, axis=(1, 2, -1), keepdims=True)

    xx = dpt.reshape(dpt.permute_dims(x, (0, 3, 1, 2, -1)), (n0, n1, -1))
    p = dpt.argmax(xx, axis=-1, keepdims=True)

    assert m.shape == (n0, 1, 1, n1, 1)
    assert dpt.all(m == dpt.reshape(x[:, 0, 0, :, 0], m.shape))
    assert dpt.all(p == 0)


def test_max_scalar():
    get_queue_or_skip()

    x = dpt.ones(())
    m = dpt.max(x)

    assert m.shape == ()
    assert x == m


@pytest.mark.parametrize("arg_dtype", ["i4", "f4", "c8"])
def test_reduction_kernels(arg_dtype):
    # i4 - always uses atomics w/ sycl group reduction
    # f4 - always uses atomics w/ custom group reduction
    # c8 - always uses temps w/ custom group reduction
    q = get_queue_or_skip()
    skip_if_dtype_not_supported(arg_dtype, q)

    x = dpt.ones((24, 1025), dtype=arg_dtype, sycl_queue=q)
    x[x.shape[0] // 2, :] = 3
    x[:, x.shape[1] // 2] = 3

    m = dpt.max(x)
    assert m == 3
    m = dpt.max(x, axis=0)
    assert dpt.all(m == 3)
    m = dpt.max(x, axis=1)
    assert dpt.all(m == 3)

    x = dpt.ones((24, 1025), dtype=arg_dtype, sycl_queue=q)
    x[x.shape[0] // 2, :] = 0
    x[:, x.shape[1] // 2] = 0

    m = dpt.min(x)
    assert m == 0
    m = dpt.min(x, axis=0)
    assert dpt.all(m == 0)
    m = dpt.min(x, axis=1)
    assert dpt.all(m == 0)


def test_max_min_nan_propagation():
    get_queue_or_skip()

    # float, finites
    x = dpt.arange(4, dtype="f4")
    x[0] = dpt.nan
    assert dpt.isnan(dpt.max(x))
    assert dpt.isnan(dpt.min(x))

    # float, infinities
    x[1:] = dpt.inf
    assert dpt.isnan(dpt.max(x))
    x[1:] = -dpt.inf
    assert dpt.isnan(dpt.min(x))

    # complex
    x = dpt.arange(4, dtype="c8")
    x[0] = complex(dpt.nan, 0)
    assert dpt.isnan(dpt.max(x))
    assert dpt.isnan(dpt.min(x))

    x[0] = complex(0, dpt.nan)
    assert dpt.isnan(dpt.max(x))
    assert dpt.isnan(dpt.min(x))


def test_argmax_scalar():
    get_queue_or_skip()

    x = dpt.ones(())
    m = dpt.argmax(x)

    assert m.shape == ()
    assert m == 0


@pytest.mark.parametrize("arg_dtype", ["i4", "f4", "c8"])
def test_search_reduction_kernels(arg_dtype):
    # i4 - always uses atomics w/ sycl group reduction
    # f4 - always uses atomics w/ custom group reduction
    # c8 - always uses temps w/ custom group reduction
    q = get_queue_or_skip()
    skip_if_dtype_not_supported(arg_dtype, q)

    x = dpt.ones((24 * 1025), dtype=arg_dtype, sycl_queue=q)
    idx = randrange(x.size)
    idx_tup = np.unravel_index(idx, (24, 1025))
    x[idx] = 2

    m = dpt.argmax(x)
    assert m == idx

    x = dpt.reshape(x, (24, 1025))

    x[idx_tup[0], :] = 3
    m = dpt.argmax(x, axis=0)
    assert dpt.all(m == idx_tup[0])
    x[:, idx_tup[1]] = 4
    m = dpt.argmax(x, axis=1)
    assert dpt.all(m == idx_tup[1])

    x = x[:, ::-2]
    idx = randrange(x.shape[1])
    x[:, idx] = 5
    m = dpt.argmax(x, axis=1)
    assert dpt.all(m == idx)

    x = dpt.ones((24 * 1025), dtype=arg_dtype, sycl_queue=q)
    idx = randrange(x.size)
    idx_tup = np.unravel_index(idx, (24, 1025))
    x[idx] = 0

    m = dpt.argmin(x)
    assert m == idx

    x = dpt.reshape(x, (24, 1025))

    x[idx_tup[0], :] = -1
    m = dpt.argmin(x, axis=0)
    assert dpt.all(m == idx_tup[0])
    x[:, idx_tup[1]] = -2
    m = dpt.argmin(x, axis=1)
    assert dpt.all(m == idx_tup[1])

    x = x[:, ::-2]
    idx = randrange(x.shape[1])
    x[:, idx] = -3
    m = dpt.argmin(x, axis=1)
    assert dpt.all(m == idx)


def test_argmax_argmin_nan_propagation():
    get_queue_or_skip()

    sz = 4
    idx = randrange(sz)
    # floats
    x = dpt.arange(sz, dtype="f4")
    x[idx] = dpt.nan
    assert dpt.argmax(x) == idx
    assert dpt.argmin(x) == idx

    # complex
    x = dpt.arange(sz, dtype="c8")
    x[idx] = complex(dpt.nan, 0)
    assert dpt.argmax(x) == idx
    assert dpt.argmin(x) == idx

    x[idx] = complex(0, dpt.nan)
    assert dpt.argmax(x) == idx
    assert dpt.argmin(x) == idx


def test_argmax_argmin_identities():
    # make sure that identity arrays work as expected
    get_queue_or_skip()

    x = dpt.full(3, dpt.iinfo(dpt.int32).min, dtype="i4")
    assert dpt.argmax(x) == 0
    x = dpt.full(3, dpt.iinfo(dpt.int32).max, dtype="i4")
    assert dpt.argmin(x) == 0


def test_reduction_arg_validation():
    get_queue_or_skip()

    x = dict()
    with pytest.raises(TypeError):
        dpt.sum(x)
    with pytest.raises(TypeError):
        dpt.max(x)
    with pytest.raises(TypeError):
        dpt.argmax(x)

    x = dpt.zeros((0,), dtype="i4")
    with pytest.raises(ValueError):
        dpt.max(x)
    with pytest.raises(ValueError):
        dpt.argmax(x)