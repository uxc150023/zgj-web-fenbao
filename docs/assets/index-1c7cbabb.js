import{_ as e,v as a,cC as o,h as t,j as l,r as s,o as n,c as d,a as r,w as i,m,g as p,t as c,u,f as h,l as y,cD as w,a9 as b,b4 as g,cv as f,y as D,z as T}from"./main-35f8b412.js";import v from"./index-a74858e2.js";import{c as F}from"./tree-990df9ea.js";import{J as A}from"./JyTable-78da21a1.js";import{a as I}from"./actionMoreDialog-2e89d3f5.js";import{a as k}from"./index-4c09bf33.js";import{_ as j}from"./index-78609ce6.js";/* empty css                                                             */import"./sangedian-6ea00dcf.js";import"./Layout-8dc22f8d.js";import"./searchForm-e6ac3aae.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-fc5a935b.js";import"./pagination-70da6ee6.js";import"./batch-7c7d6062.js";import"./index-4926a357.js";import"./cha-kong-c10eac4e.js";import"./index-e5675b9a.js";import"./yuan-hui-31c99901.js";import"./index-c0ce26c8.js";import"./home-back-d5b479fa.js";import"./logo-ad08cc7e.js";import"./request-util-1d542434.js";const M=e=>(D("data-v-0ca073b5"),e=e(),T(),e),V={class:"title"},x=M((()=>m("div",null,"表单管理",-1))),C={class:"header-div"},U=["src"],_={class:"content-div"},N=p(" 提交 "),B=p("取消"),L=M((()=>m("div",{class:"from-label"},"表单名称",-1))),E=p(" 提交 "),J=p("取消"),z=e({setup(e){const D=a(!1),T=a([]),M=o((()=>w((()=>import("./index-975825bf.js")),["assets/index-975825bf.js","assets/main-35f8b412.js","assets/index-a4c4f81f.css","assets/index-672b495a.js","assets/index-4c09bf33.js","assets/index-498d0fb2.css","assets/index-c0ce26c8.js","assets/home-back-d5b479fa.js","assets/logo-ad08cc7e.js","assets/request-util-1d542434.js","assets/index-61c3ae3b.css","assets/index-fbfce9ba.css"]))),z=a([]),q=a(null),P=a(null),R=a(null),S=a(null),W=a({formMessageId:"",formName:""}),Y=t({componentsAddForm:{dialogVisible:!1,addTitle:"新增",data:{}},componentsSearchForm:{data:[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"表单名称/创建人"},options:[{value:"1",label:"全部"}]},{id:"sealUseTypeId",label:"用印类型",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{sealUseTypeId:"1",sealUseTypeIdLabel:"物理用印"},{sealUseTypeId:"2",sealUseTypeIdLabel:"电子签章"}],optionLabel:"sealUseTypeIdLabel",optionValue:"sealUseTypeId"},{id:"updateTime",label:"更新时间",type:"picker",requestType:"array",startRequest:"updateStartTime",endRequest:"updateEndTime",defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD","disabled-date":e=>e.getTime()>Date.now(),"default-value":[new Date((new Date).setMonth((new Date).getMonth()-1)),new Date]},style:{}},{id:"relationFlow",label:"是否关联流程",type:"select",defaultAttribute:{placeholder:"请选择"},options:[{relationFlow:"1",relationFlowLabel:"是"},{relationFlow:"0",relationFlowLabel:"否"}],optionLabel:"relationFlowLabel",optionValue:"relationFlow"}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"formName",label:"表单名称",sortable:!0,"min-width":150,fixed:"left",show:!0},{prop:"applyTypeName",label:"业务类型",sortable:!0,"min-width":150,show:!0},{prop:"sealUseTypeName",label:"用印类型",sortable:!0,"min-width":150,show:!0},{prop:"relationFlow",label:"是否关联流程","min-width":150,type:"format",statusList:[{label:"是",key:"1"},{label:"否",key:"0"}],show:!0},{prop:"createUserName",label:"创建人",sortable:!0,"min-width":150,show:!0},{prop:"modifyDatetimeStr",label:"更新时间",width:190,sortable:!0,show:!0},{prop:"8",label:"操作",fixed:"right",width:200,align:"center",rankDisplayData:[{name:"t-zgj-Edit"},{name:"t-zgj-Delete"},{name:"t-zgj-qyWechat.Copy"}],show:!0}]},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"批量删除"}],butDatas:[{name:"知道了",type:"",clickName:ee}]},componentsTree:{data:[],defaultAttribute:{"check-on-click-node":!1,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0,"highlight-current":!0,"node-key":"applyTypeId","current-node-key":"2"},defaultProps:{label:"applyTypeName",children:"children"},value:""},JyElMessageBox:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""},data:{}},showFormDialog:{show:!1,header:{data:""},content:{data:""}},showToastDialog:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}},showRelatedfFlow:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}},showDeleteForm:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}}}),$=(e,a)=>{1!==a.level?(P.value=e.applyTypeId?{applyTypeId:e.applyTypeId}:null,"5"===e.applyTypePid?(Y.componentsTable.header=[{prop:"formName",label:"表单名称",sortable:!0,"min-width":150,fixed:!0},{prop:"applyTypeName",label:"业务类型",sortable:!0,"min-width":150},{prop:"createUserName",label:"创建人",sortable:!0,"min-width":150},{prop:"modifyDatetime",label:"更新时间",width:190,sortable:!0},{prop:"8",label:"操作",fixed:"right",width:200,align:"center",rankDisplayData:[{name:"t-zgj-Edit"},{name:"t-zgj-Delete"},{name:"t-zgj-qyWechat.Copy"}]}],Y.componentsSearchForm.data=[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"表单名称/创建人"},options:[{value:"1",label:"全部"}]},{id:"modifyDatetime",label:"更新时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"modifyDatetime",label:"是否关联流程",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{relationFlow:"1",relationFlowLabel:"是"},{relationFlow:"0",relationFlowLabel:"否"}],optionLabel:"relationFlowLabel",optionValue:"relationFlow"}]):(Y.componentsTable.header=[{prop:"formName",label:"表单名称",sortable:!0,"min-width":150,fixed:!0},{prop:"applyTypeName",label:"业务类型",sortable:!0,"min-width":150},{prop:"sealUseTypeName",label:"用印类型",sortable:!0,"min-width":150},{prop:"createUserName",label:"创建人",sortable:!0,"min-width":150},{prop:"modifyDatetime",label:"更新时间",width:190,sortable:!0},{prop:"8",label:"操作",fixed:"right",width:200,align:"center",rankDisplayData:[{name:"t-zgj-Edit"},{name:"t-zgj-Delete"},{name:"t-zgj-qyWechat.Copy"}]}],Y.componentsSearchForm.data=[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"表单名称/创建人"},options:[{value:"1",label:"全部"}]},{id:"sealUseTypeId",label:"用印类型",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[{sealUseTypeId:"1",sealUseTypeIdLabel:"物理用印"},{sealUseTypeId:"2",sealUseTypeIdLabel:"电子签章"}],optionLabel:"sealUseTypeIdLabel",optionValue:"sealUseTypeId"},{id:"modifyDatetime",label:"更新时间",type:"picker",defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"relationFlow",label:"是否关联流程",type:"select",defaultAttribute:{placeholder:"请选择"},options:[{relationFlow:"1",relationFlowLabel:"是"},{relationFlow:"2",relationFlowLabel:"否"}],optionLabel:"relationFlowLabel",optionValue:"relationFlow"}]),q.value.reloadData()):S.value.setCurrentKey("5"===e.applyTypeId?"6":"2")};function H(){Y.componentsAddForm.dialogVisible=!0,Y.componentsAddForm.addTitle="新建",Y.componentsAddForm.data={}}async function K(e,a,o,t){"t-zgj-Edit"===o.name&&le(a.formMessageId,a,"edit"),"t-zgj-Delete"===o.name&&le(a.formMessageId,a,"delete"),"t-zgj-qyWechat.Copy"===o.name&&(W.value={...W.value,...a},Y.showFormDialog.header.data="表单复制",Y.showFormDialog.show=!0,Y.componentsAddForm.data.formName=`${W.value.formName}-副本`)}function O(){const e={formMessageId:Y.JyElMessageBox.data.tableId};k.formDelete(e).then((a=>{a.data.length>0?(Y.showToastDialog.header.data="删除",Y.showToastDialog.content.data="当前表单关联了以下流程，不允许删除",Y.showToastDialog.show=!0,Y.showToastDialog.header.icon="/src/assets/svg/common/danger.svg",Y.componentsBatch.butDatas=[{name:"知道了",type:"primary",clickName:ee}]):k.formPage(e).then((e=>{q.value.reloadData()}))})),Y.JyElMessageBox.show=!1}function X(e,a){Y.componentsBatch.selectionData=a,R.value={header:{data:"批量删除"},content:{data:"是否删除表单？"}},Y.showToastDialog.show=!0}const Z=(e,a,o,t)=>{"formName"===a.property&&(D.value=!0,T.value=[{value:"detail",params:{formMessageId:e.formMessageId}},{value:"record",params:{operationId:e.formMessageId}},{value:"version",params:{formMessageId:e.formMessageId}}])},G=()=>{q.value.reloadData()},Q=()=>{const e=Y.componentsBatch.selectionData,a={formMessageIds:[]};e.forEach((e=>{a.formMessageIds.push(e.formMessageId)})),k.batchDelete(a).then((e=>{e.data.length>0?(Y.showToastDialog.header.data="删除",Y.showToastDialog.content.data="选中的以下表单已关联了流程，不允许删除",Y.showToastDialog.show=!0,Y.showToastDialog.header.icon="/src/assets/svg/common/danger.svg",Y.componentsBatch.butDatas=[{name:"知道了",type:"primary",clickName:ee}]):(Y.showToastDialog.show=!1,q.value.reloadData())}))};function ee(){Y.showToastDialog.show=!1}function ae(){Y.showFormDialog.show=!1}const oe=a(null);async function te(){try{await oe.value.validate(),W.value.formName=Y.componentsAddForm.data.formName,await async function(){const e=await k.copy({formMessageId:W.value.formMessageId,formName:W.value.formName});f("表单复制成功"),await q.value.reloadData(),Y.componentsAddForm.data.formMessageId=e.data}(),Y.showFormDialog.show=!1,Y.componentsAddForm.dialogVisible=!0,Y.componentsAddForm.addTitle="修改"}catch(e){b(e)}}async function le(e,a,o){const t=await g.flowList({formMessageId:e});t.data&&0!==t.data.length?(Y.showRelatedfFlow.show=!0,R.value={header:"提示",content:"当前表单被已启用的以下流程所使用，仅当以下流程停用才允许"+("edit"===o?"修改":"删除"),selectionData:t.data}):"edit"===o?(Y.componentsAddForm.dialogVisible=!0,Y.componentsAddForm.addTitle="修改",Y.componentsAddForm.data=a):(Y.JyElMessageBox.header.data="删除",Y.JyElMessageBox.content.data="请问确定要删除该表单吗？",Y.JyElMessageBox.show=!0,Y.JyElMessageBox.data.tableId=a.formMessageId)}return l((()=>{k.listApplyTypeTree().then((e=>{const{data:a}=e,o=[];z.value=a,a.forEach((e=>{if(null===e.applyTypePid)e.children=[],e.disabled=!1,o.push(e);else{const a=o.findIndex((a=>a.applyTypeId===e.applyTypePid));a>-1&&o[a].children.push(e)}})),Y.componentsTree.data=o,Y.componentsTree.value=o[0].children[0].applyTypeId,P.value={applyTypeId:"2"},q.value.reloadData()}))})),(e,a)=>{const o=s("el-button"),t=s("JyElMessageBox"),l=s("el-input"),w=s("el-form-item"),b=s("el-form"),g=v;return n(),d("div",null,[r(A,{url:"/form/page",ref_key:"table",ref:q,hasTree:!0,needAutoRequest:!1,componentsSearchForm:u(Y).componentsSearchForm,componentsTableHeader:u(Y).componentsTable.header,componentsBatch:u(Y).componentsBatch,queryParams:P.value,statusColoum:"flag",openValue:"0",tableClick:"formName",onCellClick:Z,onCustomClick:K,onClickBatchButton:X},{title:i((()=>[m("div",V,[x,m("div",null,[r(o,{type:"primary",onClick:H},{default:i((()=>[p("+ "+c(e.$t("t-zgj-add")),1)])),_:1})])])])),tree:i((()=>[m("div",null,[u(Y).componentsTree.value?(n(),h(u(F),{key:0,ref_key:"tree",ref:S,modelValue:u(Y).componentsTree.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u(Y).componentsTree.value=e),data:u(Y).componentsTree.data,defaultAttribute:u(Y).componentsTree.defaultAttribute,defaultProps:u(Y).componentsTree.defaultProps,onCurrentChange:$},null,8,["modelValue","data","defaultAttribute","defaultProps"])):y("",!0)])])),_:1},8,["componentsSearchForm","componentsTableHeader","componentsBatch","queryParams"]),u(Y).componentsAddForm.dialogVisible?(n(),h(u(M),{key:0,modelValue:u(Y).componentsAddForm.dialogVisible,"onUpdate:modelValue":a[1]||(a[1]=e=>u(Y).componentsAddForm.dialogVisible=e),addTitle:u(Y).componentsAddForm.addTitle,columnData:u(Y).componentsAddForm.data,onClose:a[2]||(a[2]=e=>u(Y).componentsAddForm.dialogVisible=!1),onReloadData:G,optionData:u(Y).componentsTree.data},null,8,["modelValue","addTitle","columnData","optionData"])):y("",!0),r(t,{modelValue:u(Y).JyElMessageBox.show,"onUpdate:modelValue":a[4]||(a[4]=e=>u(Y).JyElMessageBox.show=e),show:u(Y).JyElMessageBox.show,defaultAttribute:{}},{header:i((()=>[m("div",C,[m("img",{src:u(Y).JyElMessageBox.header.icon,alt:""},null,8,U),m("span",null,c(u(Y).JyElMessageBox.header.data),1)])])),content:i((()=>[m("div",_,c(u(Y).JyElMessageBox.content.data),1)])),footer:i((()=>[r(o,{type:"primary",onClick:O},{default:i((()=>[N])),_:1}),r(o,{onClick:a[3]||(a[3]=e=>u(Y).JyElMessageBox.show=!1)},{default:i((()=>[B])),_:1})])),_:1},8,["modelValue","show"]),r(t,{modelValue:u(Y).showFormDialog.show,"onUpdate:modelValue":a[6]||(a[6]=e=>u(Y).showFormDialog.show=e),show:u(Y).showFormDialog.show,defaultAttribute:{}},{header:i((()=>[p(c(u(Y).showFormDialog.header.data),1)])),content:i((()=>[r(b,{ref_key:"formRef",ref:oe,"label-position":"left","label-width":"100px",model:u(Y).componentsAddForm.data,"hide-required-asterisk":""},{default:i((()=>[r(w,{prop:"formName",rules:[{required:!0,message:"表单名称不能为空",trigger:"blur"}]},{label:i((()=>[L])),default:i((()=>[r(l,{modelValue:u(Y).componentsAddForm.data.formName,"onUpdate:modelValue":a[5]||(a[5]=e=>u(Y).componentsAddForm.data.formName=e),placeholder:"请输入",style:{width:"210px"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),footer:i((()=>[r(o,{type:"primary",onClick:te},{default:i((()=>[E])),_:1}),r(o,{onClick:ae},{default:i((()=>[J])),_:1})])),_:1},8,["modelValue","show"]),r(u(I),{"onUpdate:modelValue":a[7]||(a[7]=e=>u(Y).showToastDialog.show=!1),show:u(Y).showToastDialog.show,selectionData:u(Y).componentsBatch.selectionData,showToastDialogContent:R.value,label:"formName",onSureAction:Q},null,8,["show","selectionData","showToastDialogContent"]),r(g,{"onUpdate:modelValue":a[8]||(a[8]=e=>u(Y).showRelatedfFlow.show=!1),show:u(Y).showRelatedfFlow.show,selectionData:u(Y).componentsBatch.selectionData,showToastDialogContent:R.value,label:"flowName"},null,8,["show","selectionData","showToastDialogContent"]),r(u(I),{"onUpdate:modelValue":a[9]||(a[9]=e=>u(Y).showDeleteForm.show=!1),show:u(Y).showDeleteForm.show,selectionData:u(Y).componentsBatch.selectionData,showToastDialogContent:R.value,label:"flowName",onSureAction:a[10]||(a[10]=e=>u(Y).showDeleteForm.show=!1)},null,8,["show","selectionData","showToastDialogContent"]),r(j,{modelValue:D.value,"onUpdate:modelValue":a[11]||(a[11]=e=>D.value=e),modulesName:"system_form_management",detailParams:T.value},null,8,["modelValue","detailParams"])])}}},[["__scopeId","data-v-0ca073b5"]]);export{z as default};