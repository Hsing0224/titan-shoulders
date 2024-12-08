"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[606],{5368:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"JavaScript/javascript_expressions-and-operators","title":"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50","description":"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50","source":"@site/docs/JavaScript/javascript_expressions-and-operators.md","sourceDirName":"JavaScript","slug":"/JavaScript/javascript_expressions-and-operators","permalink":"/titan-shoulders/docs/JavaScript/javascript_expressions-and-operators","draft":false,"unlisted":false,"editUrl":"https://github.com/Hsing0224/titan-shoulders/tree/master/docs/JavaScript/javascript_expressions-and-operators.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"sidebar_position":12,"description":"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50"},"sidebar":"tutorialSidebar","previous":{"title":"Event loop (\u4e8b\u4ef6\u5faa\u74b0)","permalink":"/titan-shoulders/docs/JavaScript/javascript_event-loop"},"next":{"title":"Array","permalink":"/titan-shoulders/docs/JavaScript/javascript_array"}}');var s=a(4848),t=a(8453);const i={sidebar_position:12,description:"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50"},o="\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50",c={},d=[{value:"\u53ef\u9078\u4e32\u9023\u904b\u7b97\u5b50(?.)",id:"\u53ef\u9078\u4e32\u9023\u904b\u7b97\u5b50",level:2},{value:"\u7a7a\u503c\u5408\u4f75(??)",id:"\u7a7a\u503c\u5408\u4f75",level:2},{value:"\u4f4d\u5143\u904b\u7b97\u5b50 - \u4f4d\u5143 AND(&amp;)",id:"\u4f4d\u5143\u904b\u7b97\u5b50---\u4f4d\u5143-and",level:2},{value:"Reference",id:"reference",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50",children:"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53ef\u9078\u4e32\u9023\u904b\u7b97\u5b50",children:"\u53ef\u9078\u4e32\u9023\u904b\u7b97\u5b50(?.)"}),"\n",(0,s.jsxs)(n.p,{children:["\u7576\u4e00\u500b object \u7121\u6cd5\u78ba\u5b9a\u662f\u5426\u6709\u8a72\u5c6c\u6027\u6642\uff0c\u7576\u5982\u679c\u70ba",(0,s.jsx)(n.code,{children:"undefined"}),"\u6216",(0,s.jsx)(n.code,{children:"null"}),"\uff0c\u53c8\u5f80\u4e0b\u5c64\u9078\u64c7\u5c6c\u6027\u6642\uff0c\u6703\u5c0e\u81f4\u7a0b\u5f0f\u767c\u751f\u932f\u8aa4\u3002\u4f7f\u7528\u53ef\u9078\u4e32\u9023\u904b\u7b97\u503c\u53ef\u4ee5\u78ba\u4fdd\u7576\u7121\u8a72\u5c6c\u6027\uff0c\u56de\u50b3",(0,s.jsx)(n.code,{children:"undefined"}),"\u4e14\u505c\u6b62\u5f80\u4e0b\u7e7c\u7e8c\u52d5\u4f5c"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const data = {\n  name: "Hsing",\n  sex: "male",\n  favorite: {\n    ball: ["basketball", "table tennis"],\n  },\n};\n\n// \u7576\u6c92\u4f7f\u7528\u53ef\u9078\u4e32\u9023\u904b\u7b97\u5b50\u9700\u8981\u4e00\u5c64\u4e00\u5c64\u4f86\u907f\u514d\u6c92\u6709\u5c6c\u6027\u7684\u932f\u8aa4\u7522\u751f\nlet movie;\nif (data && data.favorite && data.favorite.movie) {\n  movie = data.favorite.movie;\n}\n\n// \u4f7f\u7528\u53ef\u9078\u4e32\u9023\u904b\u7b97\u5b50\nconst movie = data?.favorite?.movie; // undefined\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u7a7a\u503c\u5408\u4f75",children:"\u7a7a\u503c\u5408\u4f75(??)"}),"\n",(0,s.jsxs)(n.p,{children:["\u7576\u5de6\u908a\u7684\u503c\u70ba",(0,s.jsx)(n.code,{children:"null"}),"\u6216",(0,s.jsx)(n.code,{children:"undefined"}),"\uff0c\u56de\u50b3\u53f3\u908a\u7684\u503c\uff0c\u4e0d\u7136\u5c31\u56de\u50b3\u5de6\u908a\u503c"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'undefined ?? 123; // 123\nnull ?? "abc"; // \'abc\'\nNaN ?? 123; // NaN\n0 ?? "abc"; // 0\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f4d\u5143\u904b\u7b97\u5b50---\u4f4d\u5143-and",children:"\u4f4d\u5143\u904b\u7b97\u5b50 - \u4f4d\u5143 AND(&)"}),"\n",(0,s.jsxs)(n.p,{children:["\u5c07\u503c\u8f49\u70ba\u4e8c\u9032\u4f4d\uff0c\u518d\u505a",(0,s.jsx)(n.code,{children:"AND"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"10 & 7 = 2;\n/*\n  1010\n  0111\n  ----\n  0010\n*/\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5229\u7528\u9019\u500b\u7279\u6027\u53ef\u4ee5\u5224\u65b7\u5947\u6578\u548c\u5076\u6578"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"Number & 1;\n/*\n1 => \u5947\u6578\n0 => \u5076\u6578\n*/\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"\u627e\u6642\u9593\u6e2c\u8a66\uff0c\u662f\u5426\u6b64\u5224\u65b7\u7121\u6cd5\u6210\u7acb"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const number = 4;\nif (number & (1 === 0)) {\n  // code\n}\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators",children:"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50 - MDN"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var r=a(6540);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);