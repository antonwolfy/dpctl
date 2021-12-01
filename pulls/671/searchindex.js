Search.setIndex({docnames:["docfiles/boilerplate","docfiles/dpctl.memory_api","docfiles/dpctl.program_api","docfiles/dpctl.tensor_api","docfiles/dpctl_pyapi","docfiles/dpctl_pyapi/SyclContext","docfiles/dpctl_pyapi/SyclDevice","docfiles/dpctl_pyapi/SyclEvent","docfiles/dpctl_pyapi/SyclPlatform","docfiles/dpctl_pyapi/SyclQueue","docfiles/intro","docfiles/libsyclinterface/enum_DPCTLKernelArgType","docfiles/libsyclinterface/enum_DPCTLPartitionAffinityDomainType","docfiles/libsyclinterface/enum_DPCTLQueuePropertyType","docfiles/libsyclinterface/enum_DPCTLSyclAspectType","docfiles/libsyclinterface/enum_DPCTLSyclBackendType","docfiles/libsyclinterface/enum_DPCTLSyclDeviceType","docfiles/libsyclinterface/enum_DPCTLSyclEventStatusType","docfiles/libsyclinterface/global","docfiles/libsyclinterface/group_ContextInterface","docfiles/libsyclinterface/group_DeviceInterface","docfiles/libsyclinterface/group_DeviceManager","docfiles/libsyclinterface/group_DeviceSelectors","docfiles/libsyclinterface/group_EventInterface","docfiles/libsyclinterface/group_KernelInterface","docfiles/libsyclinterface/group_PlatformInterface","docfiles/libsyclinterface/group_PlatformManager","docfiles/libsyclinterface/group_ProgramInterface","docfiles/libsyclinterface/group_QueueInterface","docfiles/libsyclinterface/group_QueueManager","docfiles/libsyclinterface/group_Service","docfiles/libsyclinterface/group_USMInterface","docfiles/libsyclinterface/index","docfiles/libsyclinterface/page_todo","docfiles/user_guides/QuickStart","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["docfiles/boilerplate.rst","docfiles/dpctl.memory_api.rst","docfiles/dpctl.program_api.rst","docfiles/dpctl.tensor_api.rst","docfiles/dpctl_pyapi.rst","docfiles/dpctl_pyapi/SyclContext.rst","docfiles/dpctl_pyapi/SyclDevice.rst","docfiles/dpctl_pyapi/SyclEvent.rst","docfiles/dpctl_pyapi/SyclPlatform.rst","docfiles/dpctl_pyapi/SyclQueue.rst","docfiles/intro.rst","docfiles/libsyclinterface/enum_DPCTLKernelArgType.rst","docfiles/libsyclinterface/enum_DPCTLPartitionAffinityDomainType.rst","docfiles/libsyclinterface/enum_DPCTLQueuePropertyType.rst","docfiles/libsyclinterface/enum_DPCTLSyclAspectType.rst","docfiles/libsyclinterface/enum_DPCTLSyclBackendType.rst","docfiles/libsyclinterface/enum_DPCTLSyclDeviceType.rst","docfiles/libsyclinterface/enum_DPCTLSyclEventStatusType.rst","docfiles/libsyclinterface/global.rst","docfiles/libsyclinterface/group_ContextInterface.rst","docfiles/libsyclinterface/group_DeviceInterface.rst","docfiles/libsyclinterface/group_DeviceManager.rst","docfiles/libsyclinterface/group_DeviceSelectors.rst","docfiles/libsyclinterface/group_EventInterface.rst","docfiles/libsyclinterface/group_KernelInterface.rst","docfiles/libsyclinterface/group_PlatformInterface.rst","docfiles/libsyclinterface/group_PlatformManager.rst","docfiles/libsyclinterface/group_ProgramInterface.rst","docfiles/libsyclinterface/group_QueueInterface.rst","docfiles/libsyclinterface/group_QueueManager.rst","docfiles/libsyclinterface/group_Service.rst","docfiles/libsyclinterface/group_USMInterface.rst","docfiles/libsyclinterface/index.rst","docfiles/libsyclinterface/page_todo.rst","docfiles/user_guides/QuickStart.rst","index.rst"],objects:{"":[[4,0,0,"-","dpctl"]],"dpctl.SyclContext":[[5,2,1,"","_get_capsule"],[5,2,1,"","addressof_ref"],[5,3,1,"","device_count"],[5,2,1,"","get_devices"]],"dpctl.SyclDevice":[[6,2,1,"","addressof_ref"],[6,3,1,"","backend"],[6,2,1,"","create_sub_devices"],[6,3,1,"","default_selector_score"],[6,3,1,"","device_type"],[6,3,1,"","driver_version"],[6,3,1,"","filter_string"],[6,2,1,"","get_filter_string"],[6,3,1,"","has_aspect_accelerator"],[6,3,1,"","has_aspect_cpu"],[6,3,1,"","has_aspect_custom"],[6,3,1,"","has_aspect_fp16"],[6,3,1,"","has_aspect_fp64"],[6,3,1,"","has_aspect_gpu"],[6,3,1,"","has_aspect_host"],[6,3,1,"","has_aspect_image"],[6,3,1,"","has_aspect_int64_base_atomics"],[6,3,1,"","has_aspect_int64_extended_atomics"],[6,3,1,"","has_aspect_online_compiler"],[6,3,1,"","has_aspect_online_linker"],[6,3,1,"","has_aspect_queue_profiling"],[6,3,1,"","has_aspect_usm_device_allocations"],[6,3,1,"","has_aspect_usm_host_allocations"],[6,3,1,"","has_aspect_usm_restricted_shared_allocations"],[6,3,1,"","has_aspect_usm_shared_allocations"],[6,3,1,"","has_aspect_usm_system_allocator"],[6,3,1,"","image_2d_max_height"],[6,3,1,"","image_2d_max_width"],[6,3,1,"","image_3d_max_depth"],[6,3,1,"","image_3d_max_height"],[6,3,1,"","image_3d_max_width"],[6,3,1,"","is_accelerator"],[6,3,1,"","is_cpu"],[6,3,1,"","is_gpu"],[6,3,1,"","is_host"],[6,3,1,"","max_compute_units"],[6,3,1,"","max_num_sub_groups"],[6,3,1,"","max_read_image_args"],[6,3,1,"","max_work_group_size"],[6,3,1,"","max_work_item_dims"],[6,3,1,"","max_work_item_sizes"],[6,3,1,"","max_write_image_args"],[6,3,1,"","name"],[6,3,1,"","parent_device"],[6,3,1,"","preferred_vector_width_char"],[6,3,1,"","preferred_vector_width_double"],[6,3,1,"","preferred_vector_width_float"],[6,3,1,"","preferred_vector_width_half"],[6,3,1,"","preferred_vector_width_int"],[6,3,1,"","preferred_vector_width_long"],[6,3,1,"","preferred_vector_width_short"],[6,2,1,"","print_device_info"],[6,3,1,"","sub_group_independent_forward_progress"],[6,3,1,"","vendor"]],"dpctl.SyclEvent":[[7,2,1,"","addressof_ref"],[7,2,1,"","wait"]],"dpctl.SyclPlatform":[[8,3,1,"","backend"],[8,3,1,"","name"],[8,2,1,"","print_platform_info"],[8,3,1,"","vendor"],[8,3,1,"","version"]],"dpctl.SyclQueue":[[9,2,1,"","_get_capsule"],[9,2,1,"","addressof_ref"],[9,2,1,"","get_sycl_context"],[9,2,1,"","get_sycl_device"],[9,3,1,"","is_in_order"],[9,2,1,"","mem_advise"],[9,2,1,"","memcpy"],[9,2,1,"","prefetch"],[9,2,1,"","submit"],[9,3,1,"","sycl_context"],[9,3,1,"","sycl_device"],[9,2,1,"","wait"]],"dpctl.memory":[[1,1,1,"","MemoryUSMDevice"],[1,1,1,"","MemoryUSMHost"],[1,1,1,"","MemoryUSMShared"],[1,2,1,"","as_usm_memory"]],"dpctl.memory.MemoryUSMDevice":[[1,5,1,"","copy_from_device"],[1,5,1,"","copy_from_host"],[1,5,1,"","copy_to_host"],[1,5,1,"","get_usm_type"],[1,3,1,"","nbytes"],[1,3,1,"","reference_obj"],[1,3,1,"","size"],[1,3,1,"","sycl_context"],[1,3,1,"","sycl_device"],[1,3,1,"","sycl_queue"],[1,5,1,"","tobytes"]],"dpctl.memory.MemoryUSMHost":[[1,5,1,"","copy_from_device"],[1,5,1,"","copy_from_host"],[1,5,1,"","copy_to_host"],[1,5,1,"","get_usm_type"],[1,3,1,"","nbytes"],[1,3,1,"","reference_obj"],[1,3,1,"","size"],[1,3,1,"","sycl_context"],[1,3,1,"","sycl_device"],[1,3,1,"","sycl_queue"],[1,5,1,"","tobytes"]],"dpctl.memory.MemoryUSMShared":[[1,5,1,"","copy_from_device"],[1,5,1,"","copy_from_host"],[1,5,1,"","copy_to_host"],[1,5,1,"","get_usm_type"],[1,3,1,"","nbytes"],[1,3,1,"","reference_obj"],[1,3,1,"","size"],[1,3,1,"","sycl_context"],[1,3,1,"","sycl_device"],[1,3,1,"","sycl_queue"],[1,5,1,"","tobytes"]],"dpctl.program":[[2,1,1,"","SyclKernel"],[2,1,1,"","SyclProgram"],[2,4,1,"","SyclProgramCompilationError"],[2,2,1,"","create_program_from_source"],[2,2,1,"","create_program_from_spirv"]],"dpctl.program.SyclKernel":[[2,5,1,"","addressof_ref"],[2,5,1,"","get_function_name"],[2,5,1,"","get_num_args"]],"dpctl.program.SyclProgram":[[2,5,1,"","addressof_ref"],[2,5,1,"","get_sycl_kernel"],[2,5,1,"","has_sycl_kernel"]],"dpctl.tensor":[[3,2,1,"","asarray"],[3,2,1,"","asnumpy"],[3,2,1,"","astype"],[3,2,1,"","copy"],[3,2,1,"","empty"],[3,2,1,"","from_dlpack"],[3,2,1,"","from_numpy"],[3,2,1,"","reshape"],[3,2,1,"","to_numpy"],[3,1,1,"","usm_ndarray"]],"dpctl.tensor.usm_ndarray":[[3,3,1,"","T"],[3,3,1,"","device"],[3,3,1,"","dtype"],[3,3,1,"","flags"],[3,3,1,"","imag"],[3,3,1,"","itemsize"],[3,3,1,"","nbytes"],[3,3,1,"","ndim"],[3,3,1,"","real"],[3,3,1,"","shape"],[3,3,1,"","size"],[3,3,1,"","strides"],[3,3,1,"","sycl_context"],[3,3,1,"","sycl_device"],[3,3,1,"","sycl_queue"],[3,5,1,"","to_device"],[3,3,1,"","usm_data"],[3,3,1,"","usm_type"]],dpctl:[[5,1,1,"","SyclContext"],[6,1,1,"","SyclDevice"],[7,1,1,"","SyclEvent"],[4,4,1,"","SyclKernelInvalidRangeError"],[4,4,1,"","SyclKernelSubmitError"],[8,1,1,"","SyclPlatform"],[9,1,1,"","SyclQueue"],[4,4,1,"","SyclQueueCreationError"],[4,1,1,"","backend_type"],[4,2,1,"","device_context"],[4,1,1,"","device_type"],[4,2,1,"","get_current_backend"],[4,2,1,"","get_current_device_type"],[4,2,1,"","get_current_queue"],[4,2,1,"","get_devices"],[4,2,1,"","get_num_activated_queues"],[4,2,1,"","get_num_devices"],[4,2,1,"","get_platforms"],[4,2,1,"","has_accelerator_devices"],[4,2,1,"","has_cpu_devices"],[4,2,1,"","has_gpu_devices"],[4,2,1,"","has_host_device"],[4,2,1,"","is_in_device_context"],[4,2,1,"","lsplatform"],[1,0,0,"-","memory"],[2,0,0,"-","program"],[4,2,1,"","select_accelerator_device"],[4,2,1,"","select_cpu_device"],[4,2,1,"","select_default_device"],[4,2,1,"","select_gpu_device"],[4,2,1,"","select_host_device"],[4,2,1,"","set_global_queue"],[3,0,0,"-","tensor"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","function","Python function"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:function","3":"py:attribute","4":"py:exception","5":"py:method"},terms:{"0":[0,1,3,4,5,6,8,13,15,16,20,26,27,28,34,35],"00ghz":4,"0x3e98":4,"1":[4,6,8,13,15,16,21,26,27,34],"10":34,"11":4,"128":[6,18],"13_160000":4,"16":15,"17":15,"18":[15,34],"18513":4,"19":15,"1d":[6,18],"2":[0,4,5,6,8,9,16,26,27,35],"20":[4,34],"2020":[4,10,35],"2021":34,"2048":[6,18],"2d":[6,18],"3":[4,6,16,18,28,33,34],"3d":[6,18],"4":[4,10,16,34,35],"47":4,"5":[15,16],"6":[4,10,16,35],"7":34,"8":[6,18],"8192":[6,18],"9700":4,"abstract":4,"boolean":[3,6,20],"byte":[1,3,27,28,31],"case":[1,3,6,7,9],"char":[2,3,18,20,21,22,24,25,27,30,31],"class":[3,5,6,7,8,9,10,32,35],"const":[2,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33],"default":[3,4,5,6,7,8,9,21,28,29],"do":[21,26,28,34],"enum":[4,6,8,18,19,20,21,23,25,28],"export":34,"function":[6,8,32,34],"import":[4,5,6,7,9,34],"int":[4,5,6,18,19,21,22,28],"long":[2,34],"new":[3,4,5,7,9,18,19,20,21,23,25,26,27,28,34],"null":[5,7,9,19,20,27,28],"public":7,"return":[1,2,3,4,5,6,7,8,9,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"short":34,"true":[1,3,4,6,9,19,20,27,28,29],"try":[3,6,28,34],"var":34,"void":[5,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33],"while":1,A:[2,3,4,5,6,7,9,18,19,20,21,22,23,25,26,27,28,29,30,31],AT:[18,20],As:34,At:[4,8],For:[1,3,6,20,21,34],If:[2,3,4,5,6,7,9,20,21,24,29,34],In:[7,9,34],It:[1,34],ON:34,OR:21,On:[4,31,34],One:34,The:[2,3,4,5,6,7,8,9,10,18,19,20,21,22,23,26,27,28,29,31,34,35],There:[5,6,7,9],These:34,To:[27,34],__dlpack__:3,__dpctl_give:[18,19,20,21,22,23,24,25,26,27,28,29,30,31],__dpctl_keep:[18,19,20,21,22,23,24,25,26,27,28,29,31,33],__dpctl_take:[18,19,20,21,22,23,24,25,26,27,28,31],__sycl_usm_array_interface__:[1,3],_dev:6,_dpc:34,_get_capsul:[5,7,9],about:[4,6,8,26],acceler:[4,6,14,20],accelerator_selector:[4,22],accept:4,access:[1,4,29],action:23,activ:[4,34],add:[11,28,33],addit:4,addition:34,address:[2,3,5,6,7,9],addressof_ref:[2,5,6,7,9],advantag:34,advic:[18,28],affin:[6,20],after:[19,20,22,23,24,28,34],against:1,align:[1,18,31],all:[0,4,5,9,18,21,26,28,29,34,35],alloc:[1,3,4,5,10,28,31,35],allow:[3,4],along:[4,8],also:[3,4,10,26,29,34,35],although:4,alwai:3,amount:26,an:[2,3,4,6,14,18,19,20,21,22,23,24,25,26,27,28,29,34],anaconda:34,analog:4,analogu:12,ani:[4,6,9,20,21,26,27],anoth:[3,29],apach:[0,35],apart:[10,35],api:[2,3,7,9,10,18,23,28],append:4,applic:29,approach:34,ar:[0,1,3,4,5,6,7,9,10,16,18,19,20,21,26,28,29,33,34,35],arg:[4,5,6,7,8,9,18,28,33],argtyp:[18,28,33],argument:[1,2,3,4,5,6,7,9,11,19,20,21,23,24,26,28,29,33],ari:3,around:27,arrai:[1,3,18,20,21,26,28],array_namespac:3,as_usm_memori:1,asarrai:3,asnumpi:3,aspect:[6,14,18,20],assert:[5,6],associ:[3,5,14,19,21,23,25,31],assum:34,astyp:3,async:[18,19,28],async_handl:[19,28],asynchandl:28,asynchron:18,attribut:21,automat:9,avail:[3,4,6,21,25,27,34],back:[10,28,35],backend:[4,6,8,15,19,20,21,23,25,26,27,28],backend_typ:[4,6,8],barrier:18,base:[4,6,20,22],bash:34,bat:34,becaus:3,becom:27,been:[29,31],befor:[18,21,26,34],begav:28,behavior:[4,28],behaviour:28,being:6,belong:5,bin:34,binari:[2,27],bind:[10,35],bit:[3,19,21,28],bitflag:21,bitwis:21,blob:34,block:[1,4,28],bool:[3,4,6,18,19,20,27,28,29],both:[1,3,28],bound:[1,3,18,21,26],buffer:[1,3,4,10,11,28,33,35],buffer_ctor_kwarg:3,buffer_ctor_kwrd:3,build_ext:34,built:[2,6,20,34],bytearrai:1,c:[2,3,4,7,9,10,18,21,22,26,30,32,35],cach:[4,21,28],call:[3,4,5,6,7,9,18,21,28,29,34],callback:[19,28],caller:5,can:[0,2,3,4,5,6,7,8,9,13,18,19,20,21,27,28,29,34,35],capsul:[5,7,9],captur:21,carri:[1,5,7,9],cast:[2,3,5,6,7,9,19,20,22,23,24,28],cb:6,cc:34,chang:[3,29],channel:34,characterist:14,check:[4,19,20,28,29,34],cl:[5,6,7,8,9],close:3,cloud:34,cmake:34,code:[0,18,35],collect:[3,4,6],com:[3,34],combin:[19,21,28],come:34,command:[4,23,34],command_end:23,command_start:23,command_submit:23,common:[5,9],compat:34,compil:[2,4,10,27,30,34,35],compileopt:[18,27],complet:7,comput:[6,20,21],concept:3,conda:34,conda_channel:34,condit:[0,21,35],conform:6,construct:[1,3,4,5,7,9,19,23,25,28,31],constructor:[1,3,5,6,7,9,13,28],constuctor:[5,7,9],consum:3,consumpt:[5,7,9],contain:[1,2,5,6,7,9,20,21,25,28,30],content:1,context:[1,4,5,9,18,21,27,28,31,32],contigu:[1,3],control:[1,2,3,4,8,26],contructor:[23,28],conveni:4,convent:3,convert:[1,3],cope:34,copi:[1,3,4,5,18,19,20,21,23,25,26,28],copt:2,copy_from_devic:1,copy_from_host:1,copy_to_host:1,core:[4,5,9],corpor:4,correctli:34,correspond:[1,3,4,5,9,20,21,23,25,28],could:[1,2,4,5,7,9,20,21,28,34],count:[6,18,19,20,28],cover:[10,35],cpp:28,cpu:[4,5,6,9,14,20,34],cpu_count:6,cpu_d:[5,6,9],cpu_selector:[4,22],crear:27,creat:[1,2,3,4,5,6,7,8,9,10,18,19,20,21,22,23,25,26,27,28,29,31,35],create_program_from_sourc:2,create_program_from_spirv:2,create_sub_devic:[5,6,9],creation:[4,5,7,9,19,27,28],cref:[18,19,28,31],croot:34,ctx:[5,9,18,27],ctx_d:9,ctxref1:[18,19],ctxref2:[18,19],ctxref:[18,19],ctxt:9,cuda:[4,34],current:[2,3,4,18,19,21,26,27,29],custom:[6,14,28],cxx:34,cython:34,d:[5,6,9],data:[1,2,3,4,6,18,21,26],dcmake_build_typ:34,dcmake_c_compil:34,dcmake_cxx_compil:34,dcmake_install_prefix:34,dcmake_prefix_path:34,dctl:4,ddpcpp_install_dir:34,ddpctl_build_capi_test:34,ddpctl_enable_lo_program_cr:34,dealloc:[4,10,35],deep:[18,21,26],def:4,default_selector:[4,8,9,22,25,29],default_selector_scor:6,defin:[4,6,8,19,28],deivic:21,delet:[5,18,19,20,21,22,23,24,25,26,28,29],depend:[1,18,28,34],depends_on:[18,28],depev:[18,28,33],depict:13,deprec:27,depth:[6,18],describ:[4,10,23,35],descript:34,dest:[18,28],destin:28,dev:[6,9],develop:[0,34,35],devic:[1,3,5,6,8,9,14,16,18,19,23,25,26,28,29,31,32,34],device_context:4,device_count:5,device_identifi:[18,21],device_selector:[4,18,20,22,25],device_typ:[4,6,16,20,21],device_type_t:4,dict:3,differ:[4,28],dim:[28,33],dimens:[3,4,6,28],directli:[4,6,21,26],directori:34,dispatch:28,displac:3,distribut:[0,34,35],divid:[6,20],do_something_on_gpu0:4,doc:[3,34],doe:[1,3,19,27],domain:[6,20,28],done:34,dpc:[4,6,15,30,34],dpcpp:[3,10,35],dpcpp_cpp_rt:34,dpcpp_root:34,dpctl:[0,11,12,14,16,18,19,21,28,29],dpctl_acceler:16,dpctl_all:16,dpctl_all_backend:15,dpctl_api:[18,19,20,21,22,23,24,25,26,27,28,29,30,31],dpctl_automat:16,dpctl_c_extern_c_end:[18,20],dpctl_char:11,dpctl_complet:17,dpctl_cpu:16,dpctl_cuda:15,dpctl_custom:16,dpctl_default_properti:13,dpctl_doubl:11,dpctl_enable_profil:13,dpctl_float:11,dpctl_gpu:[16,21],dpctl_host:15,dpctl_host_devic:16,dpctl_in_ord:13,dpctl_int:11,dpctl_level_zero:15,dpctl_long:11,dpctl_long_doubl:11,dpctl_long_long:11,dpctl_opencl:[15,21],dpctl_run:17,dpctl_short:11,dpctl_signed_char:11,dpctl_size_t:11,dpctl_submit:17,dpctl_sycl_device_manag:28,dpctl_sycl_enum_typ:[11,12,13,14,15,16,17],dpctl_sycl_program_interfac:2,dpctl_unknown_backend:15,dpctl_unknown_devic:16,dpctl_unknown_statu:17,dpctl_unsigned_char:11,dpctl_unsigned_int8:11,dpctl_unsigned_int:11,dpctl_unsigned_long:11,dpctl_unsigned_long_long:11,dpctl_void_ptr:11,dpctlacceleratorselector_cr:[18,22],dpctlaligned_alloc_devic:[18,31],dpctlaligned_alloc_host:[18,31],dpctlaligned_alloc_shar:[18,31],dpctlcontext_areeq:[18,19],dpctlcontext_copi:[5,18,19],dpctlcontext_cr:[18,19],dpctlcontext_createfromdevic:[18,19],dpctlcontext_delet:[18,19],dpctlcontext_devicecount:[5,18,19],dpctlcontext_getbackend:[18,19],dpctlcontext_getdevic:[5,18,19],dpctlcontext_hash:[18,19],dpctlcontext_ishost:[18,19],dpctlcpuselector_cr:[18,22],dpctldefaultselector_cr:[18,22],dpctldevice_areeq:[18,20],dpctldevice_copi:[18,20],dpctldevice_cr:[18,20],dpctldevice_createfromselector:[18,20],dpctldevice_createsubdevicesbyaffin:[18,20],dpctldevice_createsubdevicesbycount:[18,20],dpctldevice_createsubdevicesequ:[18,20],dpctldevice_delet:[18,20],dpctldevice_getbackend:[18,20],dpctldevice_getdevicetyp:[18,20],dpctldevice_getdriververs:[18,20],dpctldevice_getglobalmems:[18,20],dpctldevice_getimage2dmaxheight:18,dpctldevice_getimage2dmaxwidth:18,dpctldevice_getimage3dmaxdepth:18,dpctldevice_getimage3dmaxheight:18,dpctldevice_getimage3dmaxwidth:18,dpctldevice_getlocalmems:[18,20],dpctldevice_getmaxcomputeunit:[18,20],dpctldevice_getmaxnumsubgroup:[18,20],dpctldevice_getmaxreadimagearg:18,dpctldevice_getmaxworkgroups:[18,20],dpctldevice_getmaxworkitemdim:[18,20],dpctldevice_getmaxworkitems:[18,20],dpctldevice_getmaxwriteimagearg:18,dpctldevice_getnam:[18,20],dpctldevice_getparentdevic:18,dpctldevice_getplatform:[18,20],dpctldevice_getpreferredvectorwidthchar:[18,20],dpctldevice_getpreferredvectorwidthdoubl:[18,20],dpctldevice_getpreferredvectorwidthfloat:[18,20],dpctldevice_getpreferredvectorwidthhalf:[18,20],dpctldevice_getpreferredvectorwidthint:[18,20],dpctldevice_getpreferredvectorwidthlong:[18,20],dpctldevice_getpreferredvectorwidthshort:[18,20],dpctldevice_getsubgroupindependentforwardprogress:[18,20],dpctldevice_getvendor:[18,20],dpctldevice_hasaspect:[18,20],dpctldevice_hash:18,dpctldevice_isacceler:[18,20],dpctldevice_iscpu:[18,20],dpctldevice_isgpu:[18,20],dpctldevice_ishost:[18,20],dpctldevice_ishostunifiedmemori:[18,20],dpctldevicemgr_getcachedcontext:[18,21],dpctldevicemgr_getdevic:[18,21],dpctldevicemgr_getdeviceinfostr:[18,21],dpctldevicemgr_getnumdevic:[18,21],dpctldevicemgr_getpositionindevic:[18,21],dpctldevicemgr_getrelativeid:[18,21],dpctldevicemgr_printdeviceinfo:[18,21],dpctldeviceselector_delet:[18,22],dpctldeviceselector_scor:[18,22],dpctldevicevector:[18,21],dpctldevicevector_clear:[18,21],dpctldevicevector_cr:[18,21],dpctldevicevector_createfromarrai:[18,21],dpctldevicevector_delet:[18,21],dpctldevicevector_getat:[18,21],dpctldevicevector_s:[18,21],dpctldevicevectorref:[5,18,19,20,21],dpctlevent_copi:[18,23],dpctlevent_cr:[18,23],dpctlevent_delet:[18,23],dpctlevent_getbackend:[18,23],dpctlevent_getcommandexecutionstatu:[18,23],dpctlevent_getprofilinginfoend:[18,23],dpctlevent_getprofilinginfostart:[18,23],dpctlevent_getprofilinginfosubmit:[18,23],dpctlevent_getwaitlist:[18,23],dpctlevent_wait:[18,23],dpctlevent_waitandthrow:[18,23],dpctleventvector:18,dpctleventvector_clear:18,dpctleventvector_cr:18,dpctleventvector_createfromarrai:18,dpctleventvector_delet:18,dpctleventvector_getat:18,dpctleventvector_s:18,dpctleventvectorref:[18,23],dpctlfilterselector_cr:[18,22],dpctlfree_with_context:[18,31],dpctlfree_with_queu:[18,31],dpctlgpuselector_cr:[18,22],dpctlhostselector_cr:[18,22],dpctlkernel_delet:[18,24],dpctlkernel_getfunctionnam:[18,24],dpctlkernel_getnumarg:[18,24],dpctlkernelargtyp:[18,28,33],dpctlmalloc_devic:[18,31],dpctlmalloc_host:[18,31],dpctlmalloc_shar:[18,31],dpctlopaquesyclcontext:18,dpctlopaquesycldevic:18,dpctlopaquesycldeviceselector:18,dpctlopaquesyclev:18,dpctlopaquesyclkernel:18,dpctlopaquesyclplatform:18,dpctlopaquesyclprogram:18,dpctlopaquesyclqueu:18,dpctlopaquesyclusm:18,dpctlpartitionaffinitydomaintyp:[18,20],dpctlplatform_copi:[18,25],dpctlplatform_cr:[18,25],dpctlplatform_createfromselector:[18,25],dpctlplatform_delet:[18,25],dpctlplatform_getbackend:[18,25],dpctlplatform_getnam:[18,25],dpctlplatform_getplatform:[18,25],dpctlplatform_getvendor:[18,25],dpctlplatform_getvers:[18,25],dpctlplatformmgr_printinfo:[18,26],dpctlplatformvector:[18,26],dpctlplatformvector_clear:[18,26],dpctlplatformvector_cr:[18,26],dpctlplatformvector_createfromarrai:[18,26],dpctlplatformvector_delet:[18,26],dpctlplatformvector_getat:[18,26],dpctlplatformvector_s:[18,26],dpctlplatformvectorref:[18,25,26],dpctlpopsyclqueu:29,dpctlprogram_createfromoclsourc:[2,18,27],dpctlprogram_createfromoclspirv:2,dpctlprogram_createfromspirv:[18,27],dpctlprogram_delet:[18,27],dpctlprogram_getkernel:[18,27],dpctlprogram_haskernel:[18,27],dpctlqueue_areeq:[18,28],dpctlqueue_copi:[18,28],dpctlqueue_creat:[18,28],dpctlqueue_createfordevic:[18,28],dpctlqueue_delet:[18,28],dpctlqueue_getbackend:[18,28],dpctlqueue_getcontext:[18,28],dpctlqueue_getdevic:[18,28],dpctlqueue_hasenableprofil:[18,28],dpctlqueue_hash:[18,28],dpctlqueue_isinord:[18,28],dpctlqueue_memadvis:[18,28],dpctlqueue_memcpi:[18,28],dpctlqueue_prefetch:[18,28],dpctlqueue_submitbarri:18,dpctlqueue_submitbarrierforev:18,dpctlqueue_submitndrang:[18,28,33],dpctlqueue_submitrang:[18,28,33],dpctlqueue_wait:[18,28],dpctlqueuemgr_getcurrentqueu:[18,29],dpctlqueuemgr_getqueuestacks:[18,29],dpctlqueuemgr_globalqueueiscurr:[18,29],dpctlqueuemgr_iscurrentqueu:[18,29],dpctlqueuemgr_popqueu:[18,29],dpctlqueuemgr_pushqueu:[18,29],dpctlqueuemgr_setglobalqueu:[18,29],dpctlqueuepropertytyp:[18,28],dpctlservice_getdpcppvers:[18,30],dpctlsyclaspecttyp:[18,20],dpctlsyclbackendtyp:[18,19,20,21,23,25,28],dpctlsyclcontexref:19,dpctlsyclcontextref:[5,18,19,21,27,28,31],dpctlsycldeventstatustyp:23,dpctlsycldeviceref:[6,18,19,20,21,22,28,31],dpctlsycldeviceselectorref:[18,20,22,25],dpctlsycldevicetyp:[18,20,21],dpctlsycleventref:[7,18,23,28,33],dpctlsycleventstatustyp:[18,23],dpctlsyclkernelref:[2,18,24,27,28,33],dpctlsyclplatformref:[18,20,25,26],dpctlsyclprogramref:[2,18,25,27],dpctlsyclqueueref:[4,9,18,28,29,31,33],dpctlsyclusmref:[18,31],dpctlusm_getpointerdevic:[18,31],dpctlusm_getpointertyp:[18,31],dref1:[18,20],dref2:[18,20],dref:[18,19,20,21,22,28],driver:[4,5,6,8,9,20,21,25,34],driver_vers:6,dsref:[18,20,22,25],dtype:3,dump:34,dure:[19,28],dvref:[18,19],e:[3,4,7,23,29],each:[1,4,5,6,8,9,18,20,26,28,34],easiest:34,echo:34,ed:21,either:[2,4,9,21],elem:[18,21,26],element:[3,18,21,26],els:[6,19,20,24,27,29],empti:[3,5],en:4,enabl:34,enable_profil:[9,28],encod:6,encount:1,enqueu:28,ensur:[5,7,9],enter:4,entri:1,env:34,environ:34,equival:[6,16],eref:[18,23],err_cod:18,error:[18,19],error_handl:[18,19,28],error_handler_callback:[18,19,28],especi:[5,34],eu:6,evenli:[6,20],event:[4,7,18,28,32],event_profil:23,event_vector:18,everyth:[4,8,26],exampl:[4,5,6,7,9,21],except:6,exclus:3,execut:[6,23,29,34],exist:[3,20,24,27],exit:4,expect:1,experiment:[3,4,10,35],explicit:6,explicitli:[4,9],expos:[1,2,27],extens:[4,6,10,34,35],extent:1,extra:[4,27,34],extract:18,f8:3,f:3,face:34,factori:4,fail:[4,5,7,9],failur:[5,31],fals:[1,3,4,6,9,19,20,27,28,29],featur:[4,10,27,35],file:[2,27,34],filter:[3,4,5,6,8,9,21,22,26],filter_selector:[4,8,10,22,35],filter_str:[6,18,22],find:9,finish:23,first:[6,19,20,27,28],flag:[2,3,6,19,21,27,28],folder:34,follow:[3,4,6,21,28,34],foreign:9,form:20,format:[6,21],forward:[6,20],fotrant:3,found:[0,4,6,21,27,35],fp16:14,fp64:14,free:[27,31],freed:[4,20,22,23],from:[1,2,3,4,6,9,10,18,20,21,26,27,28,29,35],from_dlpack:3,from_numpi:3,fs:6,full_profil:4,fulli:6,further:[32,34],futur:[3,4],g:[3,23],garbag:4,gen9:4,gener:4,get:[21,27,28,29,30,31],get_current_backend:4,get_current_device_typ:4,get_current_queu:4,get_devic:[4,5,6,9,21],get_filter_str:6,get_function_nam:2,get_info:[18,20,21],get_num_activated_queu:4,get_num_arg:2,get_num_devic:4,get_platform:4,get_profiling_info:23,get_sycl_context:9,get_sycl_devic:9,get_sycl_kernel:2,get_usm_typ:1,get_wait_list:23,getstartedguid:34,github:[3,34],give:[3,21],given:[1,3,4,6,7,9,19,21,26,27],global:[4,6,32,33],global_mem_s:20,go:[2,4],goe:5,gpu:[4,5,6,9,14,20,21,34],gpu_dev:6,gpu_selector:[4,6,22],grang:[18,28,33],graphic:[4,34],group:[6,20,23,28],gtest:34,guid:0,h:[2,11,12,13,14,15,16,17],ha:[3,4,5,6,10,14,18,20,34,35],handler:[18,19,28],has_accelerator_devic:4,has_aspect_acceler:6,has_aspect_cpu:6,has_aspect_custom:6,has_aspect_fp16:6,has_aspect_fp64:6,has_aspect_gpu:6,has_aspect_host:6,has_aspect_imag:6,has_aspect_int64_base_atom:6,has_aspect_int64_extended_atom:6,has_aspect_online_compil:6,has_aspect_online_link:6,has_aspect_queue_profil:6,has_aspect_usm_device_alloc:6,has_aspect_usm_host_alloc:6,has_aspect_usm_restricted_shared_alloc:6,has_aspect_usm_shared_alloc:6,has_aspect_usm_system_alloc:6,has_cpu_devic:4,has_gpu_devic:4,has_host_devic:4,has_properti:28,has_sycl_kernel:2,hash:[18,19,28],have:[28,29,31],hd:4,height:[6,18],help:34,helper:[6,32],highest:[4,8],host:[1,3,4,6,14,19,20,31],host_selector:[4,22],how:[4,8,26],howev:34,html:[3,4],http:[3,4,34],i1:3,i2:3,i3:3,i7:4,i:[3,4,29],icx:34,id:[6,21,28,33],identifi:[14,21,23,25],idp:34,ifac:[3,4],il:[2,18,27],imag:[3,6,14,18],image2d_max_height:18,image2d_max_width:18,image3d_max_depth:18,image3d_max_height:18,image3d_max_width:18,image_2d_max_height:6,image_2d_max_width:6,image_3d_max_depth:6,image_3d_max_height:6,image_3d_max_width:6,implement:[1,3,4,10,35],impli:3,in_ord:9,includ:[4,6,10,11,12,13,14,15,16,17,20,34,35],include_backend:6,include_device_typ:6,incorrect:[7,9],independ:[6,20],index:[3,18,21,26,32,34],indic:[3,4,6,20,21,22,28],infer:3,info:[6,12,18,20,21,23],inform:[0,1,4,6,8,26,35],initi:29,inplac:34,input:[3,4,5,7,9,18,21,26,28],insert:[18,21,26],insid:[4,5,28],install_prefix:34,instanc:[1,3,4,5,6,7,9,19,20,28],instead:[1,3,4,5,28,34],int64_base_atom:14,int64_extended_atom:14,int64_t:[18,21],integ:[3,22],intel:[0,4,10,34,35],intelpython:34,interfac:[1,18,32],intern:[21,29],interoper:[2,24,27,28,34],invalid:4,invoc:23,invok:[5,7,9,19,28],involv:34,io:[3,4],is_acceler:6,is_cpu:[6,9],is_gpu:[5,6,9],is_host:6,is_in_device_context:4,is_in_ord:[9,28],issu:34,istal:34,item:6,items:3,iter:28,its:3,j:34,k:3,kernel:[2,4,6,10,11,18,23,27,28,32,35],kernel_bundl:4,kernelnam:[18,27],keyword:[1,3,6],kind:1,kref:[18,24,28,33],kwarg:9,l1_cach:[6,12],l2_cach:[6,12],l3_cach:[6,12],l4_cach:[6,12],latest:[3,4,34],layer:4,layour:3,layout:3,ld_library_path:34,led:5,legal:6,len:[5,6,18,21,26],length:[3,18,27],less:4,let:29,level0:4,level:[4,5,8,26,27],level_zero:[4,5,6],level_zero_gpu:6,lib:34,libdpctlsyclinterfac:34,librari:[10,30,35],libsyclinterfac:35,like:34,limit:[10,27,35],line:34,linux:[4,34],list:[4,5,6,8,9,18,28,32],llvm:34,load:29,local:[6,28,29],local_mem_s:20,locat:34,longer:29,look:[21,28],lowest:[4,8],lrang:[18,28,33],ls:34,lsplatform:[4,34],m:[6,20,34],mai:[27,34],maintain:29,major_numb:20,make:[10,29,34,35],malform:1,malloc_devic:1,malloc_host:1,malloc_shar:1,manag:29,mani:[6,20],maniputal:1,map:[21,26],match:[3,6,21],max_compute_unit:[6,20],max_num_sub_group:[6,20],max_read_image_arg:[6,18],max_work_group_s:[6,20],max_work_item_dim:6,max_work_item_dimens:20,max_work_item_s:[6,20],max_write_image_arg:[6,18],maximum:[6,18],md:34,meant:29,mem_advis:[9,28],member:[21,26],memcpi:[9,28],memori:[3,4,5,10,18,20,28,31,35],memoryerror:5,memoryusm:3,memoryusmdevic:[1,3],memoryusmhost:[1,3],memoryusmshar:[1,3],memoryview:1,metadata:[4,26],method:[3,7,27],minimum:[6,18],minor:20,mkdir:34,model:6,modul:[2,29],more:[4,11,21,26],most:[4,8],mref:[18,31],much:[4,8,26],multi:3,multipl:[2,4,5,7,9],must:[6,9,31],n:34,name:[2,4,5,6,7,8,9,20,21,24,25,26,27,34],namespac:32,nanosecond:23,narg:[18,28,33],nativ:[6,20],nbyte:[1,3],ncount:[18,20],nd_rang:[6,28],ndarrai:3,ndepev:[18,28,33],ndim:[3,18,28,33],necessari:[5,34],need:[3,6,19,20,28,34],neg:22,nest:[3,4],nested_context_factori:4,new_dtyp:3,newshap:3,next:29,next_partition:[6,12],ninja:34,non:[1,3,6,20],none:[1,3,5,6,7,8,9],not_applic:12,note:[2,4],np_ari:3,nrang:[18,28,33],nullptr:[18,20,21,24,26,28,31],numa:[6,12],number:[2,3,4,5,6,8,18,19,20,21,24,26,28,29,31],numpi:[1,3,34],numpy_usm_shar:3,obj:[1,3],object:[1,2,3,4,5,6,7,9,10,18,19,20,21,22,23,25,26,28,29,35],offset:3,older:34,onc:34,one:[1,3,4,5,6,7,9,21,31],oneapi:[3,10,21,22,35],oneapi_root:34,onepi:4,onli:[1,2,4,26,28,34],online_compil:14,online_link:14,op:29,opaqu:[4,18,19,20,21,22,23,25,26,27,28,29],opencl:[2,4,5,9,20,21,24,27,28,34],oper:[18,19,28],opt:34,option:[2,3,4,5,6,7,8,9,19,27,34],order:[3,9,28],org:34,other:[1,6,20,21],otherwis:[3,4,6,18,19,20,21,28],out:[4,5,8,9,18,21,26,28,34],output:[3,4,8],over:[4,18,19,20,23,28],overal:28,own:[1,4],ownership:5,page:32,parallel:[1,2,3,4,6,28],parallel_for:28,paramet:[2,3,4,5,6,7,8,9,18,19,20,21,22,23,24,25,26,27,28,29,31],parent:[6,18],parent_devic:[6,18],parition_spec:6,part:[0,34,35],partaffdomti:[18,20],partion:6,partit:[3,5,6,9,20],partition_affinity_domain:12,pass:[5,6,11,13,18,19,20,21,22,23,25,28,29],path:34,path_to_your_env:34,per:[6,29],perform:[1,3],permit:6,pip:34,pixel:[6,18],platform:[4,8,18,20,21,32,34],pleas:34,point:[19,20,27,28,34],pointer:[1,2,4,5,6,7,9,18,19,20,21,22,23,24,25,26,27,28,29,31],pop:29,popqueu:29,popul:1,posit:[1,18,19,21,26],possibl:[1,3,4,6,10,34,35],postion:[18,21,26],pref:[18,25,26,27],prefer:[6,20,34],preferred_vector_width_char:[6,20],preferred_vector_width_doubl:[6,20],preferred_vector_width_float:[6,20],preferred_vector_width_half:[6,20],preferred_vector_width_int:[6,20],preferred_vector_width_long:[6,20],preferred_vector_width_short:[6,20],prefetch:[9,28],prefix:34,prerequisit:34,present:4,previou:[4,8,29],previous:[4,28,29],print:[4,5,6,8,9,21,26],print_device_info:6,print_platform_info:8,prior:34,proceed:34,profil:[4,21],program:[4,10,18,32,34,35],progress:[6,20],project:[0,35],properti:[1,6,9,13,18,19,28],property_list:28,proplist:28,protocol:[1,3,4,10,35],provid:[1,2,3,4,6,9,10,18,20,22,25,28,29,34,35],provif:25,ptr:[18,28],pull:34,push:29,pushd:34,pushqueu:29,put:[6,20],pwd:34,py:34,pyarg:34,pycapsul:[5,7,9],pytest:34,python:[0,1,3,5,6,7,8,9,10,35],q:[2,9],qref1:[18,28],qref2:[18,28],qref:[18,28,29,31,33],queri:[1,19],queue:[1,3,9,13,18,23,31,32],queue_profil:14,quick:35,r:4,rais:[1,2,3,4,5,6,7,9],rang:[4,18,28,33],raw:[18,21,26],read:[6,18,32],readi:[7,34],readthedoc:4,real:3,reason:34,recip:34,recogn:6,redefinit:15,refactor:4,refer:[0,1,27,28,29,31,32,34,35],referenc:[9,19,28],reference_obj:1,regist:4,reject:22,rel:21,relat:32,relative_id:6,releas:34,remain:[6,20,29],remov:[4,29],renam:[5,7,9],repositori:34,repres:[1,3,4,5,6,7,8,9,20,28],request:[20,31],requir:34,reset:29,reshap:3,resid:3,respect:[3,6,20,21,34],result:20,retriev:[4,34],returnedbi:3,reus:[3,28],revert:28,rf:34,rm:34,root:[6,21,28,34],run:4,runtim:[4,10,34,35],s1:3,s2:3,s3:3,s:[1,3,4,6,16,18,19,20,21,25,28,29,31,34],same:[3,4,6,19,20,21,28,31],satisfi:[4,21],scalar:[3,6,20],scope:[4,5,29],score:22,script:34,sd:6,search:21,second:[19,20,28],section:[4,10,35],see:3,select:[6,8,9,32],select_accelerator_devic:[4,6],select_cpu_devic:[4,6],select_default_devic:[4,6],select_gpu_devic:[4,6],select_host_devic:[4,6],selector:[3,4,5,6,8,9,22],self:[1,8],sequenc:3,servic:32,set:[4,8,14,21,29,34],set_global_queu:4,setglobalqueu:29,setup:34,setuptool:34,setvar:34,sh:[3,34],shape:3,share:[1,3,20,31],should:[6,34],shown:34,simpl:[1,34],simul:4,simultan:[6,18],singl:[6,9,28],size:[1,3,6,18,20,21,26,27,28,29,31],size_t:[2,5,6,7,9,18,19,20,21,24,26,27,28,29,31,33],so:34,softwar:[20,25],some:34,soon:29,sourc:[2,3,4,18,27,28],spec:[4,27],specif:[4,5,6,9,10,15,29,35],specifi:[3,4,6,9,18,21,22,26,28],spir:[2,27],src:[2,18,28],stack:[4,29],standalon:34,standard:[0,34,35],start:[23,35],std:[18,19,21,26,28],step:34,still:23,store:[4,5],str:[6,9],stride:3,string:[2,3,4,5,6,8,9,20,21,22,24,25,26,27,30],struct:[18,21,26],style:[0,35],sub:[3,5,6,9,18,20],sub_d:9,sub_dev:6,sub_devic:[5,9],sub_group_independent_forward_progress:[6,20],subdevic:20,subject:[0,35],submit:[4,9,23,28],submit_barri:18,subsequ:4,subset:4,subsystem:20,succeed:27,success:[5,6,7,9,19],suit:34,support:[2,3,4,6,10,11,20,21,28,33,34,35],sure:34,syc:29,sycl:[1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,18,19,20,21,22,23,24,25,26,27,28,29,31,33,34,35],sycl_context:[1,3,9],sycl_devic:[1,3,9],sycl_queu:[1,3,4],syclcontext:[1,3,4,9],syclcontextref:5,sycldevic:[1,3,4,5,9,28],syclev:4,sycleventref:7,syclkernel:[2,4,27],syclkernelinvalidrangeerror:4,syclkernelsubmiterror:4,syclobj:1,syclplatform:4,syclprogram:2,syclprogramcompilationerror:2,syclprogramref:27,syclqueu:[1,2,3,4],syclqueuecreationerror:[1,4,9],syclqueueref:9,synchron:7,system:[4,25,34],t:3,take:28,target:[3,4],task:28,temporari:5,tensor:4,term:[0,4,29,35],test:29,than:[1,4],thei:1,therefor:1,thi:[0,1,2,3,4,5,6,7,8,9,19,20,21,23,27,28,29,34,35],those:[10,35],thread:[4,29],three:[4,6,28],through:18,thu:5,till:29,time:[4,5,7,9,23],tm:4,tmp:34,to_devic:3,to_numpi:3,tobyt:1,todo:[11,28,32],togeth:34,toolchain:[30,34],top:29,total:[3,6,20],transfer:3,tupl:[3,9],two:[5,6,9,19,20,28],type:[1,2,3,4,5,6,7,8,9,11,15,16,18,19,20,21,26,28,31],typedef:[21,26],typeerror:[1,3,5,6,7,9],typestr:3,uint32_t:[18,20],uint64_t:[18,20,23],unabl:4,under:[0,34,35],underli:[1,3,5,19,20,28],understood:1,unexpect:[1,7,9],unicod:2,unifi:20,uniniti:3,unit:[3,6,20,29],unknown:31,unless:3,unlik:28,unsaf:3,unsupport:3,untyp:1,unwrap:28,up:[21,28,34],upon:[3,5,7,9],url:34,us:[0,1,2,3,4,5,6,7,9,10,11,18,19,20,21,25,26,27,28,29,31,35],usabl:4,usag:[0,35],use_backend:6,usm:[1,3,4,10,18,28,32,35],usm_ari:3,usm_arrai:3,usm_data:3,usm_device_alloc:14,usm_host_alloc:14,usm_ndarrai:3,usm_obj:1,usm_restricted_shared_alloc:14,usm_shared_alloc:14,usm_system_alloc:14,usm_typ:3,usual:34,v:[2,27,34],valid:20,valu:[1,4,6,8,18,19,20,21,22,23,25,28],valueerror:[1,3,4,5,6,7],variabl:34,vebos:[4,8],vector:[6,18,19,20,21,23,25,26],vendor:[4,6,8,20,21,25,26],verbos:[4,8,18,26],verbosilti:26,version:[3,4,6,8,20,21,25,26,30,34],via:[4,34],view:3,vref:[18,21,26],wa:[1,3,5,6,23,28,29,30,34],wai:[2,5,6,7,9,28,34],wait:[7,9,23,28],wait_and_throw:23,want:34,we:[2,18,27,28,34],were:6,whatev:6,when:[1,2,3,4,5,23,27,34],whenev:4,where:[3,28,29],whether:[3,28],which:[2,3,14,22,23,27],whose:[3,18,21,26],width:[6,18,20],window:34,wish:34,within:4,work:[6,20,28],workitemoffset:[28,33],would:[21,22,23],wrap:[2,4,18,19,20,21,23,25,26,28,29],wraper:18,wrapper:[4,18,22,32],written:[6,18],x86:34,x:3,xe:34,yet:[28,29,33],yield:4,you:[4,34],your:34,zero:[3,4,5,6,19,20]},titles:["About","dpctl.memory","dpctl.program","dpctl.tensor","dpctl Python API","dpctl.SyclContext","dpctl.SyclDevice","dpctl.SyclEvent","dpctl.SyclPlatform","dpctl.SyclQueue","Welcome to Data-parallel Control (dpctl)\u2019s documentation!","enum DPCTLKernelArgType","enum DPCTLPartitionAffinityDomainType","enum DPCTLQueuePropertyType","enum DPCTLSyclAspectType","enum DPCTLSyclBackendType","enum DPCTLSyclDeviceType","enum DPCTLSyclEventStatusType","Global Namespace","Context class C wrapper","Device class C wrapper","Device class helper functions","Device selection","Event class C wrapper","Kernel class C wrapper","Platform class C wrapper","Platform class helper functions","Program class C wrapper","Queue class C wrapper","Queue class helper functions","Service functions","USM Interface","libsyclinterface","Todo List","Quick Start Guide","Welcome to Data-parallel Control (dpctl)\u2019s documentation!"],titleterms:{"class":[1,2,4,19,20,21,23,24,25,26,27,28,29],"enum":[11,12,13,14,15,16,17],"function":[1,2,4,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"public":[5,6,8,9],about:[0,35],api:[4,34,35],attribut:[5,6,8,9],build:34,c:[19,20,23,24,25,27,28,34],content:34,context:19,contribut:[0,35],control:[10,35],custom:34,data:[10,35],detail:[5,6,7,8,9,11,18,19,20,21,22,23,24,25,26,27,28,29,30,31],devic:[4,20,21,22],document:[10,11,18,19,20,21,22,23,24,25,26,27,28,29,30,31,35],dpcpp:34,dpctl:[1,2,3,4,5,6,7,8,9,10,34,35],dpctlkernelargtyp:11,dpctlpartitionaffinitydomaintyp:12,dpctlqueuepropertytyp:13,dpctlsyclaspecttyp:14,dpctlsyclbackendtyp:15,dpctlsycldevicetyp:16,dpctlsycleventstatustyp:17,enumer:4,event:23,exampl:34,except:[2,4],from:34,global:[18,19,20,21,22,23,24,25,26,27,28,29,30,31],guid:[34,35],helper:[4,21,26,29],instal:34,interfac:31,kernel:24,librari:34,libsyclinterfac:32,licens:[0,35],list:33,manag:4,memori:1,method:[5,6,8,9],modul:4,namespac:18,oneapi:34,other:4,overview:[11,18,19,20,21,22,23,24,25,26,27,28,29,30,31],packag:34,parallel:[10,35],platform:[25,26],privat:[5,9],program:[2,27],pypi:34,python:[4,34],queue:[4,28,29],quick:34,run:34,s:[10,35],select:[4,22],servic:30,share:34,sourc:34,start:34,sub:4,syclcontext:5,sycldevic:6,syclev:7,syclplatform:8,syclqueu:9,tabl:34,tensor:3,test:34,todo:33,typedef:18,us:34,user:35,usm:31,welcom:[10,35],wheel:34,wrapper:[19,20,23,24,25,27,28]}})