import{E as _,k as L,M as z,$ as H,N as O,_ as $,o as a,c as i,y as f,g as m,s as T,n as p,u as w,l as C,f as o,t as g,x as M,p as V,j as N}from"./main.962a6924.js";function D(){let s=_(!0),l=_(null);const n=new Event("mousedown",{bubbles:!0}),k=new Event("mouseup",{bubbles:!0}),r=()=>{document.dispatchEvent(n),document.dispatchEvent(k),s.value=!0},c=e=>{const t=e.target.classList;if(t&&t.contains("el-select__caret")||t&&t.contains("el-input__inner")){s.value=!1;return}s.value||r()},d=e=>{s.value||e.target.classList.length!==0&&e.target.classList.contains("el-select-dropdown__item")||e.target.parentNode.classList!==void 0&&e.target.parentNode.classList.contains("el-select-dropdown__item")||r()},h=e=>{l.value[e+"EventListener"]("mousedown",c),window[e+"EventListener"]("mousewheel",d),window[e+"EventListener"]("DOMMouseScroll",d)};L(()=>{l.value=z().ctx.$root.$el,l.value.addFakeClickOutSideEventCount=l.value.addFakeClickOutSideEventCount||0,!l.value.addFakeClickOutSideEventCount&&H(()=>{h("add")}),l.value.addFakeClickOutSideEventCount+=1}),O(()=>{h("remove"),l.value.addFakeClickOutSideEventCount-=1})}const v=s=>(V("data-v-d3229d92"),s=s(),N(),s),F={key:0,class:"h-title"},I={class:"fullscreen-icon"},X={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},Y=v(()=>o("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1)),K=v(()=>o("path",{d:"M20 3h2v6h-2V5h-4V3h4zM4 3h4v2H4v4H2V3h2zm16 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z",fill:"rgba(0,0,0,0.25)"},null,-1)),j=[Y,K],U={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},q=v(()=>o("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1)),A=v(()=>o("path",{d:"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z",fill:"rgba(0,0,0,0.25)"},null,-1)),G=[q,A],J=v(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"26",height:"26"},[o("path",{fill:"none",d:"M0 0h24v24H0z"}),o("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z",fill:"rgba(0,0,0,0.25)"})],-1)),P=[J],Q={class:"content-custom"},R={class:"footer-custom"},W={props:{show:{type:Boolean,default:!1},title:{type:String,default:null},modal:{type:Boolean,default:!0},draggable:{type:Boolean,default:!0},width:{type:Number,default:800},height:{type:Number,default:500},fullscreen:{type:Boolean,default:!0},confirmText:{type:String,default:"\u786E\u5B9A"},concelText:{type:String,default:"\u53D6\u6D88"},closeOnClickModal:{type:Boolean,default:!1},oneBtn:{type:Boolean,default:!1},centerBtn:{type:Boolean,default:!1}},emits:["update:show","close"],setup(s,{emit:l}){const n=s;D();const k={mounted(e,t){let u=e.firstElementChild;if(!t.value)return;const y=b=>{let S=b.clientX-e.offsetLeft,B=b.clientY-e.offsetTop;const E=x=>{e.style.left=x.clientX-S+"px",e.style.top=x.clientY-B+"px"};document.addEventListener("mousemove",E),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",E)})};u.addEventListener("mousedown",y)}};let r=_(!0);const c=(e,t,u)=>{if(!t)return;if(u==="confrim"){l("close",!0);return}r.value=e;let y=setTimeout(()=>{clearTimeout(y),l("update:show",e),l("close"),r.value=!e},300)};let d=_(!1);const h=()=>{d.value=!d.value};return(e,t)=>(a(),i("div",{class:p(["custom-dialog",w(r)?"animation-open":"animation-close"]),style:C({display:n.show?"block":"none"})},[n.modal?(a(),i("div",{key:0,class:"mask",onClick:t[0]||(t[0]=f(u=>c(!1,n.closeOnClickModal),["stop"]))})):m("",!0),T((a(),i("div",{class:p(["dialog",w(d)?"fullscreen-dialog":"middle-dialog"]),style:C({width:n.width+"px",height:n.height+"px"})},[o("div",{class:"header-custom",style:C({cursor:w(d)?"":"move"})},[n.title?(a(),i("div",F,[o("div",null,g(n.title),1),o("div",I,[n.fullscreen?(a(),i("div",{key:0,onClick:h,style:{"margin-right":"4px"}},[w(d)?(a(),i("svg",U,G)):(a(),i("svg",X,j))])):m("",!0),o("div",{onClick:t[1]||(t[1]=u=>c(!1,!0))},P)])])):M(e.$slots,"header",{key:1},void 0,!0)],4),o("div",Q,[M(e.$slots,"default",{},void 0,!0)]),o("div",R,[s.oneBtn?m("",!0):(a(),i("div",{key:0,class:p(["default-footer-btns",n.centerBtn?"one-btn":"two-btn"])},[o("div",{class:"confirm btn",onClick:t[2]||(t[2]=f(u=>c(!1,!0,"confrim"),["stop"]))},g(n.confirmText),1),o("div",{class:"concel btn",onClick:t[3]||(t[3]=f(u=>c(!1,!0),["stop"]))},g(n.concelText),1)],2)),s.oneBtn?(a(),i("div",{key:1,class:p(["default-footer-btns",n.centerBtn?"two-btn":"one-btn"])},[o("div",{class:"confirm btn",onClick:t[4]||(t[4]=f(u=>c(!1,!0),["stop"]))},g(n.confirmText),1)],2)):m("",!0)])],6)),[[k,!!n.draggable]])],6))}},ee=$(W,[["__scopeId","data-v-d3229d92"]]);export{ee as K};
