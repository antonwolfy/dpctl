file(GLOB _cython_sources *.pyx)
foreach(_cy_file ${_cython_sources})
    get_filename_component(_trgt ${_cy_file} NAME_WLE)
    build_dpctl_ext(${_trgt} ${_cy_file} "dpctl/tensor" RELATIVE_PATH "..")
    target_include_directories(${_trgt} PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/include)
    target_link_libraries(DpctlCAPI INTERFACE ${_trgt}_headers)
endforeach()

# TODO: do we need to write this dependencies explicitly? Does it even work this
#   way?
add_custom_target(_usmarray_deps SOURCES
    ${CMAKE_CURRENT_SOURCE_DIR}/_slicing.pxi
    ${CMAKE_CURRENT_SOURCE_DIR}/_types.pxi
    ${CMAKE_CURRENT_SOURCE_DIR}/_stride_utils.pxi
)
add_dependencies(_usmarray _usmarray_deps)

if(WIN32)
    if (${CMAKE_VERSION} VERSION_LESS "3.23")
        # this is a work-around for target_link_options inserting option after -link option, cause
        # linker to ignore it.
        set(CMAKE_CXX_LINK_FLAGS "${CMAKE_CXX_LINK_FLAGS} -fsycl-device-code-split=per_kernel")
    endif()
endif()

set(_elementwise_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/elementwise_common.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/elementwise_functions_type_utils.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/abs.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/acos.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/acosh.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/add.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/angle.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/asin.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/asinh.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/atan.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/atan2.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/atanh.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/bitwise_and.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/bitwise_invert.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/bitwise_left_shift.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/bitwise_or.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/bitwise_right_shift.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/bitwise_xor.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/cbrt.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/ceil.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/conj.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/copysign.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/cos.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/cosh.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/equal.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/exp.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/exp2.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/expm1.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/floor_divide.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/floor.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/greater_equal.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/greater.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/hypot.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/imag.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/isfinite.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/isinf.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/isnan.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/less_equal.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/less.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/log.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/log1p.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/log2.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/log10.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/logaddexp.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/logical_and.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/logical_not.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/logical_or.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/logical_xor.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/maximum.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/minimum.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/multiply.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/negative.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/nextafter.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/not_equal.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/positive.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/pow.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/proj.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/real.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/reciprocal.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/remainder.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/round.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/rsqrt.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/sign.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/signbit.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/sin.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/sinh.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/sqrt.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/square.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/subtract.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/tan.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/tanh.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/true_divide.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/trunc.cpp
)
set(_reduction_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/reductions/reduction_common.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/reductions/all.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/reductions/any.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/reductions/argmax.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/reductions/argmin.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/reductions/logsumexp.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/reductions/max.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/reductions/min.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/reductions/prod.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/reductions/reduce_hypot.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/reductions/sum.cpp
)
set(_sorting_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/sorting/merge_sort.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/sorting/merge_argsort.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/sorting/radix_sort.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/sorting/radix_argsort.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/sorting/searchsorted.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/sorting/topk.cpp
)
set(_static_lib_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/simplify_iteration_space.cpp
)
set(_tensor_impl_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/tensor_ctors.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/accumulators.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/copy_and_cast_usm_to_usm.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/copy_as_contig.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/copy_numpy_ndarray_into_usm_ndarray.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/copy_for_reshape.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/copy_for_roll.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/linear_sequences.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/integer_advanced_indexing.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/boolean_advanced_indexing.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/eye_ctor.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/full_ctor.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/zeros_ctor.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/triul_ctor.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/where.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/device_support_queries.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/repeat.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/clip.cpp
)
set(_tensor_elementwise_impl_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/tensor_elementwise.cpp
    ${_elementwise_sources}
)
set(_tensor_reductions_impl_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/tensor_reductions.cpp
    ${_reduction_sources}
)
set(_tensor_sorting_impl_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/tensor_sorting.cpp
    ${_sorting_sources}
)
set(_linalg_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/elementwise_functions/elementwise_functions_type_utils.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/linalg_functions/dot.cpp
)
set(_tensor_linalg_impl_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/tensor_linalg.cpp
    ${_linalg_sources}
)
set(_accumulator_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/accumulators/accumulators_common.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/accumulators/cumulative_logsumexp.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/accumulators/cumulative_prod.cpp
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/accumulators/cumulative_sum.cpp
)
set(_tensor_accumulation_impl_sources
    ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/tensor_accumulation.cpp
    ${_accumulator_sources}
)

set(_static_lib_trgt simplify_iteration_space)

add_library(${_static_lib_trgt} STATIC ${_static_lib_sources})
target_include_directories(${_static_lib_trgt} PRIVATE
  ${Python_INCLUDE_DIRS} ${DPCTL_INCLUDE_DIR} ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/include
)
target_link_libraries(${_static_lib_trgt} PRIVATE pybind11::headers ${Python_LIBRARIES})
set_target_properties(${_static_lib_trgt} PROPERTIES POSITION_INDEPENDENT_CODE ON)

set(_py_trgts)

set(python_module_name _tensor_impl)
pybind11_add_module(${python_module_name} MODULE ${_tensor_impl_sources})
add_sycl_to_target(TARGET ${python_module_name} SOURCES ${_tensor_impl_sources})
target_link_libraries(${python_module_name} PRIVATE ${_static_lib_trgt})
list(APPEND _py_trgts ${python_module_name})

set(python_module_name _tensor_elementwise_impl)
pybind11_add_module(${python_module_name} MODULE ${_tensor_elementwise_impl_sources})
add_sycl_to_target(TARGET ${python_module_name} SOURCES ${_tensor_elementwise_impl_sources})
target_link_libraries(${python_module_name} PRIVATE ${_static_lib_trgt})
list(APPEND _py_trgts ${python_module_name})

set(python_module_name _tensor_reductions_impl)
pybind11_add_module(${python_module_name} MODULE ${_tensor_reductions_impl_sources})
add_sycl_to_target(TARGET ${python_module_name} SOURCES ${_tensor_reductions_impl_sources})
target_link_libraries(${python_module_name} PRIVATE ${_static_lib_trgt})
list(APPEND _py_trgts ${python_module_name})

set(python_module_name _tensor_sorting_impl)
pybind11_add_module(${python_module_name} MODULE ${_tensor_sorting_impl_sources})
add_sycl_to_target(TARGET ${python_module_name} SOURCES ${_tensor_sorting_impl_sources})
target_link_libraries(${python_module_name} PRIVATE ${_static_lib_trgt})
list(APPEND _py_trgts ${python_module_name})

set(python_module_name _tensor_linalg_impl)
pybind11_add_module(${python_module_name} MODULE ${_tensor_linalg_impl_sources})
add_sycl_to_target(TARGET ${python_module_name} SOURCES ${_tensor_linalg_impl_sources})
target_link_libraries(${python_module_name} PRIVATE ${_static_lib_trgt})
list(APPEND _py_trgts ${python_module_name})

set(python_module_name _tensor_accumulation_impl)
pybind11_add_module(${python_module_name} MODULE ${_tensor_accumulation_impl_sources})
add_sycl_to_target(TARGET ${python_module_name} SOURCES ${_tensor_accumulation_impl_sources})
target_link_libraries(${python_module_name} PRIVATE ${_static_lib_trgt})
list(APPEND _py_trgts ${python_module_name})

set(_clang_prefix "")
if (WIN32)
  set(_clang_prefix "/clang:")
endif()

set(_no_fast_math_sources
  ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/copy_and_cast_usm_to_usm.cpp
  ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/full_ctor.cpp
  ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/linear_sequences.cpp
  ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/clip.cpp
  ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/where.cpp
)
list(APPEND _no_fast_math_sources
     ${_elementwise_sources}
     ${_reduction_sources}
     ${_sorting_sources}
     ${_linalg_sources}
     ${_accumulator_sources}
)

foreach(_src_fn ${_no_fast_math_sources})
  get_source_file_property(_cmpl_options_prop ${_src_fn} COMPILE_OPTIONS)
  set(_combined_options_prop ${_cmpl_options_prop} "${_clang_prefix}-fno-fast-math")
  set_source_files_properties(
     ${_src_fn}
     PROPERTIES COMPILE_OPTIONS "${_combined_options_prop}"
  )
endforeach()

set(_compiler_definitions "")

foreach(_src_fn ${_elementwise_sources})
  get_source_file_property(_cmpl_options_defs ${_src_fn} COMPILE_DEFINITIONS)
  if(${_cmpl_options_defs})
     set(_combined_options_defs ${_cmpl_options_defs} "${_compiler_definitions}")
  else()
     set(_combined_options_defs "${_compiler_definitions}")
  endif()
  set_source_files_properties(
     ${_src_fn}
     PROPERTIES COMPILE_DEFINITIONS "${_combined_options_defs}"
  )
endforeach()

set(_linker_options "LINKER:${DPCTL_LDFLAGS}")
foreach(python_module_name ${_py_trgts})
    target_compile_options(${python_module_name} PRIVATE -fno-sycl-id-queries-fit-in-int)
    target_link_options(${python_module_name} PRIVATE -fsycl-device-code-split=per_kernel)
    if (DPCTL_OFFLOAD_COMPRESS)
        target_link_options(${python_module_name} PRIVATE --offload-compress)
    endif()

    target_include_directories(${python_module_name}
        PRIVATE
        ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/include
        ${CMAKE_CURRENT_SOURCE_DIR}/libtensor/source/
    )
    target_link_options(${python_module_name} PRIVATE ${_linker_options})
    if(DPCTL_GENERATE_COVERAGE)
        if(DPCTL_GENERATE_COVERAGE_FOR_PYBIND11_EXTENSIONS)
            target_compile_options(${python_module_name}
                PRIVATE -fprofile-instr-generate -fcoverage-mapping
            )
        endif()
        target_link_options(${python_module_name}
            PRIVATE -fprofile-instr-generate -fcoverage-mapping
        )
    endif()
    if(_dpctl_sycl_targets)
        # make fat binary
        target_compile_options(
            ${python_module_name}
            PRIVATE
            ${_dpctl_sycl_target_compile_options}
        )
        target_link_options(
            ${python_module_name}
            PRIVATE
            ${_dpctl_sycl_target_link_options}
        )
    endif()
    # TODO: update source so they refernece individual libraries instead of
    #   dpctl4pybind11.hpp. It will allow to simplify dependency tree
    target_link_libraries(${python_module_name} PRIVATE DpctlCAPI)
    if (DPCTL_WITH_REDIST)
        set_target_properties(
            ${python_module_name}
            PROPERTIES
                INSTALL_RPATH "$ORIGIN/../../../.."
        )
    endif()
    install(TARGETS ${python_module_name} DESTINATION "dpctl/tensor")
endforeach()
