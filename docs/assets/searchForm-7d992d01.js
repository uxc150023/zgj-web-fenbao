import{i as e,H as a,B as l,S as t,T as s}from"./chunk-vform-6b80d696.js";import{aA as o,ay as c,k as u,be as n,ag as d,aF as i,as as b,o as p,p as r,x as y,bj as m,F as v,aD as f,ae as h,a$ as x,n as k,w as V,aT as g,aa as U,bm as w,m as A,ac as D,aE as S,ad as C,U as B}from"./chunk-vue-0eb5cee7.js";import{_ as j}from"./ketanchude-51586196.js";import{K as I}from"./KDocumentTypeDialog-a877b983.js";const N="/zgj-web-fenbao/assets/anniu-xuanzhong-adff5261.svg",O={class:"components-searchForm"},z={class:"fromData"},q={key:0,class:"ap-box-cont input"},_={key:0,class:"ap-box-label-necessary"},T={class:"ap-box-contBox"},$={key:1,class:"ap-box-cont derivable"},L={key:0,class:"ap-box-label-necessary"},E={class:"ap-box-contBox width-0"},F=["onClick"],K=[r("img",{class:"ap-box-contBox-icon-img",src:j,alt:""},null,-1)],R={key:2,class:"ap-box-cont derivable"},H={key:0,class:"ap-box-label-necessary"},J={class:"ap-box-contBox width-0"},P=r("div",{class:"ap-box-contBox-icon"},[r("img",{class:"ap-box-contBox-icon-img",src:j,alt:""})],-1),G={key:3,class:"ap-box-cont select"},M={key:0,class:"ap-box-label-necessary"},Q={class:"ap-box-contBox"},W={key:4,class:"ap-box-cont picker"},X={key:0,class:"ap-box-label-necessary"},Y={class:"ap-box-contBox width-0"},Z={key:5,class:"ap-box-cont checkbox"},ee={key:0,class:"ap-box-label-necessary"},ae={key:6,class:"ap-box-cont radio"},le={class:"ap-box-autoBox"},te={key:7,class:"ap-box-cont cascader"},se={key:0,class:"ap-box-label-necessary"},oe={class:"ap-box-contBox"},ce={key:8,class:"ap-box-cont switch"},ue={key:0,class:"ap-box-label-necessary"},ne={class:"ap-box-contBox"},de={key:9,class:"ap-box-cont radioButton"},ie={key:0,class:"ap-box-label-necessary"},be={class:"ap-box-contBox"},pe=["onClick"],re=r("img",{class:"custom-button-checkIcon",src:N,alt:""},null,-1),ye={key:10,class:"ap-box-cont checkButton"},me={key:0,class:"ap-box-label-necessary"},ve={class:"ap-box-contBox"},fe=["onClick"],he=r("img",{class:"custom-button-checkIcon",src:N,alt:""},null,-1),xe={key:11,class:"ap-box-cont scopeInput"},ke={key:0,class:"ap-box-label-necessary"},Ve={class:"ap-box-contBox"},ge={class:"ap-box-contBox-start"},Ue=r("div",{class:"ap-box-contBox-cut"}," - ",-1),we={class:"ap-box-contBox-end"},Ae={key:12,class:"ap-box-cont custom"},De={key:0,class:"ap-box-label-necessary"},Se=["onClick"],Ce={key:0,class:"unfold-"},Be=r("img",{class:"unfold-icon",src:"/zgj-web-fenbao/assets/xiangxia-lan-b1289975.svg",alt:"",srcset:""},null,-1),je={key:1},Ie=r("img",{class:"unfold-icon",src:"/zgj-web-fenbao/assets/xiangshang-lan-49ab5dfe.svg",alt:"",srcset:""},null,-1),Ne=["onClick"],Oe={props:{refs:{type:String,default:""},type:{type:String,default:"0"},data:{type:Array,default:()=>[]},butData:{type:Array,default:()=>[]},style:{type:Object,default:()=>({lineStyle:{width:"calc(100% / 3)"},cutOffRuleStyle:{width:"100%"},labelStyle:{width:"100px"},butLayoutStyle:{width:"100%","justify-content":"center"}})},defaultAttribute:{type:Object,default:()=>({isUnfold:!1,"scrollbar-max-height":"auto","border-bottom":!0})}},emits:["clickSubmit","reloadData"],setup(j,{expose:N,emit:Oe}){const ze=j,qe=o(!1),_e=o(!1),Te=o([]),$e=o([]),Le=o([]),Ee=o(null),Fe=o(null),Ke=o(!1),Re=o(!1),He=o(null),Je=o(null),Pe=o(null),Ge=o(null),Me=c({props:{defaultAttribute:{isUnfold:!1,"scrollbar-max-height":"auto","border-bottom":!0}},cache:{cutOffRuleStyle:{width:"100%"},isUnfold:0,formData:[],showUnfold:!1}}),Qe=e("accountInfo")&&e("accountInfo").userInfo?e("accountInfo").userInfo.userId:"",We=o({userId:Qe}),Xe=u((()=>(e,a)=>{const l=["custom","checkbox","radio","switch","radioButton","checkButton"],t=[];return l.indexOf(e.type)>-1&&a<Me.cache.formData.length-1?{width:"100%"}:l.indexOf(e.type)>-1&&a===Me.cache.formData.length-1?{width:"auto","min-width":"calc(100% / 3 * 2 + 100px)"}:t.indexOf(e.type)>-1&&a<Me.cache.formData.length-1||t.indexOf(e.type)>-1&&a===Me.cache.formData.length-1?{width:"auto"}:{}}));function Ye(){if(ze.defaultAttribute)for(const e in ze.defaultAttribute)Me.props.defaultAttribute[e]=ze.defaultAttribute[e];ea()}const Ze=u({get:()=>ze.data});function ea(e,a){const t=e||Ze.value;let s=!1;ze.defaultAttribute.isUnfold&&(Me.cache.isUnfold=ze.defaultAttribute.isUnfold),t.forEach((e=>{if(e.inCommonUse||(s=!0),e.requestObj){"GET"===e.requestObj.method?e.requestObj.params=a:e.requestObj.data=a;const t=o(!1);"flow"!==e.requestObj.type||a||(t.value=!0),!t.value&&l(e.requestObj).then((a=>{e.options=a.data}))}})),Me.cache.showUnfold=s,aa(t)}function aa(e){const a=e||Ze.value;let l=[];0===Me.cache.isUnfold?a.map((e=>(e.inCommonUse&&l.push(e),e))):1===Me.cache.isUnfold&&(l=a),Me.cache.formData=l}function la(){Oe("reloadData")}n((()=>ze.data),(()=>{Me.cache.isUnfold=0,Ye()}));const ta={},sa=o(!0),oa=o(!0);const ca=e=>{const a=Me.cache.formData.findIndex((e=>e.id===Fe.value));a>-1&&(Me.cache.formData[a].defaultAttribute.multiple?Me.cache.formData[a].values=e.map((e=>e.id)):Me.cache.formData[a].values=e[0].id,Me.cache.formData[a].options=e.map((e=>({label:e.name,value:e.id}))))};function ua(e,a){Oe("clickSubmit",e,a)}function na(){0===Me.cache.isUnfold?Me.cache.isUnfold=1:1===Me.cache.isUnfold&&(Me.cache.isUnfold=0),aa()}function da(e){e||Oe("reloadData")}function ia(e,a){Ge.value=e.defaultAttribute.multiple?"checkbox":"radio","JyRelatedCompany"===e.defaultAttribute.type?(Ke.value=!0,Je.value=e.values):"JySelectSeal"===e.defaultAttribute.type&&(Re.value=!0,He.value=e.defaultAttribute.multiple?e.options:e.values),Pe.value=e.id}function ba(e){Ke.value=!1;const a=Me.cache.formData.findIndex((e=>e.id===Pe.value));a>-1&&(Me.cache.formData[a].defaultAttribute.multiple?(Me.cache.formData[a].values=e.map((e=>e.relatedCompanyId)),Me.cache.formData[a].options=e.map((e=>({label:e.relatedCompanyName,value:e.relatedCompanyId})))):(Me.cache.formData[a].values=e.relatedCompanyId,Me.cache.formData[a].options=[{label:e.relatedCompanyName,value:e.relatedCompanyId}]))}function pa(e){Re.value=!1;const a=Me.cache.formData.findIndex((e=>e.id===Pe.value));a>-1&&(Me.cache.formData[a].defaultAttribute.multiple?(Me.cache.formData[a].values=e.map((e=>e.sealId)),Me.cache.formData[a].options=e.map((e=>({label:e.sealName,value:e.sealId,...e})))):(Me.cache.formData[a].values=e.sealId,Me.cache.formData[a].options=[{label:e.sealName,value:e.sealId,...e}]))}const ra=()=>{qe.value=!1},ya=e=>{if(!e||0===e.length)return;const a=Me.cache.formData.findIndex((e=>e.id===Ee.value));a>-1&&(Me.cache.formData[a].defaultAttribute.multiple?Me.cache.formData[a].values=e.map((e=>e.id)):Me.cache.formData[a].values=e[0].id,Me.cache.formData[a].options=e.map((e=>({label:e.name,value:e.id}))))};return d((()=>{Ye()})),N({initFormData:ea}),(e,l)=>{const o=i("el-input"),c=i("el-option"),u=i("el-select"),n=i("el-date-picker"),d=i("el-checkbox"),j=i("el-radio"),N=i("el-radio-group"),Oe=i("el-cascader"),Pe=i("el-switch"),Qe=i("el-button"),Ye=i("el-scrollbar"),Ze=t,ea=s;return b(),p("div",O,[r("div",{class:D(["ap-dis",{"border-bottom":!1!==x(Me).props.defaultAttribute["border-bottom"]}])},[y(Ye,{"max-height":x(Me).props.defaultAttribute["scrollbar-max-height"],class:"fromData-scrollbar"},{default:m((()=>[r("div",z,[(b(!0),p(v,null,f(x(Me).cache.formData,((a,l)=>(b(),p("div",{class:"ap-box",key:l,style:h([ze.style.lineStyle,a.style,x(Xe)(a,l)])},["input"==a.type?(b(),p("div",q,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",_,"*")):k("",!0),V(" "+g(a.label),1)],4),r("div",T,[y(o,U({class:"width-100"},a.defaultAttribute,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,clearable:"",onKeyup:w(la,["enter"])}),null,16,["modelValue","onUpdate:modelValue","onKeyup"])])])):"dialog"==a.type?(b(),p("div",$,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",L," * ")):k("",!0),V(" "+g(a.label),1)],4),r("div",E,[y(u,U({modelValue:a.values,"onUpdate:modelValue":e=>a.values=e},a.defaultAttribute,{"tag-type":"waring",disabled:"",style:{width:"100%"},class:a.defaultAttribute.multiple&&a.values.length||!a.defaultAttribute.multiple&&a.values?"hasContent":"",onClick:e=>ia(a)}),{default:m((()=>[(b(!0),p(v,null,f(a.options,(e=>(b(),A(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1040,["modelValue","onUpdate:modelValue","class","onClick"]),r("div",{class:"ap-box-contBox-icon",onClick:e=>ia(a)},K,8,F)])])):"derivable"==a.type?(b(),p("div",R,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",H," * ")):k("",!0),V(" "+g(a.label),1)],4),r("div",J,[y(u,U({modelValue:a.values,"onUpdate:modelValue":e=>a.values=e},a.defaultAttribute,{ref_for:!0,ref:e=>((e,a)=>{e&&(ta[a.id]=e)})(e,a),"collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":2,style:{width:"100%"},"popper-class":"popperHidden",class:a.defaultAttribute.multiple&&a.values&&a.values.length||!a.defaultAttribute.multiple&&a.values?"hasContent":"",onClick:e=>function(e,a,l){if(ta[e.id].blur(),"fileType"===e.defaultAttribute.type)return _e.value=!0,sa.value=l,void(Fe.value=e.id);qe.value=!0,Fe.value=e.id,Ee.value=e.id,oa.value=l,"user"===e.defaultAttribute.type?(Te.value=["user"],Le.value=[]):(Te.value=["organ"],Le.value=[])}(a,0,a.defaultAttribute.multiple)}),{default:m((()=>[(b(!0),p(v,null,f(a.options,(e=>(b(),A(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1040,["modelValue","onUpdate:modelValue","class","onClick"]),P])])):"select"==a.type?(b(),p("div",G,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",M," * ")):k("",!0),V(" "+g(a.label),1)],4),r("div",Q,[y(u,U({class:"width-100"},a.defaultAttribute,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,clearable:"",multiple:!!a.defaultAttribute&&a.defaultAttribute.multiple,onChange:la,filterable:a.filterable}),{default:m((()=>[(b(!0),p(v,null,f(a.options,(e=>(b(),A(c,{key:e[a.optionValue||"value"],label:e[a.optionLabel||"label"],value:e[a.optionValue||"value"]},null,8,["label","value"])))),128))])),_:2},1040,["modelValue","onUpdate:modelValue","multiple","filterable"])])])):"picker"==a.type?(b(),p("div",W,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",X,"*")):k("",!0),V(" "+g(a.label),1)],4),r("div",Y,[y(n,U({class:"width-100"},a.defaultAttribute,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,onChange:da}),null,16,["modelValue","onUpdate:modelValue"])])])):"checkbox"==a.type?(b(),p("div",Z,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",ee,"*")):k("",!0),V(" "+g(a.label),1)],4),(b(!0),p(v,null,f(a.checkbox,((e,a)=>(b(),p("div",{class:"ap-box-autoBox checkbox",key:a},[y(d,U(e.defaultAttribute,{style:e.style,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a}),null,16,["style","modelValue","onUpdate:modelValue"])])))),128))])):"radio"==a.type?(b(),p("div",ae,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},g(a.label),5),r("div",le,[y(N,U(a.defaultAttribute,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,onChange:la}),{default:m((()=>[(b(!0),p(v,null,f(a.radio,((e,a)=>(b(),A(j,{key:a,label:e.label},{default:m((()=>[V(g(e.name),1)])),_:2},1032,["label"])))),128))])),_:2},1040,["modelValue","onUpdate:modelValue"])])])):"cascader"==a.type?(b(),p("div",te,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",se,"*")):k("",!0),V(" "+g(a.label),1)],4),r("div",oe,[y(Oe,U({class:"width-100",style:{width:"100%"}},a.defaultAttribute,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,onChange:la}),null,16,["modelValue","onUpdate:modelValue"])])])):"switch"==a.type?(b(),p("div",ce,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",ue,"*")):k("",!0),V(" "+g(a.label),1)],4),r("div",ne,[y(Pe,U(a.defaultAttribute,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e}),null,16,["modelValue","onUpdate:modelValue"])])])):"radioButton"==a.type?(b(),p("div",de,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",ie,"*")):k("",!0),V(" "+g(a.label),1)],4),r("div",be,[(b(!0),p(v,null,f(a.data,((e,l)=>(b(),p("div",{class:"button-contBox",key:l},[r("div",{class:D(["custom-button",{checked:!!e.checked}]),style:h(a.style),onClick:t=>function(e,a,l){a.checked?e[l].checked=!1:(e.forEach((e=>{e.checked=!1})),e[l].checked=!0)}(a.data,e,l)},[V(g(e.name)+" ",1),re],14,pe)])))),128))])])):"checkButton"==a.type?(b(),p("div",ye,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",me,"*")):k("",!0),V(" "+g(a.label),1)],4),r("div",ve,[(b(!0),p(v,null,f(a.data,((e,l)=>(b(),p("div",{class:"button-contBox",key:l},[r("div",{class:D(["custom-button",{checked:!!e.checked}]),style:h(a.style),onClick:t=>function(e,a,l){a.checked?e[l].checked=!1:e[l].checked=!0}(a.data,e,l)},[V(g(e.name)+" ",1),he],14,fe)])))),128))])])):k("",!0),"scopeInput"==a.type?(b(),p("div",xe,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",ke,"*")):k("",!0),V(" "+g(a.label),1)],4),r("div",Ve,[r("div",ge,[y(o,U({class:"width-100"},a.startAttribute,{modelValue:a.startValue,"onUpdate:modelValue":e=>a.startValue=e}),null,16,["modelValue","onUpdate:modelValue"])]),Ue,r("div",we,[y(o,U({class:"width-100"},a.endAttribute,{modelValue:a.endValue,"onUpdate:modelValue":e=>a.endValue=e}),null,16,["modelValue","onUpdate:modelValue"])])])])):"custom"==a.type?(b(),p("div",Ae,[r("div",{class:"ap-box-label",style:h(ze.style.labelStyle)},[a.isNecessary?(b(),p("span",De,"*")):k("",!0),V(" "+g(a.label),1)],4),(b(!0),p(v,null,f(a.data,((a,l)=>(b(),p("div",{class:"ap-box-contBox",key:l},[S(e.$slots,a.id)])))),128))])):k("",!0)],4)))),128)),r("div",{class:"butData",style:h(ze.style.butLayoutStyle)},[(b(!0),p(v,null,f(ze.butData,((a,l)=>(b(),p("div",{class:"ap-box",key:l,style:h(a.style)},["click"==a.type?(b(),p("div",{key:0,class:"ap-box-cont",onClick:e=>ua(a,l)},[y(Qe,C(B(a.defaultAttribute)),{default:m((()=>[V(g("重置"===a.name?e.$t("t-zgj-reset"):"查询"===a.name?e.$t("t-zgj-query"):"t-zgj-reset"===a.name?e.$t("t-zgj-reset"):"t-zgj-query"===a.name?e.$t("t-zgj-query"):"-"),1)])),_:2},1040)],8,Se)):k("",!0),"unfold"==a.type&&x(Me).cache.showUnfold?(b(),p("div",{key:1,class:"ap-box-cont unfold",onClick:na},[0==x(Me).cache.isUnfold?(b(),p("div",Ce,[V(g(e.$t("t-zgj-unfold"))+" ",1),Be])):1==x(Me).cache.isUnfold?(b(),p("div",je,[V(g(e.$t("t-zgj-fold"))+" ",1),Ie])):k("",!0)])):k("",!0),"text"==a.type?(b(),p("div",{key:2,class:"ap-box-cont",onClick:e=>ua(a,l)},g(a.name),9,Ne)):k("",!0)],4)))),128))],4)])])),_:3},8,["max-height"])],2),qe.value?(b(),A(x(a),{key:0,show:qe.value,"onUpdate:show":ra,searchSelected:Le.value,"onUpdate:searchSelected":ya,tabsShow:Te.value,multiple:oa.value,haveIncluded:!1},null,8,["show","searchSelected","tabsShow","multiple"])):k("",!0),y(Ze,{modelValue:Ke.value,"onUpdate:modelValue":l[0]||(l[0]=e=>Ke.value=e),onOnSubmit:ba,checkType:Ge.value,haveSelectList:Je.value},null,8,["modelValue","checkType","haveSelectList"]),y(ea,{modelValue:Re.value,"onUpdate:modelValue":l[1]||(l[1]=e=>Re.value=e),haveSelectList:He.value,checkType:Ge.value,onOnSubmit:pa},null,8,["modelValue","haveSelectList","checkType"]),y(x(I),{show:_e.value,"onUpdate:show":l[2]||(l[2]=e=>_e.value=e),searchSelected:$e.value,"onUpdate:searchSelected":ca,multiple:sa.value,queryParams:We.value},null,8,["show","searchSelected","multiple","queryParams"])])}}};export{Oe as _};
