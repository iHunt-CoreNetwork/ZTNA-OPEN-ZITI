"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2274],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=k({queryString:a,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var h=a(72389);const N="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==i&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",f,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",N)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},20847:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={sidebar_position:20,sidebar_label:"Controller",title:"Controller Config"},s="1.0 Configure the controller",u={unversionedId:"guides/Public_Cloud_Deployment/Controller",id:"guides/Public_Cloud_Deployment/Controller",title:"Controller Config",description:"1.1 Create a VM to be used as the Controller",source:"@site/docs/guides/Public_Cloud_Deployment/Controller.md",sourceDirName:"guides/Public_Cloud_Deployment",slug:"/guides/Public_Cloud_Deployment/Controller",permalink:"/docs/guides/Public_Cloud_Deployment/Controller",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/Public_Cloud_Deployment/Controller.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Controller",title:"Controller Config"},sidebar:"docsSidebar",previous:{title:"Intro",permalink:"/docs/guides/Public_Cloud_Deployment/"},next:{title:"Router",permalink:"/docs/guides/Public_Cloud_Deployment/Router"}},p={},c=[{value:"1.1 Create a VM to be used as the Controller",id:"11-create-a-vm-to-be-used-as-the-controller",level:2},{value:"1.2 Firewall",id:"12-firewall",level:2},{value:"1.3 Login and Setup Controller",id:"13-login-and-setup-controller",level:2},{value:"1.4 Setup Ziti Administration Console (ZAC)",id:"14-setup-ziti-administration-console-zac",level:2},{value:"1.5 Helpers",id:"15-helpers",level:2},{value:"1.5.1 Add Environment Variables Back to the Shell",id:"151-add-environment-variables-back-to-the-shell",level:3},{value:"1.5.2 Change Ziti edge admin password",id:"152-change-ziti-edge-admin-password",level:3},{value:"1.5.3 Some useful command for the Router",id:"153-some-useful-command-for-the-router",level:3}],m={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"10-configure-the-controller"},"1.0 Configure the controller"),(0,n.kt)("h2",{id:"11-create-a-vm-to-be-used-as-the-controller"},"1.1 Create a VM to be used as the Controller"),(0,n.kt)(l.Z,{defaultValue:"Azure",values:[{label:"Azure",value:"Azure"},{label:"AWS",value:"AWS"},{label:"Google Cloud",value:"GCP"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Azure",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It is easier to use ",(0,n.kt)("strong",{parentName:"li"},"resource group")," to organize and manage all your resources for this demo."),(0,n.kt)("li",{parentName:"ul"},"Create a ",(0,n.kt)("strong",{parentName:"li"},"resource group")," and change into that resource group."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("strong",{parentName:"li"},"+ Create")," button to create a resource."),(0,n.kt)("li",{parentName:"ul"},"Azure will take you to the ",(0,n.kt)("strong",{parentName:"li"},"Marketplace")," screen. In the search bar, type in ",(0,n.kt)("strong",{parentName:"li"},"Ubuntu Server"),"."),(0,n.kt)("li",{parentName:"ul"},'Choose "',(0,n.kt)("strong",{parentName:"li"},"Ubuntu Server 22.04 LTS"),'".')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagram",src:a(90680).Z,width:"1091",height:"585"})),(0,n.kt)("p",null,"On the ",(0,n.kt)("strong",{parentName:"p"},"Create a virtual machine")," screen."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Subscription")," and ",(0,n.kt)("strong",{parentName:"li"},"Resource group")," should already be filled. "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Instance details")," section, enter the ",(0,n.kt)("strong",{parentName:"li"},"VM name"),"."),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Region")," to host your VM."),(0,n.kt)("li",{parentName:"ul"},"Leave default ",(0,n.kt)("strong",{parentName:"li"},"Availability options")," and ",(0,n.kt)("strong",{parentName:"li"},"Security type"),"(Standard)."),(0,n.kt)("li",{parentName:"ul"},"Leave the selected image ",(0,n.kt)("strong",{parentName:"li"},"Ubuntu Server 22.04 LTS x64 Gen2"),"."),(0,n.kt)("li",{parentName:"ul"},"For the Size, choose the appropriate size for your application.  For this demo, ",(0,n.kt)("strong",{parentName:"li"},"Standard_B2s(2CPU,4 GB)")," size was used.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagram",src:a(69346).Z,width:"895",height:"572"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Next, choose ",(0,n.kt)("strong",{parentName:"p"},"Authentication type")," to login to the VM. (We highly ",(0,n.kt)("strong",{parentName:"p"},"discourage")," login to the VM using Password). ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enter an username (",(0,n.kt)("strong",{parentName:"p"},"remember the username, you will need it to login to the VM"),"), or leave the default user ",(0,n.kt)("strong",{parentName:"p"},"azureuser"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose your ssh key")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"inbound ports"),", select the ssh. You can add extra port based on your OpenZiti setup. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can leave everything default.\nPress ",(0,n.kt)("strong",{parentName:"p"},"Review + create"),"\n",(0,n.kt)("img",{alt:"Diagram",src:a(25260).Z,width:"862",height:"538"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After the Validation passed. Press ",(0,n.kt)("strong",{parentName:"p"},"Create")," to create VM.\n",(0,n.kt)("img",{alt:"Diagram",src:a(77047).Z,width:"851",height:"569"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Important:")," If you are creating the network controller, you need to associate an DNS name to the public IP of your VM.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'You can do this from "Virtual machine" page.\n',(0,n.kt)("img",{alt:"Diagram",src:a(80561).Z,width:"1312",height:"357"}))))),(0,n.kt)(o.Z,{value:"AWS",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"login to the ",(0,n.kt)("strong",{parentName:"li"},"AWS console"),". "),(0,n.kt)("li",{parentName:"ul"},"go to the ",(0,n.kt)("strong",{parentName:"li"},"EC2 dashboard"),". "),(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Instances"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Launch the instances"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagram",src:a(76484).Z,width:"1299",height:"201"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fill the ",(0,n.kt)("strong",{parentName:"p"},"Name")," of your instance.\n",(0,n.kt)("img",{alt:"Diagram",src:a(97431).Z,width:"1007",height:"474"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On the Quick start select ",(0,n.kt)("strong",{parentName:"p"},"Ubuntu"),". ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Ubuntu Server 22.04 LTS"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Leave the Architecture as ",(0,n.kt)("strong",{parentName:"p"},"64-bit (x86)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the instance type ",(0,n.kt)("strong",{parentName:"p"},"t2.medium")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagram",src:a(25493).Z,width:"826",height:"575"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Key pair (login.)")," section, choose the key name which you already created."),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Network settings")," section, choose the VPC for your VM."),(0,n.kt)("li",{parentName:"ul"},"Select the subnet."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Enable")," for ",(0,n.kt)("strong",{parentName:"li"},"Auto assign public IP"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagram",src:a(37653).Z,width:"1063",height:"582"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("strong",{parentName:"li"}," Create security group")," to allow traffic into your VM."),(0,n.kt)("li",{parentName:"ul"},"Name the security group."),(0,n.kt)("li",{parentName:"ul"},"Create the Firewall rule based on controller and ER. "),(0,n.kt)("li",{parentName:"ul"},"For controller. allow the TCP port 8440-8443 (default ports from quickstart) along with SSH. "),(0,n.kt)("li",{parentName:"ul"},"For ER we have to allow TCP port 80, 443 and SSH,")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SG For the controller."),"\n",(0,n.kt)("img",{alt:"Diagram",src:a(64151).Z,width:"1090",height:"981"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SG for the ER"),"\n",(0,n.kt)("img",{alt:"Diagram",src:a(73373).Z,width:"1194",height:"965"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Configure storage")," section, choose at least ",(0,n.kt)("strong",{parentName:"li"},"20")," GiB storage space.")),(0,n.kt)("p",null,"Now click on ",(0,n.kt)("strong",{parentName:"p"},"Launch instance"))),(0,n.kt)(o.Z,{value:"GCP",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Login to the GCP console. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"COMPUTE ENGINE")," dashboard. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"CREATE INSTANCE"),".\n",(0,n.kt)("img",{alt:"Diagram",src:a(3963).Z,width:"1287",height:"282"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Configure the VM as follow:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Name")," of the VM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Region")," and ",(0,n.kt)("strong",{parentName:"p"},"Zone"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("strong",{parentName:"p"},"e2-medium")," for ",(0,n.kt)("strong",{parentName:"p"},"Machine type"),"\n",(0,n.kt)("img",{alt:"Diagram",src:a(83263).Z,width:"680",height:"585"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hit ",(0,n.kt)("strong",{parentName:"p"},"CHANGE"),' at the "Boot disk** section to change the OS image.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'On the "Boot disk" page, Choose ',(0,n.kt)("strong",{parentName:"p"},"PUBLIC IMAGES"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("strong",{parentName:"p"},"Ubuntu")," as the Operating system")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Ubuntu 22.04 LTS, x86")," Version. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hit ",(0,n.kt)("strong",{parentName:"p"},"SELECT")," to complete the selection.\n",(0,n.kt)("img",{alt:"Diagram",src:a(47682).Z,width:"785",height:"617"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Advanced Options"),", and then open ",(0,n.kt)("strong",{parentName:"p"},"Networking"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Highly recommended:")," assign a Network tags.  This will help you configuring the firewalls later.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"For local GW VM"),", ",(0,n.kt)("strong",{parentName:"p"},"Enable")," IP forwarding at this time. You will not be able to change this setting from the console after the VM is created.\n",(0,n.kt)("img",{alt:"Diagram",src:a(51410).Z,width:"558",height:"302"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional")," you can reserve static external IP ADDRESS under ",(0,n.kt)("strong",{parentName:"p"},"Networking/Network interfaces")," section. Reserving static IP is useful for the Network controller in case you have to shut down the VM.\n",(0,n.kt)("img",{alt:"Diagram",src:a(79936).Z,width:"607",height:"679"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Now click on ",(0,n.kt)("strong",{parentName:"p"},"CREATE")," to create the virtual machine."))))),(0,n.kt)("h2",{id:"12-firewall"},"1.2 Firewall"),(0,n.kt)(l.Z,{defaultValue:"Azure",values:[{label:"Azure",value:"Azure"},{label:"AWS",value:"AWS"},{label:"Google Cloud",value:"GCP"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Azure",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure's firewall is blocking all incoming access to the VM. You will need to open ports you specified for controller and ZAC (if you plan to use ZAC). Here is a example of the firewall ports if you used the default ports (TCP 8440-8443).\n",(0,n.kt)("img",{alt:"Diagram",src:a(89880).Z,width:"1309",height:"463"})))),(0,n.kt)(o.Z,{value:"AWS",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The steps in the create VM section already specified the ports need to be opened on the AWS firewall."),(0,n.kt)("li",{parentName:"ul"},"You can double check if the required ports are open. Here is a example of the firewall ports if you used the default ports(TCP 8440-8443).\n",(0,n.kt)("img",{alt:"Diagram",src:a(64151).Z,width:"1090",height:"981"})))),(0,n.kt)(o.Z,{value:"GCP",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"GCP\u2019s default firewall is blocking all incoming access to the VM. You will need to open ports you specified for controller and ZAC (if you plan to use ZAC). Here is a example of the firewall ports if you used the default ports.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to your VM screen, click on the ",(0,n.kt)("strong",{parentName:"p"},"Network interfaces")," name (i.e. nic0)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Firewall")," menu on the left side to bring up the firewall screen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On the firewall screen, click on ",(0,n.kt)("strong",{parentName:"p"},"+ CREATE FIREWALL RULE")," to create new rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Give a meaningful ",(0,n.kt)("strong",{parentName:"p"},"name")," to your firewall rule")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose your ",(0,n.kt)("strong",{parentName:"p"},"Network"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Leave Direction of traffic as ",(0,n.kt)("strong",{parentName:"p"},"Ingress"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Action ",(0,n.kt)("strong",{parentName:"p"},"Allow"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Targets, you can use "All instances in the network" (if you did not specify "Network tags" for your VM). In this example, we are using ',(0,n.kt)("strong",{parentName:"p"},"Specified target tags")," option.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enter ",(0,n.kt)("strong",{parentName:"p"},"Target tags")," for your VM. In this example, our tag is ",(0,n.kt)("strong",{parentName:"p"},"nc"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enter Source IPv4 ranges: ",(0,n.kt)("strong",{parentName:"p"},"0.0.0.0/0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the controller we have to allow the ",(0,n.kt)("strong",{parentName:"p"},"TCP")," port ",(0,n.kt)("strong",{parentName:"p"},"8440-8443")," along with SSH port (",(0,n.kt)("strong",{parentName:"p"},"22"),").\nHit ",(0,n.kt)("strong",{parentName:"p"},"CREAETE")," to create rules.\n",(0,n.kt)("img",{alt:"Diagram",src:a(33293).Z,width:"564",height:"971"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'The firewall rule also shows up on your "Network interface details" screen.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"From your VM screen, click on the ",(0,n.kt)("strong",{parentName:"p"},"Network interfaces")," name (i.e. nic0)\n",(0,n.kt)("img",{alt:"Diagram",src:a(1931).Z,width:"1194",height:"599"})))))),(0,n.kt)("h2",{id:"13-login-and-setup-controller"},"1.3 Login and Setup Controller"),(0,n.kt)(l.Z,{defaultValue:"Azure",values:[{label:"Azure",value:"Azure"},{label:"AWS",value:"AWS"},{label:"Google Cloud",value:"GCP"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Azure",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Once the VM is created, we can get the IP address (and the DNS name) of the VM from the Virtual machine screen."),(0,n.kt)("li",{parentName:"ul"},'Login to the VM by using defined user "username" (default username is azureuser) and the private sshkey:')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i <private_key> <username>@<ip>\nor\nssh -i <private_key> <username>@<dns-name>\n")),(0,n.kt)("p",null,"Use the DNS name to setup the controller with ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/hosted/"},"Host OpenZiti Anywhere"),". ")),(0,n.kt)(o.Z,{value:"AWS",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Once the VM is created, we can get the IP address (and the DNS name) of the VM from the Instance detail screen."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NOTE:")," DNS name is only available if you enabled ",(0,n.kt)("strong",{parentName:"li"},"DNS Hostnames")," under VPC."),(0,n.kt)("li",{parentName:"ul"},'Login to the VM by using user name "ubuntu":')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i <private_key> ubuntu@<ip>\nor\nssh -i <private_key> ubuntu@<dns-name>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"export the DNS record ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'export EXTERNAL_DNS=$(dig +short -x $(curl -s icanhazip.com) | sed "s/.$//")\n')),(0,n.kt)("p",null,"Then follow the ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/hosted/#express-install"},"Host OpenZiti Anywhere")," guide to setup the controller.")),(0,n.kt)(o.Z,{value:"GCP",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Once the VM is created, we can login through ",(0,n.kt)("strong",{parentName:"p"},"SSH")," button on the VM instances screen.\n",(0,n.kt)("img",{alt:"Diagram",src:a(30220).Z,width:"951",height:"227"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"export the DNS record "))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'export EXTERNAL_DNS=$(dig +short -x $(curl -s icanhazip.com) | sed "s/.$//")\n')),(0,n.kt)("p",null,"Then follow the ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/hosted/#express-install"},"Host OpenZiti Anywhere")," guide to setup the controller."))),(0,n.kt)("h2",{id:"14-setup-ziti-administration-console-zac"},"1.4 Setup Ziti Administration Console (ZAC)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Optional")),(0,n.kt)("p",null,"ZAC provides GUI for managing the OpenZiti network. If you prefer UI over CLI to manage network, please following the ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/zac/"},"ZAC Setup Guide")," to setup ZAC before going to the next section."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Quickfix:")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"To setup npm executables, you can follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04"},"install Node.js guide"),"."),(0,n.kt)("p",null,"For example, this is how to install the version of node needed for ZAC."),(0,n.kt)("p",null,"Setup the repo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~\ncurl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh\nsudo bash nodesource_setup.sh\n")),(0,n.kt)("p",null,"Install nodejs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install nodejs\n")),(0,n.kt)("p",null,"After the nodejs is installed, following the rest of ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/zac/#cloning-from-github"},"ZAC Setup Guide")," to setup ZAC."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"15-helpers"},"1.5 Helpers"),(0,n.kt)("p",null,"Following helpers are needed to complete the guides for router and services."),(0,n.kt)("h3",{id:"151-add-environment-variables-back-to-the-shell"},"1.5.1 Add Environment Variables Back to the Shell"),(0,n.kt)("p",null,"Source the environment variables when you log back in the shell"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.ziti/quickstart/$(hostname -s)/$(hostname -s).env\n")),(0,n.kt)("p",null,"If the environment variables are sourced correctly, you can do the following to check:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"echo $ZITI_HOME\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Output:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/root/.ziti/quickstart/OMSINER\n")),(0,n.kt)("h3",{id:"152-change-ziti-edge-admin-password"},"1.5.2 Change Ziti edge admin password"),(0,n.kt)("p",null,"Find the Current admin edge login password of controller (if you forget the password):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'grep "export ZITI_PWD" ~/.ziti/quickstart/$(hostname -s)/$(hostname -s).env\n')),(0,n.kt)("p",null,"Or if you have environment variable setup correctly:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"echo $ZITI_PWD\n")),(0,n.kt)("p",null,"To update the passwd"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge update authenticator updb -s\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important:"),' if you change the password, you must update the passwd (ZITI_PWD) in the "~/.ziti/quickstart/$(hostname -s)/$(hostname -s).env" file. '),(0,n.kt)("h3",{id:"153-some-useful-command-for-the-router"},"1.5.3 Some useful command for the Router"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," login the CLI")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"zitiLogin\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Verify ER status")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ziti edge list edge-routers\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Delete the ER")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ziti edge delete edge-routers $ROUTER_NAME\nziti edge delete edge-routers $ROUTER_ID\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Update the ER")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ziti edge update edge-router $ROUTER_NAME [flags]\nziti edge update edge-router $ROUTER_ID [flags]\n")),(0,n.kt)("p",null,"example to update attributes: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ziti edge update edge-router $ROUTER_NAME -a private\n")))}d.isMDXComponent=!0},89880:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Controller-Firewall-Azure-11e435600f203cabfebaac0365d830b3.jpg"},33293:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Controller-Firewall-GCP-6f7549eda96b57b157e4a289eed2300c.jpg"},1931:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Controller-Firewall-GCP2-d569f831902b4282b0c047adc978e7f9.jpg"},76484:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-AWS1-72424b3465fab46169728d0f7a1b7336.jpg"},97431:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-AWS2-4634b5275400b43e0248c1c204e1a25b.jpg"},25493:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-AWS3-944a11b7557aa4f3edebec812a8834fd.jpg"},37653:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-AWS4-2ace42a082ae0d48cb634b115262c0a4.jpg"},90680:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-Azure1-ddb22c1cba5fdde0eba7163f28aa827b.jpg"},69346:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-Azure2-99b55e3435e77200f49b99d3bd7219e4.jpg"},25260:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-Azure4-d3d40db8fac36e3162a53aff6992f256.jpg"},77047:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-Azure5-7e2830b8120aa8110182f519cf60b7ad.jpg"},80561:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-Azure6-90b8e65c111dde36da53822fd1bf4a5c.jpg"},3963:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-GCP1-ba14e3330cfa18b53ec231b100afd4c8.jpg"},83263:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-GCP4-e884d3870b1ec7b9ae01cf5d3df60aa3.jpg"},47682:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-GCP5-eb08ecf042d8ee87d6f252438afeabd3.jpg"},51410:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-GCP6-8be95201d51a2140d42648f0fad29602.jpg"},79936:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Create-GCP7-9cd9f7d510985d11c65208c52da39420.jpg"},64151:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Firewall-AWS-Controller-912ca5f945e32ecccdd2bbcbca5fb511.jpg"},73373:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Firewall-AWS-ER-bfcbf0c5a898ea5c4564749a422dd2ee.jpg"},30220:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/GCP-login1-4a85ef6f0b3a16ea562e33e71692d37f.jpg"}}]);