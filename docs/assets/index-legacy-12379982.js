System.register(["./main-legacy-32c40b54.js","./Layout-legacy-8a369202.js"],(function(e,l){"use strict";var a,t,n,d,o,i,u,s,c,r,p,C,f,m,v,b,h,V,g,_=document.createElement("style");return _.textContent='.label-t[data-v-bbe893d3]{color:rgba(0,0,0,.85);line-height:40px;font-size:14px;margin-right:12px}.smart-terminal-container[data-v-00d54279]{width:100%;padding-top:20px}.smart-terminal-container .label-t[data-v-00d54279]{color:rgba(0,0,0,.85);line-height:40px;font-size:14px;margin-right:12px}.inner-container[data-v-4e919af3]{width:100%;height:100%;display:flex;flex-direction:column}.inner-container .inner-page-content[data-v-4e919af3]{flex:1;padding-left:30px;overflow-y:auto}.inner-container .inner-page-content .l-title[data-v-4e919af3]{position:relative;width:100%;font-size:16px;color:rgba(0,0,0,.85);padding-bottom:6px;border-bottom:1px solid rgba(0,0,0,.06);margin:20px 0}.inner-container .inner-page-content .l-title[data-v-4e919af3]:before{content:"";position:absolute;top:4px;left:-10px;width:3px;height:20px;background:var(--jy-primary-6)}.inner-container .inner-page-content .label-t[data-v-4e919af3]{color:rgba(0,0,0,.85);line-height:40px;font-size:14px;margin-right:12px}.inner-container .inner-footer[data-v-4e919af3]{height:60px;border-top:1px solid rgba(0,0,0,.06);display:flex;justify-content:center;align-items:center;flex-shrink:0}.components-Layout1[data-v-f3ee9bcf]{margin:0%;width:100%;height:100%;display:flex;align-content:flex-start;justify-content:flex-start;align-items:flex-start;flex-direction:column;padding-top:.7142857143rem;padding-right:0rem;background:#fff;position:relative}.ap-box-title[data-v-f3ee9bcf]{width:100%;padding:0rem 1.4285714286rem .5rem;font-size:var(--jy-font-size-title-2);box-sizing:border-box}\n',document.head.appendChild(_),{setters:[e=>{a=e._,t=e.o,n=e.c,d=e.h,o=e.r,i=e.a,u=e.w,s=e.u,c=e.y,r=e.z,p=e.m,C=e.g,f=e.f,m=e.l,v=e.v,b=e.V,h=e.cy,V=e.aR},e=>{g=e.c}],execute:function(){const l=a({},[["render",function(e,l){return t(),n("div",null," file ")}]]),_=e=>(c("data-v-bbe893d3"),e=e(),r(),e),w=_((()=>p("div",{class:"label-t"},"附件大小",-1))),x=_((()=>p("div",{class:"label-t"},"允许批量文件归档",-1))),y=a({setup(e){const l=d({fileSize:"",FileArchive:!1});return(e,a)=>{const d=o("el-input"),c=o("el-form-item"),r=o("el-col"),p=o("el-row"),C=o("el-switch"),f=o("el-form");return t(),n("div",null,[i(f,{model:s(l),"label-width":"160px",style:{"margin-top":"20px"}},{default:u((()=>[i(p,null,{default:u((()=>[i(r,{span:24},{default:u((()=>[i(c,null,{label:u((()=>[w])),default:u((()=>[i(d,{modelValue:s(l).fileSize,"onUpdate:modelValue":a[0]||(a[0]=e=>s(l).fileSize=e),placeholder:"请输入",size:"large"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(p,null,{default:u((()=>[i(r,{span:24},{default:u((()=>[i(c,null,{label:u((()=>[x])),default:u((()=>[i(C,{modelValue:s(l).FileArchive,"onUpdate:modelValue":a[1]||(a[1]=e=>s(l).FileArchive=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])}}},[["__scopeId","data-v-bbe893d3"]]),k=e=>(c("data-v-00d54279"),e=e(),r(),e),M={class:"smart-terminal-container"},T=k((()=>p("div",{class:"label-t"},"多设备授权",-1))),H=k((()=>p("div",{class:"label-t"},"工作台归档图片自动剪裁",-1))),Z=k((()=>p("div",{class:"label-t"},"APP归档图片自动剪裁",-1))),S=k((()=>p("div",{class:"label-t"},"物品领用截止时间",-1))),U=C("     小时 "),R=a({setup(e){const l=d({ApprovalProcess:!0,RecheckCover:!0,RepeatSeal:!0,ResetArchive:!0,BatchArchiving:!0,sealEndTime:0,noSealEndTime:0});return(e,a)=>{const d=o("el-switch"),c=o("el-form-item"),r=o("el-col"),p=o("el-row"),C=o("el-input-number"),f=o("el-form");return t(),n("div",M,[i(f,{model:s(l),"label-width":"180px"},{default:u((()=>[i(p,null,{default:u((()=>[i(r,{span:8},{default:u((()=>[i(c,null,{label:u((()=>[T])),default:u((()=>[i(d,{modelValue:s(l).ApprovalProcess,"onUpdate:modelValue":a[0]||(a[0]=e=>s(l).ApprovalProcess=e)},null,8,["modelValue"])])),_:1})])),_:1}),i(r,{span:8},{default:u((()=>[i(c,null,{label:u((()=>[H])),default:u((()=>[i(d,{modelValue:s(l).RecheckCover,"onUpdate:modelValue":a[1]||(a[1]=e=>s(l).RecheckCover=e)},null,8,["modelValue"])])),_:1})])),_:1}),i(r,{span:8},{default:u((()=>[i(c,null,{label:u((()=>[Z])),default:u((()=>[i(d,{modelValue:s(l).RepeatSeal,"onUpdate:modelValue":a[2]||(a[2]=e=>s(l).RepeatSeal=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(p,null,{default:u((()=>[i(r,{span:24},{default:u((()=>[i(c,null,{label:u((()=>[S])),default:u((()=>[i(C,{modelValue:s(l).sealEndTime,"onUpdate:modelValue":a[3]||(a[3]=e=>s(l).sealEndTime=e)},null,8,["modelValue"]),U])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])}}},[["__scopeId","data-v-00d54279"]]),A=e=>(c("data-v-4e919af3"),e=e(),r(),e),L={class:"inner-container"},E={class:"inner-page-content"},F=A((()=>p("div",{class:"l-title"},"流程配置",-1))),z=A((()=>p("div",{class:"label-t"},"印章审批流程",-1))),B=A((()=>p("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z",fill:"black","fill-opacity":"0.25"})],-1))),P=A((()=>p("div",{class:"label-t"},"盖后复核",-1))),j=A((()=>p("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z",fill:"black","fill-opacity":"0.25"})],-1))),I=A((()=>p("div",{class:"label-t"},"允许重复用印",-1))),D=A((()=>p("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z",fill:"black","fill-opacity":"0.25"})],-1))),N=A((()=>p("div",{class:"label-t"},"允许重置归档",-1))),G=A((()=>p("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z",fill:"black","fill-opacity":"0.25"})],-1))),O=A((()=>p("div",{class:"label-t"},"允许批量文件归档",-1))),X=A((()=>p("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z",fill:"black","fill-opacity":"0.25"})],-1))),Y=A((()=>p("div",{class:"label-t"},"自动结束用印时间",-1))),q=A((()=>p("div",{class:"label-t"},"未用印自动结束时间",-1))),J=A((()=>p("div",{class:"l-title"},"用印配置",-1))),K=A((()=>p("div",{class:"label-t"},"盖章采集人脸",-1))),Q=C("首次进入采集"),W=C("每个印章首次进入采集"),$=C("每次进入都采集"),ee=A((()=>p("div",{class:"label-t"},"外借电子围栏",-1))),le=A((()=>p("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z",fill:"black","fill-opacity":"0.25"})],-1))),ae=A((()=>p("div",{class:"label-t"},"盖章请求等待时间",-1))),te=A((()=>p("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z",fill:"black","fill-opacity":"0.25"})],-1))),ne=C("   秒 "),de=A((()=>p("div",{class:"label-t"},"封标/骑缝盖章单次时间",-1))),oe=C("  秒 "),ie=A((()=>p("div",{class:"label-t"},"延时缩回",-1))),ue=A((()=>p("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z",fill:"black","fill-opacity":"0.25"})],-1))),se=C("  秒 "),ce=A((()=>p("div",{class:"label-t"},"盖章中拍照时机",-1))),re={class:"inner-footer"},pe=C("保存"),Ce=C("重置"),fe=a({setup(e){const l=d({ApprovalProcess:!0,RecheckCover:!0,RepeatSeal:!0,ResetArchive:!0,BatchArchiving:!0,sealEndTime:0,noSealEndTime:0}),a=d({FaceCollection:!1,FirstFace:1,waitSealTime:0,oneTime:0,DelayTime:0,checkList:[]});return(e,d)=>{const c=o("el-tooltip"),r=o("el-switch"),C=o("el-form-item"),v=o("el-col"),b=o("el-row"),h=o("el-input-number"),V=o("el-form"),g=o("el-radio"),_=o("el-radio-group"),w=o("el-checkbox"),x=o("el-checkbox-group"),y=o("el-button");return t(),n("div",L,[p("div",E,[F,i(V,{model:s(l),"label-width":"160px"},{default:u((()=>[i(b,null,{default:u((()=>[i(v,{span:8},{default:u((()=>[i(C,null,{label:u((()=>[z,i(c,{effect:"dark",content:"印章审批流程",placement:"bottom"},{default:u((()=>[B])),_:1})])),default:u((()=>[i(r,{modelValue:s(l).ApprovalProcess,"onUpdate:modelValue":d[0]||(d[0]=e=>s(l).ApprovalProcess=e)},null,8,["modelValue"])])),_:1})])),_:1}),i(v,{span:8},{default:u((()=>[i(C,null,{label:u((()=>[P,i(c,{effect:"dark",content:"盖后复核",placement:"bottom"},{default:u((()=>[j])),_:1})])),default:u((()=>[i(r,{modelValue:s(l).RecheckCover,"onUpdate:modelValue":d[1]||(d[1]=e=>s(l).RecheckCover=e)},null,8,["modelValue"])])),_:1})])),_:1}),i(v,{span:8},{default:u((()=>[i(C,null,{label:u((()=>[I,i(c,{effect:"dark",content:"允许重复用印",placement:"bottom"},{default:u((()=>[D])),_:1})])),default:u((()=>[i(r,{modelValue:s(l).RepeatSeal,"onUpdate:modelValue":d[2]||(d[2]=e=>s(l).RepeatSeal=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(b,null,{default:u((()=>[i(v,{span:8},{default:u((()=>[i(C,null,{label:u((()=>[N,i(c,{effect:"dark",content:"允许重置归档",placement:"bottom"},{default:u((()=>[G])),_:1})])),default:u((()=>[i(r,{modelValue:s(l).ResetArchive,"onUpdate:modelValue":d[3]||(d[3]=e=>s(l).ResetArchive=e)},null,8,["modelValue"])])),_:1})])),_:1}),i(v,{span:8},{default:u((()=>[i(C,null,{label:u((()=>[O,i(c,{effect:"dark",content:"允许批量文件归档",placement:"bottom"},{default:u((()=>[X])),_:1})])),default:u((()=>[i(r,{modelValue:s(l).BatchArchiving,"onUpdate:modelValue":d[4]||(d[4]=e=>s(l).BatchArchiving=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(b,null,{default:u((()=>[i(v,{span:8},{default:u((()=>[i(C,null,{label:u((()=>[Y])),default:u((()=>[i(h,{modelValue:s(l).sealEndTime,"onUpdate:modelValue":d[5]||(d[5]=e=>s(l).sealEndTime=e)},null,8,["modelValue"])])),_:1})])),_:1}),i(v,{span:8},{default:u((()=>[i(C,null,{label:u((()=>[q])),default:u((()=>[i(h,{modelValue:s(l).noSealEndTime,"onUpdate:modelValue":d[6]||(d[6]=e=>s(l).noSealEndTime=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),J,i(V,{model:s(a),"label-width":"180px"},{default:u((()=>[i(b,null,{default:u((()=>[i(v,{span:16},{default:u((()=>[i(C,null,{label:u((()=>[K])),default:u((()=>[i(r,{modelValue:s(a).FaceCollection,"onUpdate:modelValue":d[7]||(d[7]=e=>s(a).FaceCollection=e),style:{"margin-right":"4px"}},null,8,["modelValue"]),s(a).FaceCollection?(t(),f(_,{key:0,modelValue:s(a).FirstFace,"onUpdate:modelValue":d[8]||(d[8]=e=>s(a).FirstFace=e)},{default:u((()=>[i(g,{label:1},{default:u((()=>[Q])),_:1}),i(g,{label:2},{default:u((()=>[W])),_:1}),i(g,{label:3},{default:u((()=>[$])),_:1})])),_:1},8,["modelValue"])):m("",!0)])),_:1})])),_:1}),i(v,{span:8},{default:u((()=>[i(C,null,{label:u((()=>[ee,i(c,{effect:"dark",content:"外借电子围栏",placement:"bottom"},{default:u((()=>[le])),_:1})])),default:u((()=>[i(r,{modelValue:s(l).RepeatSeal,"onUpdate:modelValue":d[9]||(d[9]=e=>s(l).RepeatSeal=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(b,null,{default:u((()=>[i(v,{span:8},{default:u((()=>[i(C,null,{label:u((()=>[ae,i(c,{effect:"dark",content:"盖章请求等待时间",placement:"bottom"},{default:u((()=>[te])),_:1})])),default:u((()=>[i(h,{modelValue:s(a).waitSealTime,"onUpdate:modelValue":d[10]||(d[10]=e=>s(a).waitSealTime=e)},null,8,["modelValue"]),ne])),_:1})])),_:1}),i(v,{span:8},{default:u((()=>[i(C,null,{label:u((()=>[de])),default:u((()=>[i(h,{modelValue:s(a).oneTime,"onUpdate:modelValue":d[11]||(d[11]=e=>s(a).oneTime=e)},null,8,["modelValue"]),oe])),_:1})])),_:1}),i(v,{span:8},{default:u((()=>[i(C,null,{label:u((()=>[ie,i(c,{effect:"dark",content:"延时缩回",placement:"bottom"},{default:u((()=>[ue])),_:1})])),default:u((()=>[i(h,{modelValue:s(a).DelayTime,"onUpdate:modelValue":d[12]||(d[12]=e=>s(a).DelayTime=e)},null,8,["modelValue"]),se])),_:1})])),_:1})])),_:1}),i(b,null,{default:u((()=>[i(v,{span:24},{default:u((()=>[i(C,null,{label:u((()=>[ce])),default:u((()=>[i(x,{modelValue:s(a).checkList,"onUpdate:modelValue":d[13]||(d[13]=e=>s(a).checkList=e)},{default:u((()=>[i(w,{label:"扫码时拍照"}),i(w,{label:"下盖时拍照"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(v,{span:8}),i(v,{span:8})])),_:1})])),_:1},8,["model"])]),p("div",re,[i(y,{type:"primary"},{default:u((()=>[pe])),_:1}),i(y,null,{default:u((()=>[Ce])),_:1})])])}}},[["__scopeId","data-v-4e919af3"]]),me=a({},[["render",function(e,l){return t(),n("div",null," system ")}]]),ve={class:"components-Layout1"},be=(e=>(c("data-v-f3ee9bcf"),e=e(),r(),e))((()=>p("div",{class:"ap-box-title"},"全局参数设置",-1))),he={style:{"padding-left":"20px"}};e("default",a({setup(e){const a=v("1"),n=v([{name:"t-smart-use-seal-setting",value:"1"},{name:"t-file-setting",value:"2"},{name:"t-smart-terminal-setting",value:"3"},{name:"t-zgj-F_SYS_UNIT_EXPORT_TEMPLATE_SETTING",value:"4"}]),d={1:fe,2:y,3:R,4:l,5:me};return(e,l)=>(t(),f(g,{style:{padding:"16px 24px"},free:!0},{default:u((()=>[p("div",ve,[be,p("div",he,[i(b,{active:a.value,label:n.value,"onUpdate:active":l[0]||(l[0]=e=>a.value=e),border:!1},null,8,["active","label"])]),(t(),f(h,null,[(t(),f(V(d[a.value])))],1024))])])),_:1}))}},[["__scopeId","data-v-f3ee9bcf"]]))}}}));