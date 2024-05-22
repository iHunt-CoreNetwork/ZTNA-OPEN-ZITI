"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Router",sidebar_position:30},o="Router Configuration Reference",l={unversionedId:"reference/configuration/router",id:"reference/configuration/router",title:"Router Configuration Reference",description:"OpenZiti uses configuration files for controllers that are in the YAML format.",source:"@site/docs/reference/30-configuration/router.md",sourceDirName:"reference/30-configuration",slug:"/reference/configuration/router",permalink:"/docs/reference/configuration/router",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/30-configuration/router.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_label:"Router",sidebar_position:30},sidebar:"docsSidebar",previous:{title:"Controller",permalink:"/docs/reference/configuration/controller"},next:{title:"Logging",permalink:"/docs/reference/logging"}},s={},p=[{value:"Sections",id:"sections",level:2},{value:"<code>ctrl</code>",id:"ctrl",level:3},{value:"<code>csr</code>",id:"csr",level:3},{value:"<code>dialers</code>",id:"dialers",level:3},{value:"<code>edge</code>",id:"edge",level:3},{value:"<code>forwarder</code>",id:"forwarder",level:3},{value:"<code>healthChecks</code>",id:"healthChecks",level:3},{value:"<code>identity</code>",id:"identity",level:3},{value:"<code>link</code>",id:"link",level:3},{value:"<code>listeners</code>",id:"listeners",level:3},{value:"tunnel <code>listeners</code>",id:"tunnel-listeners",level:4},{value:"<code>metrics</code>",id:"metrics",level:3},{value:"<code>trace</code>",id:"trace",level:3},{value:"<code>transport</code>",id:"transport",level:3},{value:"<code>profile</code>",id:"profile",level:3},{value:"<code>web</code>",id:"web",level:3},{value:"<code>v</code>",id:"v",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"router-configuration-reference"},"Router Configuration Reference"),(0,a.kt)("p",null,"OpenZiti uses configuration files for controllers that are in the ",(0,a.kt)("a",{parentName:"p",href:"https://yaml.org/"},"YAML")," format.\nAll configuration files are also subject to a set of ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions"},"conventions")," such as\nenvironment variable substitution, identity sections, and addressing formats."),(0,a.kt)("h2",{id:"sections"},"Sections"),(0,a.kt)("p",null,"The router configuration file has several top level configuration sections that group together\nrelated configuration settings."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ctrl"},(0,a.kt)("inlineCode",{parentName:"a"},"ctrl"))," - configuration for controller addressing/connections"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#csr"},(0,a.kt)("inlineCode",{parentName:"a"},"csr"))," - certificate fields used during enrollment (SANs, CommonName, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#dialers"},(0,a.kt)("inlineCode",{parentName:"a"},"dialers"))," - configures dialers used when router termination is used to contact target\nservices for overlay egress"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#edge"},(0,a.kt)("inlineCode",{parentName:"a"},"edge"))," - edge specific configuration, required to enable edge functionality (e.g. edge\nSDK connectivity)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#forwarder"},(0,a.kt)("inlineCode",{parentName:"a"},"forwarder"))," - configures various forwarder settings (e.g. link latency probing, idle\nsessions, dial queues, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#healthChecks"},(0,a.kt)("inlineCode",{parentName:"a"},"healthChecks"))," - enables router health checks for controller connectivity"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#identity"},(0,a.kt)("inlineCode",{parentName:"a"},"identity"))," - configures the certificates used for outbound client connections, server\nlistening, and CA bundles"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#link"},(0,a.kt)("inlineCode",{parentName:"a"},"link"))," - the type of link listeners available for incoming router link and outgoing\nrouter link connections"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#listeners"},(0,a.kt)("inlineCode",{parentName:"a"},"listeners"))," - the interfaces, ports, and addresses exposed for connection by outside\nclients (e.g. edge SDK clients, non-edge connections)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#metrics"},(0,a.kt)("inlineCode",{parentName:"a"},"metrics"))," - configures metrics reporting"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#trace"},(0,a.kt)("inlineCode",{parentName:"a"},"trace"))," - adds a peek handler to all router messaging for debug purposes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#transport"},(0,a.kt)("inlineCode",{parentName:"a"},"transport"))," - enables transport level configuration that affects all instances of\nspecific transports"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#profile"},(0,a.kt)("inlineCode",{parentName:"a"},"profile"))," - enables profiling of router memory and CPU statistics"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#web"},(0,a.kt)("inlineCode",{parentName:"a"},"web"))," - configures API presentation exposure"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#v"},(0,a.kt)("inlineCode",{parentName:"a"},"v"))," - A special section to note the version of the configuration file, only ",(0,a.kt)("inlineCode",{parentName:"li"},"v: 3")," is\ncurrently supported")),(0,a.kt)("p",null,"The standard OpenZiti experience minimally requires the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctrl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"csr")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dialers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"link")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"listeners")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"v"))),(0,a.kt)("p",null,"Of those values, to start the controller only the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," sections are required.\nNot specifying the\n",(0,a.kt)("inlineCode",{parentName:"p"},"csr")," section will not allow the router to enroll or renew existing enrollments. Not including\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"dialer")," section will not allow the router to connect to terminate services. Not including\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"edge"),' section will start the controller in\n"fabric only" mode and will not support any edge functionality or concepts (edge SDK connectivity).\nNot including the\n',(0,a.kt)("inlineCode",{parentName:"p"},"link")," section will not allow the router to connect/dial or accept/host other routers for mesh\nestablishment. Not including the ",(0,a.kt)("inlineCode",{parentName:"p"},"listeners")," configuration will not allow external connections to\non-ramp connections over the mesh."),(0,a.kt)("p",null,"Example Minimum Router Configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'v: 3\n\nidentity:\n  cert: router.cert.pem\n  server_cert: router.server.cert.pem\n  key: router.key.pem\n  ca: ca-chain.cert.pem\n\nctrl:\n  endpoint: tls:127.0.0.1:6262\n\ncsr:\n  country: US\n  province: NC\n  locality: Charlotte\n  organization: OpenZiti\n  organizationalUnit: Ziti\n  sans:\n    dns:\n      - "localhost"\n    ip:\n      - "127.0.0.1"\n\ndialers:\n  - binding: udp\n  - binding: transport\n\nedge: {}\n\nlink:\n  listeners:\n    - binding: transport\n      bind: tls:127.0.0.1:6002\n      advertise: tls:127.0.0.1:6002\n  dialers:\n    - binding: transport\n\nlisteners:\n  - binding: edge\n    address: tls:0.0.0.0:3022\n  - binding: transport\n    address: tls:0.0.0.0:7099\n')),(0,a.kt)("h3",{id:"ctrl"},(0,a.kt)("inlineCode",{parentName:"h3"},"ctrl")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl")," section configures how the router will connect to the controller."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bind")," - (optional) the address of a local interface used to dial the controller address specified\nin ",(0,a.kt)("inlineCode",{parentName:"li"},"endpoint")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"endpoints")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultRequestTimeout")," - (optional, 5s) the amount of time use for controller connection\ntimeouts (\nsee ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#time-units"},"time units"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"endpoint")," - (optional) the address of the controller. Either ",(0,a.kt)("inlineCode",{parentName:"li"},"endpoint")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"endpoints")," is\nrequired. If both are provided, ",(0,a.kt)("inlineCode",{parentName:"li"},"endpoints")," will be ignored. Once the router is connected to a\ncontroller the set of endpoints will be kept up to date with current set of cluster members."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"endpoints")," - (optional) a list of controller addresses. Either ",(0,a.kt)("inlineCode",{parentName:"li"},"endpoint")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"endpoints")," is\nrequired. If both are provided, ",(0,a.kt)("inlineCode",{parentName:"li"},"endpoints")," will be ignored"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"heartbeats")," - (optional) set of options for configuring heartbeats to the controller(s).\nSee ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions/#heartbeats"},"heartbeats"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - a set of option which includes the below options and those defined\nin ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#channel"},"channel options"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"ctrl:\n  endpoint: tls:127.0.0.1:6262\n")),(0,a.kt)("h3",{id:"csr"},(0,a.kt)("inlineCode",{parentName:"h3"},"csr")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"csr")," section is used during router enrollment and enrollment extension. It specifies values\nthat will be used in the certificates that are the result of enrollment. This section is also\npresent as a subsection under the ",(0,a.kt)("inlineCode",{parentName:"p"},"edge"),"\nsection."),(0,a.kt)("p",null,"Many of the values in this section are optional, however to accept connections from SDKs or other\nrouters at least one valid SAN must be provided."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"country")," - (optional) the subject information country field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"province")," - (optional) the subject information province field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"locality")," - (optional)  the subject information locality field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"organization")," - (optional)  the subject information organization field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"organizationalUnit")," - (optional)  the subject information organization unit field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sans")," - (optional) - a subsection used to define Subject Alternate Names",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dns")," - (optional) - an array of DNS SAN entries"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ip")," - (optional) - an array of IP SAN entries"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri")," - (optional) - an array of URI SAN entries"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"email"),"  - (optional) - an array of email SAN entries")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'csr:\n  country: US\n  province: NC\n  locality: Charlotte\n  organization: OpenZiti\n  organizationalUnit: Ziti\n  sans:\n    dns:\n      - "localhost"\n      - "test-network"\n      - "test-network.localhost"\n      - "ziti-dev-ingress01"\n    email:\n      - "admin@example.com"\n    ip:\n      - "127.0.0.1"\n    uri:\n      - "ziti://ziti-dev-router01/made/up/example"\n')),(0,a.kt)("h3",{id:"dialers"},(0,a.kt)("inlineCode",{parentName:"h3"},"dialers")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"dialers")," sections defines the configuration for dialers that are used to dial (connect) to\nservices from routers. Various dialers are supported and referenced by ",(0,a.kt)("inlineCode",{parentName:"p"},"binding")," name. This section\nis an array of objects that configures individual dialers specified by the property ",(0,a.kt)("inlineCode",{parentName:"p"},"binding"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"dialers:\n  - binding: binding1\n    options:\n      mtu: 1000\n      #...options\n  - binding: binding2\n    options:\n    #...options\n  #...\n")),(0,a.kt)("p",null,"The following dialer bindings that are supported in the ",(0,a.kt)("inlineCode",{parentName:"p"},"binding")," field are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy")," - tbd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy_udp")," - tbd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transport")," - tbd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transport_udp")," - tbd")),(0,a.kt)("p",null,"Each dialer currently supports a number of ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions#xgress-options"},"shared options")),(0,a.kt)("h3",{id:"edge"},(0,a.kt)("inlineCode",{parentName:"h3"},"edge")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"edge")," section contains configuration that pertain to edge functionality. This section must be\npreset and empty to enable edge functionality (e.g. SDK connectivity). At present, the only value in\nthis section is a deprecated ",(0,a.kt)("inlineCode",{parentName:"p"},"csr"),"\nsection. It is suggested to use the root ",(0,a.kt)("inlineCode",{parentName:"p"},"csr"),' section instead as this allows the router to run in "\nfabric only" and\n"edge mode" seamlessly.'),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"edge: {}\n")),(0,a.kt)("h3",{id:"forwarder"},(0,a.kt)("inlineCode",{parentName:"h3"},"forwarder")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"forwarder")," section controls options that affect how a router forwards payloads across links to\nother routers within the mesh or egresses data to targeted services if the service is terminated by\na router."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"faultTxInterval")," - (optional, 15,000) an integer representing the milliseconds to wait between\nchecking for circuits that have faulted, 0=disabled"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"idleCircuitTimeout")," - (optional, 60,000) an integer representing the milliseconds to wait before\nmarking a circuit as idle and requesting a circuit confirmation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"idleTxInterval")," -  (optional, 60,000) an integer representing the milliseconds to wait between\nchecks for confirming idle circuits are in use, 0=disabled"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"linkDialQueueLength")," -  (optional, 1000) an integer between 1 and 10,000 that represents the\nmaximum number of queued outgoing router link dials"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"linkDialWorkerCount")," - (optional, 32) an integer between 1 and 10,000 that represents the maximum\nnumber of workers emptying the link dial queue"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rateLimitedQueueLength")," -  (optional, 5000) an integer between 1 and 50,000 that represents the\nmaximum number of rate limited operations to the controller. This currently includes terminator\ncreates"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rateLimitedWorkerCount")," - (optional, 5) an integer between 1 and 10,000 that represents the\nmaximum number of workers emptying the rate limited operations queue"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xgressCloseCheckInterval")," - (optional, 5,000) an integer representing the milliseconds to wait\nbefore un-routing a circuit for due to idleness"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xgressDialDwellTime")," - (optional, 0) an integer representing the milliseconds to wait before\ndialing a service for egress"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xgressDialQueueLength")," - (optional, 1000) an integer between 1 and 10,000 that represents the\nmaximum number of queued outgoing service dials"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xgressDialWorkerCount")," - (optional, 128) an integer between 1 and 10,000 that represents the\nmaximum number of workers emptying the xgress dial queue")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"forwarder:\n  latencyProbeInterval: 1000\n")),(0,a.kt)("h3",{id:"healthChecks"},(0,a.kt)("inlineCode",{parentName:"h3"},"healthChecks")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"healthChecks")," sections allows configuration of router health checks performed. Health check\nstatus is available by exposing the ",(0,a.kt)("inlineCode",{parentName:"p"},"health-checks")," API in the ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," section."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctrlPingCheck")," - (optional) - configures controller health check pings",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interval")," - (optional, 30s) - the frequency to ping the controller with connection checks"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," - (optional, 15s) - the length of time to wait before giving up on a controller\nhealth ping"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"initialDelay")," - (optional, 15s) - the length of time to wait before starting controller\nhealth check pings"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"linkCheck")," - (optional) - configures link checks. A router maybe expected to have a certain\nnumber of links. It may be desirable to alert if the number of links falls below the expected\nnumber",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interval")," - (optional, 5s) - how often to run the check"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"initialDelay")," - (optional, 1s) - how long to wait before running the check for the first time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minLinks")," - (optional, 0) - minimum number of links before failing the check. By default, no\nlinks are required and the check will just return information about the links that do exist")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"healthChecks:\n  ctrlPingCheck:\n    interval: 30s\n    timeout: 15s\n    initialDelay: 15s\n")),(0,a.kt)("h3",{id:"identity"},(0,a.kt)("inlineCode",{parentName:"h3"},"identity")),(0,a.kt)("p",null,"The identity section includes the default server certificate and private key used for services\nhosted by the router, alternate server certificates and keys to support SNI on hosted services,\nclient certificate and private key when making connections, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ca")," bundle that the controller\nwill use when making connections to controllers and routers. See the conventions that apply to\nall ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions#identity"},"identity")," sections for field level detail."),(0,a.kt)("h3",{id:"link"},(0,a.kt)("inlineCode",{parentName:"h3"},"link")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," section configures which protocols and ports are used to listen for incoming router mesh\nlinks via the ",(0,a.kt)("inlineCode",{parentName:"p"},"listeners")," subsection and which protocols are used to dial other routers via the\n",(0,a.kt)("inlineCode",{parentName:"p"},"dialers")," subsection. Dialers and listeners use ",(0,a.kt)("inlineCode",{parentName:"p"},"binding")," names which can be further configured in\nthe ",(0,a.kt)("a",{parentName:"p",href:"#transport"},(0,a.kt)("inlineCode",{parentName:"a"},"transport")," section"),". For both"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"listeners")," (optional) - configures if and how this router should listen for connections from\nother routers to form the data plane mesh",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"binding")," - (required) - specifies which subsystem should instantiate this listener. Currently\nonly ",(0,a.kt)("inlineCode",{parentName:"li"},"transport")," is supported"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bind")," - (required) the ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#addressing"},"address")," that the listener should listen\non"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"advertise")," - (required) the ",(0,a.kt)("inlineCode",{parentName:"li"},"<host>:<port>")," combination that external resources should use to\nreach this listener The ",(0,a.kt)("inlineCode",{parentName:"li"},"listeners")," subsection supports the same settings and option as in\nthe ",(0,a.kt)("a",{parentName:"li",href:"#listeners"},(0,a.kt)("inlineCode",{parentName:"a"},"listeners")," section"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"groups")," - (optional, ","[",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"]",") - Both dialers and listeners can now specify a set of\ngroups. If no groups are specified, the dialer or listener will be placed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"\ngroup. Dialers will only attempt to dial listeners who have at least one group in common with\nthem."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - (optional) options specified by the component specifically in addition to\nthe ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#xgress-options"},"shared options")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dialers")," (optional) - configures if and how this router should try to make connections to other\nrouters to form the data plane mesh",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"split")," - (optional, true) - indicates if a single connection should be made for all data, or\nif separate connections should be made, one for payloads and the other for acknowledgments"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"binding")," - (required) - specifies which subsystem should instantiate this listener. Currently\nonly ",(0,a.kt)("inlineCode",{parentName:"li"},"transport")," is supported"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bind")," - (optional) the network interface, or local IP address to use for routing outbound\ndata"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"groups")," - (optional, ","[",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"]",") - Both dialers and listeners can now specify a set of\ngroups. If no groups are specified, the dialer or listener will be placed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"\ngroup. Dialers will only attempt to dial listeners who have at least one group in common with\nthem."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - (optional) options specified by the component specifically in addition to\nthe ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#xgress-options"},"shared options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"healthyDialBackoff")," - (optional) - configures how the dialer will retry dialing link\nconnections when a dial fails. This backoff policy is used when the router being dialed is\nconnected to the controller, and is thus expected to be available",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minRetryInterval")," - (optional, default 5s, min 10ms, max 24h) - duration specifying the\nminimum time between dial attempts"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxRetryInterval")," - (optional, default 5m, min 10ms, max 24h) - duration specifying the\nmaximum time between dial attempts"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"retryBackoffFactor")," - (optional, default 1.5, min 1, max 100) - factor by which to\nincrease the retry interval between failed dial attempts"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unhealthyDialBackoff")," - (optional) - configures how the dialer will retry dialing link\nconnections when a dial fails. This backoff policy is used when the router being dialed is\n",(0,a.kt)("strong",{parentName:"li"},"not")," connected to the controller, and is thus expected to be available. Note that when a\nrouter connects to a controller, other routers are notified and will both immediately try to\nconnect to the router, if they are not already, and will switch to the\n",(0,a.kt)("inlineCode",{parentName:"li"},"healthyDialBackoff")," policy",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minRetryInterval")," - (optional, default 1m, min 10ms, max 24h) - duration specifying the\nminimum time between dial attempts"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxRetryInterval")," - (optional, default 1h, min 10ms, max 24h) - duration specifying the\nmaximum time between dial attempts"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"retryBackoffFactor")," - (optional, default 10, min 1, max 100) - factor by which to\nincrease the retry interval between failed dial attempts")))))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"link:\n  dialers:\n    - binding: transport\n  listeners:\n    - binding: transport\n      bind: tls:127.0.0.1:6004\n      advertise: tls:127.0.0.1:6004\n")),(0,a.kt)("h3",{id:"listeners"},(0,a.kt)("inlineCode",{parentName:"h3"},"listeners")),(0,a.kt)("p",null,'Listeners configure different types of server logic and protocols to be "listened" for on the\nrouter. This includes opening ports on one or more interfaces specified in the ',(0,a.kt)("inlineCode",{parentName:"p"},"address")," option.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," field is formatted according to\nthe ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions#addressing"},"address conventions"),". The advertise field specifies the address a\nclient will use to connect to the listener."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"binding")," - (required) the name of a ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#xgress-components"},"xgress component")," that\nwill provide the server side logic for the listener"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bind")," - (required) the ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#addressing"},"address")," that the listener should listen on"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"advertise")," (required) the ",(0,a.kt)("inlineCode",{parentName:"li"},"<host>:<port>")," combination that external resources should use to reach\nthis listener"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - (optional) options specified by the component specifically in addition to\nthe ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#xgress-options"},"shared options"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"listeners:\n  - binding: edge\n    address: tls:0.0.0.0:3022\n    options:\n      advertise: 127.0.0.1:3022\n")),(0,a.kt)("h4",{id:"tunnel-listeners"},"tunnel ",(0,a.kt)("inlineCode",{parentName:"h4"},"listeners")),(0,a.kt)("p",null,"A tunnel is a special kind of listener binding."),(0,a.kt)("p",null,"When generating a router configuration with ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti create config router edge")," the tunnel binding is\nenabled with default mode ",(0,a.kt)("inlineCode",{parentName:"p"},"host"),". This mode continually configures the router's tunnel to reverse\nproxy the list of services that are authorized by Bind Service Policy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"listeners:\n  - binding: tunnel\n    options:\n      mode: host\n")),(0,a.kt)("p",null,"If tunnel is enabled at the time the router is created then its configuration may be changed and\nwill take effect when the router is restarted. For example, this configures the router's tunnel to\ntransparently proxy all services authorized by Dial Service Policy and provide a nameserver. This\nmode also enables the reverse proxy features of ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," mode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"listeners:\n  - binding: tunnel\n    options:\n      mode: tproxy\n      resolver: udp://127.0.0.1:53\n      dnsSvcIpRange: 100.80.0.0/12  # optionally customize the dynamic IP range used by Ziti DNS\n")),(0,a.kt)("p",null,"In this example the router's tunnel is configured to provide a forward proxy listener for a list of\nservice, TCP port pairs. This mode also enables the reverse proxy features of ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," mode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"listeners:\n  - binding: tunnel\n    options:\n      mode: proxy\n      services:\n        - zedsDemoHttpHttpbin:8080\n")),(0,a.kt)("h3",{id:"metrics"},(0,a.kt)("inlineCode",{parentName:"h3"},"metrics")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics")," section controls how metrics are communicated to the connection controller."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reportInterval")," - (optional, 1m) the interval of time to wait between crafting a new metrics\nmessage to be sent to the controller"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messageQueueSize")," - (optional, 10) the maximum number of buffered metrics messages allowed to be\nqueued to send to the controller"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"intervalAgeThreshold")," - (optional, 80s) how old a batch of metrics must be before it's eligible\nto be sent to the controller")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"metrics:\n  reportInterval: 1m\n  messageQueueSize: 10\n")),(0,a.kt)("h3",{id:"trace"},(0,a.kt)("inlineCode",{parentName:"h3"},"trace")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"trace")," section instructs the router to output incoming and outgoing messaging it receives. This\nsetting is useful for debugging purposes only and should not be enabled in production environments\nwithout careful consideration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," - (required) the file to output decoded messages to")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"trace:\n  path: /var/opt/open.ziti.router.trace\n")),(0,a.kt)("h3",{id:"transport"},(0,a.kt)("inlineCode",{parentName:"h3"},"transport")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"transport")," section is for advanced configuration of underlay protocols. It currently only\napplies to an internally tuned TCP protocol named Transwarp and is tuned using ",(0,a.kt)("inlineCode",{parentName:"p"},"westworld3"),"\nconfiguration options. This section should largely be unnecessary outside of development."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"transport:\n  westworld3:\n    profile_version: 1\n    tx_portal_min_sz: 16384\n    tx_portal_max_sz: 1073741824\n    instrument:\n      name: metrics\n      path: /tmp/westworld3\n      snapshot_ms: 250\n      enabled: true\n")),(0,a.kt)("h3",{id:"profile"},(0,a.kt)("inlineCode",{parentName:"h3"},"profile")),(0,a.kt)("p",null,"The profile section allows for ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev/blog/pprof"},"CPU (pprof) and memory (memprof)")," dumps\nto be created. CPU profiling is buffered by the application's runtime and output to the designated\nfile. Memory profiling allows the interval memory profiling occurs at and is output. These settings\nare useful for debugging purposes only and should not be enabled in production environments without\ncareful consideration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cpu")," - (optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," - (required) the path to output the pprof data"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"memory")," - (optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," - (required) the path to output the memprof data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"intervalMs")," (optional) the frequency to output memprof data (default 15s)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"profile:\n  cpu:\n    path: /home/user1/tmp/ctrl.cpu.pprof\n  memory:\n    path: ctrl.memprof\n    intervalMs: 150000\n")),(0,a.kt)("h3",{id:"web"},(0,a.kt)("inlineCode",{parentName:"h3"},"web")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," section follows the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions#xweb"},"conventions of XWeb"),". The controller has the\nfollowing APIs defined:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"health-checks")," - provides a health check API that allows remote parties to verify the health of\nthe controller")),(0,a.kt)("p",null,"Each API may have their own options, but currently do not."),(0,a.kt)("h3",{id:"v"},(0,a.kt)("inlineCode",{parentName:"h3"},"v")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"v"),' section is used to detect if the version file is supported by the OpenZiti binary read it.\nThe current and only supported value is "3".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"v: 3\n")))}u.isMDXComponent=!0}}]);