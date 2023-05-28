import{J as e}from"./JyTable-78da21a1.js";import{c as a}from"./JyTabs-aa8380ea.js";import{c as l}from"./documentsDetails-1a4a2918.js";import{_ as t,I as s,v as o,h as n,j as i,k as p,r,o as d,c as u,a as m,w as c,m as y,u as h,F as b,l as g,f,g as v,t as w,aa as D,y as S,z as _}from"./main-35f8b412.js";import{a as k}from"./sealApplyIntellect-e244208d.js";import"./sangedian-6ea00dcf.js";import"./Layout-8dc22f8d.js";import"./searchForm-e6ac3aae.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-fc5a935b.js";import"./pagination-70da6ee6.js";import"./batch-7c7d6062.js";import"./index-4c09bf33.js";/* empty css                                                               */import"./cha-kong-c10eac4e.js";import"./table-4b68006a.js";/* empty css                                                                         */import"./portion-da325dae.js";/* empty css                                                                */import"./yuan-hui-31c99901.js";const x=[{id:"keyword",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"盖章码/单据名称"}},{id:"applyTime",label:"申请时间",type:"picker",requestType:"array",startRequest:"applyStartTime",endRequest:"applyEndTime",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD","disabled-date":e=>e.getTime()>Date.now(),"default-value":[new Date((new Date).setMonth((new Date).getMonth()-1)),new Date]},style:{}},{id:"fileTypeId",requestParams:"fileTypeId",label:"文件类型",type:"derivable",inCommonUse:!1,defaultAttribute:{placeholder:"请选择",type:"fileType",multiple:!0,joinStr:","},options:[]},{id:"sealId",requestParams:"sealId",label:"印章名称",type:"dialog",defaultAttribute:{type:"JySelectSeal",multiple:!1,placeholder:"+印章名称"},options:[],values:null},{id:"applyUser",requestParams:"applyUserId",label:"申请人",type:"derivable",defaultAttribute:{type:"user",multiple:!1,placeholder:"+申请人"},options:[],values:null},{id:"applyOrgan",requestParams:"applyOrganId",label:"申请部门",type:"derivable",defaultAttribute:{type:"organ",multiple:!1,placeholder:"+申请部门"},options:[],values:null},{id:"useModel",label:"用印模式",type:"checkButton",data:[{id:"1",name:"智能用印"},{id:"2",name:"远程盖章"},{id:"3",name:"实时视频盖章"}]}],M=[{prop:"useSealApplyNo",label:"单据编号","min-width":180,fixed:"left",align:"center",show:!0},{prop:"useSealFileName",label:"单据名称",width:180,show:!0},{prop:"sealName",label:"印章名称","min-width":150,show:!0},{prop:"sealCode",label:"盖章码",width:80,show:!0},{prop:"applyUseCount",label:"申请盖章次数",align:"center",width:150,show:!0},{prop:"realUseCount",label:"实际盖章次数","min-width":150,show:!0},{prop:"useSealStateName",label:"用印状态","min-width":150,show:!0},{prop:"applyUserName",label:"申请人","min-width":150,show:!0},{prop:"applyOrganName",label:"申请部门","min-width":150,show:!0},{prop:"applyDatetime",label:"申请时间",width:180,show:!0},{prop:"caozuo",label:"操作",fixed:"right","min-width":180,show:!0,align:"center",customDisplayType:"custom"}],A={class:"PrintControlManagement-recordWithSeal"},C=(e=>(S("data-v-8fa0d11f"),e=e(),_(),e))((()=>y("div",{class:"title"},[y("div",null,"智能用印"),y("div",{class:"title-more"},[y("div",{class:"title-more-add"})])],-1))),I={class:"rankDisplayData"},N=v(" 申请转办 "),J=v(" 申请重置 "),T=v(" 结束用印 "),j=v(" 申请重置 "),B=v(" 申请重置 "),E={class:"ap-box"},U=t({setup(t){const S=s(),_=o("pageNoUse"),U=o(null),P=n({componentsTabs:{data:[{label:"待智能用印",name:"pageNoUse"},{label:"智能用印中",name:"pageUsing"},{label:"已完成用印",name:"pageUseDone"}]},componentsSearchForm:{data:x,butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:M},componentsDocumentsDetails:{show:!1,visible:[{label:"用印详情",name:"Details-of-Printing"},{label:"审批流程",name:"approval-process"},{label:"领用记录",name:"Record-of-requisition"},{label:"操作记录",name:"operating-record"}]},JyElMessageBox:{type:"",column:{},flag:"",show:!1,header:{data:""},content:{data:""}},showToastDialog:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}}});function F(e,a,l,t){"useSealFileName"===a.property&&(P.componentsDocumentsDetails.show=!0,k.sealBaseInfo({useSealApplyId:e.useSealApplyId}).then((e=>{const a=e.data,l=[{label:"文件名称",value:a.useSealFileName},{label:"单据编码",value:a.useSealApplyNo},{label:"文件类型",value:a.fileTypeName},{label:"文件份数",value:(a.useSealFileNum||0)+"份"},{label:"金额",value:a.totalMoney||"-"},{label:"申请事由",value:a.useSealInfo},{label:"盖章码",value:a.sealCode||"-"},{label:"申请人员",value:a.applyUserName},{label:"申请时间",value:a.applyDatetime},{label:"所属部门",value:a.applyOrganName},{label:"单据状态",value:a.useSealStateName,iconPath:"yuanLv",iconStyle:{},valStyle:{color:"var(--jy-success-6)"}}];a.listSeal.length&&(1===a.listSeal.length?l.splice(l.length-5,0,{label:"印章名称",value:a.listSeal[0].useSealApplySealInfoDto.sealName},{label:"常规盖章",value:a.listSeal[0].useSealApplySealNumDto.applySealNum+"次"}):a.listSeal.forEach(((e,a)=>{l.splice(l.length-5,0,{label:`印章${a+1}名称`,value:e.useSealApplySealInfoDto.sealName},{label:"常规盖章",value:e.useSealApplySealNumDto.applySealNum+"次"})}))),P.componentsDocumentsDetails.visible[0].basicInformation={show:!0,data:l}})),k.intellect({useSealApplyId:e.useSealApplyId}).then((e=>{var a;(null==(a=e.data)?void 0:a.length)?P.componentsDocumentsDetails.visible[0].IntelligentPrinting={show:!0,data:e.data}:P.componentsDocumentsDetails.visible[0].IntelligentPrinting={show:!1,data:[]}})),k.attachment({useSealApplyId:e.useSealApplyId}).then((e=>{var a,l;(null==(a=e.data.fileInfos)?void 0:a.length)||(null==(l=e.data.fileInfoAdds)?void 0:l.length)?P.componentsDocumentsDetails.visible[0].accessory={show:!0,printedData:e.data.fileInfos,additionalData:e.data.fileInfoAdds}:P.componentsDocumentsDetails.visible[0].accessory={show:!1,printedData:[],additionalData:[]}})))}function q(e,a){"申请转办"===a&&O("/frontDesk/printControlManage/useSealManage/intelligentPrinting/transferApplication","transfer"),"申请重置"===a&&O("/frontDesk/printControlManage/useSealManage/intelligentPrinting/transferApplication","transfer"),"撤销转办"===a&&(P.JyElMessageBox.header.data="提示？",P.JyElMessageBox.content.data="请问确定要撤销转办申请吗？",P.JyElMessageBox.show=!0),"撤销重置"===a&&(P.JyElMessageBox.header.data="提示？",P.JyElMessageBox.content.data="请问确定要撤销重置用印申请吗？",P.JyElMessageBox.show=!0),"结束用印"===a&&(P.JyElMessageBox.header.data="提示？",P.JyElMessageBox.content.data="请问确定要结束用印吗？",P.JyElMessageBox.show=!0),"查看历史记录"===a&&(P.JyElMessageBox.header.data="提示？",P.JyElMessageBox.content.data="请问确定要催办吗？",P.JyElMessageBox.show=!0)}const O=(e,a)=>{const l={path:e};a&&(l.query={transfer:a}),S.push(l)};function Y(){P.componentsDocumentsDetails.show=!1}function R(e){_.value=e,D((()=>{U.value.reloadData()}))}return i((()=>{})),p((()=>{})),(t,s)=>{const o=r("el-button"),n=r("JyElMessageBox");return d(),u("div",A,[m(e,{url:`/sealApply/intellect/${_.value}`,ref_key:"jyTable",ref:U,hasTabs:"",componentsSearchForm:h(P).componentsSearchForm,componentsTableHeader:h(P).componentsTable.header,tableClick:"useSealFileName",onCellClick:F},{title:c((()=>[C])),tabs:c((()=>[y("div",null,[m(a,{activeName:_.value,data:h(P).componentsTabs.data,onTabChange:R},null,8,["activeName","data"])])])),custom_caozuo:c((e=>[y("div",I,["pageNoUse"===_.value?(d(),u(b,{key:0},[m(o,{type:"info",plain:"",onClick:e=>q(0,"申请转办"),link:"",text:""},{default:c((()=>[N])),_:2},1032,["onClick"]),m(o,{type:"info",plain:"",onClick:e=>q(0,"申请重置"),link:"",text:""},{default:c((()=>[J])),_:2},1032,["onClick"])],64)):g("",!0),"pageUsing"===_.value?(d(),u(b,{key:1},[m(o,{type:"info",plain:"",onClick:e=>q(0,"结束用印"),link:"",text:""},{default:c((()=>[T])),_:2},1032,["onClick"]),m(o,{type:"info",plain:"",onClick:e=>q(0,"申请重置"),link:"",text:""},{default:c((()=>[j])),_:2},1032,["onClick"])],64)):g("",!0),"pageUseDone"===_.value?(d(),f(o,{key:2,type:"info",plain:"",onClick:e=>q(0,"申请重置"),link:"",text:""},{default:c((()=>[B])),_:2},1032,["onClick"])):g("",!0)])])),_:1},8,["url","componentsSearchForm","componentsTableHeader"]),y("div",E,[m(l,{show:h(P).componentsDocumentsDetails.show,visible:h(P).componentsDocumentsDetails.visible,onClickClose:Y},null,8,["show","visible"])]),m(n,{modelValue:h(P).JyElMessageBox.show,"onUpdate:modelValue":s[0]||(s[0]=e=>h(P).JyElMessageBox.show=e),show:h(P).JyElMessageBox.show,defaultAttribute:{}},{header:c((()=>[v(w(h(P).JyElMessageBox.header.data),1)])),content:c((()=>[v(w(h(P).JyElMessageBox.content.data),1)])),_:1},8,["modelValue","show"])])}}},[["__scopeId","data-v-8fa0d11f"]]);export{U as default};