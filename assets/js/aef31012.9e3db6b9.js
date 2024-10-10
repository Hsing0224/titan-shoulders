"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:10,sidebar_label:"node.js \u5207\u63db\u7248\u672c"},l="node \u7248\u672c\u5207\u63db",i={unversionedId:"Terminal/node-js_change",id:"Terminal/node-js_change",title:"node \u7248\u672c\u5207\u63db",description:"\u516c\u53f8\u6700\u8fd1\u5347\u7d1a angular \uff0c\u6240\u4ee5 node.js \u7684\u7248\u672c\u4e5f\u8ddf\u8457\u5347\u7d1a\u3002",source:"@site/docs/Terminal/node-js_change.md",sourceDirName:"Terminal",slug:"/Terminal/node-js_change",permalink:"/titan-shoulders/docs/Terminal/node-js_change",draft:!1,editUrl:"https://github.com/Hsing0224/titan-shoulders/tree/master/docs/Terminal/node-js_change.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"node.js \u5207\u63db\u7248\u672c"},sidebar:"tutorialSidebar",previous:{title:"basic",permalink:"/titan-shoulders/docs/TypeScript/basic"},next:{title:"\u9019\u500b\u7db2\u7ad9\u7684\u8a95\u751f",permalink:"/titan-shoulders/docs/Other/website_create"}},s={},p=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",level:2},{value:"Reference",id:"reference",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-\u7248\u672c\u5207\u63db"},"node \u7248\u672c\u5207\u63db"),(0,a.kt)("p",null,"\u516c\u53f8\u6700\u8fd1\u5347\u7d1a angular \uff0c\u6240\u4ee5 node.js \u7684\u7248\u672c\u4e5f\u8ddf\u8457\u5347\u7d1a\u3002",(0,a.kt)("br",null),"\n\u4f46\u7562\u7adf\u4e5f\u6709\u820a\u5c08\u6848\u9700\u8981\u7dad\u8b77\uff0c\u6545\u6709 node \u7248\u672c\u5207\u63db\u7684\u9700\u6c42\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,a.kt)("p",null,"\u81f3 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," \u7684 Github \u9801\u9762\u8f38\u5165\u6307\u4ee4\u5b89\u88dd"),(0,a.kt)("h2",{id:"\u6307\u4ee4"},"\u6307\u4ee4"),(0,a.kt)("p",null,"\u67e5\u770b\u53ef\u5b89\u88dd\u7684\u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"nvm ls-remote\n")),(0,a.kt)("p",null,"\u67e5\u770b\u53ef\u5b89\u88dd\u7684\u7248\u672c(\u53ea\u986f\u793a LTS )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"nvm ls-remote --lts\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"LTS = Long-term support\uff0c\u610f\u6307\u9577\u671f\u652f\u63f4\u7684\u7248\u672c")),(0,a.kt)("p",null,"\u67e5\u770b\u5df2\u5b89\u88dd\u7684 node.js \u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"nvm ls\n")),(0,a.kt)("p",null,"\u5207\u63db node.js \u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"nvm use <version>\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u7248\u672c\u865f\u8981\u5e36 v \uff0c\u4f8b\uff1a v20.13.1")),(0,a.kt)("p",null,"\u5207\u63db node.js \u7248\u672c\u5f8c\uff0c\u6703\u6709\u4e00\u6bb5\u8a0a\u606f\uff0c\u5176\u4e2d\u4e5f\u6709\u986f\u793a\u4f7f\u7528\u7684 npm \u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Now using node v20.13.1 (npm v10.8.1)\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm - GitHub"))))}d.isMDXComponent=!0}}]);