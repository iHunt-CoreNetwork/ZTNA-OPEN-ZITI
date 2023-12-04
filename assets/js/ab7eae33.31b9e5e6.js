"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7598],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=i.createContext({}),c=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return i.createElement(p.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||f[h]||r;return n?i.createElement(m,o(o({ref:e},s),{},{components:n})):i.createElement(m,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},16034:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={authors:"dovholuknf"},o="Zitification",l={permalink:"/blog/zitification",source:"@site/blog/zitification/index.md",title:"Zitification",description:'"Zitification" or "zitifying" is the act of taking an application and incorporating a Ziti SDK into that application. Once an',date:"2023-12-04T19:08:10.000Z",formattedDate:"December 4, 2023",tags:[],readingTime:1.185,hasTruncateMarker:!1,authors:[{name:"Clint Dovholuk",title:"OpenZiti Maintainer",url:"https://github.com/dovholuknf",imageURL:"https://avatars.githubusercontent.com/u/46322585?v=4",key:"dovholuknf"}],frontMatter:{authors:"dovholuknf"},prevItem:{title:"Wildcard DNS Cheatsheet",permalink:"/blog/wildcard-dns/cheatsheet"},nextItem:{title:"Zitifying Kubectl",permalink:"/blog/zitification/kubernetes"}},p={authorsImageUrls:[void 0]},c=[],s={toc:c},u="wrapper";function f(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,i.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'"Zitification" or "zitifying" is the act of taking an application and incorporating a Ziti SDK into that application. Once an\napplication has a Ziti SDK incorporated into it, that application can now access network resources securely from anywhere in\nthe world provided that the computer has internet access: NO VPN NEEDED, NO ADDITIONAL SOFTWARE NEEDED.'),(0,a.kt)("p",null,"Integrating a Ziti SDK into your application and enrolling the application itself into a Ziti Network provides you with ",(0,a.kt)("em",{parentName:"p"},"\ntremendous")," additional security. An application using a ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/introduction/"},"Ziti Network")," configured with a truly zero-trust mindset will be\n",(0,a.kt)("strong",{parentName:"p"},"IMMUNE"),' to the "expand/multiply" phases of classic ',(0,a.kt)("a",{parentName:"p",href:"https://netfoundry.io/ztna-ransomware/"},"ransomware attacks"),". As recent events have shown, it's probably not\na case of if your application will be attacked, but when."),(0,a.kt)("p",null,'In these posts we\'re going to explore how common applications can be "zitified". The first application we are going to focus\non will be ',(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," and it's corollary ",(0,a.kt)("inlineCode",{parentName:"p"},"scp"),'. At first, you might think, "why even bother" zitifying (of all things) ',(0,a.kt)("inlineCode",{parentName:"p"},"ssh"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"scp"),"? These applications are vital to system administration, and we have been using ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"scp"),' "safely" on the internet for years. Hopefully you\'re now interested enough to find out in the first post:\n',(0,a.kt)("a",{parentName:"p",href:"/blog/zitification/zitifying-ssh/"},"zitifying ssh")),(0,a.kt)("p",null,"If you'd prefer to read about other zitifications, a running list of zitified apps will be updated below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/zitification/zitifying-ssh/"},"ssh->zssh")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/zitification/zitifying-scp/"},"scp->zscp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/zitification/kubernetes/"},"Kubernetes cluster manager - kubectl"))))}f.isMDXComponent=!0}}]);