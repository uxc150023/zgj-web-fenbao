import{_ as b,r as _,R as f,k as h,a as m,o as a,c as s,u as e,x as r,g as n,f as u,b as d,d as i,l as L}from"./main.962a6924.js";const v={class:"components-Layout Custom-button"},k={key:0,class:"ap-box-title"},g={key:1,class:"ap-box-breadcrumb"},x={key:2,class:"ap-box-tabs"},$={class:"ap-box-cont"},S={key:0,class:"ap-box-tree"},F={key:1,class:"ap-box-cutOffRule"},w={key:0,class:"ap-box-searchForm"},B={key:1,class:"ap-box-batch"},C={key:2,class:"ap-box-table"},N={key:3,class:"ap-box-pagination"},V={props:{refs:{type:String,default:""},type:{type:String,default:"0"},Layout:{type:String,default:""}},emits:[],setup(y,{emit:M}){const l=y,t=_({Layout:{},centStyle:{}});function p(){l.Layout&&l.Layout.split(",").map(o=>{t.Layout[o]=!0}),t.Layout.tree||(t.centStyle.width="100%")}return f(()=>{p()}),h(()=>{}),(o,R)=>{const c=m("a-scrollbar");return a(),s("div",v,[e(t).Layout.title?(a(),s("div",k,[r(o.$slots,"title",{},void 0,!0)])):n("",!0),e(t).Layout.breadcrumb?(a(),s("div",g,[r(o.$slots,"breadcrumb",{},void 0,!0)])):n("",!0),e(t).Layout.tabs?(a(),s("div",x,[r(o.$slots,"tabs",{},void 0,!0)])):n("",!0),u("div",$,[e(t).Layout.tree?(a(),s("div",S,[d(c,{type:"track",style:{height:"100%",overflow:"auto"},class:"ap-box-tree-scrollbar"},{default:i(()=>[u("div",null,[r(o.$slots,"tree",{},void 0,!0)])]),_:3})])):n("",!0),e(t).Layout.tree&&(e(t).Layout.searchForm||e(t).Layout.table)?(a(),s("div",F)):n("",!0),e(t).Layout.searchForm||e(t).Layout.table?(a(),s("div",{key:2,class:"ap-box-cent",style:L(e(t).centStyle)},[d(c,{style:{height:"100%",overflow:"auto"},class:"ap-box-cent-scrollbar"},{default:i(()=>[e(t).Layout.searchForm?(a(),s("div",w,[r(o.$slots,"searchForm",{},void 0,!0)])):n("",!0),e(t).Layout.batch?(a(),s("div",B,[r(o.$slots,"batch",{},void 0,!0)])):n("",!0),e(t).Layout.table?(a(),s("div",C,[r(o.$slots,"table",{},void 0,!0)])):n("",!0),e(t).Layout.pagination?(a(),s("div",N,[r(o.$slots,"pagination",{},void 0,!0)])):n("",!0)]),_:3})],4)):n("",!0),u("div",null,[r(o.$slots,"default",{},void 0,!0)])])])}}},E=b(V,[["__scopeId","data-v-45a3ab57"]]);export{E as c};
