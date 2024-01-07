"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),v=a,f=u["".concat(l,".").concat(v)]||u[v]||d[v]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},4570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,description:"\u95dc\u65bcjs\u7684\u90a3\u4e9b\u89c0\u5ff5"},i="Javascript\u7684\u90a3\u4e9b\u89c0\u5ff5",c={unversionedId:"JavaScript/javascript_concept",id:"JavaScript/javascript_concept",title:"Javascript\u7684\u90a3\u4e9b\u89c0\u5ff5",description:"\u95dc\u65bcjs\u7684\u90a3\u4e9b\u89c0\u5ff5",source:"@site/docs/JavaScript/javascript_concept.md",sourceDirName:"JavaScript",slug:"/JavaScript/javascript_concept",permalink:"/titanShoulders/docs/JavaScript/javascript_concept",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/JavaScript/javascript_concept.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u95dc\u65bcjs\u7684\u90a3\u4e9b\u89c0\u5ff5"},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/titanShoulders/docs/intro"},next:{title:"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50",permalink:"/titanShoulders/docs/JavaScript/javascript_expressions-and-operators"}},l={},p=[{value:"\u7acb\u5373\u51fd\u5f0f(Immediately-Invoked Function Expression, IIFE)",id:"\u7acb\u5373\u51fd\u5f0fimmediately-invoked-function-expression-iife",level:2},{value:"\u51fd\u5f0f\u9673\u8ff0\u5f0f",id:"\u51fd\u5f0f\u9673\u8ff0\u5f0f",level:2},{value:"\u51fd\u5f0f\u8868\u9054\u5f0f",id:"\u51fd\u5f0f\u8868\u9054\u5f0f",level:2},{value:"\u4f5c\u7528\u57df\u63a7\u5236",id:"\u4f5c\u7528\u57df\u63a7\u5236",level:2},{value:"\u9023\u7e8c\u8ce6\u503c",id:"\u9023\u7e8c\u8ce6\u503c",level:2},{value:"\u904b\u7b97\u5b50\u512a\u5148\u9806\u5e8f",id:"\u904b\u7b97\u5b50\u512a\u5148\u9806\u5e8f",level:2},{value:"Reference",id:"reference",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript\u7684\u90a3\u4e9b\u89c0\u5ff5"},"Javascript\u7684\u90a3\u4e9b\u89c0\u5ff5"),(0,a.kt)("h2",{id:"\u7acb\u5373\u51fd\u5f0fimmediately-invoked-function-expression-iife"},"\u7acb\u5373\u51fd\u5f0f(Immediately-Invoked Function Expression, IIFE)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"(function(){\n\n})();\n")),(0,a.kt)("h2",{id:"\u51fd\u5f0f\u9673\u8ff0\u5f0f"},"\u51fd\u5f0f\u9673\u8ff0\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function fn() {};\n")),(0,a.kt)("h2",{id:"\u51fd\u5f0f\u8868\u9054\u5f0f"},"\u51fd\u5f0f\u8868\u9054\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const fn = function() {};\n")),(0,a.kt)("h2",{id:"\u4f5c\u7528\u57df\u63a7\u5236"},"\u4f5c\u7528\u57df\u63a7\u5236"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u56e0\u70bablock({})\u7684\u95dc\u4fc2\uff0ca\u4e0d\u6703\u4e92\u76f8\u5f71\u97ff\u5230\n{\n    const a = 1;\n}\n{\n    const a = 2;\n}\n")),(0,a.kt)("h2",{id:"\u9023\u7e8c\u8ce6\u503c"},"\u9023\u7e8c\u8ce6\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const obj = {\n    value: 1\n};\nObject.defineProperty(obj, 'value', {\n    writable: false\n});\nconst b = obj.value = 3;\n/*\n\u7b49\u865f\u904b\u7b97\u5b50\u6703\u56de\u50b3\u4e00\u500b\u7d50\u679c\n> obj.value = 3\uff0c\u96d6\u7136obj.value\u4e0d\u6703\u88ab\u8986\u5beb\uff0c\u4f46\u7b49\u865f\u904b\u7b97\u5b50\u6703\u56de\u50b33\uff0c3\u518d\u8ce6\u503c\u7d66b\uff0c\u6240\u4ee5b=3\n*/\n")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u4e26\u4e0d\u63a8\u85a6\u4f7f\u7528\u9023\u7e8c\u8ce6\u503c")),(0,a.kt)("h2",{id:"\u904b\u7b97\u5b50\u512a\u5148\u9806\u5e8f"},"\u904b\u7b97\u5b50\u512a\u5148\u9806\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const a = 1 + 2 * 3;\n/*\n1. 2 * 3\n2. 1 + 6\n3. \u7531\u53f3\u81f3\u5de6\u8ce6\u4e88a\n*/\n\nconsole.log(1 > 2 > 3); // false\n/*\n1. 1 > 2 = false\n2. false > 3 = false\n*/\n\nconsole.log(3 < 2 < 1); // true\n/*\n1. 3 < 2 = false\n2. false(\u8f49\u578b\u70ba0) < 1 = true\n*/\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=8U5kbb1SvJg"},"\u516d\u89d2\u5b78\u9662 - JavaScript \u5fc3\u6a5f\u6587\u6cd5\u7bc7 - JS \u9762\u8a66\u5e38\u898b\u6838\u5fc3\u77e5\u8b58"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements"},"MDN - \u8a9e\u53e5\u548c\u8072\u660e"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence"},"MDN - \u904b\u7b97\u5b50\u512a\u5148\u9806\u5e8f")))}d.isMDXComponent=!0}}]);