import{g as e,a}from"./index.8f5a0295.js";import{q as l,g as t,r as n,o as r,d as o,I as i,Q as s,C as u,t as c}from"./vendor.64c3c357.js";const p={setup(){const n=l([]),r=t(),{$picker:o}=r.appContext.config.globalProperties;return{getDateString:e,result:n,picker:async function(){try{n.value=await o({title:"请选择",defaultValue:n.value,options:[function(){return new Array(20).fill("").map(((e,a)=>({label:a+1990+"年",value:a+1990})))},function(){return new Array(12).fill("").map(((e,a)=>({label:a+1+"月",value:a+1})))},function(e,l){return new Array(a(e,l)).fill("").map(((e,a)=>({label:a+1+"日",value:a+1})))}],prop:{label:"label",value:"value",children:"children"}}),console.log(n.value)}catch(e){console.log(e)}}}}},f={class:"content"};p.render=function(e,a,l,t,p,g){const d=n("pl-button");return r(),o("div",f,[i(d,{onClick:t.picker,type:"primary"},{default:s((()=>[u(c(t.result.length?t.getDateString(t.result.join("-"),"Y年M月D日"):"打开日期选择器"),1)])),_:1},8,["onClick"])])};export{p as default};
