"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3779],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},64885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},o="Using Grafana",s={unversionedId:"learn/core-concepts/metrics/grafana",id:"learn/core-concepts/metrics/grafana",title:"Using Grafana",description:"Grafana has a marvelous datasource type called Infinity.  It is highly flexible in it's own right, and the numerous options it provides to configure additional funcitonality makes it a great choice for interacting with APIs for various purposes.  In this case, I am using it to access the OpenZiti management API to retrieve reference information for transforming the zitiIds (Identity, Edge Router, etc.) to their human readable names.",source:"@site/docs/learn/core-concepts/metrics/50-grafana.md",sourceDirName:"learn/core-concepts/metrics",slug:"/learn/core-concepts/metrics/grafana",permalink:"/docs/learn/core-concepts/metrics/grafana",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/metrics/50-grafana.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Prometheus Endpoint",permalink:"/docs/learn/core-concepts/metrics/prometheus"},next:{title:"Sequence Diagram",permalink:"/docs/learn/core-concepts/metrics/sequence-diagram"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure the datasource",id:"configure-the-datasource",level:3},{value:"Create a dashboard",id:"create-a-dashboard",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-grafana"},"Using Grafana"),(0,r.kt)("p",null,"Grafana has a marvelous datasource type called ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/plugins/yesoreyeram-infinity-datasource/"},"Infinity"),".  It is highly flexible in it's own right, and the numerous options it provides to configure additional funcitonality makes it a great choice for interacting with APIs for various purposes.  In this case, I am using it to access the OpenZiti management API to retrieve reference information for transforming the zitiIds (Identity, Edge Router, etc.) to their human readable names.  "),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Grafana instance "),(0,r.kt)("li",{parentName:"ul"},"The Infinity datasource for Grafana installed"),(0,r.kt)("li",{parentName:"ul"},"Sufficient access to the Grafana instance to allow the provisioning of datasources and creation of dashboards"),(0,r.kt)("li",{parentName:"ul"},"An OpenZiti admin user identity")),(0,r.kt)("h3",{id:"configure-the-datasource"},"Configure the datasource"),(0,r.kt)("p",null,"The configuration of the datasource is simple, but a little nonintuitive."),(0,r.kt)("p",null,"We set the name of the server, in this case our network Controller, but no authentication.  This seems odd for a secure network, but the datasource does not provide (at this level) the tools we need to interact with the authentication endpoint to receive an API Session token.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Infinity datasource authentication configuration",src:a(59882).Z,width:"1242",height:"579"})),(0,r.kt)("p",null,"In the network section, we can provide the CA certificate for the controller, or skip TLS verification, depending on your security posture needs.  To obtain the CA cert, use an identity.json file from the network instance and the command ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti ops unwrap <IDENTITY.JSON>"),'  This will break out the certificate, CA, and key file from the identity individually, then just copy and paste the CA into the entry field provided when selecting "With CA Cert".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Infinity datasource network confioguration",src:a(75746).Z,width:"969",height:"446"})),(0,r.kt)("h2",{id:"create-a-dashboard"},"Create a dashboard"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a new dashbaord, select the Settings gear in the upper right, and go to the Variables option.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a variable"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"We are going to use the authenticate endpoint and our credentials to retrieve the bearer token for use in the headers of the requests for actual data.  Note that thses are part of the configuration, and therefore you must be careful about editor and admin access to the Grafana instance and node to protect these credentials."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Build the query as below, entering your edge management API socket address "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Variable query configuration",src:a(73988).Z,width:"1130",height:"753"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open the URL options by selecting the Headers, Body, Request params button to the right of the URL and configure as below, entering the username and password from your identity."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Variable query URL Options configuration",src:a(74094).Z,width:"1090",height:"380"})," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the Parsing options and Result fields, enter the below.  The Infinity datasource provides JSONPath functionality, which is used here to extract the API Session token for use in the panel queries."),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"Variable parsing options configuration",src:a(22814).Z,width:"1167",height:"260"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Save Dashboard"))),(0,r.kt)("p",null,'Note:  Once you have verified the query is working properly, you should hide the variable and label on the dashbaord, as it is a "live" token for the identity used to access the API.  Again, be very mindful of the access users have to the Grafana instance and node for security reasons.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a new visualization to the dashboard, and configure the query as below.  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Identities API Query configuration",src:a(38165).Z,width:"1186",height:"712"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the Headers, Request params button next to the URL field")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter the zt-session header as below."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Query header configuration",src:a(57971).Z,width:"615",height:"197"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save and refresh and voila!  You have read the management API and displayed the identity status information from your OpenZiti network.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OpenZiti identity status",src:a(25338).Z,width:"1348",height:"276"})))}p.isMDXComponent=!0},75746:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Infinity_CACert-c218e06c78b96a5c144bf146a2ec91c5.png"},59882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Infinity_noAuth-dfec4b8373c42a457e9e1543a9ddb7a8.png"},38165:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api_identities_query-8330a911024d1d8369234ebb728b086f.png"},73988:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bearer_token_variable-140c19ec8686fd4940437887cfa08b35.png"},22814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bearer_token_variable_parsing-8e63e1aa93fba6f410a198dc33f9850b.png"},74094:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bearer_token_variable_url_options-fd9a712fe0a69834d1eb099621742161.png"},25338:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/identity_table-6de0d4744d0bcbc09878de872357d3c9.png"},57971:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/query_header_config-c695bd9405aca5b8e2f10ae7fe78cc2d.png"}}]);