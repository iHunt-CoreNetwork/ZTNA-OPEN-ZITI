"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79641:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){return r.createElement("div",{id:"Wizardly"},r.createElement("div",{className:"wizardmodal"},r.createElement("div",{className:"page-wrapper bg-img-1"}),r.createElement("div",{className:"page-wrapper"},r.createElement("div",{className:"wizard main"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"whitez"}),r.createElement("h1",{id:"WizardTitle",className:"header-title"}),r.createElement("div",{className:"wizardclose"}))),r.createElement("div",{className:"ocontainer"},r.createElement("div",{className:"zcontainer"},r.createElement("div",{role:"application",className:"wizard clearfix vertical",id:"steps-uid-0"},r.createElement("div",{className:"steps clearfix"},r.createElement("ul",{id:"WizardTabs",role:"tablist"})),r.createElement("div",{className:"content clearfix"},r.createElement("div",null,r.createElement("fieldset",{id:"WizardContents",role:"tabpanel",className:"body current","aria-hidden":"false"}))),r.createElement("div",{className:"actions clearfix"},r.createElement("ul",{role:"menu","aria-label":"Pagination"},r.createElement("li",null,r.createElement("button",{id:"WizardPreviousButton"},"Previous")),r.createElement("li",null,r.createElement("button",{id:"WizardNextButton"},"Next"),r.createElement("button",{id:"WizarFinishButton"},"Finish")))))))))),r.createElement("div",{className:"openWizard"},"Try the Wizard"))}},40532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(79641);const o={sidebar_position:60},l="Host OpenZiti Anywhere",s={unversionedId:"learn/quickstarts/network/hosted",id:"learn/quickstarts/network/hosted",title:"Host OpenZiti Anywhere",description:"You can absolutely choose to host your network anywhere you like.",source:"@site/docs/learn/quickstarts/network/hosted.md",sourceDirName:"learn/quickstarts/network",slug:"/learn/quickstarts/network/hosted",permalink:"/docs/learn/quickstarts/network/hosted",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/quickstarts/network/hosted.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"docsSidebar",previous:{title:"Local - Docker Compose",permalink:"/docs/learn/quickstarts/network/local-docker-compose"},next:{title:"Kubernetes",permalink:"/docs/learn/quickstarts/network/local-kubernetes"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Firewall",id:"firewall",level:3},{value:"Express Install",id:"express-install",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"<code>expressInstall</code> Setup",id:"expressinstall-setup",level:3},{value:"Run <code>expressInstall</code>",id:"run-expressinstall",level:3},{value:"<code>systemd</code>",id:"systemd",level:3},{value:"The helper functions vs systemd",id:"the-helper-functions-vs-systemd",level:4},{value:"Adding Environment Variables Back to the Shell",id:"adding-environment-variables-back-to-the-shell",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"host-openziti-anywhere"},"Host OpenZiti Anywhere"),(0,a.kt)("p",null,"You can absolutely choose to host your ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/introduction/"},"network")," anywhere you like.\nIt is not necessary for the server to be on the open internet. If it works better for you to deploy OpenZiti on your\nown network, great, do that.  The only requirement to be aware of is that every piece of the network will need to be able to communicate to the controller and at least one edge router, which this quickstart will provide."),(0,a.kt)("p",null,"If you have a Linux server available on the open internet, or you will provision one for use with OpenZiti, that's the\nideal scenario. With a zero trust overlay network provided by OpenZiti, you can rest assured that your traffic is safe even when using commodity internet. Furthermore, you do not need to worry about being on a network you trust, as all networks are considered untrustworthy, even your work/home network!"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"When starting out deploying a ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/introduction/"},"network"),", we recommend you follow\nand use the ",(0,a.kt)("inlineCode",{parentName:"p"},"expressInstall")," function provided by the OpenZiti project. Once you're familiar with the network and\nthe configuration options available you'll be better equipped to make changes."),(0,a.kt)("h3",{id:"firewall"},"Firewall"),(0,a.kt)("p",null,"The first issue you will need to deal with is opening some ports. A network will consist of at least one controller and\nat least one edge router. Both of these components will require ports to be open. For the controller you will need to\nopen a range of ports through your firewall:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"8440/tcp"),": edge controller providing router control plane"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"8441/tcp"),": edge controller providing client sessions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"8442/tcp"),": edge router providing client connections"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"8443/tcp"),": Ziti Admin Console (ZAC) ","[optional]")),(0,a.kt)("p",null,"These are the arbitrary ports we'll use in this example for convenience when specifying the firewall exception as a port range."),(0,a.kt)("h2",{id:"express-install"},"Express Install"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you have ",(0,a.kt)("inlineCode",{parentName:"p"},"tar"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hostname"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"jq")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," installed before running the ",(0,a.kt)("inlineCode",{parentName:"p"},"expressInstall")," one-liner.")),(0,a.kt)("h3",{id:"expressinstall-setup"},(0,a.kt)("inlineCode",{parentName:"h3"},"expressInstall")," Setup"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expressInstall")," may be customized with environment variables. Consider creating a DNS name for this installation before running the script. By default, the\nquickstart will install your Ziti network's PKI and configuration files in ",(0,a.kt)("inlineCode",{parentName:"p"},"${HOME}/.ziti/quickstart/$(hostname -s)"),". You may choose a different location by defining ",(0,a.kt)("inlineCode",{parentName:"p"},"ZITI_HOME=/custom/path/to/quickstart"),". If you do customize ",(0,a.kt)("inlineCode",{parentName:"p"},"ZITI_HOME")," then you should also make this assignment in your shell RC, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," for future convenience."),(0,a.kt)("p",null,"You will almost certainly want to use the ",(0,a.kt)("strong",{parentName:"p"},"public")," DNS name\nof your instance. It is possible to use an IP address, but a DNS name is a more flexible option, which will be important if the IP ever changes."),(0,a.kt)("p",null,"The quickest and easiest thing to do, is find your external DNS name and set it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL_DNS")," environment\nvariable. You may skip setting ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL_DNS")," if you don't need to configure the advertised DNS Subject Alternative Name (SAN). For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'export EXTERNAL_DNS="acme.example.com"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'export EXTERNAL_IP="$(curl -s eth0.me)"       \nexport ZITI_CTRL_EDGE_IP_OVERRIDE="${EXTERNAL_IP}"\nexport ZITI_ROUTER_IP_OVERRIDE="${EXTERNAL_IP}"\nexport ZITI_CTRL_EDGE_ADVERTISED_ADDRESS="${EXTERNAL_DNS:-${EXTERNAL_IP}}"\nexport ZITI_ROUTER_ADVERTISED_ADDRESS="${EXTERNAL_DNS:-${EXTERNAL_IP}}"\nexport ZITI_CTRL_ADVERTISED_PORT=8440\nexport ZITI_CTRL_EDGE_ADVERTISED_PORT=8441\nexport ZITI_ROUTER_PORT=8442\n')),(0,a.kt)("h3",{id:"run-expressinstall"},"Run ",(0,a.kt)("inlineCode",{parentName:"h3"},"expressInstall")),(0,a.kt)("p",null,"As with any script that is downloaded and run from the internet, we recommend you examine\nthe script before running it locally. This script is provided as a convenience\nmethod for installing an environment quickly and easily."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'source /dev/stdin <<< "$(wget -qO- https://get.openziti.io/ziti-cli-functions.sh)"; expressInstall\n')),(0,a.kt)("h3",{id:"systemd"},(0,a.kt)("inlineCode",{parentName:"h3"},"systemd")),(0,a.kt)("p",null,"This assumes you already ran ",(0,a.kt)("inlineCode",{parentName:"p"},"expressInstall")," on a Linux server. If it's available on your system, then it is recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," to manage your controller and router processes. This\nis useful to make sure the controller can restart automatically should you shutdown/restart the server. To generate the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," unit files, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'createControllerSystemdFile\ncreateRouterSystemdFile "${ZITI_ROUTER_NAME}"\n')),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'$ createControllerSystemdFile\nController systemd file written to: /home/ubuntu/.ziti/quickstart/ip-172-31-23-18/ip-172-31-23-18-edge-controller.service\n\n$ createRouterSystemdFile "${ZITI_ROUTER_NAME}"\nRouter systemd file written to: /home/ubuntu/.ziti/quickstart/ip-172-31-23-18/ip-172-31-23-18-edge-router.service\n')),(0,a.kt)("h4",{id:"the-helper-functions-vs-systemd"},"The helper functions vs systemd"),(0,a.kt)("p",null,"The set of startController/stopController, startRouter/stopRouter are functions declared in the\n",(0,a.kt)("a",{parentName:"p",href:"https://get.openziti.io/ziti-cli-functions.sh"},"the ziti-cli-function.sh helper script")," and are useful for running\nthe controller and router directly in your shell. These functions are not meant to work with systemd-enabled installs. If\nyou are enabling systemd, use ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl")," to start/stop the components. During the expressInstall, the controller and router\nwere started using the helper scripts to complete the installation. Both should not be running, but before you run the\ncontroller and router with ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," you need to stop them if they're currently running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"stopRouter \nstopController \n")),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$ stopRouter \nINFO: Router stopped.\n\n$ stopController \nINFO: Controller stopped.\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," service units are generated, you can then install them by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'sudo cp "${ZITI_HOME}/${ZITI_CTRL_NAME}.service" /etc/systemd/system/ziti-controller.service\nsudo cp "${ZITI_HOME}/${ZITI_ROUTER_NAME}.service" /etc/systemd/system/ziti-router.service\nsudo systemctl daemon-reload\nsudo systemctl enable --now ziti-controller\nsudo systemctl enable --now ziti-router\n')),(0,a.kt)("p",null,"Now, both the controller and the edge router will restart automatically if the machine reboots!",(0,a.kt)("br",{parentName:"p"}),"\n","After a few seconds you can then run these commands and verify systemd has started the processes\nand see the status:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo systemctl -q status ziti-controller --lines=0 --no-pager\nsudo systemctl -q status ziti-router --lines=0 --no-pager\n")),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$ sudo systemctl -q status ziti-controller --lines=0 --no-pager\n\u25cf ziti-controller.service - Ziti-Controller\n     Loaded: loaded (/etc/systemd/system/ziti-controller.service; disabled; vendor preset: enabled)\n     Active: active (running) since Thu 2021-11-11 19:05:46 UTC; 8s ago\n   Main PID: 2375 (ziti-controller)\n      Tasks: 7 (limit: 1154)\n     Memory: 43.7M\n     CGroup: /system.slice/ziti-controller.service\n             \u2514\u25002375 /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ziti-bin/ziti-v0.22.11/ziti-controller run /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/co\u2026\n\n$ sudo systemctl -q status ziti-router --lines=0 --no-pager\n\u25cf ziti-router.service - Ziti-Router for ip-10-0-0-1-edge-router\n     Loaded: loaded (/etc/systemd/system/ziti-router.service; disabled; vendor preset: enabled)\n     Active: active (running) since Thu 2021-11-11 19:05:47 UTC; 8s ago\n   Main PID: 2385 (ziti-router)\n      Tasks: 6 (limit: 1154)\n     Memory: 231.4M\n     CGroup: /system.slice/ziti-router.service\n             \u2514\u25002385 /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ziti-bin/ziti-v0.22.11/ziti-router run /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ip-10\u2026\n")),(0,a.kt)("h2",{id:"adding-environment-variables-back-to-the-shell"},"Adding Environment Variables Back to the Shell"),(0,a.kt)("p",null,"If you log out and log back in again you can source the *.env file located in ",(0,a.kt)("inlineCode",{parentName:"p"},"ZITI_HOME"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"source ~/.ziti/quickstart/$(hostname -s)/$(hostname -s).env\n")),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$ source ~/.ziti/quickstart/$(hostname -s)/$(hostname -s).env\nadding /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ziti-bin/ziti-v0.20.2 to the path\n\n$ echo $ZITI_HOME\n/home/ubuntu/.ziti/quickstart/ip-10-0-0-1\n")),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now that you have your network in place, you probably want to try it out. Head to the\n",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/quickstarts/services/"},"Your First Service")," quickstart and start learning how to use OpenZiti."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/quickstarts/zac/"},"Install the console")," (web UI)"),(0,a.kt)("li",{parentName:"ul"},'Add a Second Public Router: In order for multiple routers to form transit links, they need a firewall exception to expose the "link listener" port. The default port is ',(0,a.kt)("inlineCode",{parentName:"li"},"10080/tcp"),"."),(0,a.kt)("li",{parentName:"ul"},"Help",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/quickstarts/network/help/change-admin-password"},"Change Admin Password")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/learn/quickstarts/network/help/reset-quickstart"},"Reset the Quickstart"))))),(0,a.kt)(i.Z,{mdxType:"Wizardly"}))}m.isMDXComponent=!0}}]);