"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[1690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Kubernetes Service"},l=void 0,a={unversionedId:"learn/quickstarts/services/kubernetes-service",id:"learn/quickstarts/services/kubernetes-service",title:"Kubernetes Service",description:"This is a quick example for tunneling to a Kubernetes workload with OpenZiti that builds on the local Kubernetes quickstart. There are two deployments for you to deploy in the same namespace:",source:"@site/docs/learn/quickstarts/services/kubernetes-service.md",sourceDirName:"learn/quickstarts/services",slug:"/learn/quickstarts/services/kubernetes-service",permalink:"/docs/learn/quickstarts/services/kubernetes-service",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/quickstarts/services/kubernetes-service.md",tags:[],version:"current",frontMatter:{title:"Kubernetes Service"},sidebar:"docsSidebar",previous:{title:"Starting With Services",permalink:"/docs/learn/quickstarts/services/"},next:{title:"Your First Service",permalink:"/docs/learn/quickstarts/services/ztha"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a quick example for tunneling to a Kubernetes workload with OpenZiti that builds on ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/local-kubernetes"},"the local Kubernetes quickstart"),". There are two deployments for you to deploy in the same namespace:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a demo workload service ",(0,i.kt)("inlineCode",{parentName:"li"},"hello-toy")),(0,i.kt)("li",{parentName:"ul"},"an OpenZiti reverse proxy pod ",(0,i.kt)("inlineCode",{parentName:"li"},"ziti-host"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create OpenZiti configs, service, and policies for the Hello demo deployment."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ziti edge create identity device "hello-host" \\\n    --jwt-output-file /tmp/hello-host.jwt --role-attributes hello-hosts\n\nziti edge enroll /tmp/hello-host.jwt\n\nziti edge create config "hello-intercept-config" intercept.v1 \\\n    \'{"protocols":["tcp"],"addresses":["minihello.ziti"], "portRanges":[{"low":80, "high":80}]}\'\n\nziti edge create config "hello-host-config" host.v1 \\\n    \'{"protocol":"tcp", "address":"minihello.hello-toy.svc","port":80}\'\n\nziti edge create service "hello-service" \\\n    --configs hello-intercept-config,hello-host-config\n\nziti edge create service-policy "hello-bind-policy" Bind \\\n    --service-roles \'@hello-service\' --identity-roles \'#hello-hosts\'\n\nziti edge create service-policy "hello-dial-policy" Dial \\\n    --service-roles \'@hello-service\' --identity-roles \'#hello-clients\'\n\n# adds a role to "miniziti-client" from the local Kubernetes quickstart        \nziti edge update identity "miniziti-client" \\\n    --role-attributes testapi-clients,hello-clients\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy Hello Toy."),(0,i.kt)("p",{parentName:"li"},"This chart is a regular, non-OpenZiti demo server deployment. Next we'll connect it to our OpenZiti Network with an OpenZiti Tunneler deployment."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'helm install "hello-toy" openziti/hello-toy \\\n    --namespace hello-toy --create-namespace \\\n    --set serviceDomainName=minihello\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy an OpenZiti Tunneler Pod."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'helm install "ziti-host" openziti/ziti-host \\\n    --namespace hello-toy \\\n    --set-file zitiIdentity=/tmp/hello-host.json\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait for deployment."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl wait deployments "ziti-host" \\\n    --namespace hello-toy \\\n    --for condition=Available=True \\\n    --timeout=90s\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit the Hello Demo page in your browser: ",(0,i.kt)("a",{parentName:"p",href:"http://minihello.ziti/"},"http://minihello.ziti/")),(0,i.kt)("p",{parentName:"li"},"Now you have two OpenZiti Services available to your OpenZiti Tunneler:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"hello-service"),(0,i.kt)("li",{parentName:"ul"},"testapi-service")))))}u.isMDXComponent=!0}}]);