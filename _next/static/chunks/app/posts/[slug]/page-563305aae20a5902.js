(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{56677:function(e,t,n){Promise.resolve().then(n.bind(n,71996)),Promise.resolve().then(n.bind(n,13618)),Promise.resolve().then(n.bind(n,64786)),Promise.resolve().then(n.bind(n,13519)),Promise.resolve().then(n.bind(n,71399)),Promise.resolve().then(n.bind(n,21042)),Promise.resolve().then(n.bind(n,17061)),Promise.resolve().then(n.bind(n,33883)),Promise.resolve().then(n.bind(n,39481)),Promise.resolve().then(n.bind(n,57212)),Promise.resolve().then(n.bind(n,12721)),Promise.resolve().then(n.bind(n,43135)),Promise.resolve().then(n.bind(n,74278)),Promise.resolve().then(n.bind(n,44896)),Promise.resolve().then(n.bind(n,556)),Promise.resolve().then(n.bind(n,44568)),Promise.resolve().then(n.bind(n,4302)),Promise.resolve().then(n.bind(n,16758)),Promise.resolve().then(n.bind(n,19895)),Promise.resolve().then(n.bind(n,44378))},71996:function(e,t,n){"use strict";n.r(t),n.d(t,{Collapse:function(){return l}});var r=n(57437),i=n(2265);function l(e){let{title:t,defaultOpened:n,children:l}=e,[s,a]=(0,i.useState)(!!n),o=(0,i.useCallback)(()=>a(e=>!e),[]);return(0,r.jsxs)("div",{style:{border:"1px solid #888",borderRadius:8,padding:16,display:"flex",flexDirection:"column",gap:16},children:[(0,r.jsxs)("button",{type:"button",onClick:o,children:[s?"▼":"▶"," ",t," - ",s?"접기":"펼치기"]}),s&&(0,r.jsx)("div",{children:l})]})}},43135:function(e,t,n){"use strict";n.r(t),n.d(t,{WhyMDX:function(){return l}});var r=n(57437),i=n(2265);function l(){let[e,t]=(0,i.useState)(0),n=(0,i.useCallback)(()=>t(e=>e+1),[t]);return(0,r.jsxs)("button",{onClick:n,children:["Click to increase number: ",e]})}},13618:function(e,t,n){"use strict";n.r(t),n.d(t,{HsvColorPicker:function(){return s}});var r=n(57437),i=n(2265),l=n(91039);function s(e){let{color:t,onColorChange:n}=e,[s,a]=(0,i.useState)(t),o=(0,i.useCallback)(e=>a(t=>{let[n,r,i]=t;return[parseInt(e.target.value)/1e3,r,i]}),[]),c=(0,i.useCallback)(e=>a(t=>{let[n,r,i]=t;return[n,parseInt(e.target.value)/1e3,i]}),[]),u=(0,i.useCallback)(e=>a(t=>{let[n,r,i]=t;return[n,r,parseInt(e.target.value)/1e3]}),[]),d=(0,i.useCallback)(()=>{null==n||n(s)},[s,n]),f=(0,i.useCallback)(()=>a(t),[t]),h=(0,i.useMemo)(()=>{let[e,t,n]=(0,l.W)(...s);return"rgb(".concat(e,", ").concat(t,", ").concat(n,")")},[s]);return(0,i.useEffect)(()=>a(t),[t]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:["H:"," ",(0,r.jsx)("input",{type:"range",min:"0",max:"1000",value:1e3*s[0],onChange:o})]}),(0,r.jsxs)("div",{children:["S:"," ",(0,r.jsx)("input",{type:"range",min:"0",max:"1000",value:1e3*s[1],onChange:c})]}),(0,r.jsxs)("div",{children:["V:"," ",(0,r.jsx)("input",{type:"range",min:"0",max:"1000",value:1e3*s[2],onChange:u})]}),(0,r.jsx)("button",{type:"button",onClick:d,children:"확인"}),(0,r.jsx)("button",{type:"button",disabled:s===t,onClick:f,children:"취소"}),(0,r.jsx)("div",{style:{background:h,height:100}})]})}},64786:function(e,t,n){"use strict";n.r(t),n.d(t,{HsvToRgb:function(){return a}});var r=n(57437),i=n(2265),l=n(91039),s=n(13618);function a(){let[e,t]=(0,i.useState)([0,0,0]),[n,[a,o,c]]=(0,i.useMemo)(()=>{let t=(0,l.W)(...e),[n,r,i]=t;return["rgb(".concat(n,", ").concat(r,", ").concat(i,")"),t]},[e]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.HsvColorPicker,{color:e,onColorChange:t}),"변환 결과: rgb(",a,", ",o,", ",c,")",(0,r.jsx)("div",{style:{background:n,height:100}})]})}},13519:function(e,t,n){"use strict";n.r(t),n.d(t,{RgbColorPicker:function(){return l}});var r=n(57437),i=n(2265);function l(e){let{color:t,onColorChange:n}=e,[l,s]=(0,i.useState)(t),a=(0,i.useCallback)(e=>s(e.target.value),[]),o=(0,i.useCallback)(()=>{RegExp(/^(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/).exec(l)&&(null==n||n(6===l.length?l:"".concat(l[0]).concat(l[0]).concat(l[1]).concat(l[1]).concat(l[2]).concat(l[2])))},[l,n]),c=(0,i.useCallback)(()=>s(t),[t]),[u,d]=(0,i.useMemo)(()=>RegExp(/^(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/).exec(l)?[null,"#".concat(l)]:["16진수 3글자를 입력하세요.","transparent"],[l]);return(0,i.useEffect)(()=>s(t),[t]),(0,r.jsxs)("div",{children:["색상 코드를 입력하세요: #",(0,r.jsx)("input",{type:"text",maxLength:6,accept:"[0-9a-fA-F]",value:l,onChange:a}),(0,r.jsx)("button",{type:"button",disabled:null!==u,onClick:o,children:"확인"}),(0,r.jsx)("button",{type:"button",disabled:l===t,onClick:c,children:"취소"}),(0,r.jsx)("div",{style:{background:d,height:100},children:u})]})}},71399:function(e,t,n){"use strict";n.r(t),n.d(t,{FloatInput:function(){return s},floatInput:function(){return l}});var r=n(57437),i=n(2265);function l(){return function(e){let{value:t,setValue:n,style:l,placeholder:s}=e,[a,o]=(0,i.useState)(!1),[c,u]=(0,i.useState)(0);(0,i.useEffect)(()=>{o(!1),u(0)},[t]);let d=(0,i.useCallback)(e=>{let t=e.target.value;if(!t){n(0),o(!1),u(0);return}let r=t.match(/^(?:[1-9][0-9]*|0)\.(0*)$/);if(r){let e=parseFloat(t);if(Number.isNaN(e))return;n(e),o(!0),u(r[1].length);return}let i=t.match(/^(?:[1-9][0-9]*|0)\.[0-9]*[1-9](0*)$/);if(i){let e=parseFloat(t);if(Number.isNaN(e))return;n(e),o(!1),u(i[1].length);return}let l=parseFloat(t);Number.isNaN(l)||(n(l),o(!1),u(0))},[]);return(0,r.jsx)("input",{value:"".concat(t).concat(a?".":"").concat("0".repeat(c)),onChange:d,style:l,placeholder:s})}}let s=l()},21042:function(e,t,n){"use strict";n.r(t),n.d(t,{integerInput:function(){return l}});var r=n(57437),i=n(2265);function l(e,t){return function(n){let{value:l,setValue:s,style:a,placeholder:o}=n,c=(0,i.useCallback)(n=>{let r=parseInt(n.target.value);Number.isNaN(r)&&(r=0),void 0!==e&&e<r&&(r=e),void 0!==t&&t>r&&(r=t),s(r)},[]);return(0,r.jsx)("input",{value:l.toString(),onChange:c,style:a,placeholder:o})}}},17061:function(e,t,n){"use strict";n.r(t),n.d(t,{InteractiveCanvas:function(){return s}});var r=n(57437),i=n(2265);function l(e){return Object.fromEntries(Object.entries(e).map(e=>{let[t,n]=e;return[t,n.defaultValue]}))}function s(e){let{render:t,options:n,renderAutomatically:s}=e,[o,c]=(0,i.useState)(()=>l(n)),[u,d]=(0,i.useState)(()=>t(o)),[f,h]=(0,i.useState)(null),[p,x]=(0,i.useState)(!1),[m,b]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(f){let e=f.getContext("2d");e?(e.putImageData(u,0,0),x(!1)):x(!0)}},[f,u]),(0,i.useEffect)(()=>{m&&s&&(b(!1),d(t(o)))},[m,s,t]);let v=(0,i.useCallback)(()=>{b(!1),d(t(o))},[d,t,o]),j=(0,i.useCallback)(()=>{let e=l(n);b(!1),d(t(e))},[n]);return(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[(0,r.jsx)("div",{style:{overflowX:"auto"},children:(0,r.jsx)("canvas",{ref:h,width:u.width,height:u.height})}),p&&(0,r.jsx)("div",{style:{color:"red"},children:"Error"}),Object.entries(n).sort((e,t)=>{let[n]=e,[r]=t;return n.localeCompare(r)}).map(e=>{let[t,n]=e;return(0,r.jsx)(a,{state:o,setState:c,setDirty:b,propertyName:t,displayName:n.displayName,component:n.component},t)}),!s&&(0,r.jsx)("button",{type:"button",onClick:v,style:{background:m?"#FFFF0088":void 0},disabled:!m,children:"확인"}),(0,r.jsx)("button",{type:"button",onClick:j,children:"취소"})]})}function a(e){let{state:t,setState:n,setDirty:l,propertyName:s,displayName:a,component:o}=e,c=(0,i.useCallback)(e=>{n(t=>({...t,[s]:e})),l(!0)},[n,s,l]);return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:a}),(0,r.jsx)(o,{value:t[s],setValue:c})]})}},33883:function(e,t,n){"use strict";n.r(t),n.d(t,{FloatOptionComponent:function(){return s},floatOption:function(){return a}});var r=n(57437),i=n(2265),l=n(71399);function s(e){let{value:t,setValue:n}=e,[s,a]=(0,i.useState)(t);(0,i.useEffect)(()=>a(t),[t]);let o=(0,i.useCallback)(()=>n(s),[n,s]),c=(0,i.useCallback)(()=>a(t),[a,t]);return(0,r.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,r.jsx)(l.FloatInput,{value:s,setValue:a,style:{flex:1,background:t===s?void 0:"#FFFF0088",gap:4}}),(0,r.jsx)("button",{type:"button",onClick:o,children:"확인"}),(0,r.jsx)("button",{type:"button",onClick:c,children:"취소"})]})}function a(e,t){return{defaultValue:t,displayName:e,component:s}}},39481:function(e,t,n){"use strict";n.r(t),n.d(t,{integerOption:function(){return a},integerOptionComponent:function(){return s}});var r=n(57437),i=n(2265),l=n(21042);function s(e,t){let n=(0,l.integerInput)(e,t);return function(e){let{value:t,setValue:l}=e,[s,a]=(0,i.useState)(t);(0,i.useEffect)(()=>a(t),[t]);let o=(0,i.useCallback)(()=>l(s),[l,s]),c=(0,i.useCallback)(()=>a(t),[a,t]);return(0,r.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,r.jsx)(n,{value:s,setValue:a,style:{flex:1,background:t===s?void 0:"#FFFF0088",gap:4}}),(0,r.jsx)("button",{type:"button",onClick:o,children:"확인"}),(0,r.jsx)("button",{type:"button",onClick:c,children:"취소"})]})}}function a(e,t,n,r){return{defaultValue:t,displayName:e,component:s(n,r)}}},57212:function(e,t,n){"use strict";n.r(t),n.d(t,{Normal3OptionComponent:function(){return s},normal3Option:function(){return a}});var r=n(57437),i=n(2265),l=n(71399);function s(e){let{value:t,setValue:n}=e,[[s,a,o],c]=(0,i.useState)(t);(0,i.useEffect)(()=>c(t),[t]);let u=(0,i.useCallback)(e=>c(t=>{let[n,r,i]=t;return[e,r,i]}),[]),d=(0,i.useCallback)(e=>c(t=>{let[n,r,i]=t;return[n,e,i]}),[]),f=(0,i.useCallback)(e=>c(t=>{let[n,r]=t;return[n,r,e]}),[]),h=(0,i.useCallback)(()=>{let e=Math.sqrt(s*s+a*a+o*o);e?n([s/e,a/e,o/e]):c(t)},[n,s,a,o]),p=(0,i.useCallback)(()=>c(t),[c,t]);return(0,r.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,r.jsx)(l.FloatInput,{value:s,setValue:u,style:{flex:1,minWidth:0,background:t[0]===s?void 0:"#FFFF0088"},placeholder:"x"}),(0,r.jsx)(l.FloatInput,{value:a,setValue:d,style:{flex:1,minWidth:0,background:t[1]===a?void 0:"#FFFF0088"},placeholder:"y"}),(0,r.jsx)(l.FloatInput,{value:o,setValue:f,style:{flex:1,minWidth:0,background:t[2]===o?void 0:"#FFFF0088"},placeholder:"z"}),(0,r.jsx)("button",{type:"button",onClick:h,children:"확인"}),(0,r.jsx)("button",{type:"button",onClick:p,children:"취소"})]})}function a(e,t){return{defaultValue:t,displayName:e,component:s}}},12721:function(e,t,n){"use strict";n.r(t),n.d(t,{Vec3OptionComponent:function(){return s},vec3Option:function(){return a}});var r=n(57437),i=n(2265),l=n(71399);function s(e){let{value:t,setValue:n}=e,[[s,a,o],c]=(0,i.useState)(t);(0,i.useEffect)(()=>c(t),[t]);let u=(0,i.useCallback)(e=>c(t=>{let[n,r,i]=t;return[e,r,i]}),[]),d=(0,i.useCallback)(e=>c(t=>{let[n,r,i]=t;return[n,e,i]}),[]),f=(0,i.useCallback)(e=>c(t=>{let[n,r]=t;return[n,r,e]}),[]),h=(0,i.useCallback)(()=>n([s,a,o]),[n,s,a,o]),p=(0,i.useCallback)(()=>c(t),[c,t]);return(0,r.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,r.jsx)(l.FloatInput,{value:s,setValue:u,style:{flex:1,minWidth:0,background:t[0]===s?void 0:"#FFFF0088"},placeholder:"x"}),(0,r.jsx)(l.FloatInput,{value:a,setValue:d,style:{flex:1,minWidth:0,background:t[1]===a?void 0:"#FFFF0088"},placeholder:"y"}),(0,r.jsx)(l.FloatInput,{value:o,setValue:f,style:{flex:1,minWidth:0,background:t[2]===o?void 0:"#FFFF0088"},placeholder:"z"}),(0,r.jsx)("button",{type:"button",onClick:h,children:"확인"}),(0,r.jsx)("button",{type:"button",onClick:p,children:"취소"})]})}function a(e,t){return{defaultValue:t,displayName:e,component:s}}},41726:function(e,t,n){"use strict";function r(e){return Math.sqrt(e.map(e=>e*e).reduce((e,t)=>e+t))}n.d(t,{k:function(){return r}})},54635:function(e,t,n){"use strict";function r(e,t){return[e[0]*t,e[1]*t,e[2]*t]}n.d(t,{N:function(){return r}})},75161:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var r=n(41726),i=n(54635);function l(e){return(0,i.N)(e,1/(0,r.k)(e))}},84819:function(e,t,n){"use strict";n.d(t,{I:function(){return a}});var r=n(41726),i=n(54635),l=n(75161);function s(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function a(e,t){var n,a,o,c,u,d,f;if((0,r.k)(s(e.origin,t.center))<t.radius)return[(0,i.N)(e.direction,-1),0];let h=s(e.origin,t.center),p=(n=e.direction[0])*n+(a=e.direction[1])*a+(o=e.direction[2])*o,x=2*(h[0]*e.direction[0]+h[1]*e.direction[1]+h[2]*e.direction[2]),m=x*x-4*p*((c=h[0])*c+(u=h[1])*u+(d=h[2])*d-(f=t.radius)*f);if(m<0)return;let b=(-x-Math.sqrt(m))/(2*p);if(b<0&&(b=(-x+Math.sqrt(m))/(2*p))<0)return;let v=h[0]+e.direction[0]*b,j=h[1]+e.direction[1]*b,g=h[2]+e.direction[2]*b;return[(0,l.F)([2*v,2*j,2*g]),b]}},74278:function(e,t,n){"use strict";n.r(t),n.d(t,{SpheresOptionComponent:function(){return s},spheresOption:function(){return o}});var r=n(57437),i=n(2265),l=n(71399);function s(e){let{value:t,setValue:n}=e,[l,s]=(0,i.useState)(t);(0,i.useEffect)(()=>s(t),[t]);let o=(0,i.useCallback)(()=>s(e=>[...e,{center:[0,0,0],radius:1}]),[]),c=(0,i.useCallback)(()=>n(l),[n,l]),u=(0,i.useCallback)(()=>s(t),[s,t]);return(0,r.jsxs)("div",{children:[l.map((e,t)=>(0,r.jsx)(a,{i:t,state:l,setState:s},t)),(0,r.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,r.jsx)("button",{type:"button",onClick:o,style:{flex:1},children:"추가"}),(0,r.jsx)("button",{type:"button",onClick:c,style:{flex:1},children:"확인"}),(0,r.jsx)("button",{type:"button",onClick:u,style:{flex:1},children:"취소"})]})]})}function a(e){let{i:t,state:n,setState:s}=e,{center:[a,o,c],radius:u}=n[t],d=(0,i.useCallback)(e=>s(n=>n.map((n,r)=>r===t?{center:[e,n.center[1],n.center[2]],radius:n.radius}:n)),[t]),f=(0,i.useCallback)(e=>s(n=>n.map((n,r)=>r===t?{center:[n.center[0],e,n.center[2]],radius:n.radius}:n)),[t]),h=(0,i.useCallback)(e=>s(n=>n.map((n,r)=>r===t?{center:[n.center[0],n.center[1],e],radius:n.radius}:n)),[t]),p=(0,i.useCallback)(e=>s(n=>n.map((n,r)=>r===t?{center:n.center,radius:e}:n)),[t]),x=(0,i.useCallback)(()=>s(e=>e.filter((e,n)=>n!==t)),[t]);return(0,r.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,r.jsx)(l.FloatInput,{value:a,setValue:d,style:{flex:1,minWidth:0},placeholder:"x"}),(0,r.jsx)(l.FloatInput,{value:o,setValue:f,style:{flex:1,minWidth:0},placeholder:"y"}),(0,r.jsx)(l.FloatInput,{value:c,setValue:h,style:{flex:1,minWidth:0},placeholder:"z"}),(0,r.jsx)(l.FloatInput,{value:u,setValue:p,style:{flex:1,minWidth:0},placeholder:"반지름"}),(0,r.jsx)("button",{onClick:x,children:"제거"})]})}function o(e,t){return{defaultValue:t,displayName:e,component:s}}},91039:function(e,t,n){"use strict";function r(e,t,n){let r=0,i=0,l=0,s=Math.floor(6*e),a=6*e-s,o=n*(1-t),c=n*(1-a*t),u=n*(1-(1-a)*t);switch(s%6){case 0:[r,i,l]=[n,u,o];break;case 1:[r,i,l]=[c,n,o];break;case 2:[r,i,l]=[o,n,u];break;case 3:[r,i,l]=[o,c,n];break;case 4:[r,i,l]=[u,o,n];break;case 5:[r,i,l]=[n,o,c]}return[Math.round(255*r),Math.round(255*i),Math.round(255*l)]}n.d(t,{W:function(){return r}})},44896:function(e,t,n){"use strict";n.r(t),n.d(t,{Preview0:function(){return f}});var r=n(57437),i=n(17061),l=n(33883),s=n(39481),a=n(84819),o=n(74278);let c={"1-size":(0,s.integerOption)("이미지 크기",512,3840,1),"2-orthogonal-camera-scale":(0,l.floatOption)("카메라 크기",3),"5-spheres":(0,o.spheresOption)("물체(구)들",[{center:[-2,3,0],radius:1},{center:[3,5,0],radius:1},{center:[0,5,0],radius:.1}])},u=[0,0,0],d=[0,1,0];function f(){return(0,r.jsx)(i.InteractiveCanvas,{options:c,render:h})}function h(e){let{"1-size":t,"2-orthogonal-camera-scale":n,"5-spheres":r}=e,i=new Uint8ClampedArray(t*t*4);for(let e=0;e<t;e++)for(let l=0;l<t;l++){let[s,o,c]=function(e,t,n,r,i,l){var s;let o;let c={origin:(s=[(2*e-1)*n,0,-(2*t-1)*n],[r[0]+s[0],r[1]+s[1],r[2]+s[2]]),direction:i};for(let e of l){let t=(0,a.I)(c,e);t&&(!o||o[1]>t[1])&&(o=t)}let u=o?o[0]:[0,0,0];return[Math.floor((.5*u[0]+.5)*255+.5),Math.floor((.5*u[1]+.5)*255+.5),Math.floor((.5*u[2]+.5)*255+.5)]}(l/(t-1),e/(t-1),n,u,d,r);i[(e*t+l)*4]=s,i[(e*t+l)*4+1]=o,i[(e*t+l)*4+2]=c,i[(e*t+l)*4+3]=255}return new ImageData(i,t,t)}},556:function(e,t,n){"use strict";n.r(t),n.d(t,{Preview1:function(){return f}});var r=n(57437),i=n(17061),l=n(33883),s=n(39481),a=n(12721),o=n(75161),c=n(84819),u=n(74278);let d={"1-size":(0,s.integerOption)("이미지 크기",512,3840,1),"2-perspective-camera-fov":(0,l.floatOption)("카메라 시야각 (라디안)",1.5707963267948966),"3-camera-position":(0,a.vec3Option)("카메라 위치",[0,0,0]),"5-spheres":(0,u.spheresOption)("물체(구)들",[{center:[-2,3,0],radius:1},{center:[3,5,0],radius:1},{center:[0,5,0],radius:.1}])};function f(){return(0,r.jsx)(i.InteractiveCanvas,{options:d,render:h})}function h(e){let{"1-size":t,"2-perspective-camera-fov":n,"3-camera-position":r,"5-spheres":i}=e,l=new Uint8ClampedArray(t*t*4);for(let e=0;e<t;e++)for(let s=0;s<t;s++){let[a,u,d]=function(e,t,n,r,i){let l;let s={origin:r,direction:(0,o.F)([Math.tan((2*e-1)*n/2),1,-Math.tan((2*t-1)*n/2)])};for(let e of i){let t=(0,c.I)(s,e);t&&(!l||l[1]>t[1])&&(l=t)}let a=l?l[0]:[0,0,0];return[Math.floor((.5*a[0]+.5)*255+.5),Math.floor((.5*a[1]+.5)*255+.5),Math.floor((.5*a[2]+.5)*255+.5)]}(s/(t-1),e/(t-1),n,r,i);l[(e*t+s)*4]=a,l[(e*t+s)*4+1]=u,l[(e*t+s)*4+2]=d,l[(e*t+s)*4+3]=255}return new ImageData(l,t,t)}},44568:function(e,t,n){"use strict";n.r(t),n.d(t,{Preview2:function(){return f}});var r=n(57437),i=n(17061),l=n(33883),s=n(39481),a=n(12721),o=n(75161),c=n(84819),u=n(74278);let d={"1-size":(0,s.integerOption)("이미지 크기",512,3840,1),"2-perspective-camera-fov":(0,l.floatOption)("카메라 시야각 (라디안)",1.5707963267948966),"3-camera-position":(0,a.vec3Option)("카메라 위치",[0,0,0]),"5-spheres":(0,u.spheresOption)("물체(구)들",[{center:[-2,3,0],radius:1},{center:[3,5,0],radius:1},{center:[0,5,0],radius:.1}])};function f(){return(0,r.jsx)(i.InteractiveCanvas,{options:d,render:h})}function h(e){let{"1-size":t,"2-perspective-camera-fov":n,"3-camera-position":r,"5-spheres":i}=e,l=new Uint8ClampedArray(t*t*4),s=Math.tan(n/2);for(let e=0;e<t;e++)for(let n=0;n<t;n++){let[a,u,d]=function(e,t,n,r,i){let l;let s={origin:r,direction:(0,o.F)([(2*e-1)*n,1,-(2*t-1)*n])};for(let e of i){let t=(0,c.I)(s,e);t&&(!l||l[1]>t[1])&&(l=t)}let a=l?l[0]:[0,0,0];return[Math.floor((.5*a[0]+.5)*255+.5),Math.floor((.5*a[1]+.5)*255+.5),Math.floor((.5*a[2]+.5)*255+.5)]}(n/(t-1),e/(t-1),s,r,i);l[(e*t+n)*4]=a,l[(e*t+n)*4+1]=u,l[(e*t+n)*4+2]=d,l[(e*t+n)*4+3]=255}return new ImageData(l,t,t)}},4302:function(e,t,n){"use strict";n.r(t),n.d(t,{BingoGrid:function(){return l}});var r=n(57437);let i=["A5~E1 대각선은 빙고 줄이 아니다","이 칸은 빙고 줄의 일부가 아니다","A1~E5 대각선은 빙고 줄이다","D4는 색칠되어 있다","이 칸은 빙고 줄의 일부이다","A4는 색칠이 안 되어 있다","모든 방향의 빙고 줄이 존재한다","이 문장은 참이다","17개 이하의 칸이 색칠되어 있다","빙고 줄의 일부인 칸은 짝수 개이다","이 칸은 빙고 줄의 일부이다","색칠된, 빙고가 아닌 칸은 5개 이상이다","이 칸은 색칠되지 않았거나 빙고 줄이다","세로 빙고 줄은 2개 이상이다","빙고 줄의 일부가 아닌 칸은 10개 이상이다","A2는 색칠이 안 되어 있다","제 2행과 D열 중 적어도 하나는 빙고 줄이다","C열에는 색칠된 칸이 3개 이하 있다","D1은 색칠되어 있다","대각선 빙고 줄이 있다","E5는 색칠되어 있다","이 문제의 정답은 1개가 아니다","이 칸은 색칠되어 있다","빙고 줄의 개수는 3개 이상이다","A5는 색칠되어 있다"];function l(e){let{props:t,state:n,setState:l}=e,s=[n[0]&&n[1]&&n[2]&&n[3]&&n[4],n[5]&&n[6]&&n[7]&&n[8]&&n[9],n[10]&&n[11]&&n[12]&&n[13]&&n[14],n[15]&&n[16]&&n[17]&&n[18]&&n[19],n[20]&&n[21]&&n[22]&&n[23]&&n[24]],a=[n[0]&&n[5]&&n[10]&&n[15]&&n[20],n[1]&&n[6]&&n[11]&&n[16]&&n[21],n[2]&&n[7]&&n[12]&&n[17]&&n[22],n[3]&&n[8]&&n[13]&&n[18]&&n[23],n[4]&&n[9]&&n[14]&&n[19]&&n[24]],o=!!(n[20]&&n[16]&&n[12]&&n[8]&&n[4]),c=!!(n[0]&&n[6]&&n[12]&&n[18]&&n[24]),u=0,d=0,f=0,h=0,p=0,x=0;for(let e=0;e<5;e++){s[e]&&u++,a[e]&&d++;for(let t=0;t<5;t++)n[5*e+t]&&(s[e]||a[t]||o&&e+t==4||c&&e==t?p++:x++,h++);n[5*e+2]&&f++}let m=[o,s[0]||a[1],!c,!n[18],!(s[0]||a[4]||o),n[15],!u||!d||!o&&!c,!n[7],h>17,!!(p%2),!(s[2]||a[0]),x<5,n[12]&&!(o||c||s[2]||a[2]),d<2,25-p<10,n[5],!(s[1]||a[3]),f>3,!n[3],!o&&!c,!n[24],!0,!n[22],u+d+ +o+ +c<3,!n[20]];return(0,r.jsx)("div",{style:{width:"min(100%,  calc(100vh - 3.5rem))",aspectRatio:"1 / 1",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)("div",{style:{display:"grid",width:"100%",height:"100%",padding:2,gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"repeat(5, 1fr)",gap:10},children:t.map((e,s)=>(0,r.jsx)("button",{type:"button",onClick:()=>{"IDK"===t[s]&&l(e=>{let t=[...e];return t[s]=!t[s],t})},style:{width:"100%",aspectRatio:"1 / 1",boxSizing:"border-box",border:"2px solid ".concat(21===s?"gray":m[s]==n[s]?"orange":n[s]?"#444":"#BBB"),background:n[s]?"#444":"#BBB",color:n[s]?"white":"black",outline:"true"===t[s]?"2px solid blue":"false"===t[s]?"2px solid red":"true-assumed"===t[s]?"2px solid green":"false-assumed"===t[s]?"2px solid yellow":void 0,fontSize:"1.5vmin"},children:i[s]},s))})})}},16758:function(e,t,n){"use strict";n.r(t),n.d(t,{BingoUI:function(){return s}});var r=n(57437),i=n(2265),l=n(4302);function s(e){let{props:t}=e,[n,s]=(0,i.useState)(()=>t.map(e=>"true"===e||"true-assumed"===e));return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.BingoGrid,{props:t,state:n,setState:s}),(0,r.jsx)("button",{type:"button",onClick:()=>s(t.map(e=>"true"===e||"true-assumed"===e)),children:"reset"})]})}},19895:function(e,t,n){"use strict";function r(e){let{children:t}=e;return t}n.d(t,{NoSSR:function(){return i}});let i=(0,n(30166).default)(()=>Promise.resolve(r),{ssr:!1})},44378:function(e,t,n){"use strict";n.d(t,{PostPage:function(){return I}});var r=n(57437),i=n(14090),l=n(87275),s=n(87867),a=n(40875),o=n(92451),c=n(58293),u=n(10407),d=n(27648),f=n(2265),h=n(26504),p=n(25922);function x(e){let{slug:t}=e,{resolvedTheme:n}=(0,p.F)();return(0,r.jsx)(h.Z,{id:"comments",repo:"mjy9088/mjy-blog-comments",repoId:"R_kgDOMAvywA",category:"Announcements",categoryId:"DIC_kwDOMAvywM4Cfnhe",mapping:"specific",term:t,reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:n,lang:"ko",loading:"lazy"})}var m=n(41003);function b(e){let{attributes:t}=e;return(0,r.jsxs)("div",{className:"flex gap-2 text-gray-500",children:[(0,r.jsx)("span",{children:(0,m.U)(new Date(t.createTime))}),new Date(t.createTime).getTime()!==new Date(t.updateTime).getTime()&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"|"}),(0,r.jsx)("span",{children:(0,m.U)(new Date(t.updateTime))})]})]})}function v(e){let{categories:t,index:n}=e,i=(0,f.useMemo)(()=>"/categories".concat(t.slice(0,n+1).map(e=>"/"+e).join(""),"/"),[t,n]);return(0,r.jsxs)("li",{className:"inline list-none",children:[(0,r.jsx)(d.default,{href:i,children:t[n]}),(0,r.jsx)("span",{children:" / "})]})}function j(e){let{categories:t}=e;return(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:"inline list-none",children:t.map((e,n)=>(0,r.jsx)(v,{categories:t,index:n},e))})})}var g=n(59036),y=n(50656);function k(){return(0,f.useEffect)(()=>y.Z.contentLoaded(),[]),null}var C=n(80131);function N(e){let{post:t}=e,n=(0,C.e)(e=>{let{visit:t}=e;return t});return(0,f.useEffect)(()=>(n(t),()=>n(void 0)),[t,n]),null}var F=n(67645);function w(e){let{divRef:t,MDXContext:n}=e;return(0,r.jsx)("div",{ref:t,className:"mdx-content-container",children:n})}function I(e){var t,n;let{hierarchy:h,attributes:p,MDXContent:m,slug:v,tocItems:y}=e,I=(0,C.e)(e=>{let{postPageMobileExpandedSection:t}=e;return t}),M=(0,C.e)(e=>{let{leftAsideExpanded:t}=e;return t}),S=(0,C.e)(e=>{let{rightAsideExpanded:t}=e;return t}),E=(0,C.e)(e=>{let{togglePostPageMobilePostList:t}=e;return t}),P=(0,C.e)(e=>{let{togglePostPageMobileToc:t}=e;return t}),O=(0,C.e)(e=>{let{toggleLeftAsideExpanded:t}=e;return t}),D=(0,C.e)(e=>{let{toggleRightAsideExpanded:t}=e;return t}),[z,A]=(0,f.useState)(null===(t=y[0])||void 0===t?void 0:t.id),[V,W]=(0,f.useState)(null);return(0,f.useEffect)(()=>{let e={},t=new IntersectionObserver(t=>{t.forEach(t=>{e[t.target.id]=t.isIntersecting});let n=y.findIndex(t=>{let{id:n}=t;return e[n]});-1!==n?A(y[Math.max(n-1,0)].id):A(y[y.length-1].id)},{threshold:.1,rootMargin:"-100px 0px -30%"});return null==V||V.querySelectorAll("h1[id],h2[id],h3[id]").forEach(e=>{t.observe(e)}),()=>t.disconnect()},[V]),(0,f.useEffect)(()=>(I?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[I]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N,{post:{slug:v,attributes:p}}),(0,r.jsx)(F.d,{toMerge:h}),(0,r.jsxs)("div",{className:(0,s.cn)("lg:hidden sticky flex flex-col top-14 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",I&&"h-[calc(100vh-3.5rem)]"),children:[(0,r.jsx)("div",{className:"md:hidden border-b h-10",children:(0,r.jsx)("div",{className:"container mx-auto px-4",children:(0,r.jsxs)("button",{type:"button",className:"w-full py-2 flex items-center justify-between",onClick:E,"aria-expanded":"postList"===I,"aria-controls":"mobile-post-list",children:[(0,r.jsx)("span",{className:"font-medium",children:"Posts"}),(0,r.jsx)(a.Z,{className:"h-4 w-4 transition-transform ".concat("postList"===I?"transform rotate-180":""),"aria-hidden":"true"})]})})}),"postList"===I&&(0,r.jsx)("div",{id:"mobile-post-list",className:"md:hidden border-b flex-1 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-y-auto",children:(0,r.jsx)("div",{className:"container mx-auto px-4 py-2",children:(0,r.jsx)(g.c,{})})}),(0,r.jsx)("div",{className:"border-b h-10",children:(0,r.jsx)("div",{className:"container mx-auto px-4",children:(0,r.jsxs)("button",{type:"button",className:"w-full py-2 flex items-center justify-between",onClick:P,"aria-expanded":"toc"===I,"aria-controls":"mobile-toc",children:[(0,r.jsx)("span",{className:"font-medium",children:null===(n=y.find(e=>e.id===z))||void 0===n?void 0:n.title}),(0,r.jsx)(a.Z,{className:"h-4 w-4 transition-transform ".concat("toc"===I?"transform rotate-180":""),"aria-hidden":"true"})]})})}),"toc"===I&&(0,r.jsx)("div",{id:"mobile-toc",className:"lg:hidden flex-1 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-y-auto",children:(0,r.jsx)("div",{className:"container mx-auto px-4 py-4",children:(0,r.jsx)("nav",{className:"space-y-2",children:y.map(e=>(0,r.jsx)("a",{href:"#".concat(e.id),className:"block py-2 ".concat(z===e.id?"font-semibold":""),onClick:P,children:e.title},e.id))})})})]}),(0,r.jsxs)("div",{className:"container mx-auto px-4 flex-1 items-start md:grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-10",children:[(0,r.jsx)("aside",{className:(0,s.cn)("hidden md:block sticky top-14 z-30 h-[calc(100vh-3.5rem)] shrink-0 transition-all duration-300",M?"w-[280px] overflow-y-auto":"w-[40px] overflow-hidden"),children:(0,r.jsxs)("div",{className:"py-6 pr-6 lg:py-8 h-full flex flex-col",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,r.jsx)("h2",{className:(0,s.cn)("text-lg font-semibold",!M&&"sr-only"),children:"Posts"}),(0,r.jsx)(l.z,{variant:"ghost",size:"icon",onClick:O,"aria-label":M?"Collapse left sidebar":"Expand left sidebar",children:M?(0,r.jsx)(o.Z,{className:"h-4 w-4"}):(0,r.jsx)(c.Z,{className:"h-4 w-4"})})]}),M&&(0,r.jsx)(g.c,{})]})}),(0,r.jsxs)("main",{className:"flex w-full flex-col overflow-hidden py-6",children:[(0,r.jsxs)("article",{className:"prose dark:prose-invert max-w-none",children:[(0,r.jsx)(j,{categories:p.categories}),(0,r.jsx)("h1",{className:"text-3xl font-bold mb-4",children:p.title}),(0,r.jsx)(b,{attributes:p}),(0,r.jsx)(w,{divRef:W,MDXContext:m}),p.tags.map(e=>(0,r.jsx)(d.default,{href:"/tags/".concat(e,"/"),children:(0,r.jsx)(i.C,{children:e})},e))]}),(0,r.jsxs)("section",{className:"mt-8",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Comments"}),(0,r.jsx)(x,{slug:v})]})]}),(0,r.jsx)("aside",{className:(0,s.cn)("hidden lg:block sticky top-14 self-start h-[calc(100vh-3.5rem)] transition-all duration-300",S?"w-[250px] overflow-y-auto":"w-[40px] overflow-hidden"),children:(0,r.jsxs)("div",{className:"py-6 pl-6 h-full flex flex-col",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,r.jsx)("h2",{className:(0,s.cn)("text-lg font-semibold",!S&&"sr-only"),children:"Table of Contents"}),(0,r.jsx)(l.z,{variant:"ghost",size:"icon",onClick:D,"aria-label":S?"Collapse right sidebar":"Expand right sidebar",children:S?(0,r.jsx)(u.Z,{className:"h-4 w-4"}):(0,r.jsx)(c.Z,{className:"h-4 w-4"})})]}),S&&(0,r.jsx)("nav",{className:"space-y-2",children:y.map(e=>(0,r.jsx)("a",{href:"#".concat(e.id),className:"block hover:underline ".concat(z===e.id?"font-semibold":""),children:e.title},e.id))})]})})]}),(0,r.jsx)(k,{})]})}},76471:function(e,t,n){"use strict";n.d(t,{HierarchyStaticLoader:function(){return l}});var r=n(2265),i=n(34002);function l(e){let{nodes:t}=e,n=(0,i.b)(e=>{let{addNodes:t}=e;return t});return(0,r.useEffect)(()=>{n(t)},[t,n]),null}},59036:function(e,t,n){"use strict";n.d(t,{c:function(){return v}});var r=n(57437),i=n(34002),l=n(10407),s=n(27648),a=n(2265),o=n(80131);function c(e){let{current:t,name:n,sub:i}=e,l=(0,a.useMemo)(()=>[...t,n],[t,n]);return(0,r.jsx)("ul",{children:i.map(e=>(0,r.jsx)(m,{current:l,node:e},e[0]))})}var u=n(74947),d=n(76471);function f(e){let{current:t,name:n,children:i}=e,[l,s]=(0,a.useState)();return(0,a.useEffect)(()=>{(async()=>{s((await (0,u.n3)([...t,n],"hierarchy")).nodes)})()},[t,n]),(0,r.jsxs)(r.Fragment,{children:[i,l&&(0,r.jsx)(d.HierarchyStaticLoader,{nodes:l})]})}function h(e){let{current:t,name:n,sub:i}=e,u=(0,o.e)(e=>{let{currentPost:t}=e;return t}),[d,h]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=[...t,n];u&&0==function(e,t){for(let n=0;;n++){if(e.length===n&&t.length===n)return 0;if(e.length===n)return -1;if(t.length===n)return 1;let r=e[n].localeCompare(t[n]);if(r)return r}}(u.attributes.categories.slice(0,e.length),e)&&h(!0)},[t,u]);let p=(0,a.useCallback)(()=>{h(e=>!e)},[]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex py-1 items-center",children:[(0,r.jsx)("button",{className:"block cursor-pointer p-1",onClick:p,"aria-expanded":d,"aria-label":"Expand ".concat(n," category"),children:(0,r.jsx)(l.Z,{className:"h-4 w-4 transition-transform ".concat(d?"transform rotate-90":""),"aria-hidden":"true"})}),(0,r.jsx)(s.default,{href:"/categories".concat([...t,n].map(e=>"/"+e).join(""),"/"),className:"ml-1 cursor-pointer flex-grow",children:n})]}),d&&(0,r.jsx)("div",{className:"ml-4",role:"group","aria-label":"".concat(n," subcategories and posts"),children:i?(0,r.jsx)(c,{current:t,name:n,sub:i}):(0,r.jsx)(f,{current:t,name:n,children:"Loading..."})})]})}var p=n(62319);function x(e){let{slug:t,title:n}=e;return(0,r.jsxs)(s.default,{href:"/posts/".concat(t),className:"flex py-1 text-muted-foreground hover:text-foreground items-center",children:[(0,r.jsx)(p.Z,{}),n]},t)}function m(e){let{current:t,node:n}=e,[i,l]=n;return"category"===l.type?(0,r.jsx)(h,{current:t,name:i,sub:l.sub}):(0,r.jsx)(x,{slug:i,title:l.title})}let b=[];function v(){let e=(0,i.b)(e=>{let{nodes:t}=e;return t});return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(m,{current:b,node:e},e[0]))})}},41003:function(e,t,n){"use strict";n.d(t,{U:function(){return l}});var r=n(2265);function i(e){return"".concat(e.getFullYear(),". ").concat(e.getMonth()+1,". ").concat(e.getDate(),".")}function l(e){let[t,n]=(0,r.useState)(()=>i(e));return(0,r.useEffect)(()=>(function(e,t){let n={};return function e(t,n,r){function l(i){r.timeout=setTimeout(()=>e(t,n,r),i)}r.timeout=void 0;let s=Date.now()-t.getTime();if(s<6e4){n("".concat(Math.floor(s/1e3),"초 전")),l(1e3);return}if(s<36e5){n("".concat(Math.floor(s/6e4),"분 전")),l(6e4);return}if(s<864e5){n("".concat(Math.floor(s/36e5),"시간 전")),l(864e5);return}n(i(t))}(e,t,n),()=>{n.timeout&&clearTimeout(n.timeout)}})(e,n),[e,n]),t}},9914:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(2265).createContext)(null)},80131:function(e,t,n){"use strict";n.d(t,{e:function(){return s}});var r=n(2265),i=n(27695),l=n(9914);let s=e=>{let t=(0,r.useContext)(l.Z);return(0,i.o)(t,e)}},39315:function(e,t,n){"use strict";n.d(t,{W:function(){return r}});let r=(0,n(2265).createContext)(null)},67645:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var r=n(2265),i=n(34002);function l(e){let{toMerge:t}=e,n=(0,i.b)(e=>{let{addNodes:t}=e;return t});return(0,r.useEffect)(()=>{n(t.nodes)},[n,t]),null}},34002:function(e,t,n){"use strict";n.d(t,{b:function(){return s}});var r=n(2265),i=n(27695),l=n(39315);let s=e=>{let t=(0,r.useContext)(l.W);return(0,i.o)(t,e)}}},function(e){e.O(0,[1919,4642,7543,2971,2117,1744],function(){return e(e.s=56677)}),_N_E=e.O()}]);