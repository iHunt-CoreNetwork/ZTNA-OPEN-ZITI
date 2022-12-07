"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6950],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>y});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(i),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return i?n.createElement(y,o(o({ref:t},p),{},{components:i})):n.createElement(y,o({ref:t},p))}));function y(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},85162:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(67294),r=i(86010);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:i,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:i},t)}},65488:(e,t,i)=>{i.d(t,{Z:()=>m});var n=i(87462),r=i(67294),a=i(86010),o=i(72389),l=i(67392),c=i(7094),s=i(12466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:i,defaultValue:o,values:d,groupId:m,className:y}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:t,label:i,attributes:n}}=e;return{value:t,label:i,attributes:n}})),f=(0,l.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:g}=(0,c.U)(),[N,w]=(0,r.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,i=C.indexOf(t),n=v[i].value;n!==N&&(O(t),w(n),null!=m&&g(m,String(n)))},P=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const i=C.indexOf(e.currentTarget)+1;t=C[i]??C[0];break}case"ArrowLeft":{const i=C.indexOf(e.currentTarget)-1;t=C[i]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},y)},v.map((e=>{let{value:t,label:i,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:P,onClick:T},o,{className:(0,a.Z)("tabs__item",u,o?.className,{"tabs__item--active":N===t})}),i??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},36435:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>h});var n=i(87462),r=(i(67294),i(3905)),a=i(65488),o=i(85162);const l={toc:[]};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'On the left side nav bar, click "Ziti Policies"'),(0,r.kt)("li",{parentName:"ol"},'On the top nav bar, click "Service Policies"'),(0,r.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new Service Policy'),(0,r.kt)("li",{parentName:"ol"},'Choose a name for the Service Policy, such as "My Service Policy"'),(0,r.kt)("li",{parentName:"ol"},'Select "Dial" or "Bind" in the Type dropdown',(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Dial policies allow identities to use or connect to the service"),(0,r.kt)("li",{parentName:"ol"},"Bind policies allow identities to host or provide the service"))),(0,r.kt)("li",{parentName:"ol"},"Enter the services you want to include in the policy",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Specific services can be referenced by ID or name using ",(0,r.kt)("inlineCode",{parentName:"li"},"@"),".  For example, a service called ",(0,r.kt)("inlineCode",{parentName:"li"},"ssh")," can be referenced using ",(0,r.kt)("inlineCode",{parentName:"li"},"@ssh"),". "),(0,r.kt)("li",{parentName:"ol"},"Services can be referenced by role attribute using ",(0,r.kt)("inlineCode",{parentName:"li"},"#"),". For example, any service which has the ",(0,r.kt)("inlineCode",{parentName:"li"},"sales")," role attribute will be included if ",(0,r.kt)("inlineCode",{parentName:"li"},"#sales")," is included in the service roles list."))),(0,r.kt)("li",{parentName:"ol"},"Enter the identities you want to include in the policy",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Specific identities can be referenced by ID or name using ",(0,r.kt)("inlineCode",{parentName:"li"},"@"),".  For example, as identity called ",(0,r.kt)("inlineCode",{parentName:"li"},"jsmith-desktop")," can be referenced using ",(0,r.kt)("inlineCode",{parentName:"li"},"@jsmith-desktop"),". "),(0,r.kt)("li",{parentName:"ol"},"Identities can be referenced by role attribute using ",(0,r.kt)("inlineCode",{parentName:"li"},"#"),". For example, any identity which has the ",(0,r.kt)("inlineCode",{parentName:"li"},"sales")," role attribute will be included if ",(0,r.kt)("inlineCode",{parentName:"li"},"#sales")," is included in the identities roles list."))),(0,r.kt)("li",{parentName:"ol"},"Specify the role semantic",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If you select ",(0,r.kt)("inlineCode",{parentName:"li"},"Has Any Role")," then if you specify multiple roles then all entities which include ",(0,r.kt)("strong",{parentName:"li"},"any")," of the roles will be included."),(0,r.kt)("li",{parentName:"ol"},"If you select ",(0,r.kt)("inlineCode",{parentName:"li"},"Must Have All Roles"),", then if you specify multiple roles then only entities which include ",(0,r.kt)("strong",{parentName:"li"},"all")," of the given roles will be included    "))),(0,r.kt)("li",{parentName:"ol"},"Click save")))}c.isMDXComponent=!0;const s={toc:[]};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To create a Service Policy using the CLI issue the following commands. (ensure you are ",(0,r.kt)("a",{parentName:"p",href:"/docs/manage/cli/logging-in"},"logged in"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Create a service policy named 'my-policy' which allows all identities to dial/connect to all services \nziti edge create service-policy my-policy Dial --identity-roles '#all' --service-roles '#all'\n")))}p.isMDXComponent=!0;const u={},d="Creating a Service Policy",m={unversionedId:"core-concepts/security/authorization/policies/creating-service-policies",id:"core-concepts/security/authorization/policies/creating-service-policies",title:"Creating a Service Policy",description:"",source:"@site/docs/core-concepts/security/authorization/policies/creating-service-policies.mdx",sourceDirName:"core-concepts/security/authorization/policies",slug:"/core-concepts/security/authorization/policies/creating-service-policies",permalink:"/docs/core-concepts/security/authorization/policies/creating-service-policies",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/security/authorization/policies/creating-service-policies.mdx",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"Creating a Service Edge Router Policy",permalink:"/docs/core-concepts/security/authorization/policies/creating-service-edge-router-policies"},next:{title:"Posture Checks",permalink:"/docs/core-concepts/security/authorization/posture-checks"}},y={},h=[],v={toc:h};function f(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-service-policy"},"Creating a Service Policy"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"New Service Policy via UI",value:"tabid-new-service-policy-ui",mdxType:"TabItem"},(0,r.kt)(c,{mdxType:"CreateServicePolicyUIMd"})),(0,r.kt)(o.Z,{label:"New Service Policy via CLI",value:"tabid-new-service-policy-cli",mdxType:"TabItem"},(0,r.kt)(p,{mdxType:"CreateServicePolicyCLIMd"}))))}f.isMDXComponent=!0}}]);