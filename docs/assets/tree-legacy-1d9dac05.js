System.register(["./tree.vue_vue_type_style_index_0_scoped_c843ec9b_lang-legacy-4d311a3e.js","./chunk-vform-legacy-ec3e4e6b.js","./chunk-vue-legacy-ac482c0f.js"],(function(e,t){"use strict";var n,a,c,r,l,o,u,s,d,i,f,p,g;return{setters:[null,e=>{n=e.g},e=>{a=e.aA,c=e.ag,r=e.al,l=e.aF,o=e.as,u=e.o,s=e.x,d=e.bj,i=e.p,f=e.n,p=e.aT,g=e.aa}],execute:function(){const t={class:"components-tree"},y=["onClick"],h={key:0,class:"custom-tree-node-icon",src:"/zgj-web-fenbao/assets/tree-wenjian-d6df0ea4.svg",alt:""};e("c",n({props:{refs:{type:String,default:""},loadFn:{type:Function},type:{type:String,default:"0"},data:{type:Array,default:()=>[]},defaultProps:{type:Object,default:()=>({children:"children",label:"label"})},defaultAttribute:{type:Object,default:()=>({})},modelValue:{type:String,default:""}},emits:["node-click","check-change","check","current-change","load"],setup(e,{expose:n,emit:k}){const b=e,_=a(null);function m(e,t,n,a){k("node-click",e,t,n,a)}function C(e,t,n){k("check-change",e,t,n)}function v(e,t){k("check",e,t)}function j(e,t){k("current-change",e,t)}return n({setCurrentKey:function(e){_.value.setCurrentKey(e)}}),c((()=>{})),r((()=>{})),(n,a)=>{const c=l("el-tree");return o(),u("div",t,[s(c,g({ref_key:"tree",ref:_},b.defaultAttribute,{refs:e.refs,data:b.data,props:b.defaultProps,load:e.loadFn,onNodeClick:m,onCheckChange:C,onCheck:v,onCurrentChange:j,"current-node-key":b.modelValue}),{default:d((({node:e,data:t})=>[i("span",{class:"custom-tree-node",onClick:e=>{}},[t.children&&0!==t.children.length?f("",!0):(o(),u("img",h)),i("span",null,p(t[b.defaultProps.label]),1)],8,y)])),_:1},16,["refs","data","props","load","current-node-key"])])}}},[["__scopeId","data-v-c843ec9b"]]))}}}));
