//===------ dpctl_sycl_usm_interface.cpp - Implements C API for USM ops    ===//
//
//                      Data Parallel Control (dpctl)
//
// Copyright 2020-2025 Intel Corporation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//===----------------------------------------------------------------------===//
///
/// \file
/// This file implements the data types and functions declared in
/// dpctl_sycl_usm_interface.h.
///
//===----------------------------------------------------------------------===//

#include "dpctl_sycl_usm_interface.h"
#include "Config/dpctl_config.h"
#include "dpctl_error_handlers.h"
#include "dpctl_sycl_device_interface.h"
#include "dpctl_sycl_type_casters.hpp"
#include <stddef.h>
#include <sycl/sycl.hpp> /* SYCL headers   */
#include <utility>

using namespace sycl;

namespace
{
static_assert(__SYCL_COMPILER_VERSION >= __SYCL_COMPILER_VERSION_REQUIRED,
              "The compiler does not meet minimum version requirement");

using namespace dpctl::syclinterface;
} // end of anonymous namespace

__dpctl_give DPCTLSyclUSMRef
DPCTLmalloc_shared(size_t size, __dpctl_keep const DPCTLSyclQueueRef QRef)
{
    if (!QRef) {
        error_handler("Input QRef is nullptr.", __FILE__, __func__, __LINE__);
        return nullptr;
    }
    try {
        auto Q = unwrap<queue>(QRef);
        auto Ptr = malloc_shared(size, *Q);
        return wrap<void>(Ptr);
    } catch (std::exception const &e) {
        error_handler(e, __FILE__, __func__, __LINE__);
        return nullptr;
    }
}

__dpctl_give DPCTLSyclUSMRef
DPCTLaligned_alloc_shared(size_t alignment,
                          size_t size,
                          __dpctl_keep const DPCTLSyclQueueRef QRef)
{
    if (!QRef) {
        error_handler("Input QRef is nullptr.", __FILE__, __func__, __LINE__);
        return nullptr;
    }
    try {
        auto Q = unwrap<queue>(QRef);
        auto Ptr = aligned_alloc_shared(alignment, size, *Q);
        return wrap<void>(Ptr);
    } catch (std::exception const &e) {
        error_handler(e, __FILE__, __func__, __LINE__);
        return nullptr;
    }
}

__dpctl_give DPCTLSyclUSMRef
DPCTLmalloc_host(size_t size, __dpctl_keep const DPCTLSyclQueueRef QRef)
{
    if (!QRef) {
        error_handler("Input QRef is nullptr.", __FILE__, __func__, __LINE__);
        return nullptr;
    }
    // SYCL 2020 spec: for devices without aspect::usm_host_allocations:
    // undefined behavior
    auto Q = unwrap<queue>(QRef);
    auto Ptr = malloc_host(size, *Q);
    return wrap<void>(Ptr);
}

__dpctl_give DPCTLSyclUSMRef
DPCTLaligned_alloc_host(size_t alignment,
                        size_t size,
                        __dpctl_keep const DPCTLSyclQueueRef QRef)
{
    if (!QRef) {
        error_handler("Input QRef is nullptr.", __FILE__, __func__, __LINE__);
        return nullptr;
    }
    // SYCL 2020 spec: for devices without aspect::usm_host_allocations:
    // undefined behavior
    auto Q = unwrap<queue>(QRef);
    auto Ptr = aligned_alloc_host(alignment, size, *Q);
    return wrap<void>(Ptr);
}

__dpctl_give DPCTLSyclUSMRef
DPCTLmalloc_device(size_t size, __dpctl_keep const DPCTLSyclQueueRef QRef)
{
    if (!QRef) {
        error_handler("Input QRef is nullptr.", __FILE__, __func__, __LINE__);
        return nullptr;
    }
    try {
        auto Q = unwrap<queue>(QRef);
        auto Ptr = malloc_device(size, *Q);
        return wrap<void>(Ptr);
    } catch (std::exception const &e) {
        error_handler(e, __FILE__, __func__, __LINE__);
        return nullptr;
    }
}

__dpctl_give DPCTLSyclUSMRef
DPCTLaligned_alloc_device(size_t alignment,
                          size_t size,
                          __dpctl_keep const DPCTLSyclQueueRef QRef)
{
    if (!QRef) {
        error_handler("Input QRef is nullptr.", __FILE__, __func__, __LINE__);
        return nullptr;
    }
    try {
        auto Q = unwrap<queue>(QRef);
        auto Ptr = aligned_alloc_device(alignment, size, *Q);
        return wrap<void>(Ptr);
    } catch (std::exception const &e) {
        error_handler(e, __FILE__, __func__, __LINE__);
        return nullptr;
    }
}

void DPCTLfree_with_queue(__dpctl_take DPCTLSyclUSMRef MRef,
                          __dpctl_keep const DPCTLSyclQueueRef QRef)
{
    if (!QRef) {
        error_handler("Input QRef is nullptr.", __FILE__, __func__, __LINE__);
        return;
    }
    if (!MRef) {
        error_handler("Input MRef is nullptr, nothing to free.", __FILE__,
                      __func__, __LINE__);
        return;
    }
    auto Ptr = unwrap<void>(MRef);
    auto Q = unwrap<queue>(QRef);
    free(Ptr, *Q);
}

void DPCTLfree_with_context(__dpctl_take DPCTLSyclUSMRef MRef,
                            __dpctl_keep const DPCTLSyclContextRef CRef)
{
    if (!CRef) {
        error_handler("Input CRef is nullptr.", __FILE__, __func__, __LINE__);
        return;
    }
    if (!MRef) {
        error_handler("Input MRef is nullptr, nothing to free.", __FILE__,
                      __func__, __LINE__);
        return;
    }
    auto Ptr = unwrap<void>(MRef);
    auto C = unwrap<context>(CRef);
    free(Ptr, *C);
}

DPCTLSyclUSMType
DPCTLUSM_GetPointerType(__dpctl_keep const DPCTLSyclUSMRef MRef,
                        __dpctl_keep const DPCTLSyclContextRef CRef)
{
    if (!CRef) {
        error_handler("Input CRef is nullptr.", __FILE__, __func__, __LINE__);
        return DPCTLSyclUSMType::DPCTL_USM_UNKNOWN;
    }
    if (!MRef) {
        error_handler("Input MRef is nullptr.", __FILE__, __func__, __LINE__);
        return DPCTLSyclUSMType::DPCTL_USM_UNKNOWN;
    }
    auto Ptr = unwrap<void>(MRef);
    auto C = unwrap<context>(CRef);

    auto kind = get_pointer_type(Ptr, *C);
    switch (kind) {
    case usm::alloc::host:
        return DPCTLSyclUSMType::DPCTL_USM_HOST;
    case usm::alloc::device:
        return DPCTLSyclUSMType::DPCTL_USM_DEVICE;
    case usm::alloc::shared:
        return DPCTLSyclUSMType::DPCTL_USM_SHARED;
    default:
        return DPCTLSyclUSMType::DPCTL_USM_UNKNOWN;
    }
}

DPCTLSyclDeviceRef
DPCTLUSM_GetPointerDevice(__dpctl_keep const DPCTLSyclUSMRef MRef,
                          __dpctl_keep const DPCTLSyclContextRef CRef)
{
    if (!CRef) {
        error_handler("Input CRef is nullptr.", __FILE__, __func__, __LINE__);
        return nullptr;
    }
    if (!MRef) {
        error_handler("Input MRef is nullptr.", __FILE__, __func__, __LINE__);
        return nullptr;
    }

    auto Ptr = unwrap<void>(MRef);
    auto C = unwrap<context>(CRef);

    const auto &Dev = get_pointer_device(Ptr, *C);

    return wrap<device>(new device(Dev));
}
