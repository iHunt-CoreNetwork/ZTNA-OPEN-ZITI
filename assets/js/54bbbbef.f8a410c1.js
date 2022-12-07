"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[5895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),l=n(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),l=n(67294),i=n(86010),r=n(72389),o=n(67392),u=n(7094),s=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:r,values:d,groupId:m,className:k}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===r?r:r??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:f}=(0,u.U)(),[N,z]=(0,l.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=m){const e=y[m];null!=e&&e!==N&&g.some((t=>t.value===e))&&z(e)}const w=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==N&&(T(t),z(a),null!=m&&f(m,String(a)))},O=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},k)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:O,onClick:w},r,{className:(0,i.Z)("tabs__item",c,r?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,l.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},83583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),l=(n(67294),n(3905)),i=n(65488),r=n(85162);const o={title:"Linux"},u=void 0,s={unversionedId:"core-concepts/clients/tunnelers/linux/index",id:"core-concepts/clients/tunnelers/linux/index",title:"Linux",description:"The Ziti Tunneller",source:"@site/docs/core-concepts/clients/tunnelers/linux/index.md",sourceDirName:"core-concepts/clients/tunnelers/linux",slug:"/core-concepts/clients/tunnelers/linux/",permalink:"/docs/core-concepts/clients/tunnelers/linux/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/clients/tunnelers/linux/index.md",tags:[],version:"current",frontMatter:{title:"Linux"},sidebar:"rootSidebar",previous:{title:"iOS",permalink:"/docs/core-concepts/clients/tunnelers/iOS"},next:{title:"Options and Modes",permalink:"/docs/core-concepts/clients/tunnelers/linux/linux-tunnel-options"}},p={},c=[{value:"The Ziti Tunneller",id:"the-ziti-tunneller",level:2},{value:"Install Linux Package",id:"install-linux-package",level:2},{value:"Installing the DEB",id:"installing-the-deb",level:3},{value:"Ubuntu Jammy 22.04",id:"ubuntu-jammy-2204",level:4},{value:"Ubuntu Focal 20.04",id:"ubuntu-focal-2004",level:4},{value:"Ubuntu Bionic 18.04",id:"ubuntu-bionic-1804",level:4},{value:"Debian GNU/Linux",id:"debian-gnulinux",level:4},{value:"Installing the RPM",id:"installing-the-rpm",level:3},{value:"Red Hat",id:"red-hat",level:4},{value:"Red Hat 9",id:"red-hat-9",level:4},{value:"Fedora",id:"fedora",level:4},{value:"Amazon Linux",id:"amazon-linux",level:4},{value:"Manual Installation",id:"manual-installation",level:2},{value:"Enroll Before You Run",id:"enroll-before-you-run",level:3},{value:"Run the Manually Installed Binary",id:"run-the-manually-installed-binary",level:3},{value:"Run with Docker",id:"run-with-docker",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"the-ziti-tunneller"},"The Ziti Tunneller"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," is the general purpose tunneller CLI and can also run as a systemd daemon."),(0,l.kt)("p",null,"The purpose of the tunneller is to configure host access. This means all users and all processes on the host will share the same level of access. This is accomplished by configuring the OS to have an on-board OpenZiti DNS nameserver and IP routes for authorized OpenZiti Services."),(0,l.kt)("h2",{id:"install-linux-package"},"Install Linux Package"),(0,l.kt)("p",null,"Linux DEB packages are currently available for the x86_64 and arm64 platforms and RPM packages are available for x86_64. Additionally, there are executable downloads available for arm/v7 (32bit) for ",(0,l.kt)("a",{parentName:"p",href:"#manual-installation"},"manual installation"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"It is not necessary to manually enroll the identity when using the RPM or DEB package. Just install the token in the identities directory and it will be enrolled when you start the daemon.")),(0,l.kt)("h3",{id:"installing-the-deb"},"Installing the DEB"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run the script for your OS to install ",(0,l.kt)("inlineCode",{parentName:"li"},"ziti-edge-tunnel"),".")),(0,l.kt)(i.Z,{defaultValue:"Focal",values:[{label:"Ubuntu Jammy 22.04",value:"Jammy"},{label:"Ubuntu Focal 20.04",value:"Focal"},{label:"Ubuntu Bionic 18.04",value:"Bionic"},{label:"Debian GNU/Linux",value:"Debian"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Jammy",mdxType:"TabItem"},(0,l.kt)("h4",{id:"ubuntu-jammy-2204"},"Ubuntu Jammy 22.04"),(0,l.kt)("p",null,"Architectures available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64"),(0,l.kt)("li",{parentName:"ul"},"arm64")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSLf https://raw.githubusercontent.com/openziti/ziti-tunnel-sdk-c/main/package-repos.gpg \\\n| gpg --dearmor \\\n| sudo tee /usr/share/keyrings/openziti.gpg >/dev/null\necho 'deb [signed-by=/usr/share/keyrings/openziti.gpg] https://packages.openziti.org/zitipax-openziti-deb-stable jammy main' \\\n| sudo tee /etc/apt/sources.list.d/openziti.list >/dev/null\nsudo apt update\nsudo apt install ziti-edge-tunnel\n"))),(0,l.kt)(r.Z,{value:"Focal",mdxType:"TabItem"},(0,l.kt)("h4",{id:"ubuntu-focal-2004"},"Ubuntu Focal 20.04"),(0,l.kt)("p",null,"Architectures available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64"),(0,l.kt)("li",{parentName:"ul"},"arm64")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSLf https://raw.githubusercontent.com/openziti/ziti-tunnel-sdk-c/main/package-repos.gpg \\\n| gpg --dearmor \\\n| sudo tee /usr/share/keyrings/openziti.gpg >/dev/null\necho 'deb [signed-by=/usr/share/keyrings/openziti.gpg] https://packages.openziti.org/zitipax-openziti-deb-stable focal main' \\\n| sudo tee /etc/apt/sources.list.d/openziti.list >/dev/null\nsudo apt update\nsudo apt install ziti-edge-tunnel\n"))),(0,l.kt)(r.Z,{value:"Bionic",mdxType:"TabItem"},(0,l.kt)("h4",{id:"ubuntu-bionic-1804"},"Ubuntu Bionic 18.04"),(0,l.kt)("p",null,"Architectures available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSLf https://raw.githubusercontent.com/openziti/ziti-tunnel-sdk-c/main/package-repos.gpg \\\n| gpg --dearmor \\\n| sudo tee /usr/share/keyrings/openziti.gpg >/dev/null\necho 'deb [signed-by=/usr/share/keyrings/openziti.gpg] https://packages.openziti.org/zitipax-openziti-deb-stable bionic main' \\\n| sudo tee /etc/apt/sources.list.d/openziti.list >/dev/null\nsudo apt update\nsudo apt install ziti-edge-tunnel\n"))),(0,l.kt)(r.Z,{value:"Debian",mdxType:"TabItem"},(0,l.kt)("h4",{id:"debian-gnulinux"},"Debian GNU/Linux"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Debian"),(0,l.kt)("th",{parentName:"tr",align:null},"Ubuntu"),(0,l.kt)("th",{parentName:"tr",align:null},"Archs"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12 Bookworm"),(0,l.kt)("td",{parentName:"tr",align:null},"Jammy 22.04"),(0,l.kt)("td",{parentName:"tr",align:null},"x86_64, arm64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11 Bullseye"),(0,l.kt)("td",{parentName:"tr",align:null},"Focal 20.04"),(0,l.kt)("td",{parentName:"tr",align:null},"x86_64, arm64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 Buster"),(0,l.kt)("td",{parentName:"tr",align:null},"Bionic 18.04"),(0,l.kt)("td",{parentName:"tr",align:null},"x86_64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9 Stretch"),(0,l.kt)("td",{parentName:"tr",align:null},"Xenial 16.04"),(0,l.kt)("td",{parentName:"tr",align:null},"x86_64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8 Jessie"),(0,l.kt)("td",{parentName:"tr",align:null},"Trusty 14.04"),(0,l.kt)("td",{parentName:"tr",align:null},"x86_64")))),(0,l.kt)("p",null,"This example subscribes you to the Ubuntu ",(0,l.kt)("inlineCode",{parentName:"p"},"focal")," repo which will work well in most cases. Alternatively, you may refer to the table to find the Ubuntu release name that is the contemporary of your Debian release. Then, substitute the Ubuntu release name for ",(0,l.kt)("inlineCode",{parentName:"p"},"focal")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list.d/openziti.list")," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSLf https://raw.githubusercontent.com/openziti/ziti-tunnel-sdk-c/main/package-repos.gpg \\\n| gpg --dearmor \\\n| sudo tee /usr/share/keyrings/openziti.gpg >/dev/null\necho 'deb [signed-by=/usr/share/keyrings/openziti.gpg] https://packages.openziti.org/zitipax-openziti-deb-stable focal main' \\\n| sudo tee /etc/apt/sources.list.d/openziti.list >/dev/null\nsudo apt update\nsudo apt install ziti-edge-tunnel\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Place an enrollment token JWT file or identity config JSON file in ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/openziti/etc/identities"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enable and start the service"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now ziti-edge-tunnel.service\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The process needs to be restarted if the contents of ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/openziti/etc/identities")," change."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart ziti-edge-tunnel.service\n")))),(0,l.kt)("h3",{id:"installing-the-rpm"},"Installing the RPM"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a repo file like ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/yum.repos.d/openziti.repo")," matching the appropriate example below for your OS.")),(0,l.kt)(i.Z,{defaultValue:"RedHat",values:[{label:"Red Hat",value:"RedHat"},{label:"Red Hat 9",value:"RedHat9"},{label:"Fedora",value:"Fedora"},{label:"Amazon Linux",value:"Amazon"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"RedHat",mdxType:"TabItem"},(0,l.kt)("h4",{id:"red-hat"},"Red Hat"),(0,l.kt)("p",null,"Architectures available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64")),(0,l.kt)("p",null,"Use this repo with var ",(0,l.kt)("inlineCode",{parentName:"p"},"$releasever")," on CentOS 7, Rocky 8, RHEL 7-8."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[OpenZiti]\nname=OpenZiti\nbaseurl=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat$releasever/$basearch\nenabled=1\ngpgcheck=0\ngpgkey=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat$releasever/$basearch/repodata/repomd.xml.key\nrepo_gpgcheck=1\n"))),(0,l.kt)(r.Z,{value:"RedHat9",mdxType:"TabItem"},(0,l.kt)("h4",{id:"red-hat-9"},"Red Hat 9"),(0,l.kt)("p",null,"Architectures available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64")),(0,l.kt)("p",null,"Use the the Red Hat 8 repo until a dedicated Red Hat 9 repo becomes available (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-tunnel-sdk-c/issues/517"},"link to issue"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[OpenZiti]\nname=OpenZiti\nbaseurl=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat8/$basearch\nenabled=1\ngpgcheck=0\ngpgkey=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat8/$basearch/repodata/repomd.xml.key\nrepo_gpgcheck=1\n"))),(0,l.kt)(r.Z,{value:"Fedora",mdxType:"TabItem"},(0,l.kt)("h4",{id:"fedora"},"Fedora"),(0,l.kt)("p",null,"Architectures available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[OpenZiti]\nname=OpenZiti\nbaseurl=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat8/$basearch\nenabled=1\ngpgcheck=0\ngpgkey=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat8/$basearch/repodata/repomd.xml.key\nrepo_gpgcheck=1\n"))),(0,l.kt)(r.Z,{value:"Amazon",mdxType:"TabItem"},(0,l.kt)("h4",{id:"amazon-linux"},"Amazon Linux"),(0,l.kt)("p",null,"Architectures available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[OpenZiti]\nname=OpenZiti\nbaseurl=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat7/$basearch\nenabled=1\ngpgcheck=0\ngpgkey=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat7/$basearch/repodata/repomd.xml.key\nrepo_gpgcheck=1\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo yum update")," to refresh your repodata cache. Optionally, you may wish to also install all available updates.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo yum install ziti-edge-tunnel")," to install the RPM.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Place an enrollment token JWT file or identity config JSON file in ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/openziti/etc/identities"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enable and start the service"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now ziti-edge-tunnel.service\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The process needs to be restarted if the contents of ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/openziti/etc/identities")," change."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart ziti-edge-tunnel.service\n")))),(0,l.kt)("h2",{id:"manual-installation"},"Manual Installation"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-tunnel-sdk-c/releases/latest/"},"The latest binary release")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," is distributed as an executable for amd64, arm, arm64 architectures. The upgrade procedure is identical to the installation procedure."),(0,l.kt)("p",null,"You'll need to install the ",(0,l.kt)("inlineCode",{parentName:"p"},"wget")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"unzip")," commands to use this example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'wget -q "https://github.com/openziti/ziti-tunnel-sdk-c/releases/latest/download/ziti-edge-tunnel-Linux_$(uname -p).zip" \\\n  && unzip ./ziti-edge-tunnel-Linux_$(uname -p).zip \\\n  && rm ./ziti-edge-tunnel-Linux_$(uname -p).zip \\\n  && chmod -c +x ./ziti-edge-tunnel \\\n  && ./ziti-edge-tunnel version\n')),(0,l.kt)("h3",{id:"enroll-before-you-run"},"Enroll Before You Run"),(0,l.kt)("p",null,"You will need the token file or its contents to enroll. Enrollment is the act of exchanging the token for an identity that is to be permanently installed in the filesystem."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/core-concepts/identities/enrolling"},"Learn more about enrolling"),"."),(0,l.kt)("h3",{id:"run-the-manually-installed-binary"},"Run the Manually Installed Binary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ziti-edge-tunnel run \\\n  --identity-dir /opt/openziti/etc/identities\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./linux-tunnel-options"},"Learn more about tunneler options and modes"),"."),(0,l.kt)("h2",{id:"run-with-docker"},"Run with Docker"),(0,l.kt)("p",null,"Please reference ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-tunnel-sdk-c/tree/main/docker#readme"},"the Docker README")," for guidance and examples!"),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"./linux-tunnel-troubleshooting"},"the troubleshooting guide")))}m.isMDXComponent=!0}}]);