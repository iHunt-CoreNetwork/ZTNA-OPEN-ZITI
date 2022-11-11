"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=h(n),d=r,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var h=2;h<i;h++)a[h]=n[h];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var o=n(7462),r=(n(7294),n(3905));const i={},a="Enable Prometheus to Scrape Anything from Anywhere",s={permalink:"/blog/zitification/prometheus/part1",source:"@site/blog/zitification/prometheus/part1.md",title:"Enable Prometheus to Scrape Anything from Anywhere",description:"_This is part one of a three-part article. This article provides the necessary background and rationale of the series.",date:"2022-11-11T18:06:21.000Z",formattedDate:"November 11, 2022",tags:[],readingTime:12.27,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"zitification/kubernetes/kubernetes-oci",permalink:"/blog/zitification/kubernetes/kubernetes-oci"},nextItem:{title:"Configuring OpenZiti to Enable Prometheus",permalink:"/blog/zitification/prometheus/part2"}},l={authorsImageUrls:[]},h=[{value:"The Problem With Pulling",id:"the-problem-with-pulling",level:2},{value:"Prometheus",id:"prometheus",level:2},{value:"Poll-based?",id:"poll-based",level:3},{value:"Acceptable Risk",id:"acceptable-risk",level:3},{value:"OpenZiti",id:"openziti",level:2},{value:"Overview",id:"overview",level:3},{value:"Figure 1 - Before OpenZiti",id:"figure-1---before-openziti",level:4},{value:"Taking a Closer Look",id:"taking-a-closer-look",level:3},{value:"Listening Ports",id:"listening-ports",level:4},{value:"Kubernetes API Exposed",id:"kubernetes-api-exposed",level:4},{value:"&quot;Trusted&quot; Intra-cluster Traffic",id:"trusted-intra-cluster-traffic",level:4},{value:"authors: dovholuknf",id:"authors-dovholuknf",level:2},{value:"Applying Zero Trust Networking Principles Using OpenZiti",id:"applying-zero-trust-networking-principles-using-openziti",level:3},{value:"Figure 2 - After OpenZiti",id:"figure-2---after-openziti",level:4},{value:"Taking a Closer Look After OpenZiti",id:"taking-a-closer-look-after-openziti",level:3},{value:"No External Listening Ports",id:"no-external-listening-ports",level:4},{value:"Kubernetes API no Longer Exposed",id:"kubernetes-api-no-longer-exposed",level:4},{value:"&quot;Trusted&quot; Intra-cluster Traffic",id:"trusted-intra-cluster-traffic-1",level:4},{value:"OpenZiti-Enabled Prometheus",id:"openziti-enabled-prometheus",level:2}],u={toc:h};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This is part one of a three-part article. This article provides the necessary background and rationale of the series.\n",(0,r.kt)("a",{parentName:"em",href:"/blog/zitification/prometheus/part2"},"The next article")," will be a detailed explanation of the actual steps necessary to implement the solution.\nIn ",(0,r.kt)("a",{parentName:"em",href:"/blog/zitification/prometheus/part3"},"the final article"),", we will explore what we have just created and understand what was just created")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"the-problem-with-pulling"},"The Problem With Pulling"),(0,r.kt)("p",null,'Prometheus is a server which wants to reach out and pull data from "scrape targets". It will generally do this using http requests. One\nproblem with this design is that these targets are often inaccessible, hidden from Prometheus behind a firewall.'),(0,r.kt)("p",null,'If not hidden, it means some port was exposed on some network, thereby giving Prometheus the ability to pull the data it needs. Exposing\nthat port on a "trusted" network is a possible attack vector for bad actors. Exposing that port on the open internet (as is often the case)\nis an open invitation for attack. It\'s much better to keep these servers totally dark to all networks.'),(0,r.kt)("p",null,"OpenZiti solves this problem of reach elegantly and natively while also keeping your service dark to all networks. This gives an\nOpenZiti-enabled Prometheus the ability to literally scrape any target, anywhere. As long as the target is participates on an OpenZiti\noverlay network, and as long as the proper polices are in place allowing the traffic to flow, Prometheus will be able to reach out and\npull the data it needs from anything, anywhere."),(0,r.kt)("p",null,"It doesn't matter if the target is in some private cloud data center, some private data center protected by a corporate firewall, or heck\neven running inside my local docker environment! As long as the target participates on that OpenZiti Prometheus can scrape it! That sort of\nreach is impossible with classic networks."),(0,r.kt)("h2",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," is an incredibly popular ",(0,r.kt)("a",{parentName:"p",href:"https://www.cncf.io/projects/prometheus/"},"CNCF"),'\nproject which has graduated the gauntlet of progressions to emerge as a "graduated" CNCF project. If you\'re familiar with Prometheus, there\nare probably a couple of reasons people mainly choose to deploy it:\nmetrics collection and visualization and alerting.'),(0,r.kt)("p",null,"Prometheus is also tremendously flexible. It has numerous available plugins and supports integrating with a wide number of systems.\nAccording\nto ",(0,r.kt)("a",{parentName:"p",href:"https://www.cncf.io/blog/2022/03/08/cloud-native-observability-microsurvey-prometheus-leads-the-way-but-hurdles-remain-to-understanding-the-health-of-systems/"},"this CNCF survey"),'\n, Prometheus leads the pack when it comes to the project people go to for observability. Its popularity is probably because Prometheus is a\nCNCF project and is often considered the "default" solution to deploy on another wildly popular CNCF project\ncalled ',(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes"),". One interesting aspect of Prometheus is that it generally favors a poll-based approach to\nmetrics collection instead of a push-based model."),(0,r.kt)("h3",{id:"poll-based"},"Poll-based?"),(0,r.kt)("p",null,"I don't know about you, but historically when I've thought about a metrics collection agent, I tend to think of an agent that reads a log\nfile or some library that pushes rows into a giant data lake in the cloud. I don't generally think about a solution that implements\npoll-based metrics. Often, this is because the target of a poll-based collecting agent will probably be behind a firewall."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"FW",src:n(1610).Z,width:"489",height:"276"})),(0,r.kt)("p",null,"As you would expect, firewalls make it exceptionally difficult to implement a poll-based solution as firewalls have been known to make a\nhabit of preventing external actors from accessing random http servers behind it! After all, that is their primary function!"),(0,r.kt)("p",null,"The Prometheus project makes ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/pushing/"},"strong arguments")," explaining the benefits of a poll-based\nsolution. They also realize that firewalls are important in creating a safe network and understand the challenges firewalls create for such\na solution. To deal with these situations, the project also provides a ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/instrumenting/pushing/"},"PushGateway"),".\nThis allows solutions to push their data to a location outbound of the firewall. Pushing data out of the firewall allows metrics and\nalerting to function without the worry (and maintenance heartache) of an open, inbound firewall hole."),(0,r.kt)("h3",{id:"acceptable-risk"},"Acceptable Risk"),(0,r.kt)("p",null,'Prometheus is often deployed into Kubernetes clusters, but it can be deployed anywhere. Taking the operational differences out of the\nequation, there is little difference between deploying Prometheus in a Kubernetes cluster and deploying it in one\'s data center. Once\ndeployed, the needs will be the same. Prometheus will need to be authorized to reach out and scrape the targets it needs to scrape. All too\noften, this is done with relatively open network permissions. Even though we all know it\'s not the most secure way of authorizing\nPrometheus, this is often considered "safe enough" because we deployed Prometheus into a zone considered "safe". Managing firewall rules to\nall the computers Prometheus needs access to, feels like an impossible feat. There are just too many.'),(0,r.kt)("p",null,"To add to our acceptable risk, we will need to be able to access the Prometheus server in some way. We'll want to get at the UI, see the\ncharts and graphs and data it provides and use the server to its fullest. For that, we'll ",(0,r.kt)("strong",{parentName:"p"},"of course"),"\nneed a hole in our firewall, or in the case of Kubernetes we will probably deploy some form of\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"Kubernetes Ingress Controller")," to provide users access\nthe service."),(0,r.kt)("p",null,"What we need are better and richer controls over our network. We need a better way of authorizing Prometheus without the hassle of\nmaintaining firewall rules on individual machines. We also need a way to do this across multiple clouds, multiple Kubernetes clusters and\nmultiple data centers. Let's see how OpenZiti can solve this problem while also enhancing our overall security."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"openziti"},"OpenZiti"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://openziti.github.io"},"OpenZiti")," project allows us to solve all the problems outlined above. It is a fully-featured, zero trust\noverlay network and enables ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Zero_trust_security_model"},"zero trust networking principles")," to be applied\nanywhere. This includes bringing those zero trust principles directly into your application through one of the many SDKs provided\nby the project. Let's look at an example and see what a setup might look like before and after applying OpenZiti."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Let's imagine that we have already deployed a solution using two Kubernetes clusters, ClusterA and ClusterB. It doesn't matter where the\nclusters are deployed. We are trying to illustrate a real-world situation where we have two separate Kubernetes clusters that we want to\nmanage. The clusters could be deployed in the same cloud provider, in a private data center, in different cloud providers, it really does\nnot matter. What is important, is that these clusters are available over the network. To enable access to the workloads inside the\nclusters, some form of Kubernetes ingress controller will be required on both clusters. In our example, we will have a workload deployed\nwhich exposes a prometheus scrape target we want Prometheus to monitor."),(0,r.kt)("h4",{id:"figure-1---before-openziti"},"Figure 1 - Before OpenZiti"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Before OpenZiti",src:n(7050).Z,width:"1099",height:"534"})),(0,r.kt)("h3",{id:"taking-a-closer-look"},"Taking a Closer Look"),(0,r.kt)("p",null,"Looking at the diagram above with a discerning eye towards security, there are some immediate observations one can make."),(0,r.kt)("h4",{id:"listening-ports"},"Listening Ports"),(0,r.kt)("p",null,"One observation we have already accepted from the overview, is that these clusters must be exposed via the internet. At first that doesn't\nseem like a big deal, we expose workloads like this to the internet all the time. This is a perfectly normal action, it's likely\ndone every day somewhere in the world. It's so common, we almost don't even think about it until the time comes when we ",(0,r.kt)("strong",{parentName:"p"},"need")," to\nthink about it. This ends up in an exposed port, listening somewhere in the world. There might be a firewall with complex rules to\nprotect this port, but it's just as likely that this isn't the case. People might need to access the resources inside these clusters\nfrom anywhere. "),(0,r.kt)("h4",{id:"kubernetes-api-exposed"},"Kubernetes API Exposed"),(0,r.kt)("p",null,"Another observation is that the Kubernetes API is fully exposed to the internet. This API is a very high-value target and should be\nsecured as strongly as possible. That probably means yet another complex firewall rule to maintain."),(0,r.kt)("h4",{id:"trusted-intra-cluster-traffic"},'"Trusted" Intra-cluster Traffic'),(0,r.kt)("p",null,'The final point to note is that the traffic within the cluster is considered safe. As mentioned above, the Prometheus server needs to be\nable to scrape the target workloads. That traffic is necessary to be considered safe. Also, notice that the pod for Prometheus contains a\ncontainer named "configmap-reload" which is used to trigger a webhook on the Prometheus server when the\n',(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/configmap/"},"Kubernetes config map")," changes. This is necessary when changing the\nPrometheus config, adding new scrape configs etc."),(0,r.kt)("hr",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"authors-dovholuknf"},"authors: dovholuknf"),(0,r.kt)("h3",{id:"applying-zero-trust-networking-principles-using-openziti"},"Applying Zero Trust Networking Principles Using OpenZiti"),(0,r.kt)("p",null,"Now that we understand the basic setup and understand some possible problems, let's see if OpenZiti can address one or more of these\nissues. When applying OpenZiti, the goal will be to strengthen our security posture for each of the above items."),(0,r.kt)("h4",{id:"figure-2---after-openziti"},"Figure 2 - After OpenZiti"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"after",src:n(1283).Z,width:"1264",height:"531"})),(0,r.kt)("h3",{id:"taking-a-closer-look-after-openziti"},"Taking a Closer Look After OpenZiti"),(0,r.kt)("h4",{id:"no-external-listening-ports"},"No External Listening Ports"),(0,r.kt)("p",null,"With a classic deployment as shown in the initial design, we know there will be ports exposed to the open internet. In an ideal scenario,\nthere would be absolutely no ports exposed on the open internet ",(0,r.kt)("strong",{parentName:"p"},"nor")," in the \"trusted networking zone\". It's immediately obvious after\napplying a solution using OpenZiti that those listening ports exposed by the Kubernetes ingress controller are no longer deployed and thus\nare no longer exposed to the internet. That's one attack vector eliminated. OpenZiti will initiate outbound mTLS connections among all the\nconstituent pieces of the overlay network. This means connections will begin inside the trusted network zone and only create outbound\nlinks. Once established, those connections can be used to safely transfer data between any participating edge node."),(0,r.kt)("p",null,'This capability really can\'t be emphasized enough. With OpenZiti and with applications that use an OpenZiti SDK, such as the ones shown,\nthere are no open ports to attack. This network is nearly impervious to the classical "land and expand" technique so many bad actors\nlook to exploit.'),(0,r.kt)("h4",{id:"kubernetes-api-no-longer-exposed"},"Kubernetes API no Longer Exposed"),(0,r.kt)("p",null,"Another significant benefit provided by OpenZiti is starting to come into focus. By having access to our clusters provided\nthrough OpenZiti, we can ",(0,r.kt)("strong",{parentName:"p"},"stop exposing")," the Kubernetes APIs for both clusters to the open internet. Prometheus will still be able to\nmonitor each Kubernetes cluster through the private Kubernetes network. Accessing Prometheus will be provided via OpenZiti, instead of\nusing a Kubernetes ingress controller. Later, we can ues the built-in capability Prometheus already provides to federate information\nfrom the clusters to a centralized, ",(0,r.kt)("a",{parentName:"p",href:"/blog/zitification"},"zitified")," Prometheus server."),(0,r.kt)("p",null,"Once no longer exposed to the open internet, to maintain our Kubernetes cluster we could then turn to ","[zitified]","\n(../index.md) tools. The OpenZiti project provides zitified versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," -\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti-incubator/kubectl"},"kubeztl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," -\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti-incubator/helm"},"helmz"),". Each of these tools have an OpenZiti SDK embedded inside them. This allows both\ntools to connect to the private Kubernetes API over the OpenZiti overlay network. To use them, you will need a strong, OpenZiti identity\nas well as be authorized to access the service. Also note that we're also not replacing the existing security constraints the\nKubernetes ecosystem already provides. You can (and should) still secure your Kubernetes clusters using namespaces, roles, etc. "),(0,r.kt)("p",null,"We'll explore ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeztl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"helmz")," in future articles."),(0,r.kt)("h4",{id:"trusted-intra-cluster-traffic-1"},'"Trusted" Intra-cluster Traffic'),(0,r.kt)("p",null,'Lastly, let\'s turn our eyes toward the traffic running inside the Kubernetes cluster. Pay attention to the lines in orange and the lines in\ndark blue. Orange lines represent "private" traffic, traffic that needs to traverse the private network space.'),(0,r.kt)("p",null,"At this point we cannot send traffic to the Kubernetes API via the overlay network. The Kubernetes API doesn't have an OpenZiti SDK\nembedded within it. That means when we deploy Prometheus into ClusterA and ClusterB to monitor the cluster, Prometheus will be forced to\nconnect to a port exposed on the cluster's underlay network. Still, while not ideal, we have greatly improved the overall security\nposture of the cluster. We're no longer able to access the Kubernetes API without first gaining access to the zero trust overlay\nnetwork. Accessing the Kubernetes API will also require the identity to be properly authorized to access the service attaching to the\nKubernetes API. "),(0,r.kt)("p",null,"Let's now focus on ClusterA. It contains a Prometheus server that decided against listening on the OpenZiti overlay. This means it\nwill need to expose ports to the Kubernetes underlay network. The container inside the Prometheus pod will watch for configmap\nchanges. To trigger the webhook, it will be forced to send unauthenticated webhook traffic to the Prometheus server on the underlay\nnetwork in order to trigger the config to reload."),(0,r.kt)("p",null,'Still, accessing this cluster and the listening Prometheus server will require being on the OpenZiti overlay. Also, this Prometheus\nserver does have an OpenZiti SDK built into it. We also deployed the "reflectz" workload with an OpenZiti SDK built into it as well.\nThat means the Prometheus server must scrape the "reflectz" workload exclusively over the OpenZiti overlay. ',(0,r.kt)("strong",{parentName:"p"},"Only")," authorized\nidentities can access that scrape data."),(0,r.kt)("p",null,"Contrast ClusterA with ClusterB. ClusterB deployed a Prometheus server with an embedded OpenZiti SDK and chose to provide its services\nexclusively on the OpenZiti overlay. We've also deployed a zitified \"reflectz\" workload here. Notice how little traffic traverses the\nKubernetes cluster underlay network. The only traffic which needs to traverse the cluster's underlay network in ClusterB is the traffic\nwhich monitors the Kubernetes API. All other traffic in the cluster is now secured by the OpenZiti overlay network. You will\nneed a strong identity, and you will need to be authorized on the overlay before even being allowed to connect to the target service."),(0,r.kt)("h2",{id:"openziti-enabled-prometheus"},"OpenZiti-Enabled Prometheus"),(0,r.kt)("p",null,"We are now coming to the final piece of the puzzle. We have protected both Kubernetes clusters using OpenZiti. Now we want to bring all\nthis data back to a centralized Prometheus server to make it easier on our user base. To do this, we'll again deploy an OpenZiti-enabled\nPrometheus server. This time we don't care where it is deployed except that we know we are not deploying it into either of the Kubernetes\nclusters we are already using. Since the Prometheus servers are all now accessible via the overlay network, we can literally deploy our\nserver anywhere in the world. It could be on development server, it could be deployed in some other cloud, it could be deployed in our\nprivate data center. Because it's part of the overlay network, it no longer matters where we deploy the server. Wherever deployed,\nall it will need is outbound internet access, a strong identity, and access and authorization to services defined in the OpenZiti overlay\nnetwork. Once that's done, OpenZiti will take care of the rest."),(0,r.kt)("p",null,"If you have made it this far you're might want to try all this for yourself. The ",(0,r.kt)("a",{parentName:"p",href:"/blog/zitification/prometheus/part2"},"next article")," will go into the details\nnecessary to implement this solution. When complete you'll be able to deploy a zitified version of Prometheus and give Prometheus the power\nto scrape anything from anywhere using OpenZiti."))}p.isMDXComponent=!0},1610:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/fw-b1c8555546b90b5151f6ede0e27d7111.png"},1283:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubernetes-prometheus-after-1c432161cd5ceac47eadc4149cae35fb.svg"},7050:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubernetes-prometheus-before-15c1791d4c7ba9b5960fa1af5bacb258.svg"}}]);