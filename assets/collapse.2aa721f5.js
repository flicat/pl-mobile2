import{q as e,u as a,Q as n,R as l,r as t,o,d as u,G as s,O as v,e as c,C as i}from"./vendor.041e2451.js";const d={setup(){const n=e(!1),l=e(!0);return a((()=>{setTimeout((()=>{n.value=!n.value,l.value=!l.value}),1500)})),{active1:n,active2:l,onChange:e=>{console.log("onChange::",e)}}}};n("data-v-0282efea");const p={class:"content"},r=c("h3",null,"基础用法",-1),h=c("p",null,"面板内容",-1),g=c("h3",null,"自定义标题",-1),C=i("自定义标题"),f=c("p",null,"面板内容",-1),m=c("p",null,"面板内容",-1),_=c("p",null,"面板内容",-1);l(),d.render=function(e,a,n,l,c,i){const d=t("pl-collapse"),U=t("pl-icon");return o(),u("div",p,[r,s(d,{value:l.active1,"onUpdate:value":a[0]||(a[0]=e=>l.active1=e),title:"面板",onChange:l.onChange},{default:v((()=>[h])),_:1},8,["value","onChange"]),g,s(d,{value:l.active2,"onUpdate:value":a[1]||(a[1]=e=>l.active2=e),onChange:l.onChange},{title:v((()=>[C])),icon:v((()=>[s(U,{name:"icon-roundright"})])),default:v((()=>[f,m,_])),_:1},8,["value","onChange"])])},d.__scopeId="data-v-0282efea";export{d as default};
