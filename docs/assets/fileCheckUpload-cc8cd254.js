import{ay as s,ag as l,al as e,aF as a,as as i,o,p as t,aT as d,x as n,bj as c,F as f,aD as u,w as p,a$ as g,bl as r,bb as v,ac as b,n as m,aw as x,at as w}from"./chunk-vue-0eb5cee7.js";import{g as h}from"./chunk-vform-6b80d696.js";const j="/zgj-web-fenbao/assets/add-file-00b7521c.svg",U="/zgj-web-fenbao/assets/add-icon-4f15eba1.svg",L="/zgj-web-fenbao/assets/icon-doc-9c65de9f.svg",k="/zgj-web-fenbao/assets/icon-pdf-2f424dcd.svg",I="/zgj-web-fenbao/assets/icon-xls-bf791864.svg",y=s=>(x("data-v-61b30ffd"),s=s(),w(),s),_={class:"file-check-upload"},z={class:"apply-name"},R={class:"files-base"},V={class:"files-radio files-wrap"},O=y((()=>t("div",{class:"files-title"},[t("div",{class:"files-title-l"},[p("原始文件"),t("span",null,"勾选需要比对的文件（仅可选择一个文件）")])],-1))),N={class:"files-content"},S=["src"],$={class:"upload-file files-wrap"},q={class:"files-title"},C=y((()=>t("div",{class:"files-title-l"},[p("目标文件"),t("span",null,"上传需要比对的文件（仅可选择一个文件）")],-1))),F={class:"files-title-r"},A=y((()=>t("img",{src:"/zgj-web-fenbao/assets/add-icon-4f15eba1.svg"},null,-1))),D=p(" 继续添加 "),M=y((()=>t("img",{src:"/zgj-web-fenbao/assets/add-file-00b7521c.svg",style:{"margin-bottom":"20px"}},null,-1))),T={key:0,class:"upload-list"},B=["src"],E={class:"iconpark-icon"},G=["onClick"],H={class:"el-upload-tip"},J={class:"row row-1"},K=y((()=>t("div",{class:"row row-2"},"（只支持docx、doc、pdf、xls、xlsx类型文件）",-1))),P=y((()=>t("div",{class:"row row-3"},"（单个文件大小不能超过199M）",-1))),Q=h({props:{data:{type:Object,default:()=>({})}},emits:["tab-change","getActiveName"],setup(x,{emit:w}){const h=x,y=s({filesRadio:1,fileIconImg:{doc:"icon-doc.svg",docx:"icon-doc.svg",pdf:"icon-pdf.svg",xls:"icon-xls.svg",xlsx:"icon-xls.svg"},filesRadioSelect:1,fileUploadList:[]});function Q(s){const l=s.name.lastIndexOf(".")+1,e=s.name.substr(l);-1==["doc","docx","xls","xlsx","pdf"].indexOf(e)?this.$message({message:"请上传正确文件格式的文件！",type:"warning"}):y.fileUploadList.push(s)}function W(s){}function X(s){const l=s.lastIndexOf(".")+1,e=s.substr(l);return new URL(Object.assign({"../../../assets/svg/upload/add-file.svg":j,"../../../assets/svg/upload/add-icon.svg":U,"../../../assets/svg/upload/icon-doc.svg":L,"../../../assets/svg/upload/icon-pdf.svg":k,"../../../assets/svg/upload/icon-xls.svg":I})[`../../../assets/svg/upload/${function(s){for(const l in y.fileIconImg)if(s===l)return y.fileIconImg[l]}(e)}`],self.location).href}return l((()=>{})),e((()=>{})),(s,l)=>{const e=a("el-radio"),x=a("el-radio-group"),w=a("el-upload");return i(),o("div",_,[t("div",z,d(h.data.name),1),t("div",R,[t("div",V,[O,t("div",N,[n(x,{modelValue:g(y).filesRadio,"onUpdate:modelValue":l[0]||(l[0]=s=>g(y).filesRadio=s)},{default:c((()=>[(i(!0),o(f,null,u(h.data.files,((s,l)=>(i(),o("div",{class:"files-item",key:l},[n(e,{label:s.label},{default:c((()=>[t("img",{src:X(s.fileName)},null,8,S),p(d(s.fileName),1)])),_:2},1032,["label"])])))),128))])),_:1},8,["modelValue"])])]),t("div",$,[t("div",q,[C,t("div",F,[r(n(w,{class:"upload-ele-btn",drag:"",multiple:"",action:"","http-request":W,"on-change":Q,"show-file-list":!1},{default:c((()=>[A,D])),_:1},512),[[v,g(y).fileUploadList.length>0]])])]),t("div",{class:b(["files-content upload-exra",{"upload-exra-file":g(y).fileUploadList.length>0}])},[r(n(w,{class:"upload-ele",drag:"",multiple:"",action:"","http-request":W,"on-change":Q,"show-file-list":!1},{default:c((()=>[M])),_:1},512),[[v,g(y).fileUploadList.length<=0]]),g(y).fileUploadList.length>0?(i(),o("div",T,[n(x,{modelValue:g(y).filesRadioSelect,"onUpdate:modelValue":l[1]||(l[1]=s=>g(y).filesRadioSelect=s)},{default:c((()=>[(i(!0),o(f,null,u(g(y).fileUploadList,((s,l)=>(i(),o("div",{class:"files-item",key:l},[n(e,{label:s.uid},{default:c((()=>[t("img",{src:X(s.name)},null,8,B),p(d(s.name),1)])),_:2},1032,["label"]),(i(),o("svg",E,[t("use",{href:"#icon",onClick:s=>function(s){y.fileUploadList.splice(s,1)}(l)},null,8,G)]))])))),128))])),_:1},8,["modelValue"])])):m("",!0),t("div",H,[r(t("div",J,"点击上传，或将文件拖拽到此处",512),[[v,g(y).fileUploadList.length<=0]]),K,P])],2)])])])}}},[["__scopeId","data-v-61b30ffd"]]);export{Q as f};
