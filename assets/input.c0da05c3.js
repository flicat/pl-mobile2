import{g as e,q as l,Q as a,R as u,r as t,o as n,d as r,I as p,O as v,e as d,C as o}from"./vendor.6f33ac2d.js";const s={setup(){const a=e(),u=l(""),t=l(null),{$toast:n}=a.appContext.config.globalProperties;return{value:u,input:t,validate:async()=>{try{await t.value.validate(),n("校验成功！")}catch(e){n("校验失败: "+e)}},rules:[{required:!0,message:"请输入",trigger:"blur"}]}}};a("data-v-4db2133c");const c={class:"content"},i=d("h3",null,"基础用法",-1),b=d("h3",null,"尺寸大小",-1),h=d("h3",null,"禁用",-1),f=d("h3",null,"标题折行",-1),y=d("h3",null,"图标填充",-1),x=d("h3",null,"表单校验",-1),U=o("表单校验");u(),s.render=function(e,l,a,u,d,o){const s=t("pl-input"),m=t("pl-icon"),g=t("pl-button"),w=t("pl-cell");return n(),r("div",c,[i,p(s,{placeholder:"姓名、手机、电话",type:"text",value:u.value,"onUpdate:value":l[0]||(l[0]=e=>u.value=e),size:"normal",clearable:""},null,8,["value"]),b,p(s,{label:"请输入：",placeholder:"姓名、手机、电话",type:"text",value:u.value,"onUpdate:value":l[1]||(l[1]=e=>u.value=e),size:"small"},null,8,["value"]),p(s,{label:"请输入：",placeholder:"姓名、手机、电话",type:"text",value:u.value,"onUpdate:value":l[2]||(l[2]=e=>u.value=e),size:"normal"},null,8,["value"]),p(s,{label:"请输入：",placeholder:"姓名、手机、电话",type:"text",value:u.value,"onUpdate:value":l[3]||(l[3]=e=>u.value=e),size:"large"},null,8,["value"]),h,p(s,{label:"请输入：",placeholder:"姓名、手机、电话",type:"text",value:u.value,"onUpdate:value":l[4]||(l[4]=e=>u.value=e),disabled:""},null,8,["value"]),p(s,{label:"请输入：",placeholder:"姓名、手机、电话",type:"textarea",rows:"5",value:u.value,"onUpdate:value":l[5]||(l[5]=e=>u.value=e),disabled:""},null,8,["value"]),f,p(s,{label:"请输入请输入请输入请输入请输入请输入请输入请输入请输入请输入：",placeholder:"姓名、手机、电话",type:"text",value:u.value,"onUpdate:value":l[6]||(l[6]=e=>u.value=e),required:"",wrap:"",clearable:""},null,8,["value"]),p(s,{label:"请输入：",placeholder:"姓名、手机、电话",type:"textarea",rows:"5",value:u.value,"onUpdate:value":l[7]||(l[7]=e=>u.value=e),required:"",wrap:"",clearable:""},null,8,["value"]),y,p(s,{label:"请输入：",placeholder:"姓名、手机、电话",type:"text",value:u.value,"onUpdate:value":l[8]||(l[8]=e=>u.value=e),required:"",clearable:""},{prepend:v((()=>[p(m,{name:"icon-dingwei",fill:"#999"})])),append:v((()=>[p(m,{name:"icon-people_fill",fill:"#999"})])),_:1},8,["value"]),p(s,{label:"请输入：",placeholder:"姓名、手机、电话",type:"textarea",rows:"5",value:u.value,"onUpdate:value":l[9]||(l[9]=e=>u.value=e),required:"",wrap:"",clearable:""},{prepend:v((()=>[p(m,{name:"icon-dingwei",fill:"#999"})])),append:v((()=>[p(m,{name:"icon-people_fill",fill:"#999"})])),_:1},8,["value"]),x,p(s,{label:"请输入：",placeholder:"姓名、手机、电话",type:"text",value:u.value,"onUpdate:value":l[10]||(l[10]=e=>u.value=e),rules:u.rules,ref:"input",required:"",clearable:""},null,8,["value","rules"]),p(w,{span:[1]},{default:v((()=>[p(g,{type:"success",onClick:u.validate},{default:v((()=>[U])),_:1},8,["onClick"])])),_:1})])},s.__scopeId="data-v-4db2133c";export{s as default};
