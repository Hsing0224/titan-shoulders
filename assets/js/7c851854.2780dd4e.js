"use strict";(self.webpackChunktitan_shoulders=self.webpackChunktitan_shoulders||[]).push([[1595],{370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"JavaScript/javascript_set-and-map","title":"Set & Map","description":"Set & Map","source":"@site/docs/JavaScript/javascript_set-and-map.md","sourceDirName":"JavaScript","slug":"/JavaScript/javascript_set-and-map","permalink":"/titan-shoulders/docs/JavaScript/javascript_set-and-map","draft":false,"unlisted":false,"editUrl":"https://github.com/Hsing0224/titan-shoulders/tree/master/docs/JavaScript/javascript_set-and-map.md","tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"sidebar_position":22,"description":"Set & Map"},"sidebar":"tutorialSidebar","previous":{"title":"Object","permalink":"/titan-shoulders/docs/JavaScript/javascript_object"},"next":{"title":"IntersectionObserver","permalink":"/titan-shoulders/docs/JavaScript/javascript_intersection-observer"}}');var s=t(4848),r=t(8453);const o={sidebar_position:22,description:"Set & Map"},l="Set & Map",c={},i=[{value:"Set",id:"set",level:2},{value:"\u552f\u4e00\u503c",id:"\u552f\u4e00\u503c",level:3},{value:"\u8fed\u4ee3\u5668",id:"\u8fed\u4ee3\u5668",level:3},{value:"\u8f49\u9663\u5217",id:"\u8f49\u9663\u5217",level:3},{value:"Map",id:"map",level:2},{value:"\u8fed\u4ee3\u5668",id:"\u8fed\u4ee3\u5668-1",level:3},{value:"\u8f49\u9663\u5217",id:"\u8f49\u9663\u5217-1",level:3},{value:"clone",id:"clone",level:3},{value:"Object\uff0c\u65b0\u589e\u8cc7\u6599\u5f8c\u7684\u9806\u5e8f",id:"object\u65b0\u589e\u8cc7\u6599\u5f8c\u7684\u9806\u5e8f",level:3},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"set--map",children:"Set & Map"})}),"\n",(0,s.jsx)(n.h2,{id:"set",children:"Set"}),"\n",(0,s.jsx)(n.p,{children:"Set \u53ef\u4ee5\u8996\u70ba\u662f\u4e00\u500b\u5167\u5bb9\u53ea\u6709\u552f\u4e00\u503c\u7684 Array (\u4f46\u4ed6\u4e0d\u662f Array)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const testSet = new Set();\n\n// add\ntestSet.add(1); // Set(1)\xa0{1}\ntestSet.add("Hello"); // Set(2)\xa0{1, \'Hello\'}\ntestSet.add({ name: "Hsing", sex: "male" }); // Set(3)\xa0{1, \'Hello\', {\u2026}}\n\n// \u56e0\u88e1\u9762\u6709\u503c\u4e86\u6240\u4ee5\u4e0d\u6703\u65b0\u589e\ntestSet.add(1); // Set(3)\xa0{1, \'Hello\', {\u2026}}\n// NaN \u8ddf undefined \u4e5f\u88ab\u8996\u70ba\u552f\u4e00\u503c\uff0c\u5373\u4f7f NaN !== NaN\n\n// \u4e0d\u904e array \u8ddf object \u662f\u53ef\u4ee5\u6210\u529f\u7684\ntestSet.add({ name: "Hsing", sex: "male" }); // Set(4)\xa0{1, \'Hello\', {\u2026}, {\u2026}}\n\n// delete\ntestSet.delete(1); // true\ntestSet.delete(1); // \u56e0\u70ba 1 \u5df2\u88ab\u522a\u6389\uff0c\u5982\u679c\u6c92\u9019\u500b\u503c\u5247\u8fd4\u56de false\ntestSet.delete({ name: "Hsing", sex: "male" }); // false\uff0c\u9019\u6a23\u662f\u522a\u4e0d\u6389\u7684\n\n// has\ntestSet.has(1); // false\ntestSet.has("Hello"); // true\ntestSet.has({ name: "Hsing", sex: "male" }); // false\n\n// size\ntestSet.size; // 3\n\n// clear\ntestSet.clear(); // Set(0)\xa0{size: 0}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u56e0\u70ba\u662f JavaScript \u7279\u6027\uff0c\u7576\u50b3\u5165\u662f array \u6216 object \u662f ",(0,s.jsx)(n.code,{children:"call by reference"}),"\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"delete"})," \u53ca ",(0,s.jsx)(n.code,{children:"has"})," \u90fd\u5931\u6548\u3002"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const obj = { name: "Hsing", sex: "male" };\nconst testSet = new Set();\n\ntestSet.add(obj); // Set(1)\xa0{{\u2026}}\ntestSet.has(obj); // true\ntestSet.delete(obj); // true\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u552f\u4e00\u503c",children:"\u552f\u4e00\u503c"}),"\n",(0,s.jsx)(n.p,{children:"\u7528 Set \u552f\u4e00\u503c\u7684\u7279\u6027\uff0c\u4f86\u53bb\u9664\u6389\u91cd\u8907\u7684\u503c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 1, 2, 3, 4, 5, 4];\nconst testSet = new Set(arr); // Set(5)\xa0{1, 2, 3, 4, 5}\nconst uniqueArr = [...testSet]; // [1, 2, 3, 4, 5]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7576\u5982\u679c\u5df2\u7d93\u90fd\u5b58\u5728\uff0c\u4e5f\u53ef\u4ee5\u7528\u8ff4\u5708\u65b9\u5f0f\u4f86\u5c07\u503c\u4e00\u4e00\u4e1f\u5165 Set \u88e1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const testSet = new Set();\nconst arr = [1, 1, 2, 3, 4, 5, 4];\n\nfor (value of arr) {\n  testSet.add(value);\n} // Set(5)\xa0{1, 2, 3, 4, 5}\nconst uniqueArr = [...testSet]; // [1, 2, 3, 4, 5]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8fed\u4ee3\u5668",children:"\u8fed\u4ee3\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Set \u4e2d\uff0ckey \u548c value \u90fd\u662f\u540c\u4e00\u500b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const testSet = new Set([1, 2, 3, 4, 5]);\ntestSet.keys(); // SetIterator\xa0{1, 2, 3, 4, 5}\ntestSet.values(); // SetIterator\xa0{1, 2, 3, 4, 5}\n\n// \u53ef\u4ee5\u7528entries()\u4f86\u770bkey => value\ntestSet.entries(); // SetIterator\xa0{1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8f49\u9663\u5217",children:"\u8f49\u9663\u5217"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const testSet = new Set([1, 2, 3, 4, 5]);\n\n// \u4f7f\u7528Array.from()\nconst fromArray = Array.from(testSet); // (5)\xa0[1, 2, 3, 4, 5]\n\n// \u5229\u7528\u5c55\u958b\u904b\u7b97\u5b50\nconst spreadArray = [...testSet]; // (5)\xa0[1, 2, 3, 4, 5]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"map",children:"Map"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["key \u7684\u9748\u6d3b\u6027\uff1a Map \u7684 Key \u53ef\u4ee5\u662f\u6578\u5b57\u3001\u5b57\u4e32\u3001\u7269\u4ef6\u3001\u51fd\u5f0f\u3001symbol","\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u4e00\u822c Object \u7684 key \u53ea\u80fd string \u6216 symbol"})}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u8cc7\u6599\u63d2\u5165\u7684\u9806\u5e8f"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const testMap = new Map();\n\n// set(key, value)\ntestMap.set(123, "number key\'s value");\ntestMap.set("stringKey", "string key\'s value");\n\n// has(key)\ntestMap.has(123); // true\n\n// \u5982\u679c\u518d\u7d66\u4e00\u6b21\uff0c\u503c\u6703\u8986\u84cb\ntestMap.set(123, "number key\'s value change");\n\nconst obj = { name: "Hsing", sex: "male" };\ntestMap.set(obj, "object key\'s value");\n\nconst funcKey = () => "functionKey";\ntestMap.set(funcKey, "function key\'s value");\n\nconst symbolKey = Symbol("symbolKey");\ntestMap.set(symbolKey, "symbol key\'s value");\n\n// size\ntestMap.size; // 5\n\n// get(key)\ntestMap.get(123); // number key\'s value change\ntestMap.get("stringKey"); // string key\'s value\ntestMap.get(obj); // object key\'s value\ntestMap.get(funcKey); // function key\'s value\ntestMap.get(symbolKey); // symbol key\'s value\n\n// delete(key)\ntestMap.delete(123); // true(\u5982\u679c\u6c92\u6709\u8a72 key \u5247\u8fd4\u56de false)\n\n// clear\ntestMap.clear(); // Map(0)\xa0{size: 0}\n\ntestMap.set(0, "zeroValue");\ntestMap.set("one", "oneValue");\ntestMap.set(2, "twoValue");\ntestMap.set("three", "threeValue");\ntestMap.set(4, "fourValue");\n\n// forEach\ntestMap.forEach((value, key) => {\n  console.log(`${key} => ${value}`);\n});\n/*\n0 => zeroValue\none => oneValue\n2 => twoValue\nthree => threeValue\n4 => fourValue\n*/\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u8fed\u4ee3\u5668-1",children:"\u8fed\u4ee3\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// keys()\uff0c\u8fd4\u56de\u4e00\u500b key \u7684\u8fed\u4ee3\u5668\nconst keysIterator = testMap.keys(); // MapIterator\xa0{0, 'one', 2, 'three', 4}\nfor (const key of keysIterator) {\n  console.log(key);\n}\n/*\n0\none\n2\nthree\n4\n*/\n\n// values()\uff0c\u8fd4\u56de\u4e00\u500bvalue\u7684\u8fed\u4ee3\u5668\nconst valuesIterator = testMap.values(); // MapIterator\xa0{'zero value', ... , 'four value'}\nfor (const value of valuesIterator) {\n  console.log(value);\n}\n/*\nzeroValue\noneValue\ntwoValue\nthreeValue\nfourValue\n*/\n\n// entries()\uff0c\u8fd4\u56de Map \u6240\u6709\u5167\u5bb9\u7684\u8fed\u4ee3\u5668\nconst entriesIterator = testMap.entries(); // MapIterator {0 => 'zero value', ... , 4 => 'four value'}\nfor (const [key, value] of entriesIterator) {\n  console.log(`${key} => ${value}`);\n}\n/*\n0 => zeroValue\none => oneValue\n2 => twoValue\nthree => threeValue\n4 => fourValue\n*/\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8f49\u9663\u5217-1",children:"\u8f49\u9663\u5217"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// \u7528\u9019\u65b9\u6cd5\u53ef\u4ee5\u5feb\u901f\u5efa\u7acb Map \u7684\u8cc7\u6599\nconst testMap = new Map([\n  [0, \"zero\"],\n  [1, \"one\"],\n  [2, \"two\"],\n]); // Map(3)\xa0{0 => 'zero', 1 => 'one', 2 => 'two'}\n\n// keys() & values()\nconst mapArray = [...testMap.values()]; // ['zero', 'one', 'two']\n\n// entries()\nconst entriesArray = [...testMap.entries()]; // [Array(2), Array(2), Array(2)]\nconsole.log(entriesArray[0]); // [0, 'zero']\n"})}),"\n",(0,s.jsx)(n.h3,{id:"clone",children:"clone"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const originMap = new Map([\n  [0, \"zero\"],\n  [1, \"one\"],\n  [2, \"two\"],\n]); // Map(3)\xa0{0 => 'zero', 1 => 'one', 2 => 'two'}\nconst newMap = new Map(originMap); // Map(3)\xa0{0 => 'zero', 1 => 'one', 2 => 'two'}\n\noriginMap.set(0, \"zero change\"); // Map(3)\xa0{0 => 'zero change', 1 => 'one', 2 => 'two'}\nnewMap.set(1, \"one change\"); // Map(3)\xa0{0 => 'zero', 1 => 'one change', 2 => 'two'}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"object\u65b0\u589e\u8cc7\u6599\u5f8c\u7684\u9806\u5e8f",children:"Object\uff0c\u65b0\u589e\u8cc7\u6599\u5f8c\u7684\u9806\u5e8f"}),"\n",(0,s.jsxs)(n.p,{children:["\u7576 Object \u65b0\u589e\u8cc7\u6599\uff0ckey \u70ba\u6578\u5b57\u7684\u6642\u5019\uff0c\u5176\u5be6\u6578\u5b57\u6703\u8f49\u63db\u6210\u5b57\u4e32\u3002\u800c\u4e5f\u6703\u5c0e\u81f4\u8cc7\u6599\u9806\u5e8f\u4e0a\u7684\u4e0d\u4e00\u81f4",(0,s.jsx)("br",{}),"\n\u5982\u679c\u6709\u8003\u91cf\u5230\u9806\u5e8f\u53ca\u6578\u5b57\uff0c\u53ef\u9078\u64c7\u4f7f\u7528 Map"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const obj = {\n  0: \"zeroValue\",\n  one: \"oneValue\",\n  2: \"twoValue\",\n  three: \"threeValue\",\n  4: \"fourValue\",\n}; // {0: 'zeroValue', 2: 'twoValue', 4: 'fourValue', one: 'oneValue', three: 'threeValue'}\n\nobj[0] === obj[\"0\"]; // true\n\nfor (const key in obj) {\n  console.log(key);\n}\n/*\n\u9019\u908a\u4e5f\u662f\u5b57\u4e32\u7684 0\u30012\u30014\n0\n2\n4\n'one'\n'three'\n*/\n\n// \u5229\u7528Object.entries()\u4f86\u53d6\u503c\nObject.entries(obj)[1]; // ['2', 'twoValue']\n"})}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://pjchender.dev/javascript/js-set/",children:"[JS] JavaScript \u96c6\u5408\uff08Set\uff09- PJCHENder"}),(0,s.jsx)("br",{}),(0,s.jsx)(n.a,{href:"https://pjchender.dev/javascript/js-map/",children:"[JS] JavaScript Map - PJCHENder"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var a=t(6540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);