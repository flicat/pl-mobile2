import{q as e,K as a,L as l,r as o,o as s,d as n,I as t,Q as d,e as f,C as c}from"./vendor.64c3c357.js";const u={setup(){return{files:e([]),setHomePage:e=>{console.log(e)},onChange:e=>{console.log("onChange: ",e)},beforeRead:e=>{console.log("beforeRead: ",e,this)},afterRead:e=>{console.log("afterRead: ",e,this)}}}};a("data-v-51fcb593");const i={class:"content"},r=f("h3",null,"基础用法",-1),g=f("h3",null,"自定义按钮",-1),p=f("span",null,"请选择图片，格式不限",-1),h=c("设为首页"),C=c("添加图片");l(),u.render=function(e,a,l,f,c,u){const m=o("pl-upload"),v=o("pl-button");return s(),n("div",i,[r,t(m,{value:f.files,"onUpdate:value":a[0]||(a[0]=e=>f.files=e),accept:"image/*",class:"file-upload",beforeRead:f.beforeRead,afterRead:f.afterRead,multiple:"",onChange:f.onChange},null,8,["value","beforeRead","afterRead","onChange"]),g,t(m,{value:f.files,"onUpdate:value":a[1]||(a[1]=e=>f.files=e),accept:"image/*",class:"file-upload",onChange:f.onChange},{tips:d((()=>[p])),default:d((e=>[t(v,{class:"home",onClick:a=>f.setHomePage(e.file),size:"small"},{default:d((()=>[h])),_:2},1032,["onClick"])])),button:d((()=>[t(v,{size:"small"},{default:d((()=>[C])),_:1})])),_:1},8,["value","onChange"])])},u.__scopeId="data-v-51fcb593";export{u as default};
