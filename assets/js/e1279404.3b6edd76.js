"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=r,m=c["".concat(s,".").concat(p)]||c[p]||g[p]||o;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(3905)),o=n(8959);const a={},l="Edge Router",s={unversionedId:"manage/edge-router",id:"manage/edge-router",title:"Edge Router",description:"",source:"@site/docs/manage/02-edge-router.mdx",sourceDirName:"manage",slug:"/manage/edge-router",permalink:"/docs/manage/edge-router",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/manage/02-edge-router.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"rootSidebar",previous:{title:"Ziti Controller",permalink:"/docs/manage/controller"},next:{title:"Public Key Infrastructure (PKI)",permalink:"/docs/manage/pki"}},d={},u=[{value:"Sizing Guidelines",id:"sizing-guidelines",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Edge Router Identity",id:"edge-router-identity",level:3},{value:"Enrollment",id:"enrollment",level:2},{value:"Running ziti-router enroll",id:"running-ziti-router-enroll",level:3}],g={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"edge-router"},"Edge Router"),(0,r.kt)("p",null,"The Edge Router is the entry point for Ziti-based clients. It is responsible for authenticating incoming connections by\nverifying the connecting client has a valid network session.  It also routes traffic to whatever the\ndestination is for the given service. In simple deployments - a single edge router might be deployed. This is the case\nwith the ",(0,r.kt)("a",{parentName:"p",href:"../quickstarts/network/"},"Ziti Network Quickstart"),". In the coming months it will be\npossible to produce complicated deployments having multiple Edge Routers deployed in a myriad of locations."),(0,r.kt)("h2",{id:"sizing-guidelines"},"Sizing Guidelines"),(0,r.kt)("p",null,"The Ziti Controller and Ziti Routers are still in the process of being stress tested. We recommend starting with a small\nscale deployment until key performance indicators start to hint that the server requires more resources. A Ziti network\nwill have two important metrics: CPU and network capacity.  Modest sized networks require minimal investments in\ninfrastructure. Start with small machines and increase as needed."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The Edge Router is configured using a ",(0,r.kt)("a",{parentName:"p",href:"https://yaml.org/"},"yaml")," file. An example configuration file can be obtained\nby running the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti")," CLI tool and generating a config. See ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti create config router edge")," for more details"),(0,r.kt)("h3",{id:"edge-router-identity"},"Edge Router Identity"),(0,r.kt)("p",null,"The pki-related fields in the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," section are important to understand and pay particular attention to. The\nfiles specified here are generated durring the process of ",(0,r.kt)("a",{parentName:"p",href:"#enrollment"},"enrolling")," the edge router. As is also stated in the\nconfiguration file these files do not need to exist before enrollment. These files will be written to during the\nenrollment process. This means the process running the enrollment will need the correct privileges grated to it in order\nto write - or overwrite those files.  If the key specified in the identity section already exists - it will not be\noverwritten. Instead, it will be used during the enrollment process."),(0,r.kt)(o.ZP,{mdxType:"LoggingSnippetMd"}),(0,r.kt)("h2",{id:"enrollment"},"Enrollment"),(0,r.kt)("p",null,"Enrollment is the process of securely generating information used to identify a given client. All endpoints need to be\nenrolled in one way or another. The Edge Router is a client of a Ziti Network, and thus it too must be enrolled before it\nwill be able to participate in a Ziti network.  An Edge Router is enrolled using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-router enroll")," command and\nsub-command."),(0,r.kt)("h3",{id:"running-ziti-router-enroll"},"Running ziti-router enroll"),(0,r.kt)("p",null,"In order to enroll the Edge Router a valid ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," file is needed. After creating a valid\nconfiguration the jwt for the Edge Router also needs to be obtained from the Ziti Controller. The jwt can be\nretrieved from the Ziti Controller via the Ziti Controller's REST API at\nhttps://${controller-name}:${controller-port}/edge-routers."),(0,r.kt)("p",null,"With a valid configuration file and jwt the router can now be enrolled using:\n",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-router enroller [path to configuration file] --jwt [path to jwt]"),"."))}c.isMDXComponent=!0},8959:(e,t,n)=>{n.d(t,{ZP:()=>a});var i=n(7462),r=(n(7294),n(3905));const o={toc:[{value:"Logging",id:"logging",level:2},{value:"Log Format",id:"log-format",level:3},{value:"Log Levels",id:"log-levels",level:3}]};function a(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"logging"},"Logging"),(0,r.kt)("p",null,'The Ziti components log all output to standard output. Logging to standard out, instead of to configurable files, etc.,\nis a "lighter" approach to logging that is more easily integrated into more different kinds of environments. Logging to\nfiles and implementing feautres like file rotation is a solved problem and not one that the Ziti components try to\nsolve.  Instead look to alternatives which are capable of watching standard out and aggregating the results for you.\nThere are many solutions available to collect, aggregate and display logs. Search for and implement a solution that\nworks for you and your needs.'),(0,r.kt)("h3",{id:"log-format"},"Log Format"),(0,r.kt)("p",null,"The output from Ziti components comes in three distinct styles.  Choose the style of logging that is right for you."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pfxlog")," - a human-readible format leveraging ascii escape codes to display colorized log level"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"json"),"   - a machine-readible format targetting automated processes for log aggregation/searching"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"text"),"   - a human-readible format using plain text (no ascii escape codes)")),(0,r.kt)("h3",{id:"log-levels"},"Log Levels"),(0,r.kt)("p",null,"By default the Ziti components will log at the INFO level. This means that log messages INFO, WARNING, ERROR and FATAL\nwill all be captured and output.  Ziti components all support verbose logging by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"--verbose")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," to the\ncommand being executed.  Verbose mode will add DEBUG log messages and as the name implies this log level is much more\nverbose. Often when debugging adding verbose mode will aid in identifying issues."))}a.isMDXComponent=!0}}]);