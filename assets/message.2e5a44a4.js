import t from"./swipe.0188fc17.js";import{g as a,K as e,L as n,r as o,o as c,d as i,I as s,Q as l,C as r}from"./vendor.27ba4f14.js";const p={setup(){const e=a(),{$alert:n,$confirm:o,$toast:c}=e.appContext.config.globalProperties;return{alert:function(){n({title:"提示",message:"这个一个弹窗！",buttonText:"确定",action:()=>{c("确定")}})},confirm:function(){o({title:"提示",message:"这个一个确认弹窗！",submitText:"确定",cancelText:"取消",submit:()=>{c("确定")},cancel:()=>{c("取消")}})},dialog1:async function(){await n({component:t,componentProps:{isMsg:!0},submitText:"确定",cancelText:"取消"}),c("确定")},dialog2:async function(){try{await o({component:t,componentProps:{isMsg:!0},submitText:"确定",cancelText:"取消"}),c("确定")}catch(a){c("取消")}},toast:async function(){await c("消息提醒1",3e3),await c("消息提醒2",3e3)}}}};e("data-v-0b53e928");const m={class:"content"},u=r("弹窗"),f=r("模态框"),d=r("确认弹窗"),g=r("确认模态框"),y=r("消息提醒");n(),p.render=function(t,a,e,n,r,p){const C=o("pl-button"),b=o("pl-cell");return c(),i("div",m,[s(b,{span:[1,1],gap:"1rem"},{default:l((()=>[s(C,{type:"primary",onClick:n.alert},{default:l((()=>[u])),_:1},8,["onClick"]),s(C,{type:"primary",onClick:n.dialog1},{default:l((()=>[f])),_:1},8,["onClick"])])),_:1}),s(b,{span:[1,1],gap:"1rem"},{default:l((()=>[s(C,{type:"primary",onClick:n.confirm},{default:l((()=>[d])),_:1},8,["onClick"]),s(C,{type:"primary",onClick:n.dialog2},{default:l((()=>[g])),_:1},8,["onClick"])])),_:1}),s(b,{span:[1,1],gap:"1rem"},{default:l((()=>[s(C,{type:"primary",onClick:n.toast},{default:l((()=>[y])),_:1},8,["onClick"])])),_:1})])},p.__scopeId="data-v-0b53e928";export{p as default};