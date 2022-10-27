"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="Tunneler Config Type `host.v1`",c={unversionedId:"core-concepts/config-store/tunneler-config-type-host.v1",id:"core-concepts/config-store/tunneler-config-type-host.v1",title:"Tunneler Config Type `host.v1`",description:"A Config of Config Type host.v1 configures a hosting Ziti tunneler to forward connections to the destination server for a particular Ziti service.",source:"@site/docs/core-concepts/config-store/tunneler-config-type-host.v1.md",sourceDirName:"core-concepts/config-store",slug:"/core-concepts/config-store/tunneler-config-type-host.v1",permalink:"/docs/core-concepts/config-store/tunneler-config-type-host.v1",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/config-store/tunneler-config-type-host.v1.md",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"Managing",permalink:"/docs/core-concepts/config-store/managing"},next:{title:"Tunneler Config Type `intercept.v1`",permalink:"/docs/core-concepts/config-store/tunneler-config-type-intercept.v1"}},s={},l=[{value:"Examples",id:"examples",level:2},{value:"Schema Reference",id:"schema-reference",level:2}],p={toc:l};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tunneler-config-type-hostv1"},"Tunneler Config Type ",(0,o.kt)("inlineCode",{parentName:"h1"},"host.v1")),(0,o.kt)("p",null,"A Config of Config Type ",(0,o.kt)("inlineCode",{parentName:"p"},"host.v1")," configures a hosting Ziti tunneler to forward connections to the destination server for a particular Ziti service."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"This Config forwards Ziti service traffic to a server known as ",(0,o.kt)("inlineCode",{parentName:"p"},"tcp:localhost:54321"),". The server must be reachable at that destination from the network perspective of the device where the Ziti tunneler is running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "address": "localhost",\n    "port": 54321,\n    "protocol": "tcp"\n}\n')),(0,o.kt)("p",null,"Rather than a static destination port, this Config forwards the Ziti service traffic to the same TCP port that the initiating client was connecting to as long as it falls within the range of allowed ports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "address": "localhost",\n    "forwardPort": true,\n    "allowedPortRanges": [ { "low": 8000, "high": 8888 } ],\n    "protocol": "tcp"\n}\n')),(0,o.kt)("p",null,"Rather than a static destination address, this Config forwards the Ziti service traffic to the same address that the initiating client was connecting to as long as it is in the list of allowed addresses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "forwardAddress": true,\n    "allowedAddresses": [\n        "acme.ziti",\n        "*.dazzle.acme.ziti",\n        "10.0.0.0/8"\n    ],\n    "port": 8080,\n    "protocol": "tcp"\n}\n')),(0,o.kt)("h2",{id:"schema-reference"},"Schema Reference"),(0,o.kt)("p",null,"The JSON schema for this tunneler Config Type is maintained ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openziti/edge/blob/main/tunnel/entities/host.v1.json"},"in GitHub"),"."))}f.isMDXComponent=!0}}]);