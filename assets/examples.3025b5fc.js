import{Q as o,R as t,G as e,q as n,X as a,r as s,o as c,c as u,e as l,I as r,x as i,O as p,d,D as h,t as m,F as f,T as v}from"./vendor.6f33ac2d.js";const w={props:{list:Array},setup(){const o=e([Number(window.localStorage.menuPositionX)||0,Number(window.localStorage.menuPositionY)||0]),t=n(null),s=a();let c=0,u=0;return{iconStyle:o,popupCenter:t,showMenu:()=>{t.value.open()},goPage:o=>{s.push({path:o}),t.value.close()},touchHander:t=>{switch(t.type){case"touchstart":c=t.touches[0].clientX-o[0],u=t.touches[0].clientY-o[1];break;case"touchmove":t.preventDefault(),t.stopPropagation(),o[0]=t.touches[0].clientX-c,o[1]=t.touches[0].clientY-u;break;case"touchend":case"touchcancel":window.localStorage.menuPositionX=o[0],window.localStorage.menuPositionY=o[1]}}}}};o("data-v-81d16b20");const g={class:"popup-content"},y=["onClick"];t(),w.render=function(o,t,e,n,a,w){const H=s("pl-icon"),b=s("pl-popup");return c(),u(v,{to:"body"},[l("div",{class:"float-menu",style:i({transform:"translate("+n.iconStyle[0]+"px,"+n.iconStyle[1]+"px)"}),onClick:t[0]||(t[0]=(...o)=>n.showMenu&&n.showMenu(...o)),onTouchstart:t[1]||(t[1]=(...o)=>n.touchHander&&n.touchHander(...o)),onTouchmove:t[2]||(t[2]=(...o)=>n.touchHander&&n.touchHander(...o)),onTouchend:t[3]||(t[3]=(...o)=>n.touchHander&&n.touchHander(...o)),onTouchcancel:t[4]||(t[4]=(...o)=>n.touchHander&&n.touchHander(...o))},[r(H,{name:"icon-yanjing",fill:"#666"})],36),r(b,{position:"center",ref:"popupCenter",class:"popup"},{default:p((()=>[l("div",g,[(c(!0),d(f,null,h(e.list,(o=>(c(),d("div",{class:"link",key:o.path},[r(H,{name:"icon-roundright"}),l("span",{onClick:t=>n.goPage(o.path)},m(o.meta.title),9,y)])))),128))])])),_:1},512)])},w.__scopeId="data-v-81d16b20";const H={components:{floatMenu:w},data(){return{list:this.$router.options.routes[0].children[1].children}}};H.render=function(o,t,e,n,a,u){const l=s("router-view"),i=s("floatMenu");return c(),d("section",null,[r(l),r(i,{list:a.list},null,8,["list"])])},H.__scopeId="data-v-70023048";export{H as default};
