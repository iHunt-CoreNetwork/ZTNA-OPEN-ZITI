"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={},o="Authentication Policies",l={unversionedId:"core-concepts/security/authentication/authentication-policies",id:"core-concepts/security/authentication/authentication-policies",title:"Authentication Policies",description:"Authentication Policies restrict the primary authentication methods available to",source:"@site/docs/core-concepts/security/authentication/30-authentication-policies.md",sourceDirName:"core-concepts/security/authentication",slug:"/core-concepts/security/authentication/authentication-policies",permalink:"/docs/core-concepts/security/authentication/authentication-policies",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/security/authentication/30-authentication-policies.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"rootSidebar",previous:{title:"API Session Certificates",permalink:"/docs/core-concepts/security/authentication/api-session-certificates"},next:{title:"Certificate Management",permalink:"/docs/core-concepts/security/authentication/certificate-management"}},c={},s=[{value:"Primary",id:"primary",level:2},{value:"Certificate (cert)",id:"certificate-cert",level:3},{value:"External JWT Signers (extJwt)",id:"external-jwt-signers-extjwt",level:3},{value:"Username Password (updb)",id:"username-password-updb",level:3},{value:"Secondary",id:"secondary",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication-policies"},"Authentication Policies"),(0,a.kt)("p",null,"Authentication Policies restrict the ",(0,a.kt)("a",{parentName:"p",href:"auth#primary-authentication"},"primary authentication")," methods available to\nidentities and may enforce additional ",(0,a.kt)("a",{parentName:"p",href:"auth#secondary-authentication"},"secondary authentication")," factors. Ziti is\ndeployed with a default authentication policy that has the id ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),". This authentication policy may be updated,\nbut not deleted. This default authentication policy is used when identities are created and an authentication\npolicy is not specified."),(0,a.kt)("p",null,"Example: Authentication Policy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "createdAt": "2022-05-20T14:02:53.359Z",\n    "id": "default",\n    "tags": {},\n    "updatedAt": "2022-05-20T14:02:53.359Z",\n    "name": "Default",\n    "primary": {\n        "cert": {\n            "allowExpiredCerts": true,\n            "allowed": true\n        },\n        "extJwt": {\n            "allowed": true,\n            "allowedSigners": null\n        },\n        "updb": {\n            "allowed": true,\n            "lockoutDurationMinutes": 0,\n            "maxAttempts": 0\n        }\n    },\n    "secondary": {\n        "requireTotp": false,\n        "requireExtJwt": ""\n    }\n}\n')),(0,a.kt)("h1",{id:"sections"},"Sections"),(0,a.kt)("p",null,"An authentication policy is split into two separate major sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"primary - initial authentication to establish the authenticating principal"),(0,a.kt)("li",{parentName:"ul"},"secondary - additional MFA authentication challenges")),(0,a.kt)("h2",{id:"primary"},"Primary"),(0,a.kt)("p",null,"The primary section allow or disposals various authentication mechanisms used to establish the initial principal\n(identity) authenticating. A viable authentication policy must allow at least one primary authentication mechanism."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cert - x509 certificate based authentication"),(0,a.kt)("li",{parentName:"ul"},"extJwt - externally signed JWT bearer tokens"),(0,a.kt)("li",{parentName:"ul"},'updb - "username password database" which power traditional username/password authentication')),(0,a.kt)("h3",{id:"certificate-cert"},"Certificate (cert)"),(0,a.kt)("p",null,"Fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"allowed - enables/disabled x509 certificate authentication"),(0,a.kt)("li",{parentName:"ul"},"allowExpiredCerts - allows expired client certificates to authenticate")),(0,a.kt)("p",null,"When certificate authentication is ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed"),", client certificates issued by the Ziti PKI and any verified and enabled\n",(0,a.kt)("a",{parentName:"p",href:"third-party-cas"},"3rd Party CAs")," become valid authentication paths. When disabled an identity will not be able\nto authenticate with any client certificate."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"allowExpiredCerts")," is true, client certificate expiration will be ignored during validation. This setting is\nuseful in scenarios where client are running software that has lapsed and cannot be re-enrolled or their client\ncertificates cannot be updated. Clients do have an API available to them to roll existing Ziti PKI issued client\ncertificates forward. Client certificates issued by a ",(0,a.kt)("a",{parentName:"p",href:"third-party-cas"},"3rd Party CAs")," must have an external\nprocess to maintain client certificate validity if ",(0,a.kt)("inlineCode",{parentName:"p"},"allowExpiredCerts")," is false."),(0,a.kt)("h3",{id:"external-jwt-signers-extjwt"},"External JWT Signers (extJwt)"),(0,a.kt)("p",null,"Fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"allowed - whether external JWTs may be used for authentication"),(0,a.kt)("li",{parentName:"ul"},"allowedSigners - the ids of valid ",(0,a.kt)("a",{parentName:"li",href:"external-jwt-signers"},"External JWT Signers"))),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed")," is true the ",(0,a.kt)("a",{parentName:"p",href:"external-jwt-signers"},"External JWT Signers")," specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"allowedSigners")," field\nmay be used for authentication."),(0,a.kt)("h3",{id:"username-password-updb"},"Username Password (updb)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"allowed - whether UPDB may be used for authentication"),(0,a.kt)("li",{parentName:"ul"},"maxAttempts - the maximum number of invalid logins allowed before an identity is locked for ",(0,a.kt)("inlineCode",{parentName:"li"},"lockoutDurationMinutes"),", 0 for never"),(0,a.kt)("li",{parentName:"ul"},"lockoutDurationMinutes - the number of minutes to lock identities after ",(0,a.kt)("inlineCode",{parentName:"li"},"maxAttempts")," is reached, 0 for forever")),(0,a.kt)("h2",{id:"secondary"},"Secondary"),(0,a.kt)("p",null,"The secondary section contain only two top-level configuration values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"requireTotp - if true authenticating clients must have ",(0,a.kt)("a",{parentName:"li",href:"totp"},"MFA TOTP")," enabled"),(0,a.kt)("li",{parentName:"ul"},"requireExtJwt - if set to an id of an ",(0,a.kt)("a",{parentName:"li",href:"external-jwt-signers"},"External JWT Signer")," every request must have a valid JWT in the HTTP ",(0,a.kt)("inlineCode",{parentName:"li"},"Authentication")," header")))}p.isMDXComponent=!0}}]);