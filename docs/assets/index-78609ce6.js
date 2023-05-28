import e from"./index-4926a357.js";import{a7 as a,_ as l,v as t,s as r,j as o,o as n,c as s,a as i,m as u,F as d,e as p,n as m,t as c,l as N,g as y,u as E,f as b,q as v,b4 as T,aa as A,r as S,w as f,b5 as M,h,i as g,V as O,aR as I,x as _}from"./main-35f8b412.js";import L from"./index-e5675b9a.js";import{y as R,a as j}from"./yuan-hui-31c99901.js";import{_ as D}from"./index-c0ce26c8.js";const k={SYSTEM_FLOW_MANAGEMENT:"system_flow_management",SYSTEM_FORM_MANAGEMENT:"system_form_management",RULEBUSINESSMANAGEMENT:"rule_business_management",DEALINGUNIT:"dealing_unit",UNITANDDEPARTMENT:"unit_and_department"},U={TABS:[],URLS:[],INFO:[],TABLEHEADERS:[]};U.URLS=[{value:"detail",urlName:"baseInfo"},{value:"version",urlName:"queryHisVersion"},{value:"record",urlName:"viewOperation"}],U.TABS=[{name:"t-zgj-detail-flow.Detail",value:"detail",children:["BaseInfo","FlowDetail"]},{name:"t-zgj-detail-operation.Record",value:"record",children:["RecordTable"]},{name:"t-zgj-detail-flow.Version",value:"version",children:["VersionTable"]}],U.INFO=[{label:"流程名称",key:"flowName"},{label:"流程编码",key:"flowNo"},{label:"业务类型",key:"applyTypeName"},{label:"文件类型",key:["fileTypeScope"],handleKey:"fileScope"},{label:"流程状态",key:"flag",type:"status",customStyle:!0},{label:"流程适用范围",key:["organScope","organUserScope"],handleKey:"flowScope"},{label:"创建人",key:"createUserName"},{label:"创建时间",key:"createDatetime"},{label:"更新时间",key:"modifyDatetime"},{label:"流程说明",key:"readme"},{label:"关联表单",key:"formMessageName"}],U.TABLEHEADERS={version:[{label:"版本号",prop:"flowVerison"},{label:"版本时间",prop:"modifyDatetime"}],record:[{label:"操作人",prop:"operationUser"},{label:"操作时间",prop:"operationDate"},{label:"操作记录",prop:"operationType"},{label:"操作说明",prop:"operationTxt"}]};const w={TABS:[],URLS:[],INFO:[],TABLEHEADERS:[]};w.URLS=[{value:"detail",urlName:"baseInfo"},{value:"version",urlName:"queryHisVersion"},{value:"record",urlName:"viewOperation"}],w.TABS=[{name:"t-zgj-detail-flow.Detail",value:"detail",children:["BaseInfo"]},{name:"t-zgj-detail-operation.Record",value:"record",children:["RecordTable"]},{name:"t-zgj-detail-flow.Version",value:"version",children:["VersionTable"]}],w.INFO=[{label:"表单名称",key:"formName"},{label:"表单编码",key:"formNo"},{label:"业务类型",key:"applyTypeName"},{label:"用印类型",key:"sealUseTypeName"},{label:"表单状态",key:"flag",type:"status",customStyle:!0},{label:"创建时间",key:"createDatetimeStr"},{label:"创建人",key:"createUserName"},{label:"更新时间",key:"modifyDatetimeStr"},{label:"表单说明",key:"readme"}],w.TABLEHEADERS={version:[{label:"版本号",prop:"formVerison"},{label:"版本时间",prop:"modifyDatetime"}],record:[{label:"操作人",prop:"operationUser"},{label:"操作时间",prop:"operationDate"},{label:"操作记录",prop:"operationType"},{label:"操作说明",prop:"operationTxt"}]};const B={TABS:[],URLS:[],INFO:[],TABLEHEADERS:[]};B.URLS=[{value:"detail",urlName:"baseInfo"},{value:"record",urlName:"viewOperation"}],B.TABS=[{name:"t-zgj-detail-flow.Detail",value:"detail",children:["BaseInfo"]}],B.INFO=[{label:"业务规则名称",key:"ruleBusinessName"},{label:"业务规则编码",key:"ruleBusinessNo"},{label:"用印类型",key:"sealUseTypeName"},{label:"关联文件类型",key:["fileTypeList"],handleKey:"filteType"},{label:"业务规则状态",key:"flag",type:"status",customStyle:!0},{label:"创建人",key:"createUserName"},{label:"创建时间",key:"createDatetime"},{label:"更新时间",key:"modifyDatetime"}],B.TABLEHEADERS={record:[{label:"操作人",prop:"operationUser"},{label:"操作时间",prop:"operationDate"},{label:"操作记录",prop:"operationType"},{label:"操作说明",prop:"operationTxt"}]};const G={TABS:[],URLS:[],INFO:[],TABLEHEADERS:[]};G.URLS=[{value:"detail",urlName:"baseInfo"}],G.TABS=[{name:"t-zgj-detail-flow.Detail",value:"detail",children:["BaseInfo"]}],G.INFO=[{label:"企业名称",key:"relatedCompanyName"},{label:"企业编码",key:"relatedCompanyNo"},{label:"企业所属部门",key:"organName"},{label:"联系人",key:"contactName"},{label:"备注",key:"readme"}],G.TABLEHEADERS={};const F={TABS:[],URLS:[],INFO:[],TABLEHEADERS:[]};F.URLS=[{value:"detail",urlName:"baseInfo"},{value:"organizer",urlName:"uninUser"},{value:"record",urlName:"viewOperation"}],F.TABS=[{name:"t-zgj-detail-unit.UnitAndDepart",value:"detail",children:["BaseInfo"]},{name:"t-zgj-detail-unit.UnitUser",value:"organizer",children:["VersionTable"]}],F.INFO=[{label:"部门名称",key:"organName"},{label:"组织类型",key:"organTypeName"},{label:"部门主管",key:"organLeaderName"},{label:"部门编码",key:"organNo"},{label:"部门人数",key:"organUserNum"},{label:"上级部门",key:"organPName"},{label:"备注",key:"readme"}],F.TABLEHEADERS={organizer:[{label:"人员列表",prop:"userName"},{label:"账号",prop:"accountNo"}],record:[{label:"操作人",prop:"operator"},{label:"操作时间",prop:"operateDatetime"},{label:"操作记录",prop:"operateAction"},{label:"操作说明",prop:"operateDesc"}]};const q=[];q.push({[k.SYSTEM_FLOW_MANAGEMENT]:U,[k.SYSTEM_FORM_MANAGEMENT]:w,[k.RULEBUSINESSMANAGEMENT]:B,[k.DEALINGUNIT]:G,[k.UNITANDDEPARTMENT]:F});const V=(e,a)=>q[q.findIndex((a=>a[e]))][e].URLS[a].urlName,P=(e,a)=>q[q.findIndex((a=>a[e]))][e].URLS.findIndex((e=>e.value===a));let H={};H={[k.SYSTEM_FLOW_MANAGEMENT]:{[V(k.SYSTEM_FLOW_MANAGEMENT,P(k.SYSTEM_FLOW_MANAGEMENT,"detail"))]:e=>a({method:"GET",url:"/flow/query",params:e}),[V(k.SYSTEM_FLOW_MANAGEMENT,P(k.SYSTEM_FLOW_MANAGEMENT,"version"))]:e=>a({method:"GET",url:"/flow/queryHisVersion",params:e}),[V(k.SYSTEM_FLOW_MANAGEMENT,P(k.SYSTEM_FLOW_MANAGEMENT,"record"))]:e=>a({method:"GET",url:"/flow/viewOperation",params:e})},[k.SYSTEM_FORM_MANAGEMENT]:{[V(k.SYSTEM_FORM_MANAGEMENT,P(k.SYSTEM_FORM_MANAGEMENT,"detail"))]:e=>a({method:"GET",url:"/form/query",params:e}),[V(k.SYSTEM_FORM_MANAGEMENT,P(k.SYSTEM_FORM_MANAGEMENT,"version"))]:e=>a({method:"GET",url:"/form/queryHisVersion",params:e}),[V(k.SYSTEM_FORM_MANAGEMENT,P(k.SYSTEM_FORM_MANAGEMENT,"record"))]:e=>a({method:"GET",url:"/form/queryOperation",params:e})},[k.RULEBUSINESSMANAGEMENT]:{[V(k.RULEBUSINESSMANAGEMENT,P(k.RULEBUSINESSMANAGEMENT,"detail"))]:e=>a({method:"GET",url:`/biz/rule/view/${e}`})},[k.DEALINGUNIT]:{[V(k.DEALINGUNIT,P(k.DEALINGUNIT,"detail"))]:e=>a({method:"GET",url:`/tenant/relatedCompany/detail/${e}`})},[k.UNITANDDEPARTMENT]:{[V(k.UNITANDDEPARTMENT,P(k.UNITANDDEPARTMENT,"detail"))]:e=>a({method:"GET",url:`/organ/${e}`}),[V(k.UNITANDDEPARTMENT,P(k.UNITANDDEPARTMENT,"organizer"))]:e=>a({method:"GET",url:`/organ/userInfoList/${e}`})}};const x=H,Y={class:"flow-detail"},z={class:"info-list"},W={class:"cont"},C={class:"cont-details"},$={class:"cont-list-label"},K=["src"],J={name:"BaseInfo"},Q=l(Object.assign(J,{props:{requestObj:{type:Object,defatult:()=>({})}},setup(e){const a=e,l=t({yuanLv:R,yuanHui:j,warning:"/zgj-web/assets/detail-warning-52514a54.svg",danger:"/zgj-web/assets/detail-danger-a1cea784.svg"}),b=["var(--jy-success-6)","var(--jy-color-text-4)","var(--jy-warning-6)","var(--jy-primary-6)","var(--jy-danger-6)"],v=r({get:()=>a.requestObj.info}),T=t({});o((()=>{x[a.requestObj.modulesName][a.requestObj.urlName](a.requestObj.params).then((e=>{e.data&&(v.value.forEach((a=>{for(const l in e.data)if(a.handleKey&&a.key.includes(l)&&Array.isArray(a.key))A(a.handleKey,e.data[l]);else if(l===a.key){if(a.customStyle){a.valStyle=f(a,e.data[l]),a.iconPath=M(a,e.data[l]),a.value=h(a,e.data[l]);continue}a.value=e.data[l]}})),v.value.forEach((e=>{e.handleKey&&(e.value=S(T.value[e.handleKey]))})))}))}));const A=(e,a)=>{a&&Array.isArray(a)&&(T.value.hasOwnProperty(e)?T.value[e]=T.value[e].concat(a):T.value[e]=a)},S=(e,a)=>{if(!e||!Array.isArray(e))return"";const l=[];return e.forEach((e=>l.push(e.name))),a?a+","+l.join(","):l.join(",")},f=(e,a)=>{let l={};return"status"===e.type&&(l="1"===a?{color:b[0]}:{color:b[1]}),l},M=(e,a)=>{let l="";return"status"===e.type&&(l="1"===a?"yuanLv":"yuanHui"),l},h=(e,a)=>{let l="";return"status"===e.type&&(l="1"===a?"启用":"停用"),l};return(e,a)=>{const t=L;return n(),s("div",Y,[i(t,{label:"基本信息"}),u("div",z,[u("div",W,[u("div",C,[(n(!0),s(d,null,p(E(v),(a=>(n(),s("div",{class:"cont-list",style:m(a.lineStyle),key:a.label},[u("div",$,c(e.$t(a.label))+"： ",1),u("div",{class:"cont-list-value",style:m(a.valStyle)},[a.iconPath?(n(),s("img",{key:0,src:l.value[a.iconPath],style:m(a.iconStyle)},null,12,K)):N("",!0),y(" "+c(a.value),1)],4)],4)))),128))])])])])}}}),[["__scopeId","data-v-87eaee9d"]]),X={class:"flow-detail"},Z={name:"FlowDetail"},ee=l(Object.assign(Z,{props:{importParams:{type:Object,default:()=>({})}},setup(e){const a=e,l=t({}),r=t(null);return o((()=>{T.flowDetail({modelId:a.importParams.modelId,definitionId:a.importParams.definitionId,edit:!0}).then((async e=>{r.value=null,A((()=>{r.value=e.data.data}))}))})),(e,a)=>{const t=L,o=D;return n(),s("div",X,[i(t,{label:"审批流程"}),r.value?(n(),b(o,v({key:0,id:"flow"},{readable:!0,mapable:!1,scroll:!1,scrollY:!1,top:"50"},{node:r.value,wrapStyle:l.value}),null,16,["node","wrapStyle"])):N("",!0)])}}}),[["__scopeId","data-v-e5d8fa81"]]),ae={name:"RecordTable"},le=l(Object.assign(ae,{props:{requestObj:{type:Object,defatult:()=>({})}},setup(e){const a=e,l=t([]),u=t(!1),m=r({get:()=>a.requestObj.tableHeaders[a.requestObj.value]});return o((()=>{u.value=!0,x[a.requestObj.modulesName][a.requestObj.urlName](a.requestObj.params).then((e=>{e.data&&(l.value=e.data),u.value=!1})).catch((()=>{u.value=!1}))})),(e,a)=>{const t=S("el-table-column"),r=M;return n(),b(r,{data:l.value,loading:u.value,ref:"recordTableRef",highlightCurrentRow:!0,class:"table"},{default:f((()=>[i(t,{type:"index",label:"序号",width:"60"}),(n(!0),s(d,null,p(E(m),(a=>(n(),b(t,{key:a.prop,prop:a.prop,width:a.width},{header:f((()=>[y(c(e.$t(a.label)),1)])),_:2},1032,["prop","width"])))),128))])),_:1},8,["data","loading"])}}}),[["__scopeId","data-v-2615465a"]]),te={name:"VersionTable"},re=l(Object.assign(te,{props:{requestObj:{type:Object,defatult:()=>({})}},setup(e){const a=e,l=t([]),u=t(!1),m=r({get:()=>a.requestObj.tableHeaders[a.requestObj.value]});return o((()=>{u.value=!0,x[a.requestObj.modulesName][a.requestObj.urlName](a.requestObj.params).then((e=>{e.data&&(l.value=e.data),u.value=!1})).catch((()=>{u.value=!1}))})),(e,a)=>{const t=S("el-table-column"),r=M;return n(),b(r,{data:l.value,loading:u.value,ref:"versionTableRef",highlightCurrentRow:!0,class:"table"},{default:f((()=>[i(t,{type:"index",label:"序号",width:"60"}),(n(!0),s(d,null,p(E(m),(a=>(n(),b(t,{key:a.prop,prop:a.prop,width:a.width},{header:f((()=>[y(c(e.$t(a.label)),1)])),_:2},1032,["prop","width"])))),128))])),_:1},8,["data","loading"])}}}),[["__scopeId","data-v-54566026"]]),oe={key:0},ne={name:"DetailDrawer"},se=Object.assign(ne,{props:{modelValue:{type:Boolean,defult:!1},modulesName:{type:String,default:""},detailParams:{type:Array,default:()=>[]},importParams:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(a,{emit:l}){const o=a,u={BaseInfo:Q,FlowDetail:ee,VersionTable:re,RecordTable:le},c=t({urlName:"",params:"",modulesName:""}),y=q.findIndex((e=>e[o.modulesName])),v=q[y][o.modulesName],T=h({...v,componentList:[],componentName:"",updateActive:!1}),A=t(T.TABS.length>0&&T.TABS[0].value),S=r({get:()=>o.modelValue,set(e){l("update:modelValue",e)}}),M=t(0),L=()=>{if(0===T.componentList.length)return!1;return-1!==T.componentList.findIndex((e=>e.value===A.value))},R=e=>{const a=T.componentList;return e&&Array.isArray(e.children)?(0===T.componentList.length?e.children.forEach((l=>{a.push({value:e.value,copName:l})})):e.children.forEach((l=>{-1===a.findIndex((e=>e.copName===l))&&a.push({value:e.value,copName:l})})),a):[]},j=()=>{const{urlName:e,value:a}=T.URLS.find((e=>e.value===A.value)),l=o.detailParams.find((e=>e.value===A.value));c.value={value:a,urlName:e,params:l.params,modulesName:o.modulesName,info:T.INFO,tableHeaders:T.TABLEHEADERS}};return g((()=>o.modelValue),(e=>{e?(A.value=T.TABS.length>0&&T.TABS[0].value,j()):(T.componentList=[],T.updateActive=!1,A.value=null)})),g((()=>A.value),(()=>{!L()&&A.value&&(o.modelValue&&j(),(()=>{M.value=T.TABS.findIndex((e=>e.value===A.value));const e=T.TABS[M.value];e.value===A.value&&(0!==T.componentList.length&&L()||(T.componentList=R(e)),T.updateActive=!0)})())}),{immediate:!0}),(l,t)=>{const r=e;return n(),b(r,{modelValue:E(S),"onUpdate:modelValue":t[1]||(t[1]=e=>_(S)?S.value=e:null),direction:"rtl",onClose:l.clickClose,title:"详情",class:"detail-drawer",size:"800px"},{default:f((()=>[i(O,{active:A.value,label:E(T).TABS,"onUpdate:active":t[0]||(t[0]=e=>A.value=e),border:!0},null,8,["active","label"]),E(T).updateActive?(n(),s("div",oe,[(n(!0),s(d,null,p(E(T).componentList,((e,l)=>(n(),s("div",{key:l},[(n(),b(I(u[e.copName]),{requestObj:c.value,importParams:a.importParams,style:m({display:e.value===A.value?"block":"none"})},null,8,["requestObj","importParams","style"]))])))),128))])):N("",!0)])),_:1},8,["modelValue","onClose"])}}});export{se as _};