System.register(["./JyTabs.vue_vue_type_style_index_0_scoped_5e06bfe2_lang-legacy-bb1152fe.js","./main-legacy-32c40b54.js"],(function(e,a){"use strict";var t,n,c,l,o,i,m,s,u,d,r,p,v,b,f,y;return{setters:[null,e=>{t=e._,n=e.h,c=e.i,l=e.j,o=e.k,i=e.r,m=e.o,s=e.c,u=e.m,d=e.a,r=e.w,p=e.F,v=e.e,b=e.f,f=e.u,y=e.p}],execute:function(){const a={class:"components-tabs"},g={props:{refs:{type:String,default:""},type:{type:String,default:"0"},cancelBottomLine:{type:Boolean,default:!1},data:{type:Array,default:()=>[]},activeName:{type:String,default:""}},emits:["tab-change","getActiveName"],setup(e,{emit:t}){const g=e,_=n({activeName:"",data:[],cancelBottomLine:!1});function N(e,a){t("tab-change",_.activeName)}function B(){_.activeName=g.activeName,_.data=g.data,_.cancelBottomLine=g.cancelBottomLine}return c(g,((e,a)=>{B()})),l((()=>{B(),t("getActiveName",_.activeName)})),o((()=>{})),(e,t)=>{const n=i("el-tab-pane"),c=i("el-tabs");return m(),s("div",a,[u("div",{class:y(["ap-box",{cancelBottomLine:f(_).cancelBottomLine}])},[d(c,{modelValue:f(_).activeName,"onUpdate:modelValue":t[0]||(t[0]=e=>f(_).activeName=e),class:"demo-tabs",onTabChange:N},{default:r((()=>[(m(!0),s(p,null,v(f(_).data,((a,t)=>(m(),b(n,{label:e.$t(a.label),name:a.name,key:t},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])],2)])}}};e("c",t(g,[["__scopeId","data-v-5e06bfe2"]]))}}}));