(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{6665:(e,t,l)=>{Promise.resolve().then(l.bind(l,6254))},5353:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=l(2115);function a(e,t){let l=(0,n.useRef)(()=>{}),a=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(l.current(),a.current()):(l.current=s(e,n),a.current=s(t,n))}:e||t,[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let l=e(t);return"function"==typeof l?l:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3576:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=l(306)._(l(2115)).default.createContext(null)},6254:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>u});var n=l(5155),a=l(366),s=l(2115),r=l(5565);function u(){var e,t;let[l,u]=(0,s.useState)(),[c,i]=(0,s.useState)(!0),[o,d]=(0,s.useState)(),f=async()=>{let e=await (0,a.F)();u(e),d(e.images[0].logo),i(!1)},m=e=>{let t=e.target;console.log(t.textContent),l&&d(l.images.filter(e=>e.year===t.textContent)[0].logo)};return((0,s.useEffect)(()=>{f()},[]),l)?(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 mt-10 sm:mt-2 max-w-screen-md",children:[(0,n.jsx)("h1",{className:"text-4xl text-center tracking-wide p-2 font-bold",children:"History"}),(0,n.jsx)("div",{className:"card shadow-md w-1/6 rounded-full",children:c?(0,n.jsx)("span",{className:"loading loading-ball loading-md"}):(0,n.jsx)(r.default,{src:o||"",alt:"Logo",className:"w-full rounded-full",width:500,height:500})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"carousel w-full",children:!c&&(null===(e=l.images)||void 0===e?void 0:e.map((e,t)=>e.cover&&(0,n.jsx)("div",{id:"image-".concat(t+1),className:"carousel-item w-full",children:(0,n.jsx)(r.default,{src:e.cover||"",alt:"Cover",loading:"lazy",width:500,height:100,className:"w-full rounded-xl"})},t)))}),(0,n.jsx)("div",{className:"flex w-full justify-center gap-2 py-2",children:!c&&(null===(t=l.images)||void 0===t?void 0:t.map((e,t)=>e.cover&&(0,n.jsx)("a",{href:"#image-".concat(t+1),className:"btn btn-xs",onClick:m,children:e.year},t)))})]})]})}):null}},366:(e,t,l)=>{"use strict";l.d(t,{F:()=>n});let n=async()=>{try{let e=await fetch("https://18k-radio.github.io/18K/18k-data.json");return await e.json()}catch(e){console.log(e)}}}},e=>{var t=t=>e(e.s=t);e.O(0,[565,441,517,358],()=>t(6665)),_N_E=e.O()}]);