import{c as e}from"./table-4b68006a.js";import{_ as a}from"./searchForm-e6ac3aae.js";/* empty css                                                             */import{_ as t,v as l,h as o,j as n,k as i,o as r,c as s,a as p,w as b,m as d,u as c,n as m,f as u,b3 as h,l as y,y as v,z as w}from"./main-35f8b412.js";/* empty css                                                                   */import{c as f}from"./pagination-70da6ee6.js";import{c as C}from"./JyTabs-aa8380ea.js";import{c as _}from"./Layout-8dc22f8d.js";import{c as g}from"./batch-7c7d6062.js";import"./sangedian-6ea00dcf.js";import"./ketanchude-a94e84bc.js";import"./KDocumentTypeDialog-fc5a935b.js";/* empty css                                                               */const R={class:"PrintControlManagement-RiskAlertSetting"},O=(e=>(v("data-v-bb611154"),e=e(),w(),e))((()=>d("div",{class:"title"}," 风险提醒设置 ",-1))),j={class:"batch"},x=t({props:{type:{type:String,default:"0"}},emits:[],setup(t,{emit:v}){const w=l(!1),x=o({componentsTabs:{data:[{label:"智能用印",name:"1"},{label:"领用印章",name:"2"},{label:"流程规范",name:"3"}]},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"风险项"}},{id:"wjlx",label:"风险分类",type:"select",options:[{label:"风险分类1",value:"1"},{label:"风险分类2",value:"2"}]},{id:"wjlx",label:"开启状态",type:"select",options:[{label:"状态1",value:"1"},{label:"状态2",value:"2"}]}],butData:[{id:"more",name:"展开",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{prop:"1",label:"风险分类",sortable:!0,"min-width":150},{prop:"2",label:"风险项",sortable:!0,"min-width":180},{prop:"3",label:"风险项描述",sortable:!0,"min-width":150},{prop:"4",label:"开启状态",customDisplayType:"switch"},{prop:"5",label:"提醒时间",sortable:!0,"min-width":180},{prop:"6",label:"提醒人",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"设置提醒人"}]}],data:[{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"}}},componentsTree:{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!0,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsBreadcrumb:{data:[{name:"ceshi"},{name:"ceshi"}],defaultAttribute:{separator:"/"}}});function T(e){"1"==e?(x.componentsTable.header=[{prop:"1",label:"风险分类",sortable:!0,"min-width":150},{prop:"2",label:"风险项",sortable:!0,"min-width":180},{prop:"3",label:"风险项描述",sortable:!0,"min-width":150},{prop:"4",label:"开启状态",customDisplayType:"switch"},{prop:"5",label:"提醒时间",sortable:!0,"min-width":180},{prop:"6",label:"提醒人",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"设置提醒人"}]}],x.componentsTable.data=[{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""}]):"2"!=e&&"3"!=e||(x.componentsTable.header=[{prop:"2",label:"风险项",sortable:!0,"min-width":180},{prop:"3",label:"风险项描述",sortable:!0,"min-width":150},{prop:"4",label:"开启状态",customDisplayType:"switch"},{prop:"5",label:"提醒时间",sortable:!0,"min-width":180},{prop:"6",label:"提醒人",sortable:!0,"min-width":150},{prop:"caozuo",label:"操作",fixed:"right","min-width":150,rankDisplayData:[{name:"设置提醒人"}]}],x.componentsTable.data=[{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""},{1:"文件防篡改",2:"盖前文件OCR核验异常",3:"",4:"",5:"即时提醒",6:""}]),"1"==e?x.componentsSearchForm.data=[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"风险项"}},{id:"wjlx",label:"风险分类",type:"select",options:[{label:"风险分类1",value:"1"},{label:"风险分类2",value:"2"}]},{id:"wjlx",label:"开启状态",type:"select",options:[{label:"状态1",value:"1"},{label:"状态2",value:"2"}]}]:"2"!=e&&"3"!=e||(x.componentsSearchForm.data=[{id:"name",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"风险项"}},{id:"wjlx",label:"开启状态",type:"select",options:[{label:"状态1",value:"1"},{label:"状态2",value:"2"}]}])}function k(e,a,t,l){"设置提醒人"===t.name&&(w.value=!0)}return n((()=>{T("1")})),i((()=>{})),(t,l)=>(r(),s("div",R,[p(_,{Layout:"title,tabs,searchForm,table,pagination,batch"},{title:b((()=>[O])),tabs:b((()=>[d("div",null,[p(C,{activeName:"1",data:c(x).componentsTabs.data,onTabChange:T},null,8,["data"])])])),searchForm:b((()=>[d("div",null,[p(c(a),{data:c(x).componentsSearchForm.data,butData:c(x).componentsSearchForm.butData,style:m(c(x).componentsSearchForm.style)},null,8,["data","butData","style"])])])),batch:b((()=>[d("div",j,[p(g)])])),table:b((()=>[d("div",null,[p(c(e),{defaultAttribute:c(x).componentsTable.defaultAttribute,data:c(x).componentsTable.data,header:c(x).componentsTable.header,paginationData:c(x).componentsPagination.data,onCustomClick:k},null,8,["defaultAttribute","data","header","paginationData"])])])),pagination:b((()=>[p(f,{data:c(x).componentsPagination.data,defaultAttribute:c(x).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])])),_:1}),w.value?(r(),u(c(h),{key:0,show:w.value,"onUpdate:show":l[0]||(l[0]=e=>w.value=e)},null,8,["show"])):y("",!0)]))}},[["__scopeId","data-v-bb611154"]]);export{x as default};