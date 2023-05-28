import{g as e,y as t}from"./chunk-vform-6b80d696.js";import{aA as a,aF as l,as as n,o as s,p as i,F as o,aD as r,ac as c,aT as u,n as p,w as m,x as v,aw as d,at as g,a$ as f,bj as b,m as h}from"./chunk-vue-0eb5cee7.js";import y from"./index-7da611a9.js";import{c as x}from"./Layout-d1d9ddbf.js";import"./chunk-element-plus-b8773542.js";import"./chunk-ant-design-vue-bd7f8294.js";import"./chunk-@ant-design-icons-svg-8f5189a2.js";import"./chunk-@ant-design-icons-vue-ff9a333c.js";import"./chunk-echarts-e723eb50.js";const S=e=>(d("data-v-45be22ee"),e=e(),g(),e),w={class:"system-home-top"},z={class:"list"},j=["src"],k={class:"unit"},F={key:0,class:"base"},H={class:"type"},_={key:0,class:"time"},$={class:"space"},I=S((()=>i("p",null,"空间使用情况",-1))),L=S((()=>i("p",null,[i("span",null,"22GB"),m("/100GB")],-1))),W=e({setup(e){const d=a([{sum:20,unit:"",type:"用印中单据数",img:"/zgj-web-fenbao/assets/top1-4271605a.svg"},{sum:145,unit:"",type:"绑定数/印章总数",base:457,img:"/zgj-web-fenbao/assets/top2-817c5d5d.svg"},{sum:t("2023-10-19").diff(t().format("YYYY-MM-DD"),"day"),unit:"天",type:"到期时间：2023-10-19",img:"/zgj-web-fenbao/assets/top3-16486469.svg"}]);return(e,t)=>{const a=l("el-progress");return n(),s("div",w,[i("div",z,[(n(!0),s(o,null,r(d.value,((e,t)=>(n(),s("div",{class:"item",key:t},[i("img",{src:e.img,alt:""},null,8,j),i("div",null,[i("span",{class:c(["sum",0!==t?"color-dark":""])},u(e.sum),3),i("span",k,[e.base?(n(),s("span",F,"/"+u(e.base),1)):p("",!0),m(" "+u(e.unit),1)])]),i("div",H,u(e.type),1),e.time?(n(),s("div",_,u(e.time),1)):p("",!0)])))),128))]),i("div",$,[I,L,v(a,{percentage:22})])])}}},[["__scopeId","data-v-45be22ee"]]),C=e=>(d("data-v-9addbc5f"),e=e(),g(),e),P={class:"home-equipment"},A={class:"left"},V=C((()=>i("p",{class:"label"},"智能设备信息",-1))),q={class:"items"},O=["src"],Y={class:"num"},D={class:"text"},B={class:"right"},G=["src"],M=C((()=>i("p",null,"成员与部门",-1))),U=C((()=>i("p",null,[m("部门数："),i("span",null,"20")],-1))),Q=C((()=>i("p",null,[m("员工数："),i("span",null,"20")],-1))),R=C((()=>i("p",null,[m("今日登录员工数："),i("span",null,"20")],-1))),T=e({setup(e){const t=a([{icon:"/zgj-web-fenbao/assets/equipment1-e1ce07bb.svg",num:20,text:"智能印章数"},{icon:"/zgj-web-fenbao/assets/equipment2-e70a1827.svg",num:20,text:"智能印章数"},{icon:"/zgj-web-fenbao/assets/equipment3-98f50902.svg",num:20,text:"智能印章数"},{icon:"/zgj-web-fenbao/assets/equipment4-24aad6da.svg",num:20,text:"智能印章数"}]);return(e,a)=>(n(),s("div",P,[i("div",A,[V,i("div",q,[(n(!0),s(o,null,r(t.value,((e,t)=>(n(),s("div",{class:"item",key:t},[i("img",{src:e.icon,alt:""},null,8,O),i("div",null,[i("p",Y,u(e.num),1),i("p",D,u(e.text),1)])])))),128))])]),i("div",B,[i("img",{src:f("/zgj-web-fenbao/assets/cyandbm-26f2e651.svg")},null,8,G),M,U,Q,R])]))}},[["__scopeId","data-v-9addbc5f"]]),E={class:"home-appreciation"},J=(e=>(d("data-v-d3b744d1"),e=e(),g(),e))((()=>i("p",{class:"title"},"增值服务",-1))),K={class:"list"},N=["src"],X=e({setup(e){const t=a([{img:"/zgj-web-fenbao/assets/appreciation1-5163740f.svg",text:"电子签章"},{img:"/zgj-web-fenbao/assets/appreciation2-3df9921f.svg",text:"远程视频盖章"},{img:"/zgj-web-fenbao/assets/appreciation3-6bd9c8b4.svg",text:"OCR智能比对"},{img:"/zgj-web-fenbao/assets/appreciation4-9d714982.svg",text:"防伪水印"},{img:"/zgj-web-fenbao/assets/appreciation5-a7edc5ca.svg",text:"扫描仪服务"}]);return(e,a)=>(n(),s("div",E,[J,i("div",K,[(n(!0),s(o,null,r(t.value,((e,t)=>(n(),s("div",{key:t},[i("img",{src:e.img,alt:""},null,8,N),i("p",null,u(e.text),1)])))),128))])]))}},[["__scopeId","data-v-d3b744d1"]]),Z={class:"home-useSealStatistical"},ee=(e=>(d("data-v-ba00c352"),e=e(),g(),e))((()=>i("p",{class:"title"},"用印统计",-1))),te={class:"content"},ae=e({setup(e){var t=[{value:335,name:"正常"},{value:310,name:"停用"},{value:234,name:"销毁"}],l=[{value:335,name:"公章"},{value:310,name:"财务章"},{value:234,name:"法人章"}],o=[{value:335,name:"智能用印"},{value:310,name:"普通用印"},{value:234,name:"电子签章"}];const r=a({title:{text:"印章状态占比",left:"center",top:0,textStyle:{fontSize:16,color:"rgba(0, 0, 0, 0.85)",fontWeight:400}},tooltip:{trigger:"item"},legend:{orient:"vertical",show:!0,right:10,top:24,itemStyle:{},formatter:function(e){const a=t.filter((function(t){return t.name===e}));return`${e} ${a[0].value}%`},textStyle:{color:" rgba(0, 0, 0, 0.45)"},itemWidth:8,itemHeight:8,data:["正常","停用","销毁"]},series:[{name:"印章状态占比",type:"pie",radius:[78,100],avoidLabelOverlap:!1,label:{show:!0,position:"center",color:"#4c4a4a",formatter:"{total|总数}\n\r{active|200}{fen| 份}",rich:{total:{fontSize:12,fontFamily:"PingFang SC",color:"rgba(0, 0, 0, 0.65)",lineHeight:20},active:{fontFamily:"Helvetica",fontSize:28,color:"rgba(0, 0, 0, 0.85)",lineHeight:36},fen:{fontFamily:"PingFang SC",fontSize:16,color:"rgba(0, 0, 0, 0.65)",lineHeight:24}}},labelLine:{show:!1},data:[{value:1048,name:"正常"},{value:735,name:"停用"},{value:580,name:"销毁"}]}]}),c=a({title:{text:"印章类型占比",left:"center",top:0,textStyle:{fontSize:16,color:"rgba(0, 0, 0, 0.85)",fontWeight:400}},tooltip:{trigger:"item"},legend:{orient:"vertical",show:!0,right:10,top:24,itemStyle:{},formatter:function(e){const t=l.filter((function(t){return t.name===e}));return`${e} ${t[0].value}%`},textStyle:{color:" rgba(0, 0, 0, 0.45)"},itemWidth:8,itemHeight:8},series:[{name:"印章类型占比",type:"pie",radius:[78,100],avoidLabelOverlap:!1,label:{show:!0,position:"center",color:"#4c4a4a",formatter:"{total|总数}\n\r{active|200}{fen| 份}",rich:{total:{fontSize:12,fontFamily:"PingFang SC",color:"rgba(0, 0, 0, 0.65)",lineHeight:20},active:{fontFamily:"Helvetica",fontSize:28,color:"rgba(0, 0, 0, 0.85)",lineHeight:36},fen:{fontFamily:"PingFang SC",fontSize:16,color:"rgba(0, 0, 0, 0.65)",lineHeight:24}}},labelLine:{show:!1},data:[{value:1048,name:"公章"},{value:735,name:"财务章"},{value:580,name:"法人章"}]}]}),u=a({title:{text:"用印占比",left:"center",top:0,textStyle:{fontSize:16,color:"rgba(0, 0, 0, 0.85)",fontWeight:400}},tooltip:{trigger:"item"},legend:{orient:"vertical",show:!0,right:10,top:24,itemStyle:{},formatter:function(e){const t=o.filter((function(t){return t.name===e}));return`${e} ${t[0].value}%`},textStyle:{color:" rgba(0, 0, 0, 0.45)"},itemWidth:8,itemHeight:8},series:[{name:"印章状态占比",type:"pie",radius:[78,100],avoidLabelOverlap:!1,label:{show:!0,position:"center",color:"#4c4a4a",formatter:"{total|总数}\n\r{active|200}{fen| 份}",rich:{total:{fontSize:12,fontFamily:"PingFang SC",color:"rgba(0, 0, 0, 0.65)",lineHeight:20},active:{fontFamily:"Helvetica",fontSize:28,color:"rgba(0, 0, 0, 0.85)",lineHeight:36},fen:{fontFamily:"PingFang SC",fontSize:16,color:"rgba(0, 0, 0, 0.65)",lineHeight:24}}},labelLine:{show:!1},data:[{value:1048,name:"智能用印"},{value:735,name:"普通用印"},{value:580,name:"电子签章"}]}]});return(e,t)=>{const a=y;return n(),s("div",Z,[ee,i("div",te,[i("div",null,[v(a,{options:r.value},null,8,["options"])]),i("div",null,[v(a,{options:c.value},null,8,["options"])]),i("div",null,[v(a,{options:u.value},null,8,["options"])])])])}}},[["__scopeId","data-v-ba00c352"]]),le={class:"home-dus"},ne={class:"charts-title"},se=(e=>(d("data-v-c2bf9b58"),e=e(),g(),e))((()=>i("p",null,"每日用印情况统计图",-1))),ie=e({setup(e){const t=a(""),c=a(""),u=a([]),p=a({grid:{top:132,left:60,right:36},tooltip:{},legend:{top:56,itemWidth:10,itemHeight:1,itemStyle:{},textStyle:{color:"rgba(0, 0, 0, 0.85)",fontSize:"14px"}},toolbox:{top:4,show:!0,feature:{restore:{},saveAsImage:{}}},xAxis:{axisLabel:{interval:0,rotate:45},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},yAxis:{},series:[{name:"电子签章",type:"line",data:[100,1e3,1200,13e3,14e3,15e3,16e3,10900,13e3,12e4,11e3,1e3]},{name:"智能用印",type:"line",data:[1100,1e3,1200,113e3,66666,15e3,16e3,10900,13e3,12e4,11e3,1e3]},{name:"普通用印",type:"line",data:[100,10100,1200,13e3,14e3,3333,16e3,10900,13e3,12e4,11e3,1e3]}]});return(e,a)=>{const m=l("el-date-picker"),d=l("el-option"),g=l("el-select"),f=y;return n(),s("div",le,[i("div",ne,[se,i("div",null,[v(m,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:""},null,8,["modelValue"]),v(g,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),placeholder:"Select"},{default:b((()=>[(n(!0),s(o,null,r(u.value,(e=>(n(),h(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),v(f,{options:p.value},null,8,["options"])])}}},[["__scopeId","data-v-c2bf9b58"]]),oe=e=>(d("data-v-2a1a0b34"),e=e(),g(),e),re={class:"home-dus"},ce={class:"left"},ue=oe((()=>i("div",{class:"charts-title"},[i("p",null,"文件新增趋势"),i("div",null,[i("span",null,"本周"),i("span",null,"本月"),i("span",null,"全年")])],-1))),pe={class:"right"},me=oe((()=>i("p",{class:"title"},"文件类型下的文件数排名",-1))),ve={class:"list"},de={key:0,class:"iconpark-icon"},ge=["href"],fe={key:1,class:"sortp"},be={style:{width:"136px"}},he=e({setup(e){const t=a([{icon:"",name:"某某某类型",num:1e3,val:90},{icon:"",name:"某某某类型",num:1e3,val:80},{icon:"",name:"某某某类型",num:1e3,val:70},{icon:"",name:"某某某类型",num:1e3,val:60},{icon:"",name:"某某某类型",num:1e3,val:40},{icon:"",name:"某某某类型",num:1e3,val:20}]),c=a({barWidth:28,grid:{left:80,right:36,top:18},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},yAxis:{type:"value"},series:[{data:[2e5,4e5,9e5,5e5,5e5,5e5,5e5,5e5,5e5,5e5,5e5,5e5],type:"bar"}]});return(e,a)=>{const p=y,m=l("el-progress");return n(),s("div",re,[i("div",ce,[ue,v(p,{options:c.value},null,8,["options"])]),i("div",pe,[me,i("div",ve,[(n(!0),s(o,null,r(t.value,((e,t)=>(n(),s("div",{class:"item",key:t},[i("div",null,[t<3?(n(),s("svg",de,[i("use",{href:`#sort${t+1}`},null,8,ge)])):(n(),s("p",fe,u(`0${t+1}`),1))]),i("p",null,u(e.name),1),i("div",be,[v(m,{percentage:e.val},null,8,["percentage"])])])))),128))])])])}}},[["__scopeId","data-v-2a1a0b34"]]),ye={class:"system-home"},xe={class:"content"},Se=e({setup:e=>(e,t)=>(n(),s("div",ye,[v(x,{style:{padding:"16px"},free:!0},{default:b((()=>[i("div",xe,[v(f(W)),v(f(T)),v(f(X)),v(f(ae)),v(f(ie)),v(f(he))])])),_:1})]))},[["__scopeId","data-v-868f7d9f"]]);export{Se as default};
