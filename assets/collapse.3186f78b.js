import{G as a,H as e,r as t,o as n,c as l,d as o,I as s,y as c}from"./vendor.1fd64023.js";const v={data:()=>({active1:!1,active2:!0}),mounted(){setTimeout((()=>{this.active1=!this.active1,this.active2=!this.active2}),3e3)},methods:{onChange(a){console.log("onChange::",a)}}},i=s();a("data-v-275b3834");const u={class:"content"},d=o("h3",null,"基础用法",-1),h=o("p",null,"面板内容",-1),p=o("h3",null,"自定义标题",-1),g=c("自定义标题"),r=o("p",null,"面板内容",-1),C=o("p",null,"面板内容",-1),f=o("p",null,"面板内容",-1);e();const m=i(((a,e,s,c,v,m)=>{const _=t("pl-collapse");return n(),l("div",u,[d,o(_,{value:v.active1,"onUpdate:value":e[1]||(e[1]=a=>v.active1=a),title:"面板",onChange:m.onChange},{default:i((()=>[h])),_:1},8,["value","onChange"]),p,o(_,{value:v.active2,"onUpdate:value":e[2]||(e[2]=a=>v.active2=a),onChange:m.onChange},{title:i((()=>[g])),default:i((()=>[r,C,f])),_:1},8,["value","onChange"])])}));v.render=m,v.__scopeId="data-v-275b3834";export default v;