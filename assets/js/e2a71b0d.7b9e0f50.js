"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={},l="Identities",o={unversionedId:"learn/core-concepts/security/authentication/identities",id:"learn/core-concepts/security/authentication/identities",title:"Identities",description:"Ziti Edge defines a top level entity called an Identity. An Identity is a security principal that can bind (host) or",source:"@site/docs/learn/core-concepts/security/authentication/60-identities.md",sourceDirName:"learn/core-concepts/security/authentication",slug:"/learn/core-concepts/security/authentication/identities",permalink:"/docs/learn/core-concepts/security/authentication/identities",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/authentication/60-identities.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{},sidebar:"docsSidebar",previous:{title:"External JWT Signers",permalink:"/docs/learn/core-concepts/security/authentication/external-jwt-signers"},next:{title:"MFA TOTP",permalink:"/docs/learn/core-concepts/security/authentication/totp"}},c={},s=[{value:"Identity ER Diagram",id:"identity-er-diagram",level:2},{value:"Creating",id:"creating",level:2},{value:"Creating w/ No Authenticators/Enrollments",id:"creating-w-no-authenticatorsenrollments",level:3},{value:"Ziti CLI",id:"ziti-cli",level:4},{value:"Edge Management API",id:"edge-management-api",level:4},{value:"Creating w/ Ziti PKI Client Cert Enrollment",id:"creating-w-ziti-pki-client-cert-enrollment",level:3},{value:"Ziti CLI",id:"ziti-cli-1",level:4},{value:"Edge Management API",id:"edge-management-api-1",level:4},{value:"Creating w/ 3rd Party CA Client Cert Enrollment",id:"creating-w-3rd-party-ca-client-cert-enrollment",level:3},{value:"Ziti CLI:",id:"ziti-cli-2",level:4},{value:"Edge Management API",id:"edge-management-api-2",level:4},{value:"Creating w/ Username/Password Enrollment",id:"creating-w-usernamepassword-enrollment",level:3},{value:"Ziti CLI:",id:"ziti-cli-3",level:4},{value:"Edge Management API",id:"edge-management-api-3",level:4},{value:"Creating w/ JWT Authenticator",id:"creating-w-jwt-authenticator",level:3},{value:"Ziti CLI:",id:"ziti-cli-4",level:4},{value:"Edge Management API",id:"edge-management-api-4",level:4},{value:"Deleting",id:"deleting",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"identities"},"Identities"),(0,a.kt)("p",null,"Ziti Edge defines a top level entity called an Identity. An Identity is a security principal that can bind (host) or\ndial (connect) to services over a Ziti Network. An Identity may be a human who uses one or more devices, a device\nitself, a single account on a multi-user device, an application, or a set of applications. What determines what an\nIdentity is only limited by the intent of its use, its security configuration, and where/how it stores its credentials."),(0,a.kt)("p",null,"If an Identity represents a human that is using an SSO provider that ties into Ziti Edge's\n",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/external-jwt-signers"},"External JWT Signers")," the human operator can move from device to device using whichever Ziti\nenabled applications that allow them to authenticate. If the Identity can only authenticate via a x509 Client\nCertificate where the private key is stored in a hardware back keystore on a device, such that the key can not be moved,\nthe identity is tied to that hardware. Further if the Identity's credentials are stored in an OS-backed user specific\nstorage mechanism (e.g. Windows Credential Manager) it is that accounts Identity."),(0,a.kt)("h2",{id:"identity-er-diagram"},"Identity ER Diagram"),(0,a.kt)("p",null,"Below is a diagram that show the high-level relationships between an Identity and various important entities and within\na Ziti Network. This diagram does not show all entities, simply the ones tied closest to an Identity. For example,\nthe Role Attributes on an Identity are used by selectors defined on policies to act on the identity. However, the\npolicies and selectors are not modeled here."),(0,a.kt)("mermaid",{value:"erDiagram\n    Identity ||..o{ API-Session : has\n    API-Session ||..o{ Session : has\n    API-Session ||..o{ Session-Certificates : has\n    API-Session ||..|| Posture-Data : has\n    Identity ||..|| Authentication-Policy : has\n    Identity ||..o{ Identity-Role-Attributes : has\n    Identity ||..o{ Authenticator: has\n    Identity ||..o{ Enrollment: has\n    Identity ||..o| MFA-TOTP-Config: has"}),(0,a.kt)("h2",{id:"creating"},"Creating"),(0,a.kt)("p",null,"Creating an identity alone may not be enough to make it usable. An identity will also need a valid primary\nauthentication mechanism. Depending on that mechanism it may also need to complete ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/enrollment#clients"},"enrollment"),"."),(0,a.kt)("p",null,"Please note that all authentication mechanisms also require a properly configured ",(0,a.kt)("a",{parentName:"p",href:"./auth"},"authentication policy")),(0,a.kt)("p",null,"The following ",(0,a.kt)("a",{parentName:"p",href:"./auth#primary-authentication"},"primary authentication")," mechanisms require post-creation enrollment:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ziti PKI x509 Client Certificate"),(0,a.kt)("li",{parentName:"ul"},"3rd Party x509 Client Certificate"),(0,a.kt)("li",{parentName:"ul"},"Username Password (UPDB)")),(0,a.kt)("p",null,"The following do not require enrollment, but must have a properly configured ",(0,a.kt)("a",{parentName:"p",href:"./external-jwt-signers"},"External JWT Signer")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JWT")),(0,a.kt)("h3",{id:"creating-w-no-authenticatorsenrollments"},"Creating w/ No Authenticators/Enrollments"),(0,a.kt)("p",null,"Note: This identity will not be able to authenticate"),(0,a.kt)("h4",{id:"ziti-cli"},"Ziti CLI"),(0,a.kt)("p",null,"It is currently not possible to create and identity without an enrollment option through the CLI. It can be completed\nby creating and identity then deleting the default certificate enrollment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'ziti edge create identity [device|service|user] <name>\nziti edge delete enrollment where "identity=<id>"\n')),(0,a.kt)("h4",{id:"edge-management-api"},"Edge Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/identities")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "name": "Roger Wilco",\n  "isAdmin": false\n}\n')),(0,a.kt)("h3",{id:"creating-w-ziti-pki-client-cert-enrollment"},"Creating w/ Ziti PKI Client Cert Enrollment"),(0,a.kt)("p",null,"Note: This identity will be using the default ",(0,a.kt)("a",{parentName:"p",href:"./auth"},"authentication policy")," which allows certificate authentication"),(0,a.kt)("h4",{id:"ziti-cli-1"},"Ziti CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti edge create identity [device|service|user] <name> ")),(0,a.kt)("h4",{id:"edge-management-api-1"},"Edge Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/identities")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "name": "Roger Wilco",\n  "isAdmin": false,\n  "enrollment": {\n    "ott": true\n  }\n}\n')),(0,a.kt)("h3",{id:"creating-w-3rd-party-ca-client-cert-enrollment"},"Creating w/ 3rd Party CA Client Cert Enrollment"),(0,a.kt)("p",null,"Note: This identity will be using the default ",(0,a.kt)("a",{parentName:"p",href:"./auth"},"authentication policy")," which allows certificate authentication"),(0,a.kt)("h4",{id:"ziti-cli-2"},"Ziti CLI:"),(0,a.kt)("p",null,"It is currently not possible to create identities with a 3rd party certificate enrollment through the CLI."),(0,a.kt)("h4",{id:"edge-management-api-2"},"Edge Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/identities")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "name": "Roger Wilco",\n  "isAdmin": false,\n  "enrollment": {\n    "ottca": "<id-to-3rd-party-ca>"\n  }\n}\n')),(0,a.kt)("h3",{id:"creating-w-usernamepassword-enrollment"},"Creating w/ Username/Password Enrollment"),(0,a.kt)("p",null,"Note: This identity will be using the default ",(0,a.kt)("a",{parentName:"p",href:"./auth"},"authentication policy")," which allows UPDB authentication"),(0,a.kt)("h4",{id:"ziti-cli-3"},"Ziti CLI:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti edge create identity [device|service|user] <name> --updb <username>")),(0,a.kt)("h4",{id:"edge-management-api-3"},"Edge Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/identities")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "name": "Roger Wilco",\n  "isAdmin": false,\n  "enrollment": {\n    "updb": "<username>"\n  }\n}\n')),(0,a.kt)("h3",{id:"creating-w-jwt-authenticator"},"Creating w/ JWT Authenticator"),(0,a.kt)("p",null,"Note: A valid ",(0,a.kt)("a",{parentName:"p",href:"./external-jwt-signers"},"External JWT Signer")," must be created and an ",(0,a.kt)("a",{parentName:"p",href:"./auth"},"authentication policy"),"\nmust be defined that allows the identity to authenticate with that signer."),(0,a.kt)("h4",{id:"ziti-cli-4"},"Ziti CLI:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'ziti edge create identity [device|service|user] <name> --external-id "externalJWTId"')),(0,a.kt)("h4",{id:"edge-management-api-4"},"Edge Management API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/identities")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "name": "Roger Wilco",\n  "isAdmin": false,\n  "externalId": "externalJWTId"\n}\n')),(0,a.kt)("h2",{id:"deleting"},"Deleting"),(0,a.kt)("p",null,"Deleting an Identity removes all directly associated data. This includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/sessions#api-session"},"API Sessions"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../sessions#session"},"Sessions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/posture-checks#posture-data"},"Posture Data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authentication/api-session-certificates"},"Session Certificates")))),(0,a.kt)("li",{parentName:"ul"},"Identity Role Attributes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authentication/auth#authenticators"},"Authenticators")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/enrollment"},"Enrollments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authentication/totp"},"MFA TOTP Configuration"))),(0,a.kt)("p",null,"It does not remove entities are that re-usable between Identities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authentication/authentication-policies"},"Authentication Policies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/policies/overview"},"Service Policies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/policies/overview"},"Edge Router Policies"))),(0,a.kt)("p",null,"Deleting an Identity immediately removes it and all current and future access it would have to a Ziti Network and its\nServices."))}p.isMDXComponent=!0}}]);