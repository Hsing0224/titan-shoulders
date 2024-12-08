"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[9428],{9537:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"Angular/angular_core","title":"Angular Core","description":"Angular core","source":"@site/docs/Angular/angular_core.md","sourceDirName":"Angular","slug":"/Angular/angular_core","permalink":"/titan-shoulders/docs/Angular/angular_core","draft":false,"unlisted":false,"editUrl":"https://github.com/Hsing0224/titan-shoulders/tree/master/docs/Angular/angular_core.md","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"description":"Angular core"},"sidebar":"tutorialSidebar","previous":{"title":"Router","permalink":"/titan-shoulders/docs/Angular/angular_router"},"next":{"title":"Decorator (\u88dd\u98fe\u5668)","permalink":"/titan-shoulders/docs/Angular/angular_decorator"}}');var s=r(4848),i=r(8453);const a={sidebar_position:20,description:"Angular core"},o="Angular Core",l={},c=[{value:"@if, @else if, @else",id:"if-else-if-else",level:2},{value:"@for",id:"for",level:2},{value:"track",id:"track",level:3},{value:"\u5340\u57df\u8b8a\u6578",id:"\u5340\u57df\u8b8a\u6578",level:3},{value:"@empty",id:"empty",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"angular-core",children:"Angular Core"})}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u4e9b\u65b9\u6cd5\u662f\u76f4\u63a5\u653e\u5728 Angular Core \u88e1\uff0c\u53ef\u76f4\u63a5\u505a\u4f7f\u7528\u3002\u4e0d\u9700\u984d\u5916 import Module \u4f86\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"if-else-if-else",children:"@if, @else if, @else"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"if(score > 50) {\n<p>\u4f60\u5f97\u5206\u5927\u65bc 50</p>\n} @else if (score > 30) {\n<p>\u4f60\u5f97\u5206\u5927\u65bc 30</p>\n} @else {\n<p>\u4f60\u7684\u5f97\u5206\u672a\u6eff 30</p>\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"for",children:"@for"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"users = [\n\t{id: 0, name: 'Sarah'},\n\t{id: 1, name: 'Amy'},\n\t{id: 2, name: 'Rachel'},\n\t{id: 3, name: 'Jessica'}\n];\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"@for(user of users; track user.id; let count = $count, index = $index) {\n<p>{{ user.name }} - {{ index }} - {{ count }}</p>\n} @empty {\n<p>\u7a7a\u7684</p>\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"track",children:"track"}),"\n",(0,s.jsx)(n.p,{children:"\u8ffd\u8e64\u51fd\u6578\uff0c\u8a2d\u5b9a\u552f\u4e00\u503c\u8b93 Angular \u7684\u6548\u80fd\u63d0\u9ad8\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["\u96d6\u7136 $index \u662f\u53ef\u4ee5 work \uff0c\u4f46\u53ef\u80fd\u6703\u5c0e\u81f4\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u3002",(0,s.jsx)("br",{}),"\n\u4e14\u842c\u4e00\u9806\u5e8f\u6709\u767c\u751f\u8b8a\u5316\uff0c\u53ef\u80fd\u6703\u4f7f track \u7684\u503c\u932f\u8aa4\u5c0e\u81f4\u932f\u8aa4\u7684\u66f4\u65b0\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u5340\u57df\u8b8a\u6578",children:"\u5340\u57df\u8b8a\u6578"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@for"})," \u6709\u5e7e\u500b\u5340\u57df\u8b8a\u6578\u53ef\u4ee5\u4f7f\u7528\u3002\u53ef\u53c3\u8003 (/docs/Angular/angular_directives.md#ngFor)"]}),"\n",(0,s.jsx)(n.h3,{id:"empty",children:"@empty"}),"\n",(0,s.jsxs)(n.p,{children:["\u7576 ",(0,s.jsx)(n.code,{children:"@for"})," \u7684 $count \u70ba 0 \u6642\uff0c\u5982\u679c\u6709 ",(0,s.jsx)(n.code,{children:"@empty"})," \uff0c\u5247\u6703\u986f\u793a\u8a72 scope \u7684\u5167\u5bb9\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);