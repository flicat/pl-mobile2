import{_ as K,e as Q,B as U,i as pe,C as j,o as y,c as O,a as w,D as ge,E as ke,r as R,F as we,l as Be,b as z,f as Me,q as ye,w as Oe,d as Ae,t as Se,p as Ce,g as Ne}from"./index.11aba33a.js";function Ee(f,v){return v.forEach(function(l){l&&typeof l!="string"&&!Array.isArray(l)&&Object.keys(l).forEach(function(c){if(c!=="default"&&!(c in f)){var h=Object.getOwnPropertyDescriptor(l,c);Object.defineProperty(f,c,h.get?h:{enumerable:!0,get:function(){return l[c]}})}})}),Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var Le=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},T={exports:{}};(function(f,v){(function(l,c){f.exports=c()})(Le,function(){var l=function(){},c=Object.prototype.hasOwnProperty,h=Array.prototype.slice;function N(t,e){var i;return typeof Object.create=="function"?i=Object.create(t):(l.prototype=t,i=new l,l.prototype=null),e&&A(!0,i,e),i}function E(t,e,i,r){var a=this;return typeof t!="string"&&(r=i,i=e,e=t,t=null),typeof e!="function"&&(r=i,i=e,e=function(){return a.apply(this,arguments)}),A(!1,e,a,r),e.prototype=N(a.prototype,i),e.prototype.constructor=e,e.class_=t||a.class_,e.super_=a,e}function A(t,e,i){i=h.call(arguments,2);for(var r,a,n=0,s=i.length;n<s;n++){a=i[n];for(r in a)(!t||c.call(a,r))&&(e[r]=a[r])}}var L=E;function p(){}p.class_="Nevis",p.super_=Object,p.extend=L;var $=p,d=$,X=d.extend(function(t,e,i){this.qrious=t,this.element=e,this.element.qrious=t,this.enabled=Boolean(i)},{draw:function(t){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(t){var e=this.qrious,i=e.padding||0,r=Math.floor((e.size-i*2)/t.width);return Math.max(1,r)},getOffset:function(t){var e=this.qrious,i=e.padding;if(i!=null)return i;var r=this.getModuleSize(t),a=Math.floor((e.size-r*t.width)/2);return Math.max(0,a)},render:function(t){this.enabled&&(this.resize(),this.reset(),this.draw(t))},reset:function(){},resize:function(){}}),V=X,H=V.extend({draw:function(t){var e,i,r=this.qrious,a=this.getModuleSize(t),n=this.getOffset(t),s=this.element.getContext("2d");for(s.fillStyle=r.foreground,s.globalAlpha=r.foregroundAlpha,e=0;e<t.width;e++)for(i=0;i<t.width;i++)t.buffer[i*t.width+e]&&s.fillRect(a*e+n,a*i+n,a,a)},reset:function(){var t=this.qrious,e=this.element.getContext("2d"),i=t.size;e.lineWidth=1,e.clearRect(0,0,i,i),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,i,i)},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),W=H,J=d.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),Y=J,Z=d.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),B=Z,ee=d.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),g=ee,te=d.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),ie=te,u=d.extend(function(t){var e,i,r,a,n,s=t.value.length;for(this._badness=[],this._level=B.LEVELS[t.level],this._polynomial=[],this._value=t.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,r=(this._level-1)*4+(this._version-1)*16,a=B.BLOCKS[r++],n=B.BLOCKS[r++],e=B.BLOCKS[r++],i=B.BLOCKS[r],r=e*(a+n)+n-3+(this._version<=9),!(s<=r)););this._dataBlock=e,this._eccBlock=i,this._neccBlock1=a,this._neccBlock2=n;var x=this.width=17+4*this._version;this.buffer=u._createArray(x*x),this._ecc=u._createArray(e+(e+i)*(a+n)+n),this._mask=u._createArray((x*(x+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+x*(x-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(s),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(t,e){var i,r=this.buffer,a=this.width;for(r[t+a*e]=1,i=-2;i<2;i++)r[t+i+a*(e-2)]=1,r[t-2+a*(e+i+1)]=1,r[t+2+a*(e+i)]=1,r[t+i+1+a*(e+2)]=1;for(i=0;i<2;i++)this._setMask(t-1,e+i),this._setMask(t+1,e-i),this._setMask(t-i,e-1),this._setMask(t+i,e+1)},_appendData:function(t,e,i,r){var a,n,s,x=this._polynomial,o=this._stringBuffer;for(n=0;n<r;n++)o[i+n]=0;for(n=0;n<e;n++){if(a=g.LOG[o[t+n]^o[i]],a!==255)for(s=1;s<r;s++)o[i+s-1]=o[i+s]^g.EXPONENT[u._modN(a+x[r-s])];else for(s=i;s<i+r;s++)o[s]=o[s+1];o[i+r-1]=a===255?0:g.EXPONENT[u._modN(a+x[0])]}},_appendEccToData:function(){var t,e=0,i=this._dataBlock,r=this._calculateMaxLength(),a=this._eccBlock;for(t=0;t<this._neccBlock1;t++)this._appendData(e,i,r,a),e+=i,r+=a;for(t=0;t<this._neccBlock2;t++)this._appendData(e,i+1,r,a),e+=i+1,r+=a},_applyMask:function(t){var e,i,r,a,n=this.buffer,s=this.width;switch(t){case 0:for(a=0;a<s;a++)for(r=0;r<s;r++)!(r+a&1)&&!this._isMasked(r,a)&&(n[r+a*s]^=1);break;case 1:for(a=0;a<s;a++)for(r=0;r<s;r++)!(a&1)&&!this._isMasked(r,a)&&(n[r+a*s]^=1);break;case 2:for(a=0;a<s;a++)for(e=0,r=0;r<s;r++,e++)e===3&&(e=0),!e&&!this._isMasked(r,a)&&(n[r+a*s]^=1);break;case 3:for(i=0,a=0;a<s;a++,i++)for(i===3&&(i=0),e=i,r=0;r<s;r++,e++)e===3&&(e=0),!e&&!this._isMasked(r,a)&&(n[r+a*s]^=1);break;case 4:for(a=0;a<s;a++)for(e=0,i=a>>1&1,r=0;r<s;r++,e++)e===3&&(e=0,i=!i),!i&&!this._isMasked(r,a)&&(n[r+a*s]^=1);break;case 5:for(i=0,a=0;a<s;a++,i++)for(i===3&&(i=0),e=0,r=0;r<s;r++,e++)e===3&&(e=0),!((r&a&1)+!(!e|!i))&&!this._isMasked(r,a)&&(n[r+a*s]^=1);break;case 6:for(i=0,a=0;a<s;a++,i++)for(i===3&&(i=0),e=0,r=0;r<s;r++,e++)e===3&&(e=0),!((r&a&1)+(e&&e===i)&1)&&!this._isMasked(r,a)&&(n[r+a*s]^=1);break;case 7:for(i=0,a=0;a<s;a++,i++)for(i===3&&(i=0),e=0,r=0;r<s;r++,e++)e===3&&(e=0),!((e&&e===i)+(r+a&1)&1)&&!this._isMasked(r,a)&&(n[r+a*s]^=1);break}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var t,e,i=this._eccBlock,r=this._polynomial;for(r[0]=1,t=0;t<i;t++){for(r[t+1]=1,e=t;e>0;e--)r[e]=r[e]?r[e-1]^g.EXPONENT[u._modN(g.LOG[r[e]]+t)]:r[e-1];r[0]=g.EXPONENT[u._modN(g.LOG[r[0]]+t)]}for(t=0;t<=i;t++)r[t]=g.LOG[r[t]]},_checkBadness:function(){var t,e,i,r,a,n=0,s=this._badness,x=this.buffer,o=this.width;for(a=0;a<o-1;a++)for(r=0;r<o-1;r++)(x[r+o*a]&&x[r+1+o*a]&&x[r+o*(a+1)]&&x[r+1+o*(a+1)]||!(x[r+o*a]||x[r+1+o*a]||x[r+o*(a+1)]||x[r+1+o*(a+1)]))&&(n+=u.N2);var b=0;for(a=0;a<o;a++){for(i=0,s[0]=0,t=0,r=0;r<o;r++)e=x[r+o*a],t===e?s[i]++:s[++i]=1,t=e,b+=t?1:-1;n+=this._getBadness(i)}b<0&&(b=-b);var F=0,M=b;for(M+=M<<2,M<<=1;M>o*o;)M-=o*o,F++;for(n+=F*u.N4,r=0;r<o;r++){for(i=0,s[0]=0,t=0,a=0;a<o;a++)e=x[r+o*a],t===e?s[i]++:s[++i]=1,t=e;n+=this._getBadness(i)}return n},_convertBitStream:function(t){var e,i,r=this._ecc,a=this._version;for(i=0;i<t;i++)r[i]=this._value.charCodeAt(i);var n=this._stringBuffer=r.slice(),s=this._calculateMaxLength();t>=s-2&&(t=s-2,a>9&&t--);var x=t;if(a>9){for(n[x+2]=0,n[x+3]=0;x--;)e=n[x],n[x+3]|=255&e<<4,n[x+2]=e>>4;n[2]|=255&t<<4,n[1]=t>>4,n[0]=64|t>>12}else{for(n[x+1]=0,n[x+2]=0;x--;)e=n[x],n[x+2]|=255&e<<4,n[x+1]=e>>4;n[1]|=255&t<<4,n[0]=64|t>>4}for(x=t+3-(a<10);x<s;)n[x++]=236,n[x++]=17},_getBadness:function(t){var e,i=0,r=this._badness;for(e=0;e<=t;e++)r[e]>=5&&(i+=u.N1+r[e]-5);for(e=3;e<t-1;e+=2)r[e-2]===r[e+2]&&r[e+2]===r[e-1]&&r[e-1]===r[e+1]&&r[e-1]*3===r[e]&&(r[e-3]===0||e+3>t||r[e-3]*3>=r[e]*4||r[e+3]*3>=r[e]*4)&&(i+=u.N3);return i},_finish:function(){this._stringBuffer=this.buffer.slice();var t,e,i=0,r=3e4;for(e=0;e<8&&(this._applyMask(e),t=this._checkBadness(),t<r&&(r=t,i=e),i!==7);e++)this.buffer=this._stringBuffer.slice();i!==e&&this._applyMask(i),r=B.FINAL_FORMAT[i+(this._level-1<<3)];var a=this.buffer,n=this.width;for(e=0;e<8;e++,r>>=1)r&1&&(a[n-1-e+n*8]=1,e<6?a[8+n*e]=1:a[8+n*(e+1)]=1);for(e=0;e<7;e++,r>>=1)r&1&&(a[8+n*(n-7+e)]=1,e?a[6-e+n*8]=1:a[7+n*8]=1)},_interleaveBlocks:function(){var t,e,i=this._dataBlock,r=this._ecc,a=this._eccBlock,n=0,s=this._calculateMaxLength(),x=this._neccBlock1,o=this._neccBlock2,b=this._stringBuffer;for(t=0;t<i;t++){for(e=0;e<x;e++)r[n++]=b[t+e*i];for(e=0;e<o;e++)r[n++]=b[x*i+t+e*(i+1)]}for(e=0;e<o;e++)r[n++]=b[x*i+t+e*(i+1)];for(t=0;t<a;t++)for(e=0;e<x+o;e++)r[n++]=b[s+t+e*a];this._stringBuffer=r},_insertAlignments:function(){var t,e,i,r=this._version,a=this.width;if(r>1)for(t=Y.BLOCK[r],i=a-7;;){for(e=a-7;e>t-3&&(this._addAlignment(e,i),!(e<t));)e-=t;if(i<=t+9)break;i-=t,this._addAlignment(6,i),this._addAlignment(i,6)}},_insertFinders:function(){var t,e,i,r,a=this.buffer,n=this.width;for(t=0;t<3;t++){for(e=0,r=0,t===1&&(e=n-7),t===2&&(r=n-7),a[r+3+n*(e+3)]=1,i=0;i<6;i++)a[r+i+n*e]=1,a[r+n*(e+i+1)]=1,a[r+6+n*(e+i)]=1,a[r+i+1+n*(e+6)]=1;for(i=1;i<5;i++)this._setMask(r+i,e+1),this._setMask(r+1,e+i+1),this._setMask(r+5,e+i),this._setMask(r+i+1,e+5);for(i=2;i<4;i++)a[r+i+n*(e+2)]=1,a[r+2+n*(e+i+1)]=1,a[r+4+n*(e+i)]=1,a[r+i+1+n*(e+4)]=1}},_insertTimingGap:function(){var t,e,i=this.width;for(e=0;e<7;e++)this._setMask(7,e),this._setMask(i-8,e),this._setMask(7,e+i-7);for(t=0;t<8;t++)this._setMask(t,7),this._setMask(t+i-8,7),this._setMask(t,i-8)},_insertTimingRowAndColumn:function(){var t,e=this.buffer,i=this.width;for(t=0;t<i-14;t++)t&1?(this._setMask(8+t,6),this._setMask(6,8+t)):(e[8+t+i*6]=1,e[6+i*(8+t)]=1)},_insertVersion:function(){var t,e,i,r,a=this.buffer,n=this._version,s=this.width;if(n>6)for(t=ie.BLOCK[n-7],e=17,i=0;i<6;i++)for(r=0;r<3;r++,e--)1&(e>11?n>>e-12:t>>e)?(a[5-i+s*(2-r+s-11)]=1,a[2-r+s-11+s*(5-i)]=1):(this._setMask(5-i,2-r+s-11),this._setMask(2-r+s-11,5-i))},_isMasked:function(t,e){var i=u._getMaskBit(t,e);return this._mask[i]===1},_pack:function(){var t,e,i,r=1,a=1,n=this.width,s=n-1,x=n-1,o=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<o;e++)for(t=this._stringBuffer[e],i=0;i<8;i++,t<<=1){128&t&&(this.buffer[s+n*x]=1);do a?s--:(s++,r?x!==0?x--:(s-=2,r=!r,s===6&&(s--,x=9)):x!==n-1?x++:(s-=2,r=!r,s===6&&(s--,x-=8))),a=!a;while(this._isMasked(s,x))}},_reverseMask:function(){var t,e,i=this.width;for(t=0;t<9;t++)this._setMask(t,8);for(t=0;t<8;t++)this._setMask(t+i-8,8),this._setMask(8,t);for(e=0;e<7;e++)this._setMask(8,e+i-7)},_setMask:function(t,e){var i=u._getMaskBit(t,e);this._mask[i]=1},_syncMask:function(){var t,e,i=this.width;for(e=0;e<i;e++)for(t=0;t<=e;t++)this.buffer[t+i*e]&&this._setMask(t,e)}},{_createArray:function(t){var e,i=[];for(e=0;e<t;e++)i[e]=0;return i},_getMaskBit:function(t,e){var i;return t>e&&(i=t,t=e,e=i),i=e,i+=e*e,i>>=1,i+=t,i},_modN:function(t){for(;t>=255;)t-=255,t=(t>>8)+(t&255);return t},N1:3,N2:3,N3:40,N4:10}),re=u,ae=V.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),ne=ae,se=d.extend(function(t,e,i,r){this.name=t,this.modifiable=Boolean(e),this.defaultValue=i,this._valueTransformer=r},{transform:function(t){var e=this._valueTransformer;return typeof e=="function"?e(t,this):t}}),_=se,xe=d.extend(null,{abs:function(t){return t!=null?Math.abs(t):null},hasOwn:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},noop:function(){},toUpperCase:function(t){return t!=null?t.toUpperCase():null}}),m=xe,k=d.extend(function(t){this.options={},t.forEach(function(e){this.options[e.name]=e},this)},{exists:function(t){return this.options[t]!=null},get:function(t,e){return k._get(this.options[t],e)},getAll:function(t){var e,i=this.options,r={};for(e in i)m.hasOwn(i,e)&&(r[e]=k._get(i[e],t));return r},init:function(t,e,i){typeof i!="function"&&(i=m.noop);var r,a;for(r in this.options)m.hasOwn(this.options,r)&&(a=this.options[r],k._set(a,a.defaultValue,e),k._createAccessor(a,e,i));this._setAll(t,e,!0)},set:function(t,e,i){return this._set(t,e,i)},setAll:function(t,e){return this._setAll(t,e)},_set:function(t,e,i,r){var a=this.options[t];if(!a)throw new Error("Invalid option: "+t);if(!a.modifiable&&!r)throw new Error("Option cannot be modified: "+t);return k._set(a,e,i)},_setAll:function(t,e,i){if(!t)return!1;var r,a=!1;for(r in t)m.hasOwn(t,r)&&this._set(r,t[r],e,i)&&(a=!0);return a}},{_createAccessor:function(t,e,i){var r={get:function(){return k._get(t,e)}};t.modifiable&&(r.set=function(a){k._set(t,a,e)&&i(a,t)}),Object.defineProperty(e,t.name,r)},_get:function(t,e){return e["_"+t.name]},_set:function(t,e,i){var r="_"+t.name,a=i[r],n=t.transform(e!=null?e:t.defaultValue);return i[r]=n,n!==a}}),oe=k,fe=d.extend(function(){this._services={}},{getService:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e},setService:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}),ce=fe,S=new oe([new _("background",!0,"white"),new _("backgroundAlpha",!0,1,m.abs),new _("element"),new _("foreground",!0,"black"),new _("foregroundAlpha",!0,1,m.abs),new _("level",!0,"L",m.toUpperCase),new _("mime",!0,"image/png"),new _("padding",!0,null,m.abs),new _("size",!0,100,m.abs),new _("value",!0,"")]),I=new ce,P=d.extend(function(t){S.init(t,this,this.update.bind(this));var e=S.get("element",this),i=I.getService("element"),r=e&&i.isCanvas(e)?e:i.createCanvas(),a=e&&i.isImage(e)?e:i.createImage();this._canvasRenderer=new W(this,r,!0),this._imageRenderer=new ne(this,a,a===e),this.update()},{get:function(){return S.getAll(this)},set:function(t){S.setAll(t,this)&&this.update()},toDataURL:function(t){return this.canvas.toDataURL(t||this.mime)},update:function(){var t=new re({level:this.level,value:this.value});this._canvasRenderer.render(t),this._imageRenderer.render(t)}},{use:function(t){I.setService(t.getName(),t)}});Object.defineProperties(P.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var le=P,D=le,ue=d.extend({getName:function(){}}),de=ue,he=de.extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(t){},isImage:function(t){}}),ve=he,_e=ve.extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(t){return t instanceof HTMLCanvasElement},isImage:function(t){return t instanceof HTMLImageElement}}),be=_e;D.use(new be);var me=D;return me})})(T);var q=T.exports,G=Ee({__proto__:null,default:q},[T.exports]);let C;typeof G=="function"?C=G:typeof q=="function"?C=q:C=function(){};const Re={props:{background:{type:String,default:"white"},backgroundAlpha:{type:Number,default:0},foreground:{type:String,default:"black"},foregroundAlpha:{type:Number,default:1},level:{type:String,default:"L"},mime:{type:String,default:"image/png"},padding:{type:Number,default:null},size:{type:Number,default:100},value:{type:String,required:!0}},setup(f){const v=Q(null);let l=U({});return pe(()=>{l=new C({element:v.value,background:f.background,backgroundAlpha:f.backgroundAlpha,foreground:f.foreground,foregroundAlpha:f.foregroundAlpha,level:f.level,mime:f.mime,padding:f.padding,size:f.size,value:f.value})}),j(()=>f.value,c=>{l.value=c}),j(()=>f.size,c=>{l.size=c}),{canvas:v}}},ze={ref:"canvas"};function je(f,v,l,c,h,N){return y(),O("div",null,[w("canvas",ze,null,512)])}var qe=K(Re,[["render",je]]);const Te={components:{qrCode:qe},setup(){let f=ge(),v=ke(),l=Q(window.location.href.split("#")[0]+"#/examples/"+f.meta.name),c=U(v.options.routes[0].children[0].children.filter(h=>h.meta&&h.meta.type==="docs"));return j(()=>f.meta.name,h=>{l.value=window.location.href.split("#")[0]+"#/examples/"+h}),{route:f,router:v,routes:c,QRCodeValue:l}}},Ve=f=>(Ce("data-v-246c4cec"),f=f(),Ne(),f),Ie={class:"wrap"},Pe={class:"menu"},De={class:"nav-list"},Fe={key:0,class:"examples"},Ge={class:"mobile"},Ke=["src"],Qe={class:"qrcode"},Ue=Ve(()=>w("p",null,"\u624B\u673A\u626B\u7801\u67E5\u770B",-1));function $e(f,v,l,c,h,N){const E=R("router-link"),A=R("router-view"),L=R("qrCode");return y(),O("section",Ie,[w("div",Pe,[w("ul",De,[(y(!0),O(we,null,Be(c.routes,p=>(y(),O("li",{key:p.path},[z(E,{to:p.path},{default:Oe(()=>[Ae(Se(p.meta.title),1)]),_:2},1032,["to"])]))),128))])]),w("div",{class:ye(["docs",{"has-examples":c.route.meta.name}])},[z(A),c.route.meta.name?(y(),O("div",Fe,[w("div",Ge,[w("iframe",{src:"#/examples/"+c.route.meta.name,frameborder:"0",width:"360",height:"480"},null,8,Ke)]),w("div",Qe,[z(L,{value:c.QRCodeValue,size:200},null,8,["value"]),Ue])])):Me("",!0)],2)])}var He=K(Te,[["render",$e],["__scopeId","data-v-246c4cec"]]);export{He as default};