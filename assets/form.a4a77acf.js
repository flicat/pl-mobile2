import{_ as k,h,e as n,r as t,o as q,c as y,b as a,w as r,d as p,t as C}from"./index.20e8d5d9.js";const U={setup(){const m=h(),{$toast:l}=m.appContext.config.globalProperties,s=n(null),e=n(null),_=n(""),g=n(""),u=n(""),c=n(null),i=n([]);return{form:s,value:e,dateValue:_,rangeValue:c,checkboxValue:i,selectValue:g,radioValue:u,options:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2},{label:"\u9009\u98793",value:3}],rules:{datetime:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",trigger:"blur"}],input:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u5B57",trigger:"blur"}],select:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}],range:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}],checkbox:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}],radio:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}]},reset:()=>{s.value.clearValidate()},submit:()=>{console.log("dateValue: ",_.value),console.log("value: ",e.value),console.log("selectValue: ",g.value),console.log("rangeValue: ",c.value),console.log("radioValue: ",u.value),console.log("checkboxValue: ",i.value),s.value.validate().then(d=>{l("\u6821\u9A8C\u6210\u529F")}).catch(d=>{l("\u6821\u9A8C\u5931\u8D25: "+d)})}}}},w={class:"content"},B=p("0%"),I=p("\u6E05\u9664\u9A8C\u8BC1\u6D88\u606F"),N=p("\u63D0\u4EA4");function W(m,l,s,e,_,g){const u=t("pl-datetime"),c=t("pl-input"),i=t("pl-select"),b=t("pl-range"),V=t("pl-radio"),f=t("pl-checkbox"),v=t("pl-button"),d=t("pl-cell"),x=t("pl-form");return q(),y("div",w,[a(x,{labelWidth:"5em",ref:"form"},{default:r(()=>[a(u,{rules:e.rules.datetime,label:"\u65E5\u671F",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",value:e.dateValue,"onUpdate:value":l[0]||(l[0]=o=>e.dateValue=o),type:"date"},null,8,["rules","value"]),a(c,{value:e.value,"onUpdate:value":l[1]||(l[1]=o=>e.value=o),rules:e.rules.input,required:"",label:"\u540D\u5B57\uFF1A"},null,8,["value","rules"]),a(i,{options:e.options,rules:e.rules.select,value:e.selectValue,"onUpdate:value":l[2]||(l[2]=o=>e.selectValue=o),label:"\u8BF7\u9009\u62E9\uFF1A",required:""},null,8,["options","rules","value"]),a(b,{value:e.rangeValue,"onUpdate:value":l[3]||(l[3]=o=>e.rangeValue=o),rules:e.rules.range,min:0,max:100,step:1,label:"\u8BF7\u9009\u62E9\uFF1A",labelWidth:"5em",required:""},{prepend:r(()=>[B]),append:r(()=>[p(C(e.rangeValue)+"%",1)]),_:1},8,["value","rules"]),a(V,{value:e.radioValue,"onUpdate:value":l[4]||(l[4]=o=>e.radioValue=o),options:e.options,rules:e.rules.radio,label:"\u5355\u9009\uFF1A",required:""},null,8,["value","options","rules"]),a(f,{value:e.checkboxValue,"onUpdate:value":l[5]||(l[5]=o=>e.checkboxValue=o),options:e.options,rules:e.rules.checkbox,required:"",label:"\u591A\u9009\uFF1A"},null,8,["value","options","rules"]),a(d,{span:[1,1],gap:"1em"},{default:r(()=>[a(v,{onClick:e.reset,type:"primary"},{default:r(()=>[I]),_:1},8,["onClick"]),a(v,{onClick:e.submit,type:"primary"},{default:r(()=>[N]),_:1},8,["onClick"])]),_:1})]),_:1},512)])}var E=k(U,[["render",W],["__scopeId","data-v-3d261e5c"]]);export{E as default};
