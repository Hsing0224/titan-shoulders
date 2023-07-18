"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[663],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4506:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1,description:"\u4e00\u4e9b\u4e0d\u61c2\u7684\u5c0f\u6771\u897f"},i="\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50",p={unversionedId:"JavaScript/javascript_expressions-and-operators",id:"JavaScript/javascript_expressions-and-operators",title:"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50",description:"\u4e00\u4e9b\u4e0d\u61c2\u7684\u5c0f\u6771\u897f",source:"@site/docs/JavaScript/javascript_expressions-and-operators.md",sourceDirName:"JavaScript",slug:"/JavaScript/javascript_expressions-and-operators",permalink:"/titanShoulders/docs/JavaScript/javascript_expressions-and-operators",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/JavaScript/javascript_expressions-and-operators.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u4e00\u4e9b\u4e0d\u61c2\u7684\u5c0f\u6771\u897f"},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/titanShoulders/docs/category/javascript"},next:{title:"Array",permalink:"/titanShoulders/docs/JavaScript/javascript_array"}},c={},s=[{value:"\u7a7a\u503c\u5408\u4f75(??)",id:"\u7a7a\u503c\u5408\u4f75",level:2},{value:"\u4f4d\u5143\u904b\u7b97\u5b50 - \u4f4d\u5143AND(&amp;)",id:"\u4f4d\u5143\u904b\u7b97\u5b50---\u4f4d\u5143and",level:2},{value:"Reference",id:"reference",level:2}],l={toc:s},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50"},"\u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50"),(0,a.kt)("h2",{id:"\u7a7a\u503c\u5408\u4f75"},"\u7a7a\u503c\u5408\u4f75(??)"),(0,a.kt)("p",null,"\u7576\u5de6\u908a\u7684\u503c\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u56de\u50b3\u53f3\u908a\u7684\u503c\uff0c\u4e0d\u7136\u5c31\u56de\u50b3\u5de6\u908a\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"undefined ?? 123 // 123\nnull ?? 'abc' // 'abc'\nNaN ?? 123 // NaN\n0 ?? 'abc' // 0\n")),(0,a.kt)("h2",{id:"\u4f4d\u5143\u904b\u7b97\u5b50---\u4f4d\u5143and"},"\u4f4d\u5143\u904b\u7b97\u5b50 - \u4f4d\u5143AND(&)"),(0,a.kt)("p",null,"\u5c07\u503c\u8f49\u70ba\u4e8c\u9032\u4f4d\uff0c\u518d\u505a",(0,a.kt)("inlineCode",{parentName:"p"},"AND")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"10 & 7 = 2;\n/*\n  1010\n  0111\n  ----\n  0010\n*/\n")),(0,a.kt)("p",null,"\u5229\u7528\u9019\u500b\u7279\u6027\u53ef\u4ee5\u5224\u65b7\u5947\u6578\u548c\u5076\u6578"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Number & 1\n/*\n1 => \u5947\u6578\n0 => \u5076\u6578\n*/\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators"},"MDN - \u904b\u7b97\u5f0f\u8207\u904b\u7b97\u5b50"))))}d.isMDXComponent=!0}}]);