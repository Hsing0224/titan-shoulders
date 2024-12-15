"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[3351],{4241:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"JavaScript/javascript_tip","title":"JavaScript \u7684\u90a3\u4e9b\u89c0\u5ff5","description":"\u95dc\u65bc JavaScript \u7684\u90a3\u4e9b\u89c0\u5ff5","source":"@site/docs/JavaScript/javascript_tip.md","sourceDirName":"JavaScript","slug":"/JavaScript/javascript_tip","permalink":"/titan-shoulders/docs/JavaScript/javascript_tip","draft":false,"unlisted":false,"editUrl":"https://github.com/Hsing0224/titan-shoulders/tree/master/docs/JavaScript/javascript_tip.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"description":"\u95dc\u65bc JavaScript \u7684\u90a3\u4e9b\u89c0\u5ff5"},"sidebar":"tutorialSidebar","previous":{"title":"\u6a94\u6848\u5f15\u5165","permalink":"/titan-shoulders/docs/SCSS/file-import"},"next":{"title":"Event Loop (\u4e8b\u4ef6\u5faa\u74b0)","permalink":"/titan-shoulders/docs/JavaScript/javascript_event-loop"}}');var l=s(4848),a=s(8453);const r={sidebar_position:10,description:"\u95dc\u65bc JavaScript \u7684\u90a3\u4e9b\u89c0\u5ff5"},c="JavaScript \u7684\u90a3\u4e9b\u89c0\u5ff5",t={},d=[{value:"\u76f4\u8b6f\u5f0f\u8a9e\u8a00",id:"\u76f4\u8b6f\u5f0f\u8a9e\u8a00",level:2},{value:"RHS (Right-hand side)",id:"rhs-right-hand-side",level:2},{value:"LHS (Left-hand side)",id:"lhs-left-hand-side",level:2},{value:"\u7acb\u5373\u51fd\u5f0f(Immediately-Invoked Function Expression, IIFE)",id:"\u7acb\u5373\u51fd\u5f0fimmediately-invoked-function-expression-iife",level:2},{value:"\u51fd\u5f0f\u9673\u8ff0\u5f0f",id:"\u51fd\u5f0f\u9673\u8ff0\u5f0f",level:2},{value:"\u51fd\u5f0f\u8868\u9054\u5f0f",id:"\u51fd\u5f0f\u8868\u9054\u5f0f",level:2},{value:"\u4f5c\u7528\u57df\u63a7\u5236",id:"\u4f5c\u7528\u57df\u63a7\u5236",level:2},{value:"\u9023\u7e8c\u8ce6\u503c",id:"\u9023\u7e8c\u8ce6\u503c",level:2},{value:"\u904b\u7b97\u5b50\u512a\u5148\u9806\u5e8f",id:"\u904b\u7b97\u5b50\u512a\u5148\u9806\u5e8f",level:2},{value:"\u76f8\u7b49\u8207\u4e0d\u76f8\u7b49",id:"\u76f8\u7b49\u8207\u4e0d\u76f8\u7b49",level:2},{value:"\u56b4\u683c\u76f8\u7b49\u3001\u4e0d\u76f8\u7b49",id:"\u56b4\u683c\u76f8\u7b49\u4e0d\u76f8\u7b49",level:3},{value:"\u5bec\u9b06\u76f8\u7b49\u3001\u4e0d\u76f8\u7b49",id:"\u5bec\u9b06\u76f8\u7b49\u4e0d\u76f8\u7b49",level:3},{value:"Truthy \u548c Falsy",id:"truthy-\u548c-falsy",level:2},{value:"\u5f9e\u4ee5\u524d\u5c31\u5b58\u5728\u7684\u932f\u8aa4",id:"\u5f9e\u4ee5\u524d\u5c31\u5b58\u5728\u7684\u932f\u8aa4",level:2},{value:"Reference",id:"reference",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"javascript-\u7684\u90a3\u4e9b\u89c0\u5ff5",children:"JavaScript \u7684\u90a3\u4e9b\u89c0\u5ff5"})}),"\n",(0,l.jsx)(n.h2,{id:"\u76f4\u8b6f\u5f0f\u8a9e\u8a00",children:"\u76f4\u8b6f\u5f0f\u8a9e\u8a00"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"JavaScript"})," \u662f\u76f4\u8b6f\u5f0f\u7684\u8a9e\u8a00\uff0c\u5b83\u4e0d\u7d93\u904e\u7de8\u8b6f\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528\u76f4\u8b6f\u5668\u89e3\u6790\u5f8c\uff0c\u76f4\u63a5\u653e\u5230\u74b0\u5883\u57f7\u884c\u3002\u512a\u9ede\u662f\u5f48\u6027\u8f03\u5927\u3002",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(n.a,{href:"https://esprima.org/index.html",children:["\u4e86\u89e3 ",(0,l.jsx)(n.code,{children:"JavaScript"})," \u7684\u76f4\u8b6f\u5668\u5982\u4f55\u89e3\u6790"]})]}),"\n",(0,l.jsx)(n.h2,{id:"rhs-right-hand-side",children:"RHS (Right-hand side)"}),"\n",(0,l.jsx)(n.p,{children:"\u53d6\u503c\u4f86\u81ea\u53f3\u908a\u7684\u8b8a\u6578\u4e0a\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"lhs-left-hand-side",children:"LHS (Left-hand side)"}),"\n",(0,l.jsx)(n.p,{children:"\u8ce6\u4e88\u503c\u5230\u5de6\u908a\u7684\u8b8a\u6578\u4e0a\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u7acb\u5373\u51fd\u5f0fimmediately-invoked-function-expression-iife",children:"\u7acb\u5373\u51fd\u5f0f(Immediately-Invoked Function Expression, IIFE)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"(function () {})();\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u51fd\u5f0f\u9673\u8ff0\u5f0f",children:"\u51fd\u5f0f\u9673\u8ff0\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"function fn() {}\n// \u51fd\u5f0f\u9673\u8ff0\u5f0f\u53c8\u70ba\u5177\u540d\u51fd\u5f0f\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u51fd\u5f0f\u8868\u9054\u5f0f",children:"\u51fd\u5f0f\u8868\u9054\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const fn = function () {};\n// \u51fd\u5f0f\u8868\u9054\u5f0f\u53c8\u70ba\u533f\u540d\u51fd\u5f0f\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"\u4f9d\u7167 JavaScript \u7279\u6027\u4f86\u770b\uff0c\u51fd\u5f0f\u9673\u8ff0\u5f0f\u6703\u88ab Hoisting\uff0c\u800c\u51fd\u5f0f\u8868\u9054\u5f0f\u5247\u662f\u8b8a\u6578\u5148\u88ab\u5efa\u7acb\uff0c\u518d\u88ab\u8ce6\u4e88\u51fd\u5f0f\u3002"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4f5c\u7528\u57df\u63a7\u5236",children:"\u4f5c\u7528\u57df\u63a7\u5236"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"// \u56e0\u70ba block({}) \u7684\u95dc\u4fc2\uff0ca \u4e0d\u6703\u4e92\u76f8\u5f71\u97ff\u5230\n{\n  const a = 1;\n}\n{\n  const a = 2;\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'var name = "Hsing";\nfunction sayHi() {\n  var name = "Chen";\n  name = "Hsing Chen";\n}\nsayHi();\nconsole.log(name); // \'Hsing\'\n// \u5982\u679c sayHi() \u6c92\u6709 var \uff0c\u5247\u6703\u662f \'Hsing Chen\'\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u7576 ",(0,l.jsx)(n.code,{children:"sayHi()"})," \u88e1\u7684 ",(0,l.jsx)(n.code,{children:"name"}),"\uff0c\u6709\u5ba3\u544a\uff0c\u5176\u4f5c\u7528\u57df\u662f\u5728 scope \u88e1\u4e26\u4e0d\u6703\u5f71\u97ff\u5230\u5916\u9762\u7684 ",(0,l.jsx)(n.code,{children:"name"}),"\u3002",(0,l.jsx)("br",{}),"\n\u800c\u5982\u679c ",(0,l.jsx)(n.code,{children:"sayHi()"})," \u7684 ",(0,l.jsx)(n.code,{children:"name"})," \u662f\u76f4\u63a5\u8ce6\u4e88\u503c\uff0c\u5247\u6703\u6539\u8b8a\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9023\u7e8c\u8ce6\u503c",children:"\u9023\u7e8c\u8ce6\u503c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'const obj = {\n  value: 1,\n};\nObject.defineProperty(obj, "value", {\n  writable: false,\n});\nconst b = (obj.value = 3);\n/*\n\u7b49\u865f\u904b\u7b97\u5b50\u6703\u56de\u50b3\u4e00\u500b\u7d50\u679c\n> obj.value = 3\uff0c\u96d6\u7136obj.value\u4e0d\u6703\u88ab\u8986\u5beb\uff0c\u4f46\u7b49\u865f\u904b\u7b97\u5b50\u6703\u56de\u50b33\uff0c3\u518d\u8ce6\u503c\u7d66b\uff0c\u6240\u4ee5b=3\n*/\n'})}),"\n",(0,l.jsx)(n.admonition,{type:"danger",children:(0,l.jsx)(n.p,{children:"\u4e26\u4e0d\u63a8\u85a6\u4f7f\u7528\u9023\u7e8c\u8ce6\u503c"})}),"\n",(0,l.jsx)(n.h2,{id:"\u904b\u7b97\u5b50\u512a\u5148\u9806\u5e8f",children:"\u904b\u7b97\u5b50\u512a\u5148\u9806\u5e8f"}),"\n",(0,l.jsxs)(n.p,{children:["\u53ef\u53c3\u8003 ",(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_precedence#%E8%A1%A8%E6%A0%BCtable",children:"MDN \u4e0a\u7684\u904b\u7b97\u5b50\u512a\u5148\u5e8f"})]}),"\n",(0,l.jsx)(n.p,{children:"\u7576\u512a\u5148\u9806\u5e8f\u76f8\u7b49\uff0c\u5c31\u6703\u4f9d\u7167\u76f8\u4f9d\u6027\u4f86\u8655\u7406\u5148\u5f8c\u9806\u5e8f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const a = 1 + 2 * 3;\n/*\n1. 2 * 3\n2. 1 + 6\n3. \u7531\u53f3\u81f3\u5de6\u8ce6\u4e88a\n*/\n\nconsole.log(1 > 2 > 3); // false\n/*\n1. 1 > 2 = false\n2. false > 3 = false\n*/\n\nconsole.log(3 < 2 < 1); // true\n/*\n1. 3 < 2 = false\n2. false(\u8f49\u578b\u70ba0) < 1 = true\n*/\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u76f8\u7b49\u8207\u4e0d\u76f8\u7b49",children:"\u76f8\u7b49\u8207\u4e0d\u76f8\u7b49"}),"\n",(0,l.jsx)(n.h3,{id:"\u56b4\u683c\u76f8\u7b49\u4e0d\u76f8\u7b49",children:"\u56b4\u683c\u76f8\u7b49\u3001\u4e0d\u76f8\u7b49"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"==="})," || ",(0,l.jsx)(n.code,{children:"!=="}),(0,l.jsx)("br",{}),"\n\u53ef\u4ee5\u9664\u4e86\u5224\u65b7\u6578\u503c\u4e4b\u5916\uff0c\u4e5f\u6703\u5224\u65b7\u578b\u5225\u662f\u5426\u76f8\u540c\u4f86\u56de\u50b3 ",(0,l.jsx)(n.code,{children:"true"})," || ",(0,l.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"// \u4e00\u4e9b\u7279\u6b8a\u7684\u60c5\u6cc1\nconsole.log(NaN === NaN); // false\nconsole.log(-0 === +0); // true\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5bec\u9b06\u76f8\u7b49\u4e0d\u76f8\u7b49",children:"\u5bec\u9b06\u76f8\u7b49\u3001\u4e0d\u76f8\u7b49"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"=="})," || ",(0,l.jsx)(n.code,{children:"!="}),(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.strong,{children:"\u5e03\u6797\u8207\u5b57\u4e32\u6703\u88ab\u8f49\u63db\u6210\u6578\u5b57\u578b\u5225"}),"\uff0c\u4f46 ",(0,l.jsx)(n.code,{children:"Null"})," \u548c ",(0,l.jsx)(n.code,{children:"undefined"})," \u4e0d\u6703\u88ab\u8f49\u70ba\u6578\u5b57\u578b\u5225\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"console.log(true == \"true\"); // false, Number('true') \u6703\u56de\u50b3 NaN\nconsole.log(Number(null)); // 0\nconsole.log(null == 0); // false, null \u5728\u5bec\u9b06\u76f8\u7b49\u4e0d\u6703\u88ab\u8f49\u70ba\u6578\u5b57\u578b\u5225\nconsole.log(null == undefined); // true, null \u8ddf undefined \u5728\u5bec\u9b06\u76f8\u7b49\u662f\u4e00\u81f4\u7684\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7269\u4ef6\u8207\u975e\u7269\u4ef6\uff0c\u6703\u7528\u5305\u88f9\u7269\u4ef6\u505a\u8f49\u63db\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'console.log(Number([10])); // 10\nconsole.log(String(["A"])); // A\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u7269\u4ef6\u8207\u7269\u4ef6\u6bd4\u5c0d\uff0c\u662f\u6bd4\u5c0d\u53c3\u8003\u4f4d\u7f6e\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"console.log({} == {}); // false\nconsole.log([] == []); // false\n"})}),"\n",(0,l.jsx)(n.h2,{id:"truthy-\u548c-falsy",children:"Truthy \u548c Falsy"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://dorey.github.io/JavaScript-Equality-Table/",children:"JavaScript Equality Table"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5f9e\u4ee5\u524d\u5c31\u5b58\u5728\u7684\u932f\u8aa4",children:"\u5f9e\u4ee5\u524d\u5c31\u5b58\u5728\u7684\u932f\u8aa4"}),"\n",(0,l.jsx)(n.p,{children:"\u539f\u672c\u9810\u671f null \u5728\u578b\u5225\u4e0a\u6703\u662f null\uff0c\u4f46\u505a\u578b\u5225\u6aa2\u67e5\u6642\u537b\u662f\u56de\u50b3 object\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"console.log(typeof null); // object\n"})}),"\n",(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.p,{children:"\u5982\u679c\u8981\u6aa2\u67e5 null"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const x = null;\nconsole.log(x === null); // true\n"})})]}),"\n",(0,l.jsx)(n.h3,{id:""}),"\n",(0,l.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://www.youtube.com/watch?v=8U5kbb1SvJg",children:"JavaScript \u5fc3\u6a5f\u6587\u6cd5\u7bc7 - JS \u9762\u8a66\u5e38\u898b\u6838\u5fc3\u77e5\u8b58 - \u516d\u89d2\u5b78\u9662"}),(0,l.jsx)("br",{}),(0,l.jsx)(n.a,{href:"https://www.udemy.com/course/javascript-adv/",children:"JavaScript \u6838\u5fc3\u7bc7 - \u516d\u89d2\u5b78\u9662"}),(0,l.jsx)("br",{}),(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements",children:"\u8a9e\u53e5\u548c\u8072\u660e - MDN"}),(0,l.jsx)("br",{}),(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence",children:"\u904b\u7b97\u5b50\u512a\u5148\u9806\u5e8f - MDN"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(6540);const l={},a=i.createContext(l);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);