find_package(Python REQUIRED COMPONENTS Development.Module NumPy)

# -t is to only Cythonize sources with timestamps newer than existing CXX files (if present)
# -w is to set working directory (and correctly set __pyx_f[] array of filenames)
set(CYTHON_FLAGS "-t -w \"${CMAKE_SOURCE_DIR}\"")
find_package(Cython REQUIRED)

if(WIN32)
    string(CONCAT WARNING_FLAGS
        "-Wall "
        "-Wextra "
        "-Winit-self "
        "-Wunused-function "
        "-Wuninitialized "
        "-Wmissing-declarations "
        "-Wstrict-prototypes "
        "-Wno-unused-parameter "
    )
    string(CONCAT SDL_FLAGS
        "/GS "
        "/DynamicBase "
    )
    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} /Ox ${WARNING_FLAGS} ${SDL_FLAGS}")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /Ox ${WARNING_FLAGS} ${SDL_FLAGS}")
    set(CMAKE_C_FLAGS_DEBUG
        "${CMAKE_C_FLAGS_DEBUG} ${WARNING_FLAGS} ${SDL_FLAGS} -O0 -g1 -DDEBUG -Xsycl-target-frontend=spir64 \"-g0\""
    )
    set(CMAKE_CXX_FLAGS_DEBUG
        "${CMAKE_CXX_FLAGS_DEBUG} ${WARNING_FLAGS} ${SDL_FLAGS} -O0 -g1 -DDEBUG -Xsycl-target-frontend=spir64 \"-g0\""
    )
    set(CMAKE_C_FLAGS_COVERAGE
        "${CMAKE_C_FLAGS_DEBUG} ${WARNING_FLAGS} ${SDL_FLAGS} -O1 -g1 -DDEBUG"
    )
    set(CMAKE_CXX_FLAGS_COVERAGE
        "${CMAKE_CXX_FLAGS_DEBUG} ${WARNING_FLAGS} ${SDL_FLAGS} -O1 -g1 -DDEBUG"
    )
    set(CMAKE_MODULE_LINKER_FLAGS_COVERAGE "${CMAKE_MODULE_LINKER_FLAGS_DEBUG}")
    set(DPCTL_LDFLAGS "/NXCompat;/DynamicBase")
    mark_as_advanced(
        CMAKE_CXX_FLAGS_COVERAGE
        CMAKE_C_FLAGS_COVERAGE
        CMAKE_MODULE_LINKER_FLAGS_COVERAGE
    )
elseif(UNIX)
    string(CONCAT WARNING_FLAGS
        "-Wall "
        "-Wextra "
        "-Winit-self "
        "-Wunused-function "
        "-Wuninitialized "
        "-Wmissing-declarations "
        "-Wstrict-prototypes "
        "-Wno-unused-parameter "
        "-fdiagnostics-color=auto "
    )
    string(CONCAT SDL_FLAGS
        "-fstack-protector "
        "-fstack-protector-all "
        "-fpic "
        "-fPIC "
        "-D_FORTIFY_SOURCE=2 "
        "-Wformat "
        "-Wformat-security "
#       "-fno-strict-overflow "    # no-strict-overflow is implied by -fwrapv
        "-fno-delete-null-pointer-checks "
        "-fwrapv "
    )
    string(CONCAT CFLAGS
        "${WARNING_FLAGS}"
        "${SDL_FLAGS}"
    )
    string(CONCAT CXXFLAGS
        "${WARNING_FLAGS}"
        "${SDL_FLAGS}"
    )
    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -O3 ${CFLAGS}")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -O3 ${CXXFLAGS}")
    set(CMAKE_C_FLAGS_DEBUG
        "${CMAKE_C_FLAGS_DEBUG} ${CFLAGS} -O0 -g -DDEBUG -Xsycl-target-frontend=spir64 \"-g0\""
    )
    set(CMAKE_CXX_FLAGS_DEBUG
        "${CMAKE_CXX_FLAGS_DEBUG} ${CXXFLAGS} -O0 -g -DDEBUG -Xsycl-target-frontend=spir64 \"-g0\""
    )
    set(CMAKE_C_FLAGS_COVERAGE
        "${CMAKE_C_FLAGS_DEBUG} ${CFLAGS} -O1 -g1 -DDEBUG"
    )
    set(CMAKE_CXX_FLAGS_COVERAGE
        "${CMAKE_CXX_FLAGS_DEBUG} ${CXXFLAGS} -O1 -g1 -DDEBUG"
    )
    set(CMAKE_MODULE_LINKER_FLAGS_COVERAGE "${CMAKE_MODULE_LINKER_FLAGS_DEBUG}")
    set(DPCTL_LDFLAGS "-z,noexecstack,-z,relro,-z,now")
    mark_as_advanced(
        CMAKE_CXX_FLAGS_COVERAGE
        CMAKE_C_FLAGS_COVERAGE
        CMAKE_MODULE_LINKER_FLAGS_COVERAGE
    )
else()
    message(FATAL_ERROR "Unsupported system.")
endif()

# at build time create include/ directory and copy header files over
set(DPCTL_INCLUDE_DIR ${CMAKE_CURRENT_SOURCE_DIR}/include)

set(CMAKE_INSTALL_RPATH "$ORIGIN")

function(build_dpctl_ext _trgt _src _dest)
    set(options SYCL)
    cmake_parse_arguments(BUILD_DPCTL_EXT "${options}" "RELATIVE_PATH" "" ${ARGN})
    add_cython_target(${_trgt} ${_src} CXX OUTPUT_VAR _generated_src)
    set(_cythonize_trgt "${_trgt}_cythonize_pyx")
    Python_add_library(${_trgt} MODULE WITH_SOABI ${_generated_src})
    if (BUILD_DPCTL_EXT_SYCL)
        add_sycl_to_target(TARGET ${_trgt} SOURCES ${_generated_src})
        target_compile_options(${_trgt} PRIVATE -fno-sycl-id-queries-fit-in-int)
	target_link_options(${_trgt} PRIVATE -fsycl-device-code-split=per_kernel)
	if (DPCTL_OFFLOAD_COMPRESS)
            target_link_options(${_trgt} PRIVATE --offload-compress)
	endif()
        if(_dpctl_sycl_targets)
            # make fat binary
            target_compile_options(
                ${_trgt}
                PRIVATE
                ${_dpctl_sycl_target_compile_options}
            )
            target_link_options(
                ${_trgt}
                PRIVATE
                ${_dpctl_sycl_target_link_options}
            )
        endif()
    endif()
    target_link_libraries(${_trgt} PRIVATE Python::NumPy)
    if (DPCTL_GENERATE_COVERAGE)
        target_compile_definitions(${_trgt} PRIVATE CYTHON_TRACE=1 CYTHON_TRACE_NOGIL=1)
        if (BUILD_DPCTL_EXT_SYCL)
            target_compile_options(${_trgt} PRIVATE -fno-sycl-use-footer)
        endif()
    endif()
    target_link_libraries(${_trgt} PRIVATE DPCTLSyclInterface)
    set(_linker_options "LINKER:${DPCTL_LDFLAGS}")
    target_link_options(${_trgt} PRIVATE ${_linker_options})
    get_filename_component(_name_wle ${_generated_src} NAME_WLE)
    get_filename_component(_generated_src_dir ${_generated_src} DIRECTORY)
    set(_generated_public_h "${_generated_src_dir}/${_name_wle}.h")
    set(_generated_api_h "${_generated_src_dir}/${_name_wle}_api.h")

    # TODO: create separate folder inside build folder that contains only
    #   headers related to this target and appropriate folder structure to
    #   eliminate shadow dependencies
    get_filename_component(_generated_src_dir_dir ${_generated_src_dir} DIRECTORY)
    # TODO: do not set directory if we did not generate header
    target_include_directories(${_trgt} INTERFACE ${_generated_src_dir_dir})
    set(_rpath_value "$ORIGIN")
    if (BUILD_DPCTL_EXT_RELATIVE_PATH)
        set(_rpath_value "${_rpath_value}/${BUILD_DPCTL_EXT_RELATIVE_PATH}")
    endif()
    if (DPCTL_WITH_REDIST)
        set(_rpath_value "${_rpath_value}:${_rpath_value}/../../..")
    endif()
    set_target_properties(${_trgt} PROPERTIES INSTALL_RPATH ${_rpath_value})

    install(TARGETS ${_trgt}
        LIBRARY DESTINATION ${_dest})
    install(FILES
        ${_generated_api_h}
        DESTINATION ${CMAKE_INSTALL_PREFIX}/dpctl/include/${_dest}
        OPTIONAL)
    install(FILES
        ${_generated_public_h}
        DESTINATION ${CMAKE_INSTALL_PREFIX}/dpctl/include/${_dest}
        OPTIONAL)
    if (DPCTL_GENERATE_COVERAGE)
        get_filename_component(_original_src_dir ${_src} DIRECTORY)
        file(RELATIVE_PATH _rel_dir ${CMAKE_SOURCE_DIR} ${_original_src_dir})
        install(FILES
            ${_generated_src}
            DESTINATION ${CMAKE_INSTALL_PREFIX}/${_rel_dir}
        )
    endif()

    # Create target with headers only, because python is managing all the
    # library imports at runtime
    set(_trgt_headers ${_trgt}_headers)
    add_library(${_trgt_headers} INTERFACE)
    add_dependencies(${_trgt_headers} ${_trgt})
    get_target_property(_trgt_headers_dir ${_trgt} INTERFACE_INCLUDE_DIRECTORIES)
    target_include_directories(${_trgt_headers} INTERFACE ${_trgt_headers_dir})
endfunction()

file(GLOB _cython_sources ${CMAKE_CURRENT_SOURCE_DIR}/*.pyx)
list(REMOVE_ITEM _cython_sources ${CMAKE_CURRENT_SOURCE_DIR}/_sycl_queue.pyx)
foreach(_cy_file ${_cython_sources})
    get_filename_component(_trgt ${_cy_file} NAME_WLE)
    build_dpctl_ext(${_trgt} ${_cy_file} "dpctl")
    target_link_libraries(DpctlCAPI INTERFACE ${_trgt}_headers)
endforeach()

set(_cy_file ${CMAKE_CURRENT_SOURCE_DIR}/_sycl_queue.pyx)
get_filename_component(_trgt ${_cy_file} NAME_WLE)
build_dpctl_ext(${_trgt} ${_cy_file} "dpctl" SYCL)
# _sycl_queue include _host_task_util.hpp
target_include_directories(${_trgt} PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})
target_link_libraries(DpctlCAPI INTERFACE ${_trgt}_headers)

add_subdirectory(program)
add_subdirectory(memory)
add_subdirectory(tensor)
add_subdirectory(utils)
