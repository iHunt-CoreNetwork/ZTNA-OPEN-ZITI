"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9914],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=d(n),u=i,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(k,r(r({ref:e},s),{},{components:n})):a.createElement(k,r({ref:e},s))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90668:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>k});var a=n(87462),i=(n(67294),n(3905)),o=n(78959),r=n(4373),l=n(90563),p=n(94342),d=n(12981);const s={title:"Application Access Model",sidebar_label:"App Access",hide_table_of_contents:!0},c=void 0,m={unversionedId:"core-concepts/zero-trust-models/ztaa",id:"core-concepts/zero-trust-models/ztaa",title:"Application Access Model",description:"This article describes the various edge deployments of ZiTi App Access. In all cases, the Controller and at least 2 Public Edge Routers are to be deployed for redundancy. The Ziti Fabric connections are established between all Edge Routers but not Clients/SDKs. The Public Edge Routers would provide connection between Private Edge Routers and/or Clients/SDKs.",source:"@site/docs/core-concepts/zero-trust-models/02-ztaa.md",sourceDirName:"core-concepts/zero-trust-models",slug:"/core-concepts/zero-trust-models/ztaa",permalink:"/docs/core-concepts/zero-trust-models/ztaa",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/zero-trust-models/02-ztaa.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Application Access Model",sidebar_label:"App Access",hide_table_of_contents:!0},sidebar:"rootSidebar",previous:{title:"Zero Trust Models",permalink:"/docs/core-concepts/zero-trust-models/overview"},next:{title:"Host Access",permalink:"/docs/core-concepts/zero-trust-models/ztha"}},u={},k=[],N={toc:k};function g(t){let{components:e,...s}=t;return(0,i.kt)("wrapper",(0,a.Z)({},N,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article describes the various edge deployments of ZiTi App Access. In all cases, the Controller and at least 2 Public Edge Routers are to be deployed for redundancy. The Ziti Fabric connections are established between all Edge Routers but not Clients/SDKs. The Public Edge Routers would provide connection between Private Edge Routers and/or Clients/SDKs."),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Recommended configuration deployment of Public Edge Routers is to have only Ziti Edge enabled and of Private Edge Routers is to have Ziti Edge enabled with Tunnel option being required for cases where the Zero Trust domain ends at the private edge router."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Acronyms used in this article:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ZDE - Ziti Desktop Edge")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ZME - Ziti Mobile Edge")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ZET - Ziti Edge Tunnel")))))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application to Application A Deployment"),"\n","\xa0"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image",src:n(34371).Z,width:"835",height:"443"})),(0,i.kt)("admonition",{parentName:"li",title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Client is SDK integrated."),(0,i.kt)("li",{parentName:"ul"},"Application is SDK integrated."))),(0,i.kt)("admonition",{parentName:"li",title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Application to Application Encryption "),(0,i.kt)("li",{parentName:"ul"},"No additional routing needed"),(0,i.kt)("li",{parentName:"ul"},"No additional DNS entries needed"))),(0,i.kt)("admonition",{parentName:"li",title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"SDK and Application source code availability"))),(0,i.kt)("hr",{parentName:"li"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application to Application B Deployment"),"\n","\xa0"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image",src:n(17743).Z,width:"1033",height:"443"})),(0,i.kt)("admonition",{parentName:"li",title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Client is SDK integrated"),(0,i.kt)("li",{parentName:"ul"},"Application is SDK integrated"))),(0,i.kt)("admonition",{parentName:"li",title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Application to Application Encryption "),(0,i.kt)("li",{parentName:"ul"},"No additional routing needed"),(0,i.kt)("li",{parentName:"ul"},"No additional DNS entries needed"))),(0,i.kt)("admonition",{parentName:"li",title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"SDK and Application source code availability"))),(0,i.kt)("hr",{parentName:"li"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application to Application C Deployment"),"\n","\xa0"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image",src:n(86643).Z,width:"835",height:"443"})),(0,i.kt)("admonition",{parentName:"li",title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Client is SDK integrated"),(0,i.kt)("li",{parentName:"ul"},"Application is SDK integrated."))),(0,i.kt)("admonition",{parentName:"li",title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"No need to deploy private edge routers"),(0,i.kt)("li",{parentName:"ul"},"Application to Application Encryption "),(0,i.kt)("li",{parentName:"ul"},"No additional routing needed"),(0,i.kt)("li",{parentName:"ul"},"No additional DNS entries needed"))),(0,i.kt)("admonition",{parentName:"li",title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Fabric is not extended into application network"),(0,i.kt)("li",{parentName:"ul"},"SDK and Application source code availability"))),(0,i.kt)("hr",{parentName:"li"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application to Host A Deployment"),"\n","\xa0"),(0,i.kt)(d.ZP,{mdxType:"Share13Md"}),(0,i.kt)("hr",{parentName:"li"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application to Host B Deployment"),"\n","\xa0"),(0,i.kt)(o.ZP,{mdxType:"Share42Md"}),(0,i.kt)("hr",{parentName:"li"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application to Host C Deployment"),"\n","\xa0"," "),(0,i.kt)(p.ZP,{mdxType:"Share23Md"}),(0,i.kt)("hr",{parentName:"li"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application to Router A Deployment"),"\n","\xa0"),(0,i.kt)(r.ZP,{mdxType:"Share15Md"}),(0,i.kt)("hr",{parentName:"li"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application to Router B Deployment"),"\n","\xa0"),(0,i.kt)(l.ZP,{mdxType:"Share43Md"}))))}g.isMDXComponent=!0},12981:(t,e,n)=>{n.d(e,{ZP:()=>r});var a=n(87462),i=(n(67294),n(3905));const o={toc:[]};function r(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(81670).Z,width:"835",height:"443"})),(0,i.kt)("admonition",{title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Client is SDK integrated"),(0,i.kt)("li",{parentName:"ul"},"Application has a client software (ZET) deployed"))),(0,i.kt)("admonition",{title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Application to Host Encryption "),(0,i.kt)("li",{parentName:"ul"},"No additional routing needed"),(0,i.kt)("li",{parentName:"ul"},"No additional DNS entries needed"))),(0,i.kt)("admonition",{title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Software must be deployed to application servers"),(0,i.kt)("li",{parentName:"ul"},"SDK and Application source code availability"))))}r.isMDXComponent=!0},78959:(t,e,n)=>{n.d(e,{ZP:()=>r});var a=n(87462),i=(n(67294),n(3905));const o={toc:[]};function r(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(29907).Z,width:"1033",height:"443"})),(0,i.kt)("admonition",{title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Client is SDK integrated"),(0,i.kt)("li",{parentName:"ul"},"Application has a client software (ZET) deployed"))),(0,i.kt)("admonition",{title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Application to Host Encryption "),(0,i.kt)("li",{parentName:"ul"},"No additional routing needed"),(0,i.kt)("li",{parentName:"ul"},"No additional DNS entries needed"))),(0,i.kt)("admonition",{title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Software must be deployed to application servers"),(0,i.kt)("li",{parentName:"ul"},"SDK and Application source code availability"))))}r.isMDXComponent=!0},94342:(t,e,n)=>{n.d(e,{ZP:()=>r});var a=n(87462),i=(n(67294),n(3905));const o={toc:[]};function r(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(48978).Z,width:"835",height:"443"})),(0,i.kt)("admonition",{title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Client is SDK integrated"),(0,i.kt)("li",{parentName:"ul"},"Application has a client software (ZET) deployed"))),(0,i.kt)("admonition",{title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"No need to deploy private edge routers"),(0,i.kt)("li",{parentName:"ul"},"Application to host Encryption "),(0,i.kt)("li",{parentName:"ul"},"No additional routing needed"),(0,i.kt)("li",{parentName:"ul"},"No additional DNS entries needed"))),(0,i.kt)("admonition",{title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Fabric is not extended into application network"),(0,i.kt)("li",{parentName:"ul"},"SDK and Application source code availability"))))}r.isMDXComponent=!0},4373:(t,e,n)=>{n.d(e,{ZP:()=>r});var a=n(87462),i=(n(67294),n(3905));const o={toc:[]};function r(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(28198).Z,width:"835",height:"443"})),(0,i.kt)("admonition",{title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Client is SDK integrated"),(0,i.kt)("li",{parentName:"ul"},"Application is behind private router"))),(0,i.kt)("admonition",{title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"No software must be deployed to application servers"),(0,i.kt)("li",{parentName:"ul"},"No additional routing needed"),(0,i.kt)("li",{parentName:"ul"},"No additional DNS entries needed"))),(0,i.kt)("admonition",{title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Less secure, connection from private router to application is not protected"),(0,i.kt)("li",{parentName:"ul"},"SDK and Application source code availability"))))}r.isMDXComponent=!0},90563:(t,e,n)=>{n.d(e,{ZP:()=>r});var a=n(87462),i=(n(67294),n(3905));const o={toc:[]};function r(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(36358).Z,width:"1033",height:"443"})),(0,i.kt)("admonition",{title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Client is SDK integrated."),(0,i.kt)("li",{parentName:"ul"},"Application is behind private router"))),(0,i.kt)("admonition",{title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"No software must be deployed to application servers"),(0,i.kt)("li",{parentName:"ul"},"No additional routing needed"),(0,i.kt)("li",{parentName:"ul"},"No additional DNS entries needed"))),(0,i.kt)("admonition",{title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Less secure, connection from private router to application is not protected"),(0,i.kt)("li",{parentName:"ul"},"SDK and Application source code availability"))))}r.isMDXComponent=!0},34371:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/app_to_app_a_deploy-3422948c21a932b129002b854fb06431.png"},17743:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/app_to_app_b_deploy-78bf6729c12a4b888deb6bd940b6e95c.png"},86643:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/app_to_app_c_deploy-57aa99e291c93394a623b0ff97f06b3b.png"},81670:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/app_to_host_a_deploy-dcb1f5ad5a99488854b4bf5580b84679.png"},29907:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/app_to_host_b_deploy-52f7b63a05d5372b2a825007f7c41d2b.png"},48978:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/app_to_host_c_deploy-e2ba8b8407bd3da97edba7a258e1a0cc.png"},28198:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/app_to_router_a_deploy-16a9c85c8cdd1eebc87e053b6c5c3c8e.png"},36358:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/app_to_router_b_deploy-887cf0e99317cc81962ebde42f6699c5.png"}}]);