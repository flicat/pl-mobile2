import t from"./swipe.6aabe85d.js";import{g as a,G as e,H as n,r as o,o as c,c as i,d as s,I as l,y as r}from"./vendor.1fd64023.js";const p={setup(){const e=a(),{$alert:n,$confirm:o,$toast:c}=e.appContext.config.globalProperties;return{alert:function(){n({title:"提示",message:"这个一个弹窗！",buttonText:"确定",action:()=>{c("确定")}})},confirm:function(){o({title:"提示",message:"这个一个确认弹窗！",submitText:"确定",cancelText:"取消",submit:()=>{c("确定")},cancel:()=>{c("取消")}})},dialog1:async function(){await n({component:t,componentProps:{isMsg:!0},submitText:"确定",cancelText:"取消"}),c("确定")},dialog2:async function(){try{await o({component:t,componentProps:{isMsg:!0},submitText:"确定",cancelText:"取消"}),c("确定")}catch(a){c("取消")}},toast:async function(){await c("消息提醒1",3e3),await c("消息提醒2",3e3)}}}},m=l();e("data-v-0b53e928");const u={class:"content"},d=r("弹窗"),f=r("模态框"),y=r("确认弹窗"),g=r("确认模态框"),C=r("消息提醒");n();const b=m(((t,a,e,n,l,r)=>{const p=o("pl-button"),b=o("pl-cell");return c(),i("div",u,[s(b,{span:[1,1],gap:"1rem"},{default:m((()=>[s(p,{type:"primary",onClick:n.alert},{default:m((()=>[d])),_:1},8,["onClick"]),s(p,{type:"primary",onClick:n.dialog1},{default:m((()=>[f])),_:1},8,["onClick"])])),_:1}),s(b,{span:[1,1],gap:"1rem"},{default:m((()=>[s(p,{type:"primary",onClick:n.confirm},{default:m((()=>[y])),_:1},8,["onClick"]),s(p,{type:"primary",onClick:n.dialog2},{default:m((()=>[g])),_:1},8,["onClick"])])),_:1}),s(b,{span:[1,1],gap:"1rem"},{default:m((()=>[s(p,{type:"primary",onClick:n.toast},{default:m((()=>[C])),_:1},8,["onClick"])])),_:1})])}));p.render=b,p.__scopeId="data-v-0b53e928";export default p;