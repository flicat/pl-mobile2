import{g as e,q as l,Q as a,R as u,r,o,d as t,G as s,O as n,C as i,t as d}from"./vendor.c07f43a6.js";const c={setup(){const a=e(),{$toast:u}=a.appContext.config.globalProperties,r=l(null),o=l(null),t=l(""),s=l(""),n=l(""),i=l(null),d=l([]);return{form:r,value:o,dateValue:t,rangeValue:i,checkboxValue:d,selectValue:s,radioValue:n,options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}],rules:{datetime:[{required:!0,message:"请选择日期",trigger:"blur"}],input:[{required:!0,message:"请输入名字",trigger:"blur"}],select:[{required:!0,message:"请选择",trigger:"change"}],range:[{required:!0,message:"请选择",trigger:"change"}],checkbox:[{required:!0,message:"请选择",trigger:"change"}],radio:[{required:!0,message:"请选择",trigger:"change"}]},reset:()=>{r.value.clearValidate()},submit:()=>{console.log("dateValue: ",t.value),console.log("value: ",o.value),console.log("selectValue: ",s.value),console.log("rangeValue: ",i.value),console.log("radioValue: ",n.value),console.log("checkboxValue: ",d.value),r.value.validate().then((e=>{u("校验成功")})).catch((e=>{u("校验失败: "+e)}))}}}};a("data-v-3d261e5c");const p={class:"content"},g=i("0%"),v=i("清除验证消息"),b=i("提交");u(),c.render=function(e,l,a,u,c,m){const V=r("pl-datetime"),h=r("pl-input"),f=r("pl-select"),q=r("pl-range"),k=r("pl-radio"),x=r("pl-checkbox"),_=r("pl-button"),C=r("pl-cell"),U=r("pl-form");return o(),t("div",p,[s(U,{labelWidth:"5em",ref:"form"},{default:n((()=>[s(V,{rules:u.rules.datetime,label:"日期",placeholder:"请选择日期",value:u.dateValue,"onUpdate:value":l[0]||(l[0]=e=>u.dateValue=e),type:"date"},null,8,["rules","value"]),s(h,{value:u.value,"onUpdate:value":l[1]||(l[1]=e=>u.value=e),rules:u.rules.input,required:"",label:"名字："},null,8,["value","rules"]),s(f,{options:u.options,rules:u.rules.select,value:u.selectValue,"onUpdate:value":l[2]||(l[2]=e=>u.selectValue=e),label:"请选择：",required:""},null,8,["options","rules","value"]),s(q,{value:u.rangeValue,"onUpdate:value":l[3]||(l[3]=e=>u.rangeValue=e),rules:u.rules.range,min:0,max:100,step:1,label:"请选择：",labelWidth:"5em",required:""},{prepend:n((()=>[g])),append:n((()=>[i(d(u.rangeValue)+"%",1)])),_:1},8,["value","rules"]),s(k,{value:u.radioValue,"onUpdate:value":l[4]||(l[4]=e=>u.radioValue=e),options:u.options,rules:u.rules.radio,label:"单选：",required:""},null,8,["value","options","rules"]),s(x,{value:u.checkboxValue,"onUpdate:value":l[5]||(l[5]=e=>u.checkboxValue=e),options:u.options,rules:u.rules.checkbox,required:"",label:"多选："},null,8,["value","options","rules"]),s(C,{span:[1,1],gap:"1em"},{default:n((()=>[s(_,{onClick:u.reset,type:"primary"},{default:n((()=>[v])),_:1},8,["onClick"]),s(_,{onClick:u.submit,type:"primary"},{default:n((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1},512)])},c.__scopeId="data-v-3d261e5c";export{c as default};