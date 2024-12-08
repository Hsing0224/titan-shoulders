"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[1648],{1152:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>N,default:()=>u,frontMatter:()=>t,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"JavaScript/javascript_isnan-vs-number-isnan","title":"isNaN() vs Number.isNaN()","description":"isNaN() vs Number.isNaN()","source":"@site/docs/JavaScript/javascript_isnan-vs-number-isnan.md","sourceDirName":"JavaScript","slug":"/JavaScript/javascript_isnan-vs-number-isnan","permalink":"/titan-shoulders/docs/JavaScript/javascript_isnan-vs-number-isnan","draft":false,"unlisted":false,"editUrl":"https://github.com/Hsing0224/titan-shoulders/tree/master/docs/JavaScript/javascript_isnan-vs-number-isnan.md","tags":[],"version":"current","sidebarPosition":41,"frontMatter":{"sidebar_position":41,"description":"isNaN() vs Number.isNaN()"},"sidebar":"tutorialSidebar","previous":{"title":"\u6dfa\u62f7\u8c9d\u8207\u6df1\u62f7\u8c9d","permalink":"/titan-shoulders/docs/JavaScript/javascript_shallow-copy-and-deep-copy"},"next":{"title":"config","permalink":"/titan-shoulders/docs/TypeScript/config"}}');var r=a(4848),i=a(8453);const t={sidebar_position:41,description:"isNaN() vs Number.isNaN()"},N="isNaN() vs Number.isNaN()",c={},l=[{value:"isNaN()",id:"isnan",level:2},{value:"Number.isNaN()",id:"numberisnan",level:2},{value:"Reference",id:"reference",level:2}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"isnan-vs-numberisnan",children:"isNaN() vs Number.isNaN()"})}),"\n",(0,r.jsx)(s.h2,{id:"isnan",children:"isNaN()"}),"\n",(0,r.jsxs)(s.p,{children:["\u5224\u65b7\u503c\u662f\u5426\u70ba NaN(Not a Number)\uff0cjs \u6703\u8f49\u578b\u4f86\u5224\u65b7\uff0c\u5982\u679c\u7121\u6cd5\u8f49\u6210\u6578\u5b57\uff0c\u90a3\u5c07\u6703",(0,r.jsx)(s.code,{children:"return true"}),(0,r.jsx)("br",{}),"\nexample:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:'isNaN(NaN); // true\nisNaN("abc"); // true\nisNaN("123"); // false\nisNaN(""); // false\nisNaN([]); // false\nisNaN(true); // false\nisNaN(false); // false\n'})}),"\n",(0,r.jsx)(s.h2,{id:"numberisnan",children:"Number.isNaN()"}),"\n",(0,r.jsxs)(s.p,{children:["ES6 \u5f8c\u6240\u65b0\u589e\uff0c\u4e0d\u6703\u5f37\u5236\u8f49\u63db\u975e\u6578\u5b57\u7684\u503c\uff0c\u5b83\u53ea\u70ba\u5728\u503c\u672c\u8eab\u70ba NaN \u6642\u5019\u624d\u6703",(0,r.jsx)(s.code,{children:"return true"}),(0,r.jsx)("br",{}),"\n\u6703\u51fa\u73fe NaN \u7684\u72c0\u6cc1"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:'Math.sqrt(-1); // NaN\uff0c\u7121\u6cd5\u5c0d\u8ca0\u6578\u9032\u884c\u5e73\u65b9\u6839\u904b\u7b97\n0 / 0; // NaN\uff0c\u96f6\u9664\u4ee5\u96f6\nInfinity - Infinity; // NaN\uff0c\u7121\u7aae\u6e1b\u53bb\u7121\u7aae\nparseInt("Hello"); // NaN\uff0c\u7121\u6cd5\u5c07\u975e\u6578\u5b57\u5b57\u7b26\u4e32\u8f49\u63db\u70ba\u6578\u5b57\nNumber("123abc"); // NaN\uff0c\u7121\u6cd5\u5c07\u5305\u542b\u975e\u6578\u5b57\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\u8f49\u63db\u70ba\u6578\u5b57\nparseFloat("NaN"); // NaN\uff0cparseFloat \u89e3\u6790 "NaN" \u5b57\u7b26\u4e32\u6703\u8fd4\u56de NaN\n'})}),"\n",(0,r.jsx)(s.p,{children:"example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:'Number.isNaN(NaN); // true\nNumber.isNaN("abc"); // false\nNumber.isNaN("123"); // false\nNumber.isNaN(""); // false\nNumber.isNaN([]); // false\nNumber.isNaN(true); // false\nNumber.isNaN(false); // false\n'})}),"\n",(0,r.jsx)(s.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/isNaN",children:"sNAN() - MDN"}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN",children:"Number.isNaN - MDN"})]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>N});var n=a(6540);const r={},i=n.createContext(r);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function N(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);