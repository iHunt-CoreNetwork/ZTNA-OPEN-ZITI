"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="On Demand",c={unversionedId:"core-concepts/metrics/inspect",id:"core-concepts/metrics/inspect",title:"On Demand",description:"The Ziti Controller supports pulling metrics on demand via the inspections framework.",source:"@site/docs/core-concepts/metrics/inspect.md",sourceDirName:"core-concepts/metrics",slug:"/core-concepts/metrics/inspect",permalink:"/docs/core-concepts/metrics/inspect",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/metrics/inspect.md",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"File Reporter",permalink:"/docs/core-concepts/metrics/file"},next:{title:"Types of Metrics Reported",permalink:"/docs/core-concepts/metrics/metric-types"}},s={},p=[{value:"Ziti Command Line",id:"ziti-command-line",level:2}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"on-demand"},"On Demand"),(0,o.kt)("p",null,"The Ziti Controller supports pulling metrics on demand via the ",(0,o.kt)("inlineCode",{parentName:"p"},"inspections")," framework. "),(0,o.kt)("p",null,"The inspections framework is part of the fabric API, hosted by the controller. The fabric API binding will need to be enabled in the controller configuration file for this to work."),(0,o.kt)("h2",{id:"ziti-command-line"},"Ziti Command Line"),(0,o.kt)("p",null,"The Ziti fabric CLI has support for the inspect command built in.  Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ziti fabric inspect '.*' metrics:json\n")),(0,o.kt)("p",null,"Let's break that command down a bit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ziti fabric inspect:")," The base fabric inspect command."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},".","*",":")," The network components to inspect.  .","*"," inspects everything,  other options include:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ctrl_client:")," Just the controller"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Router Id:")," Just a single router"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"metrics:json:")," Get metrics in json format.  Other formats include:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"prometheus:")," Get metrics in the Prometheus ","[text exposition format]"," (",(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format"},"https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format"),").")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The default CLI result will strip json markup.  Add ",(0,o.kt)("inlineCode",{parentName:"p"},"-j")," to the inspect command to get the raw json output.")))}m.isMDXComponent=!0}}]);