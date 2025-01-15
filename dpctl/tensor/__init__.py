#                      Data Parallel Control (dpctl)
#
# Copyright 2020-2025 Intel Corporation
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""
    **Data Parallel Tensor** provides an N-dimensional array container
    backed by typed USM allocations and implements operations to
    create and manipulate such arrays, as well as perform operations
    on arrays in conformance with Python Array API standard.

    [ArrayAPI] https://data-apis.org/array-api
"""

from dpctl.tensor._copy_utils import asnumpy, astype, copy, from_numpy, to_numpy
from dpctl.tensor._ctors import (
    arange,
    asarray,
    empty,
    empty_like,
    eye,
    full,
    full_like,
    linspace,
    meshgrid,
    ones,
    ones_like,
    tril,
    triu,
    zeros,
    zeros_like,
)
from dpctl.tensor._data_types import (
    bool,
    complex64,
    complex128,
    dtype,
    float16,
    float32,
    float64,
    int8,
    int16,
    int32,
    int64,
    uint8,
    uint16,
    uint32,
    uint64,
)
from dpctl.tensor._device import Device
from dpctl.tensor._dldevice_conversions import (
    dldevice_to_sycl_device,
    sycl_device_to_dldevice,
)
from dpctl.tensor._dlpack import from_dlpack
from dpctl.tensor._indexing_functions import (
    extract,
    nonzero,
    place,
    put,
    put_along_axis,
    take,
    take_along_axis,
)
from dpctl.tensor._linear_algebra_functions import (
    matmul,
    matrix_transpose,
    tensordot,
    vecdot,
)
from dpctl.tensor._manipulation_functions import (
    broadcast_arrays,
    broadcast_to,
    concat,
    expand_dims,
    flip,
    moveaxis,
    permute_dims,
    repeat,
    roll,
    squeeze,
    stack,
    swapaxes,
    tile,
    unstack,
)
from dpctl.tensor._print import (
    get_print_options,
    print_options,
    set_print_options,
    usm_ndarray_repr,
    usm_ndarray_str,
)
from dpctl.tensor._reshape import reshape
from dpctl.tensor._search_functions import where
from dpctl.tensor._statistical_functions import mean, std, var
from dpctl.tensor._usmarray import DLDeviceType, usm_ndarray
from dpctl.tensor._utility_functions import all, any, diff

from ._accumulation import cumulative_logsumexp, cumulative_prod, cumulative_sum
from ._array_api import __array_api_version__, __array_namespace_info__
from ._clip import clip
from ._constants import e, inf, nan, newaxis, pi
from ._elementwise_funcs import (
    abs,
    acos,
    acosh,
    add,
    angle,
    asin,
    asinh,
    atan,
    atan2,
    atanh,
    bitwise_and,
    bitwise_invert,
    bitwise_left_shift,
    bitwise_or,
    bitwise_right_shift,
    bitwise_xor,
    cbrt,
    ceil,
    conj,
    copysign,
    cos,
    cosh,
    divide,
    equal,
    exp,
    exp2,
    expm1,
    floor,
    floor_divide,
    greater,
    greater_equal,
    hypot,
    imag,
    isfinite,
    isinf,
    isnan,
    less,
    less_equal,
    log,
    log1p,
    log2,
    log10,
    logaddexp,
    logical_and,
    logical_not,
    logical_or,
    logical_xor,
    maximum,
    minimum,
    multiply,
    negative,
    nextafter,
    not_equal,
    positive,
    pow,
    proj,
    real,
    reciprocal,
    remainder,
    round,
    rsqrt,
    sign,
    signbit,
    sin,
    sinh,
    sqrt,
    square,
    subtract,
    tan,
    tanh,
    trunc,
)
from ._reduction import (
    argmax,
    argmin,
    count_nonzero,
    logsumexp,
    max,
    min,
    prod,
    reduce_hypot,
    sum,
)
from ._searchsorted import searchsorted
from ._set_functions import (
    unique_all,
    unique_counts,
    unique_inverse,
    unique_values,
)
from ._sorting import argsort, sort, top_k
from ._testing import allclose
from ._type_utils import can_cast, finfo, iinfo, isdtype, result_type

__all__ = [
    "Device",
    "usm_ndarray",
    "arange",
    "asarray",
    "astype",
    "copy",
    "empty",
    "zeros",
    "ones",
    "full",
    "eye",
    "linspace",
    "empty_like",
    "zeros_like",
    "ones_like",
    "full_like",
    "flip",
    "reshape",
    "roll",
    "concat",
    "stack",
    "broadcast_arrays",
    "broadcast_to",
    "expand_dims",
    "permute_dims",
    "squeeze",
    "take",
    "put",
    "extract",
    "place",
    "nonzero",
    "from_numpy",
    "to_numpy",
    "asnumpy",
    "from_dlpack",
    "tril",
    "triu",
    "where",
    "matrix_transpose",
    "all",
    "any",
    "dtype",
    "isdtype",
    "bool",
    "int8",
    "uint8",
    "int16",
    "uint16",
    "int32",
    "uint32",
    "int64",
    "uint64",
    "float16",
    "float32",
    "float64",
    "complex64",
    "complex128",
    "iinfo",
    "finfo",
    "unstack",
    "moveaxis",
    "swapaxes",
    "can_cast",
    "result_type",
    "meshgrid",
    "get_print_options",
    "set_print_options",
    "print_options",
    "usm_ndarray_repr",
    "usm_ndarray_str",
    "newaxis",
    "e",
    "pi",
    "nan",
    "inf",
    "abs",
    "acos",
    "acosh",
    "add",
    "asin",
    "asinh",
    "atan",
    "atan2",
    "atanh",
    "bitwise_and",
    "bitwise_invert",
    "bitwise_left_shift",
    "bitwise_or",
    "bitwise_right_shift",
    "bitwise_xor",
    "ceil",
    "conj",
    "cos",
    "cosh",
    "divide",
    "equal",
    "exp",
    "expm1",
    "floor",
    "floor_divide",
    "greater",
    "greater_equal",
    "hypot",
    "imag",
    "isfinite",
    "isinf",
    "isnan",
    "less",
    "less_equal",
    "log",
    "logical_and",
    "logical_not",
    "logical_or",
    "logical_xor",
    "log1p",
    "log2",
    "log10",
    "maximum",
    "minimum",
    "multiply",
    "negative",
    "not_equal",
    "positive",
    "pow",
    "logaddexp",
    "proj",
    "real",
    "remainder",
    "round",
    "sign",
    "signbit",
    "sin",
    "sinh",
    "sqrt",
    "square",
    "subtract",
    "not_equal",
    "floor_divide",
    "sum",
    "tan",
    "tanh",
    "trunc",
    "allclose",
    "repeat",
    "tile",
    "max",
    "min",
    "argmax",
    "argmin",
    "prod",
    "cbrt",
    "exp2",
    "copysign",
    "rsqrt",
    "clip",
    "logsumexp",
    "reduce_hypot",
    "mean",
    "std",
    "var",
    "__array_api_version__",
    "__array_namespace_info__",
    "reciprocal",
    "angle",
    "sort",
    "argsort",
    "unique_all",
    "unique_counts",
    "unique_inverse",
    "unique_values",
    "matmul",
    "tensordot",
    "vecdot",
    "searchsorted",
    "cumulative_logsumexp",
    "cumulative_prod",
    "cumulative_sum",
    "nextafter",
    "diff",
    "count_nonzero",
    "DLDeviceType",
    "take_along_axis",
    "put_along_axis",
    "top_k",
    "dldevice_to_sycl_device",
    "sycl_device_to_dldevice",
]
