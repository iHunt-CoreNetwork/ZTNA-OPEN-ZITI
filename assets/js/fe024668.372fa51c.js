"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={},o="External JWT Signers",l={unversionedId:"core-concepts/security/authentication/external-jwt-signers",id:"core-concepts/security/authentication/external-jwt-signers",title:"External JWT Signers",description:"External JWT Signers allow external identity providers to facilitate authentication with a Ziti network. External",source:"@site/docs/core-concepts/security/authentication/50-external-jwt-signers.md",sourceDirName:"core-concepts/security/authentication",slug:"/core-concepts/security/authentication/external-jwt-signers",permalink:"/docs/core-concepts/security/authentication/external-jwt-signers",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/security/authentication/50-external-jwt-signers.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"rootSidebar",previous:{title:"Certificate Management",permalink:"/docs/core-concepts/security/authentication/certificate-management"},next:{title:"Identities",permalink:"/docs/core-concepts/security/authentication/identities"}},c={},s=[{value:"x509 Certificate",id:"x509-certificate",level:2},{value:"JWKS Endpoint",id:"jwks-endpoint",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"external-jwt-signers"},"External JWT Signers"),(0,a.kt)("p",null,"External JWT Signers allow external identity providers to facilitate authentication with a Ziti network. External\nJWT Signers can be added as a static x509 certificate or via a JWKS endpoint. Authenticating clients can provide\na JWT as a primary authentication mechanism to obtain an API Session. Additionally, the JWT can be required on\nall REST API calls if desired by using an Authentication Policy that requires it as a secondary factor."),(0,a.kt)("p",null,"JWT is described in ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"RFC 7519")," and on ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token"},"Wikipedia"),".\nX509 PKI is described in ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc5280"},"RFC 5280")," an on ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/X.509"},"Wikipedia")),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("p",null,"External JWT Signers are used in conjunction with Authentication Policies to allow identities to authenticate using a\nJWT. External JWT Signers can be configured to match an identity through the ",(0,a.kt)("inlineCode",{parentName:"p"},"claimsProperty")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useExternalId"),"\nfields. ",(0,a.kt)("inlineCode",{parentName:"p"},"claimsProperty")," can change which field in the JWT is matched to the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"externalId")," on an identity.\n",(0,a.kt)("inlineCode",{parentName:"p"},"useExternalId")," when true will match the ",(0,a.kt)("inlineCode",{parentName:"p"},"claimsProperty")," to an identity's ",(0,a.kt)("inlineCode",{parentName:"p"},"externalId")," field. If false, it will match\nto the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: ",(0,a.kt)("inlineCode",{parentName:"em"},"externalId")," values on identities are enforced to be unique.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"claimsProperty")," can contain JWT standard claims or private claims. An example usage would be an ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," JWT private\nclaim and Ziti identities with ",(0,a.kt)("inlineCode",{parentName:"p"},"externalId")," set to email addresses."),(0,a.kt)("h2",{id:"x509-certificate"},"x509 Certificate"),(0,a.kt)("p",null,"If the JWT provider has a static x509 certificate, it is possible define an External JWT Signer using the PEM encoded\npublic certificate of the signer. If the JWT provider has JWKS endpoint support it is strongly recommended to create\nan External JWT Signer using the JWKS endpoint. External JWT Signers configured with a static x509 certificate will\nneed maintenance during key rotation and certificate expiration. For these operations the Edge Management API\ncan be used for external automation."),(0,a.kt)("h2",{id:"jwks-endpoint"},"JWKS Endpoint"),(0,a.kt)("p",null,"JSON Web Key Sets (JWKS) is defined in ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7517#section-5"},"RFC7517 Section 5"),"\nand is used by many popular IdPs (Auth0, Okta) in order to enable external JWT verification. External JWT Signers\nconfigured with a JWKS endpoint allows an identity provider to rotate keys and bridge signer certificate expiration\nwindows."),(0,a.kt)("h1",{id:"jwt-validation"},"JWT Validation"),(0,a.kt)("p",null,"External JTW Signers are used to validate JWTs for authentication. This validation requires the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"iss")," field on the JWT must match the ",(0,a.kt)("inlineCode",{parentName:"li"},"issuer")," field on the External JWT Signer"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"aud")," field on the JWT must match the ",(0,a.kt)("inlineCode",{parentName:"li"},"audience")," field on the External JWT Signer"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"sub")," or field defined by ",(0,a.kt)("inlineCode",{parentName:"li"},"claimsProperty")," must match the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," field on an identity (or ",(0,a.kt)("inlineCode",{parentName:"li"},"externalid")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"useExternal")," is true)"),(0,a.kt)("li",{parentName:"ul"},"the JWT must be signed by the x509 certificate or a JWK from the JWKS endpoint defined on the External JWT Signer"),(0,a.kt)("li",{parentName:"ul"},"the JWT ",(0,a.kt)("inlineCode",{parentName:"li"},"kid")," must match the External JWT ",(0,a.kt)("inlineCode",{parentName:"li"},"kid")," field for x509 certificates or the ",(0,a.kt)("inlineCode",{parentName:"li"},"kid")," in a JWKS response"),(0,a.kt)("li",{parentName:"ul"},"the JWT must not be expired")),(0,a.kt)("h1",{id:"creation"},"Creation"),(0,a.kt)("p",null,"An External JWT Signer that uses a private ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," claim and matches on ",(0,a.kt)("inlineCode",{parentName:"p"},"externalId")," with a JWKS endpoint can\nbe created as follows:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/ext-jwt-signers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "My External JWT Signer",\n  "enabled": true,\n  "issuer": "my-issuer",\n  "audience": "my-audience",\n  "jwksEndpoint": "https://example.com/.well-known/jwks.json",\n  "claimsProperty": "email",\n  "useExternalId": true\n}\n')),(0,a.kt)("p",null,"An External JWT Signer that uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"sub")," claim and matches on ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," with a x509 certificate can\nbe created as follows:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/ext-jwt-signers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "My External JWT Signer",\n  "enabled": true,\n  "issuer": "my-issuer",\n  "audience": "my-audience",\n  "kid": "2gh80220",\n  "certPem": "-----BEGIN CERTIFICATE-----\\nMII...\\n-----END CERTIFICATE-----\\n"\n}\n')),(0,a.kt)("h1",{id:"external-authentication-url--client-authentication"},"External Authentication URL & Client Authentication"),(0,a.kt)("p",null,"Unauthenticated clients can enumerate External JWT Signers that have an ",(0,a.kt)("inlineCode",{parentName:"p"},"externalAuthUrl")," property. Clients will\nreceive the name of the External JWT Signer and the ",(0,a.kt)("inlineCode",{parentName:"p"},"externalAuthUrl")," only. This information can allow clients\nto initiate client authentication to the target identity provider. "),(0,a.kt)("p",null,"Example Client External JWT Signer response:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /edge/client/v1/external-jwt-signers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "_links": {\n        "self": {\n          "href": "./external-jwt-signers/eZjzX3U1u"\n        }\n      },\n      "id": "eZjzX3U1u",\n      "name": "my-ext-jwt-signer",\n      "externalAuthUrl": "https://my-site/authenticate"\n    }\n  ],\n  "meta": {}\n}\n')))}p.isMDXComponent=!0}}]);