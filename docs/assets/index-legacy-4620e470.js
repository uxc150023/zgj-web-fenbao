System.register(["./table-legacy-a68dd9a3.js","./Layout-legacy-8a369202.js","./searchForm-legacy-6cef90ab.js","./pagination-legacy-fb6b924b.js","./main-legacy-32c40b54.js","./batch-legacy-3a06fca6.js","./sangedian-legacy-75d81ddc.js","./ketanchude-legacy-4abaf206.js","./KDocumentTypeDialog-legacy-531ebfaa.js"],(function(e,t){"use strict";var a,l,n,i,o,r,d,b,p,c,s,u,m,h,g,y,f;return{setters:[e=>{a=e.c},e=>{l=e.c},e=>{n=e._},e=>{i=e.c},e=>{o=e.v,r=e.h,d=e.o,b=e.c,p=e.a,c=e.w,s=e.V,u=e.m,m=e.u,h=e.n,g=e.f,y=e.l},e=>{f=e.c},null,null,null],execute:function(){const t=u("div",{class:"title"},"终端操作日志",-1),S={class:"batch"};e("default",{setup(e){const w=o("first"),A=o([{name:"t-zgj-logRecord.Workbench",value:"first"},{name:"t-zgj-view.SmartSeal",value:"second"},{name:"t-zgj-cg-menu-zhineng-yinzhang-he",value:"third"},{name:"t-zgj-cg-menu-zhineng-yinzhang-gui",value:"fourth"}]),v=r({componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"请输入"}},{id:"picker",label:"上报时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"name",label:"终端类型",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsWorkbenchTable:{header:[{prop:"1",label:"日志名称",sortable:!0,"min-width":150},{prop:"2",label:"终端类型",sortable:!0,"min-width":120},{prop:"3",label:"终端编码",sortable:!0,"min-width":150},{prop:"4",label:"终端名称",sortable:!0,"min-width":200},{prop:"5",label:"终端版本",sortable:!0,"min-width":180},{prop:"6",label:"上报时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":100,rankDisplayData:[{name:"下载日志"}]}],data:[{1:"1111",2:"Web",3:"10123",4:"岳海涛测试",5:"V1.0.0",6:"2022-12-30 16:41:32"},{1:"1111",2:"Web",3:"10123",4:"建业测试",5:"V1.0.6",6:"2022-12-30 16:41:32"},{1:"测试",2:"Web",3:"10123",4:"Walter",5:"V3.0.2",6:"2022-12-30 16:41:32"},{1:"1111",2:"PC",3:"2033",4:"张三测试",5:"V1.8.0",6:"2022-12-30 16:41:32"},{1:"技术部测试",2:"Web",3:"10123",4:"岳海涛测试",5:"V1.0.0",6:"2022-12-30 16:41:32"}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"}}},componentsSmartSealTable:{header:[{width:50,type:"selection",align:"center"},{prop:"0",label:"序号",width:60,align:"center"},{prop:"1",label:"日志名称",sortable:!0,"min-width":150},{prop:"2",label:"终端类型",sortable:!0,"min-width":120},{prop:"3",label:"终端编码",sortable:!0,"min-width":150},{prop:"4",label:"终端名称",sortable:!0,"min-width":200},{prop:"5",label:"终端版本",sortable:!0,"min-width":180},{prop:"6",label:"上报时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":100,rankDisplayData:[{name:"下载日志"}]}],data:[{0:1,1:"1111",2:"Web",3:"10123",4:"岳海涛测试",5:"V1.0.0",6:"2022-12-30 16:41:32"},{0:2,1:"测试1111",2:"Web",3:"10123",4:"建业测试",5:"V1.0.0",6:"2022-12-30 16:41:32"},{0:3,1:"测试",2:"Web",3:"10123",4:"岳海涛测试",5:"V1.0.0",6:"2022-12-30 16:41:32"}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"}}},componentsSmartSealBoxTable:{header:[{width:50,type:"selection",align:"center"},{prop:"0",label:"序号",width:60,align:"center"},{prop:"1",label:"日志名称",sortable:!0,"min-width":150},{prop:"2",label:"终端类型",sortable:!0,"min-width":120},{prop:"3",label:"终端编码",sortable:!0,"min-width":150},{prop:"4",label:"终端名称",sortable:!0,"min-width":200},{prop:"5",label:"终端版本",sortable:!0,"min-width":180},{prop:"6",label:"上报时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":100,rankDisplayData:[{name:"下载日志"}]}],data:[{0:1,1:"1111",2:"Web",3:"10123",4:"岳海涛测试",5:"V1.0.0",6:"2022-12-30 16:41:32"},{0:2,1:"测试1111",2:"Web",3:"10123",4:"建业测试",5:"V1.0.0",6:"2022-12-30 16:41:32"},{0:3,1:"测试",2:"Web",3:"10123",4:"岳海涛测试",5:"V1.0.0",6:"2022-12-30 16:41:32"},{0:4,1:"1111",2:"Web",3:"10123",4:"岳海涛测试",5:"V1.0.0",6:"2022-12-30 16:41:32"},{0:5,1:"测试1111",2:"Web",3:"10123",4:"建业测试",5:"V1.0.0",6:"2022-12-30 16:41:32"},{0:6,1:"测试",2:"Web",3:"10123",4:"岳海涛测试",5:"V1.0.0",6:"2022-12-30 16:41:32"}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"}}},componentsSmartSealCabinetTable:{header:[{width:50,type:"selection",align:"center"},{prop:"0",label:"序号",width:60,align:"center"},{prop:"1",label:"日志名称",sortable:!0,"min-width":150},{prop:"2",label:"终端类型",sortable:!0,"min-width":120},{prop:"3",label:"终端编码",sortable:!0,"min-width":150},{prop:"4",label:"终端名称",sortable:!0,"min-width":200},{prop:"5",label:"终端版本",sortable:!0,"min-width":180},{prop:"6",label:"上报时间",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":100,rankDisplayData:[{name:"下载日志"}]}],data:[{0:1,1:"1111",2:"Web",3:"10123",4:"岳海涛测试",5:"V1.0.0",6:"2022-12-30 16:41:32"},{0:2,1:"测试1111",2:"Web",3:"10123",4:"建业测试",5:"V1.0.0",6:"2022-12-30 16:41:32"}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"}}},componentsPagination:{data:{amount:40,index:1,pageNumber:10},defaultAttribute:{layout:"prev, pager, next, jumper",total:40,"page-sizes":[10,100,200,300,400],background:!0}},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"批量下载"}]}});function k(e){v.componentsBatch.selectionData=e,v.componentsBatch.selectionData.length>0?v.componentsBatch.defaultAttribute.disabled=!1:v.componentsBatch.defaultAttribute.disabled=!0}return(e,o)=>(d(),b("div",null,[p(l,{Layout:"title,tabs,searchForm,table,pagination,batch"},{title:c((()=>[t])),tabs:c((()=>[p(s,{active:w.value,label:A.value,"onUpdate:active":o[0]||(o[0]=e=>w.value=e),style:{"margin-top":"12px"}},null,8,["active","label"])])),searchForm:c((()=>[u("div",null,[p(m(n),{data:m(v).componentsSearchForm.data,butData:m(v).componentsSearchForm.butData,style:h(m(v).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:c((()=>[u("div",S,[p(f,{data:m(v).componentsBatch.data,defaultAttribute:m(v).componentsBatch.defaultAttribute},null,8,["data","defaultAttribute"])])])),table:c((()=>[u("div",null,["first"===w.value?(d(),g(m(a),{key:0,defaultAttribute:m(v).componentsWorkbenchTable.defaultAttribute,data:m(v).componentsWorkbenchTable.data,header:m(v).componentsWorkbenchTable.header,paginationData:m(v).componentsPagination.data,isSelection:!0,onSelectionChange:k},null,8,["defaultAttribute","data","header","paginationData"])):y("",!0),"second"===w.value?(d(),g(m(a),{key:1,defaultAttribute:m(v).componentsSmartSealTable.defaultAttribute,data:m(v).componentsSmartSealTable.data,header:m(v).componentsSmartSealTable.header,isSelection:!0,onSelectionChange:k},null,8,["defaultAttribute","data","header"])):y("",!0),"third"===w.value?(d(),g(m(a),{key:2,defaultAttribute:m(v).componentsSmartSealBoxTable.defaultAttribute,data:m(v).componentsSmartSealBoxTable.data,header:m(v).componentsSmartSealBoxTable.header,isSelection:!0,onSelectionChange:k},null,8,["defaultAttribute","data","header"])):y("",!0),"fourth"===w.value?(d(),g(m(a),{key:3,defaultAttribute:m(v).componentsSmartSealCabinetTable.defaultAttribute,data:m(v).componentsSmartSealCabinetTable.data,header:m(v).componentsSmartSealCabinetTable.header,isSelection:!0,onSelectionChange:k},null,8,["defaultAttribute","data","header"])):y("",!0)])])),pagination:c((()=>[p(i,{data:m(v).componentsPagination.data,defaultAttribute:m(v).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1})]))}})}}}));