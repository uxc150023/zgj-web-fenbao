import{c as t}from"./table-4b68006a.js";import{_ as e}from"./searchForm-e6ac3aae.js";import{c as a}from"./pagination-70da6ee6.js";import{c as l}from"./Layout-8dc22f8d.js";import{c as n}from"./batch-7c7d6062.js";import{_ as o,h as i,r,o as d,c as s,a as c,w as p,m as b,u,n as m,g as h,y as f,z as y}from"./main-35f8b412.js";import"./sangedian-6ea00dcf.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-fc5a935b.js";const A={class:"title"},g=(t=>(f("data-v-ef7c436e"),t=t(),y(),t))((()=>b("div",null,"固件版本管理",-1))),k=h("+ 新建"),w={class:"batch"},D=o({setup(o){const h=i({componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"请输入"}},{id:"name",label:"强制升级",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[]},{id:"picker",label:"创建时间",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"开始时间","end-placeholder":"结束时间"},style:{}},{id:"name2",label:"状态",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"请选择"},options:[]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"固件版本号",sortable:!0,"min-width":150},{prop:"2",label:"固件版本号",sortable:!0,"min-width":150},{prop:"3",label:"状态",sortable:!0,"min-width":150},{prop:"4",label:"可升级的固件版本号",sortable:!0,"min-width":220},{prop:"5",label:"是否强制",sortable:!0,"min-width":150},{prop:"6",label:"创建人",sortable:!0,"min-width":150},{prop:"7",label:"创建时间",sortable:!0,"min-width":180},{prop:"8",label:"版本说明",sortable:!0,"min-width":180},{prop:"caozuo",label:"操作",fixed:"right","min-width":170,rankDisplayData:[{name:"修改"},{name:"删除"},{name:"固件下载"}]}],data:[{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.1.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"否",6:"岳海涛",7:"2021-04-13 11:00:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"},{1:"V1.0.9",2:"1.0.3",3:"启用",4:"1.0.3",5:"是",6:"岳海涛",7:"2021-04-13 11:30:14",8:"说明内容"}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"}}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsTree:{data:[{label:"A层级菜单1",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单2",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]},{label:"A层级菜单3",children:[{label:"B层级菜单1",children:[{label:"C层级菜单1"}]},{label:"B层级菜单2",children:[{label:"C层级菜单1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"批量删除"}]}});function f(t){h.componentsBatch.selectionData=t,h.componentsBatch.selectionData.length>0?h.componentsBatch.defaultAttribute.disabled=!1:h.componentsBatch.defaultAttribute.disabled=!0}return(o,i)=>{const y=r("el-button");return d(),s("div",null,[c(u(l),{Layout:"title,searchForm,table,pagination,tabs,batch"},{title:p((()=>[b("div",A,[g,b("div",null,[c(y,{type:"primary"},{default:p((()=>[k])),_:1})])])])),searchForm:p((()=>[b("div",null,[c(u(e),{data:u(h).componentsSearchForm.data,butData:u(h).componentsSearchForm.butData,style:m(u(h).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:p((()=>[b("div",w,[c(n,{data:u(h).componentsBatch.data,defaultAttribute:u(h).componentsBatch.defaultAttribute},null,8,["data","defaultAttribute"])])])),table:p((()=>[b("div",null,[c(u(t),{defaultAttribute:u(h).componentsTable.defaultAttribute,isSelection:"",data:u(h).componentsTable.data,header:u(h).componentsTable.header,paginationData:u(h).componentsPagination.data,onSelectionChange:f},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:p((()=>[c(u(a),{data:u(h).componentsPagination.data,defaultAttribute:u(h).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1})])}}},[["__scopeId","data-v-ef7c436e"]]);export{D as default};