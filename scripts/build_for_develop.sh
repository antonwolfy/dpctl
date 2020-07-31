#!/bin/bash
set +xe
rm -rf build_cmake
mkdir build_cmake
pushd build_cmake

INSTALL_PREFIX=`pwd`/../install
export ONEAPI_ROOT=/opt/intel/inteloneapi
DPCPP_ROOT=${ONEAPI_ROOT}/compiler/latest/linux
PYTHON_INC=`python -c "import distutils.sysconfig;                  \
                        print(distutils.sysconfig.get_python_inc())"`
NUMPY_INC=`python -c "import numpy; print(numpy.get_include())"`

cmake                                                       \
    -DCMAKE_BUILD_TYPE=Release                              \
    -DCMAKE_INSTALL_PREFIX=${INSTALL_PREFIX}                \
    -DCMAKE_PREFIX_PATH=${INSTALL_PREFIX}                   \
    -DDPCPP_ROOT=${DPCPP_ROOT}                              \
    -DCMAKE_C_COMPILER:PATH=${DPCPP_ROOT}/bin/clang         \
    -DCMAKE_CXX_COMPILER:PATH=${DPCPP_ROOT}/bin/dpcpp       \
    -DPYTHON_INCLUDE_DIR=${PYTHON_INC}                      \
    -DNUMPY_INCLUDE_DIR=${NUMPY_INC}                        \
    ../oneapi_wrapper

make V=1 -n -j 4 && make install

popd
cp install/lib/*.so dppl/

export DP_GLUE_LIBDIR=${INSTALL_PREFIX}/lib
export DP_GLUE_INCLDIR=${INSTALL_PREFIX}/include
export OpenCL_LIBDIR=/usr/lib/x86_64-linux-gnu/
export DPPL_ONEAPI_INTERFACE_LIBDIR=${INSTALL_PREFIX}/lib
export DPPL_ONEAPI_INTERFACE_INCLDIR=${INSTALL_PREFIX}/include

export CC=clang
export CXX=dpcpp
# FIXME: How to pass this using setup.py? The fPIC flag is needed when
# dpcpp compiles the Cython generated cpp file.
export CFLAGS=-fPIC
python setup.py clean --all
python setup.py build_ext --inplace
python setup.py develop


$CC -flto -target spir64-unknown-unknown -c -x cl -emit-llvm -cl-std=CL2.0 -Xclang -finclude-default-header oneapi_wrapper/source/atomics/atomic_ops.cl -o oneapi_wrapper/source/atomics/atomic_ops.bc
llvm-spirv -o dppl/atomic_ops.spir oneapi_wrapper/source/atomics/atomic_ops.bc
