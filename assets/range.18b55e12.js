import{_ as C,h as f,e as m,r as i,o as U,c as h,b as n,w as u,d as g,t as _,a as t,p as w,g as y}from"./index.11aba33a.js";const q={setup(){const r=f(),l=m(null),d=m(null),e=m(null),{$toast:p}=r.appContext.config.globalProperties;return{value:l,range1:d,range2:e,validate:async()=>{try{await d.value.validate(),await e.value.validate(),p("\u6821\u9A8C\u6210\u529F\uFF01")}catch(s){p("\u6821\u9A8C\u5931\u8D25: "+s)}},onChange:()=>{console.log("onChange::",l.value)},rules:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change",type:"number"}]}}},v=r=>(w("data-v-9cb7b09a"),r=r(),y(),r),I={class:"content"},k=v(()=>t("h3",null,"\u57FA\u7840\u7528\u6CD5",-1)),S=v(()=>t("h3",null,"\u5C3A\u5BF8\u5927\u5C0F",-1)),z=v(()=>t("h3",null,"\u6807\u9898\u6362\u884C",-1)),B=v(()=>t("h3",null,"\u7981\u7528",-1)),N=v(()=>t("h3",null,"\u56FE\u6807\u586B\u5145",-1)),V=v(()=>t("h3",null,"\u81EA\u5B9A\u4E49\u6ED1\u5757",-1)),D={class:"thumb"},E=v(()=>t("h3",null,"\u8868\u5355\u6821\u9A8C",-1)),P=g("\u8868\u5355\u6821\u9A8C");function T(r,l,d,e,p,b){const o=i("pl-range"),s=i("pl-icon"),c=i("pl-button"),x=i("pl-cell");return U(),h("div",I,[k,n(o,{value:e.value,"onUpdate:value":l[0]||(l[0]=a=>e.value=a),min:0,max:100,step:1},null,8,["value"]),n(o,{value:e.value,"onUpdate:value":l[1]||(l[1]=a=>e.value=a),min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A"},null,8,["value"]),S,n(o,{value:e.value,"onUpdate:value":l[2]||(l[2]=a=>e.value=a),min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A",size:"small"},null,8,["value"]),n(o,{value:e.value,"onUpdate:value":l[3]||(l[3]=a=>e.value=a),min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A",size:"normal"},null,8,["value"]),n(o,{value:e.value,"onUpdate:value":l[4]||(l[4]=a=>e.value=a),min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A",size:"large"},null,8,["value"]),z,n(o,{value:e.value,"onUpdate:value":l[5]||(l[5]=a=>e.value=a),min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A",wrap:""},null,8,["value"]),B,n(o,{value:e.value,"onUpdate:value":l[6]||(l[6]=a=>e.value=a),min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A",disabled:""},null,8,["value"]),N,n(o,{value:e.value,"onUpdate:value":l[7]||(l[7]=a=>e.value=a),min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A",required:""},{prepend:u(()=>[n(s,{name:"icon-dingwei",fill:"#999"})]),append:u(()=>[g(_(e.value)+"%",1)]),_:1},8,["value"]),n(o,{value:e.value,"onUpdate:value":l[8]||(l[8]=a=>e.value=a),min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A",required:"",wrap:""},{prepend:u(()=>[n(s,{name:"icon-dingwei",fill:"#999"})]),append:u(()=>[g(_(e.value)+"%",1)]),_:1},8,["value"]),V,n(o,{value:e.value,"onUpdate:value":l[9]||(l[9]=a=>e.value=a),min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A",required:""},{thumb:u(()=>[t("span",D,_(e.value)+"%",1)]),_:1},8,["value"]),E,n(o,{value:e.value,"onUpdate:value":l[10]||(l[10]=a=>e.value=a),min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A",onChange:e.onChange,rules:e.rules,ref:"range1",required:""},null,8,["value","onChange","rules"]),n(o,{value:e.value,"onUpdate:value":l[11]||(l[11]=a=>e.value=a),min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A",onChange:e.onChange,rules:e.rules,ref:"range2",required:"",wrap:""},null,8,["value","onChange","rules"]),n(x,{span:[1]},{default:u(()=>[n(c,{type:"success",onClick:e.validate},{default:u(()=>[P]),_:1},8,["onClick"])]),_:1})])}var A=C(q,[["render",T],["__scopeId","data-v-9cb7b09a"]]);export{A as default};