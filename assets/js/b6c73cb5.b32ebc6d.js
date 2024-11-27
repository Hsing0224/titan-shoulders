"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[220],{4486:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=s(4848),r=s(8453);const t={sidebar_position:10,description:"SCSS \u6a94\u6848\u5f15\u5165"},o="SCSS \u6a94\u6848\u5f15\u5165",l={id:"SCSS/file-import",title:"SCSS \u6a94\u6848\u5f15\u5165",description:"SCSS \u6a94\u6848\u5f15\u5165",source:"@site/docs/SCSS/file-import.md",sourceDirName:"SCSS",slug:"/SCSS/file-import",permalink:"/titan-shoulders/docs/SCSS/file-import",draft:!1,unlisted:!1,editUrl:"https://github.com/Hsing0224/titan-shoulders/tree/master/docs/SCSS/file-import.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"SCSS \u6a94\u6848\u5f15\u5165"},sidebar:"tutorialSidebar",previous:{title:"CSS \u7684\u90a3\u4e9b\u89c0\u5ff5",permalink:"/titan-shoulders/docs/CSS/css_tip"},next:{title:"JavaScript \u7684\u90a3\u4e9b\u89c0\u5ff5",permalink:"/titan-shoulders/docs/JavaScript/javascript_tip"}},c={},d=[{value:"@import",id:"import",level:2},{value:"@forward",id:"forward",level:2},{value:"@use",id:"use",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"scss-\u6a94\u6848\u5f15\u5165",children:"SCSS \u6a94\u6848\u5f15\u5165"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5c08\u6848\u958b\u767c\u4e0a\uff0c\u6703\u4f9d\u4e0d\u540c\u8077\u8cac\u5283\u5206\u5404\u500b SCSS \u6a94\u6848\u3002",(0,i.jsx)("br",{}),"\n\u6700\u7d42\u518d\u5229\u7528\u5f15\u5165\u7684\u65b9\u5f0f\u5c07\u6240\u9700\u7684 SCSS \u6a94\u6848\u532f\u96c6\u8d77\u4f86\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6a94\u540d\u70ba ",(0,i.jsx)(n.code,{children:"_"}),"\uff0c\u4e0d\u6703\u88ab\u7de8\u8b6f\u6210\u5be6\u9ad4\u7684\u6a94\u6848"]}),"\n",(0,i.jsx)(n.li,{children:"\u5f15\u5165\u6642\u53ef\u4ee5\u4e0d\u7528\u5beb\u526f\u6a94\u540d"}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"\u7bc4\u4f8b\u6a94\u6848"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",metastring:'title="_color.scss"',children:"$primary-color: red;\n$secondary-color: green;\n$third-color: blue;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",metastring:'title="_mixin.scss"',children:"@mixin square($value) {\n  width: $value;\n  height: $value;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"import",children:"@import"}),"\n",(0,i.jsxs)(n.p,{children:["\u8a72 SCSS \u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"@import"})," \u5f15\u5165\u6642\uff0c\u4e5f\u6703\u4e00\u4f75\u5c07\u8a72 SCSS \u88e1\u6240 ",(0,i.jsx)(n.code,{children:"@import"})," \u7684 SCSS \u5f15\u5165\u3002",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["\u5b98\u7db2\u5df2\u7d93\u5c07 ",(0,i.jsx)(n.code,{children:"@import"})," \u6a19\u8a3b\u70ba\u68c4\u7528\u3002"]})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"\u56e0\u70ba\u6c92\u6709 namespace \u95dc\u4fc2\uff0c\u5728\u5f15\u5165\u6709\u91cd\u8907\u8b8a\u6578\u6642\uff0c\u6703\u6709\u8986\u84cb\u7684\u554f\u984c\u3002"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",metastring:'title="_utils.scss"',children:'@import "color";\n@import "mixin";\n\n// \u5047\u8a2d\u6709\u500b\u6a94\u6848\u4e5f\u6709 $primary-color\n$primary-color: yellow;\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",metastring:"main.scss",children:'.test {\n  font-size: 24px;\n}\n\n@import "./utils";\n\n.text {\n  color: $primary-color;\n}\n.box {\n  @include square(30px);\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7de8\u8b6f\u5f8c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:"index.css",children:".test {\n  font-size: 24px;\n}\n\n/*\n$primary-color \u66f4\u6539\u4e86\u984f\u8272\u5c0e\u81f4\u4e0d\u662f\u6700\u4e00\u958b\u59cb\u8a2d\u5b9a\u7684\n*/\n.text {\n  color: yellow;\n}\n\n.box {\n  width: 30px;\n  height: 30px;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"forward",children:"@forward"}),"\n",(0,i.jsx)(n.h2,{id:"use",children:"@use"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6709\u81ea\u5df1\u7684\u547d\u540d\u7a7a\u9593"}),"\n",(0,i.jsx)(n.li,{children:"\u4e0d\u6703\u5f15\u5165\u6a94\u6848\u672c\u8eab\u7684\u5f15\u5165"}),"\n",(0,i.jsx)(n.li,{children:"\u53ea\u6703\u7de8\u8b6f\u4e00\u6b21\u6a94\u6848\uff0c\u5373\u4fbf\u88ab\u591a\u500b\u5f15\u5165"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(6540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);