"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),v=o,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},9531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:13,description:"I watch you"},a="IntersectionObserver",l={unversionedId:"JavaScript/javascript_intersection-observer",id:"JavaScript/javascript_intersection-observer",title:"IntersectionObserver",description:"I watch you",source:"@site/docs/JavaScript/javascript_intersection-observer.md",sourceDirName:"JavaScript",slug:"/JavaScript/javascript_intersection-observer",permalink:"/titanShoulders/docs/JavaScript/javascript_intersection-observer",draft:!1,editUrl:"https://github.com/Hsing0224/titanShoulders/tree/master/docs/JavaScript/javascript_intersection-observer.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,description:"I watch you"},sidebar:"tutorialSidebar",previous:{title:"\u597d\u7528\u7684 Set & Map",permalink:"/titanShoulders/docs/JavaScript/javascript_map-and-set"},next:{title:"\u6dfa\u62f7\u8c9d vs \u6df1\u62f7\u8c9d",permalink:"/titanShoulders/docs/JavaScript/javascript_shallow-copy-and-deep-copy"}},s={},p=[{value:"options",id:"options",level:2},{value:"root",id:"root",level:3},{value:"rootMargin",id:"rootmargin",level:3},{value:"thresholds",id:"thresholds",level:3},{value:"methods",id:"methods",level:2},{value:"observe",id:"observe",level:3},{value:"unobserve",id:"unobserve",level:3},{value:"disconnect",id:"disconnect",level:3},{value:"IntersectionObserverEntry",id:"intersectionobserverentry",level:2},{value:"target",id:"target",level:3},{value:"isIntersecting",id:"isintersecting",level:3},{value:"boundingClientRect",id:"boundingclientrect",level:3},{value:"intersectionRect",id:"intersectionrect",level:3},{value:"intersectionRatio",id:"intersectionratio",level:3},{value:"Reference",id:"reference",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intersectionobserver"},"IntersectionObserver"),(0,o.kt)("admonition",{title:"\u5f85\u6e2c\u8a66",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u4f55\u5728root\u70baviewport\u7684\u72c0\u614b\u4e0b\uff0cintersectionObserver\u8981\u5728viewport\u7684\u591a\u5c11\u6bd4\u4f8b\u6642\u89f8\u767c(\u4ee5\u89c0\u5bdf\u7684\u5340\u584a\u6703\u9ad8\u5ea6\u4e0d\u4e00\u7684\u72c0\u6cc1\u601d\u8003)")),(0,o.kt)("p",null,"\u9019\u500bAPI\u4e3b\u8981\u662f\u5e6b\u6211\u5011\u89c0\u5bdf\uff0c\u7576\u6211\u5011\u89c0\u5bdf\u7684\u5c0d\u8c61\u662f\u5426\u8207(\u9810\u8a2d\u70ba\u8996\u7a97\u7684viewport)\u4ea4\u758a\uff0c\u53ef\u4ee5\u505a\u5f8c\u7e8c\u7684\u52d5\u4f5c\u3002 ",(0,o.kt)("br",null),"\n\u9019\u5728\u5c0d\u4e00\u500b\u66fe\u7d93\u5728\u4e00\u500b\u9801\u9762\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"offsetTop"),"\u4f86\u5224\u65b7\u76ee\u524d\u4f7f\u7528\u8005\u6ed1\u5230\u54ea\u500b\u5340\u584a\uff0c\u4f86\u5e6b\u5074\u908a\u5c0e\u89bd\u5217\u52a0\u4e0a\u5c0d\u61c9\u7684\u72c0\u614b\u7684\u4eba\u4f86\u8aaa\uff0c\u5be6\u5728\u592a\u5e78\u798f\u4e86"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u56e0\u70ba\u4ed6\u662f\u5efa\u69cb\u5f0f\uff0c\u9700\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"new"),"\u4f86\u7522\u751fIntersectionObserver\u5be6\u9ad4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const observer = new IntersectionObserver((entries, observer)=>{\n  console.log(entries); // [IntersectionObserverEntry]\n  console.log(observer); // [object IntersectionObserver] \n}, {\n  // options\n  root: null,\n  rootMargin: '0px',\n  thresholds: 1.0\n});\n")),(0,o.kt)("h2",{id:"options"},"options"),(0,o.kt)("h3",{id:"root"},"root"),(0,o.kt)("p",null,"\u5982\u679c\u503c\u70ba",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u5247\u70baviewport\uff0c",(0,o.kt)("br",null),"\n\u8981\u76e3\u807dviewport\u4e4b\u5916\u7684DOM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  root: document.querySelector('.box')\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},".box\u81ea\u5df1\u672c\u8eab\u9700\u8981\u6709scroll\uff0c\u9019\u6a23\u624d\u6709\u6548\u679c")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"root"),"\u70ba",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"rootMargin"),"\u7121\u4f5c\u7528")),(0,o.kt)("h3",{id:"rootmargin"},"rootMargin"),(0,o.kt)("p",null,"\u8207",(0,o.kt)("inlineCode",{parentName:"p"},"margin"),"\u4e00\u6a23\u53ef\u4ee5\u5beb\u6210 1 \u5230 4 \u500b\u503c\u4f86\u63a7\u5236\u500b\u908a\u754c"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u53ef\u63a5\u53d7\u6b63\u503c\u6216\u8ca0\u503c\uff0c\u6b63\u503c\u70ba\u64f4\u5927\uff0c\u8ca0\u503c\u70ba\u7e2e\u5c0f")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u503c\u70ba",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u9700\u8981\u5beb\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"0px"))),(0,o.kt)("h3",{id:"thresholds"},"thresholds"),(0,o.kt)("p",null,"\u53ef\u8a2d\u5b9a\u4e00\u500b\u503c",(0,o.kt)("inlineCode",{parentName:"p"},"0~1"),"\uff0c\u6216\u662f\u9663\u5217",(0,o.kt)("inlineCode",{parentName:"p"},"[0, 0.1, 0.5, 0.7, 1]")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u9019\u4e9b\u6578\u5b57\u4ee3\u8868\u7684\u662f\uff0c\u89c0\u5bdf\u5c0d\u8c61\u8207",(0,o.kt)("inlineCode",{parentName:"p"},"root"),"\u4ea4\u758a\u591a\u5c11\u6bd4\u4f8b\u6642\u89f8\u767c")),(0,o.kt)("h2",{id:"methods"},"methods"),(0,o.kt)("h3",{id:"observe"},"observe"),(0,o.kt)("p",null,"\u8a3b\u518a\u5c0d\u8c61\u7d66\u89c0\u5bdf\u8005"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const items = document.querySelectorAll('.item');\nitems.forEach(item => observer.observe(item));\n")),(0,o.kt)("h3",{id:"unobserve"},"unobserve"),(0,o.kt)("p",null,"\u8a3b\u92b7\u89c0\u5bdf\u7684\u67d0\u500b\u5c0d\u8c61\uff0c\u53ef\u518d\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"observe"),"\u4f86\u8a3b\u518a\u89c0\u5bdf\u7684\u5c0d\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"observer.unobserve(item);\n")),(0,o.kt)("h3",{id:"disconnect"},"disconnect"),(0,o.kt)("p",null,"\u5c07\u8a3b\u518a\u7684\u5c0d\u8c61\u5168\u90e8\u79fb\u9664\uff0c\u4f46\u5be6\u9ad4\u9084\u5b58\u5728\uff0c\u6545\u53ef\u518d\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"observe"),"\u4f86\u8a3b\u518a\u89c0\u5bdf\u7684\u5c0d\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"observer.disconnect();\n")),(0,o.kt)("h2",{id:"intersectionobserverentry"},"IntersectionObserverEntry"),(0,o.kt)("h3",{id:"target"},"target"),(0,o.kt)("p",null,"\u89c0\u5bdf\u5c0d\u8c61"),(0,o.kt)("h3",{id:"isintersecting"},"isIntersecting"),(0,o.kt)("p",null,"\u89c0\u5bdf\u5c0d\u8c61\u662f\u5426\u5df2\u88ab\u89c0\u5bdf\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"true || false")),(0,o.kt)("h3",{id:"boundingclientrect"},"boundingClientRect"),(0,o.kt)("p",null,"\u7576\u6709\u89f8\u767c\u4e8b\u4ef6\u6642\uff0c\u8a72\u89c0\u5bdf\u5c0d\u8c61\u7684\u8cc7\u8a0a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// {\n//   width: ,\n//   height: ,\n//   top: ,\n//   left: ,\n//   right: ,\n//   bottom: ,\n//   x: ,\n//   y: \n// }\n")),(0,o.kt)("h3",{id:"intersectionrect"},"intersectionRect"),(0,o.kt)("p",null,"\u7576\u6709\u89f8\u767c\u4e8b\u4ef6\u6642\uff0c\u8a72\u89c0\u5bdf\u5c0d\u8c61\u8207",(0,o.kt)("inlineCode",{parentName:"p"},"root"),"\u7684\u4ea4\u96c6\u8cc7\u8a0a"),(0,o.kt)("h3",{id:"intersectionratio"},"intersectionRatio"),(0,o.kt)("p",null,"\u7576\u6709\u89f8\u767c\u4e8b\u4ef6\u6642\uff0c\u8a72\u89c0\u5bdf\u5c0d\u8c61\u8ddf",(0,o.kt)("inlineCode",{parentName:"p"},"root"),"\u7684\u4ea4\u96c6\u6bd4\u4f8b"),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10279046"},"MaxLeeBK - \u90a3\u4e9b\u88ab\u5ffd\u7565\u4f46\u5f88\u597d\u7528\u7684 Web API / IntersectionObserver"))))}u.isMDXComponent=!0}}]);