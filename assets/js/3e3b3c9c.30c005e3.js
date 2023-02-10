"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8405],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(i),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return i?n.createElement(h,s(s({ref:t},u),{},{components:i})):n.createElement(h,s({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},61761:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const r={authors:"dovholuknf",title:"Kubernetes Cheatsheet"},s=void 0,o={permalink:"/blog/zitification/kubernetes/kubernetes-oci",source:"@site/blog/zitification/kubernetes/kubernetes-oci.md",title:"Kubernetes Cheatsheet",description:"This page exists as the set of commands which were used in the video Secure Kubernetes Cluster using Ziti",date:"2023-02-10T13:01:57.000Z",formattedDate:"February 10, 2023",tags:[],readingTime:3.79,hasTruncateMarker:!1,authors:[{name:"Clint Dovholuk",title:"OpenZiti Maintainer",url:"https://github.com/dovholuknf",imageURL:"https://avatars.githubusercontent.com/u/46322585?v=4",key:"dovholuknf"}],frontMatter:{authors:"dovholuknf",title:"Kubernetes Cheatsheet"},prevItem:{title:"Zitifying Kubectl",permalink:"/blog/zitification/kubernetes"},nextItem:{title:"Enable Prometheus to Scrape Anything from Anywhere",permalink:"/blog/zitification/prometheus/part1"}},l={authorsImageUrls:[void 0]},c=[{value:"establish some variables just to make commands easier",id:"establish-some-variables-just-to-make-commands-easier",level:3},{value:"clean up commands - if needed",id:"clean-up-commands---if-needed",level:3},{value:"create kubernetes config files - public and private",id:"create-kubernetes-config-files---public-and-private",level:2},{value:"delete any resources if needed",id:"delete-any-resources-if-needed",level:3},{value:"show it working via public ip from wsl",id:"show-it-working-via-public-ip-from-wsl",level:3},{value:"wsl",id:"wsl",level:4},{value:"show it failing via private ip from wsl",id:"show-it-failing-via-private-ip-from-wsl",level:4},{value:"let&#39;s install ziti in the cluster",id:"lets-install-ziti-in-the-cluster",level:3},{value:"make a new identity",id:"make-a-new-identity",level:4},{value:"Deploying Ziti to Kubernetes",id:"deploying-ziti-to-kubernetes",level:4},{value:"verify the ziti identity was bootstrapped by using kubectl logs",id:"verify-the-ziti-identity-was-bootstrapped-by-using-kubectl-logs",level:3},{value:"let&#39;s setup the ziti bits we need",id:"lets-setup-the-ziti-bits-we-need",level:3},{value:"ziti setup",id:"ziti-setup",level:4},{value:"verify windows can access the kubernetes api (using cmd.exe from wsl)",id:"verify-windows-can-access-the-kubernetes-api-using-cmdexe-from-wsl",level:4},{value:"at this point from wsl kubectl will work using the ip address - but not dns",id:"at-this-point-from-wsl-kubectl-will-work-using-the-ip-address---but-not-dns",level:4},{value:"use &quot;kubeztl&quot;",id:"use-kubeztl",level:4},{value:"download from github",id:"download-from-github",level:4},{value:"modify config if you want",id:"modify-config-if-you-want",level:4},{value:"useful if you need to update either of the identities",id:"useful-if-you-need-to-update-either-of-the-identities",level:3}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page exists as the set of commands which were used in the video ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/CRoansolpR0"},"Secure Kubernetes Cluster using Ziti")),(0,a.kt)("h3",{id:"establish-some-variables-just-to-make-commands-easier"},"establish some variables just to make commands easier"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'service_name=k8s.oci\nthe_user_identity="${service_name}".client\nthe_kubernetes_identity="${service_name}".private\noci_cluster_id="put-your-cluster-id-here"\n')),(0,a.kt)("h3",{id:"clean-up-commands---if-needed"},"clean up commands - if needed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'rm /tmp/oci/config.oci.public\nrm /tmp/oci/config.oci.private\nziti edge delete identity "${the_kubernetes_identity}"\nziti edge delete identity "${the_user_identity}"\n')),(0,a.kt)("p",null,"work done ahead of time - takes time to establish a cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"previously setup kubernetes in OKE",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"simple cluster"),(0,a.kt)("li",{parentName:"ul"},"standard quick create cluster"),(0,a.kt)("li",{parentName:"ul"},"public endpoint"),(0,a.kt)("li",{parentName:"ul"},"Shape: VM.Standard2.2"),(0,a.kt)("li",{parentName:"ul"},"1 node"),(0,a.kt)("li",{parentName:"ul"},"pasted my public key for access"),(0,a.kt)("li",{parentName:"ul"},"exposed the cluster with public ip"))),(0,a.kt)("li",{parentName:"ul"},"already installed oci as well as helm"),(0,a.kt)("li",{parentName:"ul"},"already deployed a ziti environment using ",(0,a.kt)("a",{parentName:"li",href:"https://openziti.github.io/docs/learn/quickstarts/network/hosted"},"https://openziti.github.io/docs/learn/quickstarts/network/hosted"))),(0,a.kt)("h2",{id:"create-kubernetes-config-files---public-and-private"},"create kubernetes config files - public and private"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oci ce cluster create-kubeconfig \\\n    --cluster-id ${oci_cluster_id} \\\n    --file /tmp/oci/config.oci.public \\\n    --region us-ashburn-1 \\\n    --token-version 2.0.0 \\\n    --kube-endpoint PUBLIC_ENDPOINT\nchmod 600 /tmp/oci/config.oci.public\n    \noci ce cluster create-kubeconfig \\\n    --cluster-id ${oci_cluster_id} \\\n    --file /tmp/oci/config.oci.private \\\n    --region us-ashburn-1 \\\n    --token-version 2.0.0 \\\n    --kube-endpoint PRIVATE_ENDPOINT\nchmod 600 /tmp/oci/config.oci.private\n")),(0,a.kt)("h3",{id:"delete-any-resources-if-needed"},"delete any resources if needed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/tmp/oci/config.oci.public\nhelm uninstall ziti-host\nkubectl delete persistentvolume ziti-host-pv\n")),(0,a.kt)("h3",{id:"show-it-working-via-public-ip-from-wsl"},"show it working via public ip from wsl"),(0,a.kt)("h4",{id:"wsl"},"wsl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/tmp/oci/config.oci.public\nkubectl get pods -v7 --request-timeout='5s'\n")),(0,a.kt)("h4",{id:"show-it-failing-via-private-ip-from-wsl"},"show it failing via private ip from wsl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/tmp/oci/config.oci.private\nkubectl get pods -v7 --request-timeout='2s'\n")),(0,a.kt)("h3",{id:"lets-install-ziti-in-the-cluster"},"let's install ziti in the cluster"),(0,a.kt)("h4",{id:"make-a-new-identity"},"make a new identity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ziti edge create identity device "${the_kubernetes_identity}" -a "${service_name}"ServerEndpoints -o "${the_kubernetes_identity}".jwt\nziti edge create identity device "${the_user_identity}" -a "${service_name}"ClientEndpoints -o "${the_user_identity}".jwt\n')),(0,a.kt)("h4",{id:"deploying-ziti-to-kubernetes"},"Deploying Ziti to Kubernetes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"install the ",(0,a.kt)("inlineCode",{parentName:"p"},"helm")," CLI tool ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"using this guide"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"add the OpenZiti Helm repo:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add openziti https://openziti.github.io/helm-charts/\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"locate the jwt file for the Kubernetes identity. If you followed the steps above the file will be named: ",(0,a.kt)("inlineCode",{parentName:"p"},'"${the_kubernetes_identity}".jwt')," (make sure you replace the variable with the correct value)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"enroll the Kubernetes identity. This exchanges the temporary JWT for a permanent identity JSON file. Several Ziti CLIs have an ",(0,a.kt)("inlineCode",{parentName:"p"},"enroll")," command for this purpose. Here's one way to obtain the identity that doesn't require you to download a CLI if you already have Docker:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# start with JWT file on Docker host in \n#  /tmp/${the_kubernetes_identity}.jwt\ndocker run --rm --volume /tmp:/mnt \\\n    openziti/quickstart /openziti/ziti-bin/ziti edge enroll \\\n    "/mnt/${the_kubernetes_identity}.jwt"\n# now you will have a new file \n# /tmp/${the_kubernetes_identity}.json\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"use the Kubernetes identity JSON file when you install the Helm chart:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'helm install ziti-host openziti/ziti-host \\\n    --set-file zitiIdentity="/tmp/${the_kubernetes_identity}.json"\n')))),(0,a.kt)("h3",{id:"verify-the-ziti-identity-was-bootstrapped-by-using-kubectl-logs"},"verify the ziti identity was bootstrapped by using kubectl logs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs ziti-host<tab><enter>\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,'now go disable the public ip so private access ONLY works... this takes "a minute or two or three"...'),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lets-setup-the-ziti-bits-we-need"},"let's setup the ziti bits we need"),(0,a.kt)("p",null,"setup ziti to access the private server address...\nset environment variables to make it easier to reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export KUBECONFIG=/tmp/oci/config.oci.private\nk8s_private_host_and_port=$(kubectl config view | grep server | cut -d "/" -f3)\nk8s_private_host=$(echo ${k8s_private_host_and_port} | cut -d ":" -f1)\nk8s_private_port=$(echo ${k8s_private_host_and_port} | cut -d ":" -f2)\necho "Private URL: ${k8s_private_host_and_port}, Host: ${k8s_private_host}, Port: ${k8s_private_port}"\n')),(0,a.kt)("h4",{id:"ziti-setup"},"ziti setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'k8s_private_dns=kubernetes\n\nziti edge delete config "${service_name}"-host.v1\nziti edge delete config "${service_name}"-client-config\nziti edge delete service "${service_name}"\nziti edge delete service-policy "${service_name}"-binding\nziti edge delete service-policy "${service_name}"-dialing\n\nziti edge create config "${service_name}"-host.v1 host.v1 \'{"protocol":"tcp", "address":"\'${k8s_private_host}\'","port":\'${k8s_private_port}\' }\'\nziti edge create config "${service_name}"-client-config intercept.v1 \'{"protocols":["tcp"],"addresses":["\'${k8s_private_host}\'","\'${k8s_private_dns}\'"], "portRanges":[{"low":443, "high":443}]}\'\nziti edge create service "${service_name}" --configs "${service_name}"-client-config,"${service_name}"-host.v1\nziti edge create service-policy "${service_name}"-binding Bind --service-roles \'@\'"${service_name}" --identity-roles \'#\'"${service_name}"\'ServerEndpoints\'\nziti edge create service-policy "${service_name}"-dialing Dial --service-roles \'@\'"${service_name}" --identity-roles \'#\'"${service_name}"\'ClientEndpoints\'\n')),(0,a.kt)("h4",{id:"verify-windows-can-access-the-kubernetes-api-using-cmdexe-from-wsl"},"verify windows can access the kubernetes api (using cmd.exe from wsl)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cmd.exe /c curl -k "https://${k8s_private_dns}"\ncmd.exe /c curl -k "https://${k8s_private_host}"    \n')),(0,a.kt)("h4",{id:"at-this-point-from-wsl-kubectl-will-work-using-the-ip-address---but-not-dns"},"at this point from wsl kubectl will work using the ip address - but not dns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#enroll the identity\nziti edge enroll "${the_user_identity}".jwt\n\n# use the identity to get pods:\n./kubeztl --zConfig "${the_user_identity}".json --service k8s.oci get pods\n\n# update your config to make it so you don\'t need to supply --zConfig or --service\n# replace "${the_user_identity}" accordingly:\nzConfig: /mnt/v/temp/oci/"${the_user_identity}".json\nservice: k8s.oci\n')),(0,a.kt)("h4",{id:"use-kubeztl"},'use "kubeztl"'),(0,a.kt)("h4",{id:"download-from-github"},"download from github"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -L -o kubeztl https://github.com/openziti-incubator/kubectl/releases/download/v0.0.4/kubectl-linux-amd64 ./kubeztl get pods -c ./id.json -S "${service_name}"\n')),(0,a.kt)("h4",{id:"modify-config-if-you-want"},"modify config if you want"),(0,a.kt)("p",null,"find your context, add two lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"zConfig: /mnt/v/temp/oci/oci.json\nservice: k8s.oci\n")),(0,a.kt)("h3",{id:"useful-if-you-need-to-update-either-of-the-identities"},"useful if you need to update either of the identities"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ziti edge update identity "${the_user_identity}" -a "${service_name}"ClientEndpoints\nziti edge update identity "${the_kubernetes_identity}" -a "${service_name}"ServerEndpoints\n')))}p.isMDXComponent=!0}}]);