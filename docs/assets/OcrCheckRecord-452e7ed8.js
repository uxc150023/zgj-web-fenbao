import{_ as e}from"./back-bdc75944.js";import{_ as t}from"./file-icon-33754cb6.js";import{_ as l,I as a,h as r,v as s,j as i,k as o,r as c,o as d,c as n,a as u,w as m,m as p,g as f,t as b,u as h,F as g,e as k,y as _,z as v}from"./main-35f8b412.js";import{c as y}from"./Layout-8dc22f8d.js";/* empty css                                                                */import{c as C}from"./table-4b68006a.js";import"./sangedian-6ea00dcf.js";const S=e=>(_("data-v-e24b451e"),e=e(),v(),e),x={class:"Seal-application-fill-form"},j={class:"breadcrumb"},w=f(" 查看验证记录 "),N=f(" 查看验证记录 "),L={class:"custom"},A={class:"files-name"},I=S((()=>p("img",{src:t},null,-1))),F=l({props:{type:{type:String,default:"0"}},emits:[],setup(t,{emit:l}){const _=a(),v=_.currentRoute.value.query.record;v.indexOf("post");const S=r({checkStep:{useStep:-1==v.indexOf("post")?"用印前核验":"用印后核验",ocrStep:2==v.charAt(v.length-1)?"核验中":"已核验"},checkList:{header:[{width:50},{prop:"0",label:"序号"},{prop:"1",label:"操作人",sortable:!0,"min-width":150},{prop:"2",label:"操作时间",sortable:!0,"min-width":150},{prop:"3",label:"核验进展",sortable:!0,"min-width":150},{prop:"4",label:"核验结果",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"查看"}]}],filesFront:[{fileName:"附件名称附件名称附件名称附件名称1",records:[{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"无差异"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"有差异（7）"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"有差异（相似度低，不展示差异信息）"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"比对失败"}]},{fileName:"附件名称附件名称附件名称附件名称2",records:[{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"无差异"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"有差异（7）"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"有差异（相似度低，不展示差异信息）"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"比对失败"}]}],filesMiddle:[{fileName:"附件名称附件名称附件名称附件名称1",records:[{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"无差异"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"有差异（7）"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"有差异（相似度低，不展示差异信息）"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"比对失败"}]},{fileName:"附件名称附件名称附件名称附件名称2",records:[{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"无差异"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"有差异（7）"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"有差异（相似度低，不展示差异信息）"},{0:1,1:"马丽丽",2:"2022-10-31 13:15:45",3:"已完成",4:"比对失败"}]}],filesRear:[{fileName:"附件名称附件名称附件名称附件名称1",records:[{0:1,1:"1",2:"2022-10-31 13:15:45"},{0:1,1:"1",2:"2022-10-31 13:15:45"}]},{fileName:"附件名称附件名称附件名称附件名称2",records:[{0:1,1:"1",2:"2022-10-31 13:15:45"},{0:1,1:"1",2:"2022-10-31 13:15:45"}]}],filesArchive:[{fileName:"附件名称附件名称附件名称附件名称1",records:[{0:1,1:"1",2:"2022-10-31 13:15:45"},{0:1,1:"1",2:"2022-10-31 13:15:45"}]},{fileName:"附件名称附件名称附件名称附件名称2",records:[{0:1,1:"1",2:"2022-10-31 13:15:45"},{0:1,1:"1",2:"2022-10-31 13:15:45"}]}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:l,columnIndex:a})=>{}}}});function F(){_.go(-1)}return s(null),i((()=>{})),o((()=>{})),(t,l)=>{const a=c("el-breadcrumb-item"),r=c("el-breadcrumb");return d(),n("div",x,[u(y,{Layout:"breadcrumb,title,custom"},{breadcrumb:m((()=>[p("div",j,[u(r,{separator:"/"},{default:m((()=>[u(a,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.65)"}},{default:m((()=>[f(b(h(S).checkStep.useStep),1)])),_:1}),u(a,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.65)"}},{default:m((()=>[f(b(h(S).checkStep.ocrStep),1)])),_:1}),u(a,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.25)"}},{default:m((()=>[w])),_:1})])),_:1})])])),title:m((()=>[p("div",{class:"title"},[p("div",{class:"title-desc"},[p("img",{class:"title-desc-img",src:e,alt:"",onClick:F}),N])])])),custom:m((()=>[p("div",L,[(d(!0),n(g,null,k(h(S).checkList.filesFront,((e,l)=>(d(),n("div",null,[p("div",A,[I,f(b(e.fileName),1)]),u(h(C),{defaultAttribute:h(S).checkList.defaultAttribute,data:e.records,header:h(S).checkList.header,onCellClick:t.cellClick,onCustomClick:t.customClick,onSelectionChange:t.selectionChange},null,8,["defaultAttribute","data","header","onCellClick","onCustomClick","onSelectionChange"])])))),256))])])),_:1})])}}},[["__scopeId","data-v-e24b451e"]]);export{F as default};