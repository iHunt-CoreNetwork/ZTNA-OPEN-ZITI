"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9623],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(g,c(c({ref:n},u),{},{components:t})):r.createElement(g,c({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={},c="Consuming",a={unversionedId:"core-concepts/config-store/consuming",id:"core-concepts/config-store/consuming",title:"Consuming",description:"Consuming Configuration Data",source:"@site/docs/core-concepts/config-store/consuming.md",sourceDirName:"core-concepts/config-store",slug:"/core-concepts/config-store/consuming",permalink:"/docusaurus/docs/core-concepts/config-store/consuming",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/config-store/consuming.md",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"Service Configurations",permalink:"/docusaurus/docs/core-concepts/config-store/overview"},next:{title:"Managing",permalink:"/docusaurus/docs/core-concepts/config-store/managing"}},s={},l=[{value:"Consuming Configuration Data",id:"consuming-configuration-data",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"consuming"},"Consuming"),(0,i.kt)("h2",{id:"consuming-configuration-data"},"Consuming Configuration Data"),(0,i.kt)("p",null,"Configuration data can be retrieved directly, but it will usually be consumed by applications via the SDK. When an SDK authenticates, it will indicate which configuration types it can process. Then, when listing services, the SDK will recieve configuation data in-line. This can be done from the CLI as well."),(0,i.kt)("p",null,"If we've set up a service ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ziti edge create config ssh-client my-app \\\n    \'{ \n        "hostname" : "ssh.company.com", \n        "port" : 22 \n     }\'\n\n$ ziti edge create service ssh --configs ssh\n')),(0,i.kt)("p",null,"The SDKs will present this configuration in language specific ways. You can see the data the SDK are working with from the SDK, by specifying configuration types when listing services. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTES")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can specify ",(0,i.kt)("inlineCode",{parentName:"li"},"all")," to see all the configuration data."),(0,i.kt)("li",{parentName:"ul"},"In addition to the ",(0,i.kt)("inlineCode",{parentName:"li"},"config")," block which has the embedded configuration data there's also a ",(0,i.kt)("inlineCode",{parentName:"li"},"configs")," section which lists all the associated configurations by ID. All associated configurations will always be listed here, regardless of which configuration types are requested.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ziti edge list services -j --config-types my-app \'name="ssh"\'\n{\n    "meta": {\n        "filterableFields": [\n            "id",\n            "createdAt",\n            "updatedAt",\n            "name"\n        ],\n        "pagination": {\n            "limit": 10,\n            "offset": 0,\n            "totalCount": 1\n        }\n    },\n    "data": [\n        {\n            "id": "5d802b56-2ce2-4d28-b95c-01c968948ecc",\n            "createdAt": "2020-06-01T14:36:36.856984972Z",\n            "updatedAt": "2020-06-01T14:36:36.856984972Z",\n            "_links": {\n                "configs": {\n                    "href": "./services/5d802b56-2ce2-4d28-b95c-01c968948ecc/configs"\n                },\n                "self": {\n                    "href": "./services/5d802b56-2ce2-4d28-b95c-01c968948ecc"\n                },\n                "service-edge-router-policies": {\n                    "href": "./services/5d802b56-2ce2-4d28-b95c-01c968948ecc/service-edge-router-policies"\n                },\n                "service-policies": {\n                    "href": "./services/5d802b56-2ce2-4d28-b95c-01c968948ecc/service-policies"\n                },\n                "terminators": {\n                    "href": "./services/5d802b56-2ce2-4d28-b95c-01c968948ecc/terminators"\n                }\n            },\n            "tags": {},\n            "name": "ssh",\n            "terminatorStrategy": "smartrouting",\n            "roleAttributes": null,\n            "permissions": [\n                "Bind",\n                "Dial"\n            ],\n            "configs": [\n                "e471379b-3f40-4ddf-8bae-621491127543"\n            ],\n            "config": {\n                "my-app": {\n                    "hostname": "ssh.company.com",\n                    "port": 22\n                }\n            }\n        }\n    ]\n}\n')))}p.isMDXComponent=!0}}]);