System.register(["./main-legacy-32c40b54.js","./index-legacy-9e9917b9.js","./tree-legacy-b312961e.js","./JyTable-legacy-caaa7541.js","./actionMoreDialog-legacy-bc318b27.js","./index-legacy-301598c8.js","./index-legacy-4a966d5e.js","./tree.vue_vue_type_style_index_0_scoped_c843ec9b_lang-legacy-893f98eb.js","./sangedian-legacy-75d81ddc.js","./Layout-legacy-8a369202.js","./searchForm-legacy-6cef90ab.js","./ketanchude-legacy-4abaf206.js","./KDocumentTypeDialog-legacy-531ebfaa.js","./pagination-legacy-fb6b924b.js","./batch-legacy-3a06fca6.js","./index-legacy-1f81a8d9.js","./cha-kong-legacy-1ebc7b7b.js","./index-legacy-88ea9e78.js","./yuan-hui-legacy-0c1e3d03.js","./index-legacy-31a1c1a3.js","./home-back-legacy-d9a8ace4.js","./logo-legacy-7450937f.js","./request-util-legacy-76780fff.js"],(function(e,a){"use strict";var t,o,l,n,s,d,r,i,m,c,p,u,h,y,g,w,b,f,D,v,T,F,x,A,I,k,j,C,M=document.createElement("style");return M.textContent=".title[data-v-0ca073b5]{display:flex;align-items:center;justify-content:space-between}.header-div[data-v-0ca073b5]{display:flex;align-items:center}img[data-v-0ca073b5]{width:21px;margin-right:18px}span[data-v-0ca073b5]{font-family:PingFang SC;font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:rgba(0,0,0,.85)}.content-div[data-v-0ca073b5]{padding-left:40px;margin-bottom:10px;font-size:14px}.scrollbar[data-v-0ca073b5]{padding:0 20px}.scrollbar .scrollbar-demo-item[data-v-0ca073b5]{display:flex;align-items:center;justify-content:center;height:50px;margin:20px;text-align:center;border-radius:4px;background:var(--el-color-primary-light-9);color:var(--el-color-primary)}\n",document.head.appendChild(M),{setters:[e=>{t=e._,o=e.v,l=e.cC,n=e.h,s=e.j,d=e.r,r=e.o,i=e.c,m=e.a,c=e.w,p=e.m,u=e.g,h=e.t,y=e.u,g=e.f,w=e.l,b=e.cD,f=e.a9,D=e.b4,v=e.cv,T=e.y,F=e.z},e=>{x=e.default},e=>{A=e.c},e=>{I=e.J},e=>{k=e.a},e=>{j=e.a},e=>{C=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const M=e=>(T("data-v-0ca073b5"),e=e(),F(),e),V={class:"title"},U=M((()=>p("div",null,"表单管理",-1))),N={class:"header-div"},B=["src"],_={class:"content-div"},L=u(" 提交 "),E=u("取消"),J=M((()=>p("div",{class:"from-label"},"表单名称",-1))),z=u(" 提交 "),q=u("取消"),P={setup(e){const t=o(!1),T=o([]),F=l((()=>b((()=>a.import("./index-legacy-e5394dcb.js")),void 0))),M=o([]),P=o(null),S=o(null),R=o(null),W=o(null),Y=o({formMessageId:"",formName:""}),$=n({componentsAddForm:{dialogVisible:!1,addTitle:"新增",data:{}},componentsSearchForm:{data:[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"表单名称/创建人"},options:[{value:"1",label:"全部"}]},{id:"sealUseTypeId",label:"用印类型",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{sealUseTypeId:"1",sealUseTypeIdLabel:"物理用印"},{sealUseTypeId:"2",sealUseTypeIdLabel:"电子签章"}],optionLabel:"sealUseTypeIdLabel",optionValue:"sealUseTypeId"},{id:"updateTime",label:"更新时间",type:"picker",requestType:"array",startRequest:"updateStartTime",endRequest:"updateEndTime",defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD","disabled-date":e=>e.getTime()>Date.now(),"default-value":[new Date((new Date).setMonth((new Date).getMonth()-1)),new Date]},style:{}},{id:"relationFlow",label:"是否关联流程",type:"select",defaultAttribute:{placeholder:"请选择"},options:[{relationFlow:"1",relationFlowLabel:"是"},{relationFlow:"0",relationFlowLabel:"否"}],optionLabel:"relationFlowLabel",optionValue:"relationFlow"}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"formName",label:"表单名称",sortable:!0,"min-width":150,fixed:"left",show:!0},{prop:"applyTypeName",label:"业务类型",sortable:!0,"min-width":150,show:!0},{prop:"sealUseTypeName",label:"用印类型",sortable:!0,"min-width":150,show:!0},{prop:"relationFlow",label:"是否关联流程","min-width":150,type:"format",statusList:[{label:"是",key:"1"},{label:"否",key:"0"}],show:!0},{prop:"createUserName",label:"创建人",sortable:!0,"min-width":150,show:!0},{prop:"modifyDatetimeStr",label:"更新时间",width:190,sortable:!0,show:!0},{prop:"8",label:"操作",fixed:"right",width:200,align:"center",rankDisplayData:[{name:"t-zgj-Edit"},{name:"t-zgj-Delete"},{name:"t-zgj-qyWechat.Copy"}],show:!0}]},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"批量删除"}],butDatas:[{name:"知道了",type:"",clickName:ae}]},componentsTree:{data:[],defaultAttribute:{"check-on-click-node":!1,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0,"highlight-current":!0,"node-key":"applyTypeId","current-node-key":"2"},defaultProps:{label:"applyTypeName",children:"children"},value:""},JyElMessageBox:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""},data:{}},showFormDialog:{show:!1,header:{data:""},content:{data:""}},showToastDialog:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}},showRelatedfFlow:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}},showDeleteForm:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}}}),H=(e,a)=>{1!==a.level?(S.value=e.applyTypeId?{applyTypeId:e.applyTypeId}:null,"5"===e.applyTypePid?($.componentsTable.header=[{prop:"formName",label:"表单名称",sortable:!0,"min-width":150,fixed:!0},{prop:"applyTypeName",label:"业务类型",sortable:!0,"min-width":150},{prop:"createUserName",label:"创建人",sortable:!0,"min-width":150},{prop:"modifyDatetime",label:"更新时间",width:190,sortable:!0},{prop:"8",label:"操作",fixed:"right",width:200,align:"center",rankDisplayData:[{name:"t-zgj-Edit"},{name:"t-zgj-Delete"},{name:"t-zgj-qyWechat.Copy"}]}],$.componentsSearchForm.data=[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"表单名称/创建人"},options:[{value:"1",label:"全部"}]},{id:"modifyDatetime",label:"更新时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"modifyDatetime",label:"是否关联流程",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{relationFlow:"1",relationFlowLabel:"是"},{relationFlow:"0",relationFlowLabel:"否"}],optionLabel:"relationFlowLabel",optionValue:"relationFlow"}]):($.componentsTable.header=[{prop:"formName",label:"表单名称",sortable:!0,"min-width":150,fixed:!0},{prop:"applyTypeName",label:"业务类型",sortable:!0,"min-width":150},{prop:"sealUseTypeName",label:"用印类型",sortable:!0,"min-width":150},{prop:"createUserName",label:"创建人",sortable:!0,"min-width":150},{prop:"modifyDatetime",label:"更新时间",width:190,sortable:!0},{prop:"8",label:"操作",fixed:"right",width:200,align:"center",rankDisplayData:[{name:"t-zgj-Edit"},{name:"t-zgj-Delete"},{name:"t-zgj-qyWechat.Copy"}]}],$.componentsSearchForm.data=[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"表单名称/创建人"},options:[{value:"1",label:"全部"}]},{id:"sealUseTypeId",label:"用印类型",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{sealUseTypeId:"1",sealUseTypeIdLabel:"物理用印"},{sealUseTypeId:"2",sealUseTypeIdLabel:"电子签章"}],optionLabel:"sealUseTypeIdLabel",optionValue:"sealUseTypeId"},{id:"modifyDatetime",label:"更新时间",type:"picker",defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"relationFlow",label:"是否关联流程",type:"select",defaultAttribute:{placeholder:"请选择"},options:[{relationFlow:"1",relationFlowLabel:"是"},{relationFlow:"2",relationFlowLabel:"否"}],optionLabel:"relationFlowLabel",optionValue:"relationFlow"}]),P.value.reloadData()):W.value.setCurrentKey("5"===e.applyTypeId?"6":"2")};function K(){$.componentsAddForm.dialogVisible=!0,$.componentsAddForm.addTitle="新建",$.componentsAddForm.data={}}async function X(e,a,t,o){"t-zgj-Edit"===t.name&&ne(a.formMessageId,a,"edit"),"t-zgj-Delete"===t.name&&ne(a.formMessageId,a,"delete"),"t-zgj-qyWechat.Copy"===t.name&&(Y.value={...Y.value,...a},$.showFormDialog.header.data="表单复制",$.showFormDialog.show=!0,$.componentsAddForm.data.formName=`${Y.value.formName}-副本`)}function Z(){const e={formMessageId:$.JyElMessageBox.data.tableId};j.formDelete(e).then((a=>{a.data.length>0?($.showToastDialog.header.data="删除",$.showToastDialog.content.data="当前表单关联了以下流程，不允许删除",$.showToastDialog.show=!0,$.showToastDialog.header.icon="/src/assets/svg/common/danger.svg",$.componentsBatch.butDatas=[{name:"知道了",type:"primary",clickName:ae}]):j.formPage(e).then((e=>{P.value.reloadData()}))})),$.JyElMessageBox.show=!1}function G(e,a){$.componentsBatch.selectionData=a,R.value={header:{data:"批量删除"},content:{data:"是否删除表单？"}},$.showToastDialog.show=!0}const O=(e,a,o,l)=>{"formName"===a.property&&(t.value=!0,T.value=[{value:"detail",params:{formMessageId:e.formMessageId}},{value:"record",params:{operationId:e.formMessageId}},{value:"version",params:{formMessageId:e.formMessageId}}])},Q=()=>{P.value.reloadData()},ee=()=>{const e=$.componentsBatch.selectionData,a={formMessageIds:[]};e.forEach((e=>{a.formMessageIds.push(e.formMessageId)})),j.batchDelete(a).then((e=>{e.data.length>0?($.showToastDialog.header.data="删除",$.showToastDialog.content.data="选中的以下表单已关联了流程，不允许删除",$.showToastDialog.show=!0,$.showToastDialog.header.icon="/src/assets/svg/common/danger.svg",$.componentsBatch.butDatas=[{name:"知道了",type:"primary",clickName:ae}]):($.showToastDialog.show=!1,P.value.reloadData())}))};function ae(){$.showToastDialog.show=!1}function te(){$.showFormDialog.show=!1}const oe=o(null);async function le(){try{await oe.value.validate(),Y.value.formName=$.componentsAddForm.data.formName,await async function(){const e=await j.copy({formMessageId:Y.value.formMessageId,formName:Y.value.formName});v("表单复制成功"),await P.value.reloadData(),$.componentsAddForm.data.formMessageId=e.data}(),$.showFormDialog.show=!1,$.componentsAddForm.dialogVisible=!0,$.componentsAddForm.addTitle="修改"}catch(e){f(e)}}async function ne(e,a,t){const o=await D.flowList({formMessageId:e});o.data&&0!==o.data.length?($.showRelatedfFlow.show=!0,R.value={header:"提示",content:"当前表单被已启用的以下流程所使用，仅当以下流程停用才允许"+("edit"===t?"修改":"删除"),selectionData:o.data}):"edit"===t?($.componentsAddForm.dialogVisible=!0,$.componentsAddForm.addTitle="修改",$.componentsAddForm.data=a):($.JyElMessageBox.header.data="删除",$.JyElMessageBox.content.data="请问确定要删除该表单吗？",$.JyElMessageBox.show=!0,$.JyElMessageBox.data.tableId=a.formMessageId)}return s((()=>{j.listApplyTypeTree().then((e=>{const{data:a}=e,t=[];M.value=a,a.forEach((e=>{if(null===e.applyTypePid)e.children=[],e.disabled=!1,t.push(e);else{const a=t.findIndex((a=>a.applyTypeId===e.applyTypePid));a>-1&&t[a].children.push(e)}})),$.componentsTree.data=t,$.componentsTree.value=t[0].children[0].applyTypeId,S.value={applyTypeId:"2"},P.value.reloadData()}))})),(e,a)=>{const o=d("el-button"),l=d("JyElMessageBox"),n=d("el-input"),s=d("el-form-item"),b=d("el-form"),f=x;return r(),i("div",null,[m(I,{url:"/form/page",ref_key:"table",ref:P,hasTree:!0,needAutoRequest:!1,componentsSearchForm:y($).componentsSearchForm,componentsTableHeader:y($).componentsTable.header,componentsBatch:y($).componentsBatch,queryParams:S.value,statusColoum:"flag",openValue:"0",tableClick:"formName",onCellClick:O,onCustomClick:X,onClickBatchButton:G},{title:c((()=>[p("div",V,[U,p("div",null,[m(o,{type:"primary",onClick:K},{default:c((()=>[u("+ "+h(e.$t("t-zgj-add")),1)])),_:1})])])])),tree:c((()=>[p("div",null,[y($).componentsTree.value?(r(),g(y(A),{key:0,ref_key:"tree",ref:W,modelValue:y($).componentsTree.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y($).componentsTree.value=e),data:y($).componentsTree.data,defaultAttribute:y($).componentsTree.defaultAttribute,defaultProps:y($).componentsTree.defaultProps,onCurrentChange:H},null,8,["modelValue","data","defaultAttribute","defaultProps"])):w("",!0)])])),_:1},8,["componentsSearchForm","componentsTableHeader","componentsBatch","queryParams"]),y($).componentsAddForm.dialogVisible?(r(),g(y(F),{key:0,modelValue:y($).componentsAddForm.dialogVisible,"onUpdate:modelValue":a[1]||(a[1]=e=>y($).componentsAddForm.dialogVisible=e),addTitle:y($).componentsAddForm.addTitle,columnData:y($).componentsAddForm.data,onClose:a[2]||(a[2]=e=>y($).componentsAddForm.dialogVisible=!1),onReloadData:Q,optionData:y($).componentsTree.data},null,8,["modelValue","addTitle","columnData","optionData"])):w("",!0),m(l,{modelValue:y($).JyElMessageBox.show,"onUpdate:modelValue":a[4]||(a[4]=e=>y($).JyElMessageBox.show=e),show:y($).JyElMessageBox.show,defaultAttribute:{}},{header:c((()=>[p("div",N,[p("img",{src:y($).JyElMessageBox.header.icon,alt:""},null,8,B),p("span",null,h(y($).JyElMessageBox.header.data),1)])])),content:c((()=>[p("div",_,h(y($).JyElMessageBox.content.data),1)])),footer:c((()=>[m(o,{type:"primary",onClick:Z},{default:c((()=>[L])),_:1}),m(o,{onClick:a[3]||(a[3]=e=>y($).JyElMessageBox.show=!1)},{default:c((()=>[E])),_:1})])),_:1},8,["modelValue","show"]),m(l,{modelValue:y($).showFormDialog.show,"onUpdate:modelValue":a[6]||(a[6]=e=>y($).showFormDialog.show=e),show:y($).showFormDialog.show,defaultAttribute:{}},{header:c((()=>[u(h(y($).showFormDialog.header.data),1)])),content:c((()=>[m(b,{ref_key:"formRef",ref:oe,"label-position":"left","label-width":"100px",model:y($).componentsAddForm.data,"hide-required-asterisk":""},{default:c((()=>[m(s,{prop:"formName",rules:[{required:!0,message:"表单名称不能为空",trigger:"blur"}]},{label:c((()=>[J])),default:c((()=>[m(n,{modelValue:y($).componentsAddForm.data.formName,"onUpdate:modelValue":a[5]||(a[5]=e=>y($).componentsAddForm.data.formName=e),placeholder:"请输入",style:{width:"210px"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),footer:c((()=>[m(o,{type:"primary",onClick:le},{default:c((()=>[z])),_:1}),m(o,{onClick:te},{default:c((()=>[q])),_:1})])),_:1},8,["modelValue","show"]),m(y(k),{"onUpdate:modelValue":a[7]||(a[7]=e=>y($).showToastDialog.show=!1),show:y($).showToastDialog.show,selectionData:y($).componentsBatch.selectionData,showToastDialogContent:R.value,label:"formName",onSureAction:ee},null,8,["show","selectionData","showToastDialogContent"]),m(f,{"onUpdate:modelValue":a[8]||(a[8]=e=>y($).showRelatedfFlow.show=!1),show:y($).showRelatedfFlow.show,selectionData:y($).componentsBatch.selectionData,showToastDialogContent:R.value,label:"flowName"},null,8,["show","selectionData","showToastDialogContent"]),m(y(k),{"onUpdate:modelValue":a[9]||(a[9]=e=>y($).showDeleteForm.show=!1),show:y($).showDeleteForm.show,selectionData:y($).componentsBatch.selectionData,showToastDialogContent:R.value,label:"flowName",onSureAction:a[10]||(a[10]=e=>y($).showDeleteForm.show=!1)},null,8,["show","selectionData","showToastDialogContent"]),m(C,{modelValue:t.value,"onUpdate:modelValue":a[11]||(a[11]=e=>t.value=e),modulesName:"system_form_management",detailParams:T.value},null,8,["modelValue","detailParams"])])}}};e("default",t(P,[["__scopeId","data-v-0ca073b5"]]))}}}));