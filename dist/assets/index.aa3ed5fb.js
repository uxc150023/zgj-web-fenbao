import{_ as b}from"./gengduo-caozuo.a30508f6.js";import{c as f,a as h}from"./pagination.fa8deb41.js";import{c as _}from"./searchForm.978c9621.js";import{c as y}from"./Layout.aee589ac.js";import{c as v}from"./tree.287d71d8.js";import{c as C}from"./documentsDetails.0de713a8.js";import{_ as D,r as k,a as A,o as T,c as x,b as o,d as l,f as a,u as e,l as w,i as d,p as g,j as S}from"./main.962a6924.js";/* empty css                                                             */import"./tabs.b9c0b32c.js";const c=s=>(g("data-v-78f3fd2c"),s=s(),S(),s),F={class:"title"},I=c(()=>a("div",null,"\u5458\u5DE5\u7BA1\u7406",-1)),N=d("+ \u65B0\u5EFA"),P=c(()=>a("img",{class:"button-icon",src:b,alt:"",srcset:""},null,-1)),z=c(()=>a("span",null,"\u66F4\u591A\u64CD\u4F5C",-1)),B={class:"batch"},U=d("\u6279\u91CF\u64CD\u4F5C"),V={class:"ap-box"},j={setup(s){const t=k({componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}},data:[{id:"name",label:"\u5173\u952E\u8BCD",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"\u8BF7\u8F93\u5165"}},{id:"picker",label:"\u9009\u62E9\u65F6\u95F4",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"Start date","end-placeholder":"End date"},style:{}},{id:"name",label:"\u8D26\u53F7",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"\u8BF7\u9009\u62E9"}}],butData:[{id:"more",name:"\u5C55\u5F00",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"\u67E5\u8BE2",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"\u91CD\u7F6E",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{width:50,type:"selection"},{prop:"0",label:"\u5E8F\u53F7",width:100,sortable:!0},{prop:"1",label:"\u59D3\u540D"},{prop:"2",label:"\u8D26\u53F7"},{prop:"3",label:"\u6240\u5C5E\u90E8\u95E8"},{prop:"4",label:"\u804C\u4F4D"},{prop:"5",label:"\u4EBA\u8138\u72B6\u6001"},{prop:"6",label:"\u64CD\u4F5C",rankDisplayData:[{name:"\u4FEE\u6539"},{name:"\u505C\u7528"},{name:"\u5220\u9664"},{name:"\u4FEE\u6539\u5BC6\u7801"},{name:"\u8BBE\u7F6E\u4EBA\u8138"}]}],data:[{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--color-fill--1)"},"cell-style":({row:i,column:r,rowIndex:n,columnIndex:m})=>{if(r.property=="1")return{color:"var(--Info-6)",cursor:"pointer"}}}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"sizes, prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsTree:{data:[{label:"\u4F01\u4E1A\u540D\u79F0",children:[{label:"\u5355\u4F4D\u540D\u79F0",children:[{label:"\u90E8\u95E8\u540D\u79F0"},{label:"\u90E8\u95E8\u540D\u79F0"},{label:"\u90E8\u95E8\u540D\u79F0"},{label:"\u90E8\u95E8\u540D\u79F0"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsDocumentsDetails:{show:!1,visible:[{label:"\u5458\u5DE5\u8BE6\u60C5",name:"Staff-Details"},{label:"\u6D41\u7A0B\u8BB0\u5F55",name:""}]}});function p(i,r,n,m){r.property=="1"&&(t.componentsDocumentsDetails.show=!0)}function u(){t.componentsDocumentsDetails.show=!1}return(i,r)=>{const n=A("el-button");return T(),x("div",null,[o(y,{Layout:"title,searchForm,table,pagination,tree,batch"},{title:l(()=>[a("div",F,[I,a("div",null,[o(n,{type:"primary"},{default:l(()=>[N]),_:1}),o(n,null,{default:l(()=>[P,z]),_:1})])])]),searchForm:l(()=>[a("div",null,[o(e(_),{data:e(t).componentsSearchForm.data,butData:e(t).componentsSearchForm.butData,style:w(e(t).componentsSearchForm.style)},null,8,["data","butData","style"])])]),tree:l(()=>[a("div",null,[o(e(v),{data:e(t).componentsTree.data,defaultAttribute:e(t).componentsTree.defaultAttribute},null,8,["data","defaultAttribute"])])]),batch:l(()=>[a("div",B,[o(n,null,{default:l(()=>[U]),_:1})])]),table:l(()=>[a("div",null,[o(e(f),{defaultAttribute:e(t).componentsTable.defaultAttribute,data:e(t).componentsTable.data,header:e(t).componentsTable.header,onCellClick:p},null,8,["defaultAttribute","data","header"])])]),pagination:l(()=>[o(h,{data:e(t).componentsPagination.data,defaultAttribute:e(t).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])]),_:1}),a("div",V,[o(C,{show:e(t).componentsDocumentsDetails.show,visible:e(t).componentsDocumentsDetails.visible,onClickClose:u},null,8,["show","visible"])])])}}},Q=D(j,[["__scopeId","data-v-78f3fd2c"]]);export{Q as default};
