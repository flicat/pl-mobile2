import{_ as m,h as x,e as p,r as s,o as C,c as k,b as o,w as v,d as r,t as f,p as w,g as y,a as t}from"./index.8e4a455b.js";const q={setup(){const d=x(),a=p(null),_=p(!0),l=p([]),{$toast:b}=d.appContext.config.globalProperties;return{box:a,boolValue:_,value:l,onChange:()=>{console.log("onChange::",l.value)},validate:async()=>{try{await a.value.validate(),b("\u6821\u9A8C\u6210\u529F\uFF01")}catch(i){b("\u6821\u9A8C\u5931\u8D25: "+i)}},data:[{label:"\u9009\u98791",value:1,disabled:!1},{label:"\u9009\u98792",value:2,disabled:!0},{label:"\u9009\u98793",value:3,disabled:!1}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change",type:"array"}]}}},u=d=>(w("data-v-14da3ced"),d=d(),y(),d),I={class:"content"},S=u(()=>t("h3",null,"\u57FA\u7840\u7528\u6CD5",-1)),c=u(()=>t("h3",null,"\u5C3A\u5BF8\u5927\u5C0F",-1)),z=u(()=>t("h3",null,"\u663E\u793Alabel",-1)),B=u(()=>t("h3",null,"\u7981\u7528",-1)),N=u(()=>t("h3",null,"\u524D\u7F6E\u56FE\u6807",-1)),h=u(()=>t("h3",null,"\u7AD6\u6392\u6837\u5F0F",-1)),D=u(()=>t("h3",null,"\u5F00\u5173\u6309\u94AE",-1)),E=r("\u5F00\u5173"),P=r("\u5F00\u5173"),T=u(()=>t("h3",null,"\u81EA\u5B9A\u4E49\u5B50\u9879",-1)),j=u(()=>t("h3",null,"\u8868\u5355\u6821\u9A8C",-1)),A=r("\u8868\u5355\u6821\u9A8C");function F(d,a,_,l,b,g){const n=s("pl-checkbox"),i=s("pl-icon"),V=s("pl-button"),U=s("pl-cell");return C(),k("div",I,[S,o(n,{value:l.value,"onUpdate:value":a[0]||(a[0]=e=>l.value=e),options:l.data},null,8,["value","options"]),o(n,{value:l.value,"onUpdate:value":a[1]||(a[1]=e=>l.value=e),options:l.data,button:""},null,8,["value","options"]),o(n,{value:l.value,"onUpdate:value":a[2]||(a[2]=e=>l.value=e),options:l.data,label:"\u8BF7\u9009\u62E9\uFF1A",button:""},null,8,["value","options"]),c,o(n,{value:l.value,"onUpdate:value":a[3]||(a[3]=e=>l.value=e),options:l.data,size:"small"},null,8,["value","options"]),o(n,{value:l.value,"onUpdate:value":a[4]||(a[4]=e=>l.value=e),options:l.data,size:"normal"},null,8,["value","options"]),o(n,{value:l.value,"onUpdate:value":a[5]||(a[5]=e=>l.value=e),options:l.data,size:"large"},null,8,["value","options"]),z,o(n,{value:l.value,"onUpdate:value":a[6]||(a[6]=e=>l.value=e),options:l.data,label:"\u8BF7\u9009\u62E9\uFF1A"},null,8,["value","options"]),o(n,{value:l.value,"onUpdate:value":a[7]||(a[7]=e=>l.value=e),options:l.data,label:"\u8BF7\u9009\u62E9\uFF1A",wrap:""},null,8,["value","options"]),B,o(n,{value:l.value,"onUpdate:value":a[8]||(a[8]=e=>l.value=e),options:l.data,label:"\u8BF7\u9009\u62E9\uFF1A",disabled:""},null,8,["value","options"]),N,o(n,{value:l.value,"onUpdate:value":a[9]||(a[9]=e=>l.value=e),options:l.data,rules:l.rules,label:"\u8BF7\u9009\u62E9\uFF1A"},{prepend:v(()=>[o(i,{name:"icon-dingwei",fill:"#999"})]),_:1},8,["value","options","rules"]),o(n,{value:l.value,"onUpdate:value":a[10]||(a[10]=e=>l.value=e),options:l.data,rules:l.rules,label:"\u8BF7\u9009\u62E9\uFF1A",wrap:"",required:""},{prepend:v(()=>[o(i,{name:"icon-dingwei",fill:"#999"})]),_:1},8,["value","options","rules"]),h,o(n,{value:l.value,"onUpdate:value":a[11]||(a[11]=e=>l.value=e),options:l.data,rules:l.rules,required:"",vertical:""},null,8,["value","options","rules"]),o(n,{value:l.value,"onUpdate:value":a[12]||(a[12]=e=>l.value=e),options:l.data,rules:l.rules,label:"\u8BF7\u9009\u62E9\uFF1A",required:"",vertical:""},null,8,["value","options","rules"]),D,o(n,{value:l.boolValue,"onUpdate:value":a[13]||(a[13]=e=>l.boolValue=e),trueValue:!0,falseValue:!1},{default:v(()=>[E]),_:1},8,["value"]),o(n,{value:l.boolValue,"onUpdate:value":a[14]||(a[14]=e=>l.boolValue=e),trueValue:!0,falseValue:!1,button:""},{default:v(()=>[P]),_:1},8,["value"]),o(n,{value:l.boolValue,"onUpdate:value":a[15]||(a[15]=e=>l.boolValue=e),trueValue:!0,falseValue:!1,label:"\u8BF7\u9009\u62E9\uFF1A"},null,8,["value"]),o(n,{value:l.boolValue,"onUpdate:value":a[16]||(a[16]=e=>l.boolValue=e),trueValue:!0,falseValue:!1,label:"\u8BF7\u9009\u62E9\uFF1A",button:""},null,8,["value"]),T,o(n,{value:l.value,"onUpdate:value":a[17]||(a[17]=e=>l.value=e),options:l.data},{default:v(e=>[r(f(e.item.label)+" - "+f(e.item.value),1)]),_:1},8,["value","options"]),j,o(n,{onChange:l.onChange,value:l.value,"onUpdate:value":a[18]||(a[18]=e=>l.value=e),options:l.data,rules:l.rules,label:"\u8BF7\u9009\u62E9\uFF1A",ref:"box",required:""},null,8,["onChange","value","options","rules"]),o(U,{span:[1]},{default:v(()=>[o(V,{type:"success",onClick:l.validate},{default:v(()=>[A]),_:1},8,["onClick"])]),_:1})])}var H=m(q,[["render",F],["__scopeId","data-v-14da3ced"]]);export{H as default};