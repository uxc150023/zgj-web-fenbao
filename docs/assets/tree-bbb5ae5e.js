/* empty css                                                             */import{g as e}from"./chunk-vform-6b80d696.js";import{aA as t,ag as a,al as n,aF as c,as as r,o as s,x as o,bj as l,p as d,n as u,aT as i,aa as p}from"./chunk-vue-0eb5cee7.js";const f={class:"components-tree"},h=["onClick"],g={key:0,class:"custom-tree-node-icon",src:"/zgj-web-fenbao/assets/tree-wenjian-d6df0ea4.svg",alt:""},k=e({props:{refs:{type:String,default:""},loadFn:{type:Function},type:{type:String,default:"0"},data:{type:Array,default:()=>[]},defaultProps:{type:Object,default:()=>({children:"children",label:"label"})},defaultAttribute:{type:Object,default:()=>({})},modelValue:{type:String,default:""}},emits:["node-click","check-change","check","current-change","load"],setup(e,{expose:k,emit:y}){const m=e,b=t(null);function _(e,t,a,n){y("node-click",e,t,a,n)}function C(e,t,a){y("check-change",e,t,a)}function j(e,t){y("check",e,t)}function v(e,t){y("current-change",e,t)}return k({setCurrentKey:function(e){b.value.setCurrentKey(e)}}),a((()=>{})),n((()=>{})),(t,a)=>{const n=c("el-tree");return r(),s("div",f,[o(n,p({ref_key:"tree",ref:b},m.defaultAttribute,{refs:e.refs,data:m.data,props:m.defaultProps,load:e.loadFn,onNodeClick:_,onCheckChange:C,onCheck:j,onCurrentChange:v,"current-node-key":m.modelValue}),{default:l((({node:e,data:t})=>[d("span",{class:"custom-tree-node",onClick:e=>{}},[t.children&&0!==t.children.length?u("",!0):(r(),s("img",g)),d("span",null,i(t[m.defaultProps.label]),1)],8,h)])),_:1},16,["refs","data","props","load","current-node-key"])])}}},[["__scopeId","data-v-c843ec9b"]]);export{k as c};
