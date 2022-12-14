"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7368,7507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),a=n(22086);const l={},o="File Reporter",s={unversionedId:"core-concepts/metrics/file",id:"core-concepts/metrics/file",title:"File Reporter",description:"The Ziti Controller event system can write metrics to a file for direct viewing or post-processing into a metrics system of your choice.",source:"@site/docs/core-concepts/metrics/file.mdx",sourceDirName:"core-concepts/metrics",slug:"/core-concepts/metrics/file",permalink:"/docs/core-concepts/metrics/file",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/metrics/file.mdx",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"Metrics",permalink:"/docs/core-concepts/metrics/"},next:{title:"On Demand",permalink:"/docs/core-concepts/metrics/inspect"}},m={},p=[{value:"Ziti Configuration",id:"ziti-configuration",level:2},{value:"Metrics Reporting",id:"metrics-reporting",level:3},{value:"Metrics Writing",id:"metrics-writing",level:3},{value:"Metrics Subscription",id:"metrics-subscription",level:4},{value:"Example:",id:"example",level:5},{value:"Metrics Handling",id:"metrics-handling",level:4},{value:"File Rolling",id:"file-rolling",level:5},{value:"Example",id:"example-1",level:4},{value:"Putting it all together",id:"putting-it-all-together",level:3},{value:"Metric Examples",id:"metric-examples",level:2},{value:"intValue",id:"intvalue",level:3},{value:"Histogram",id:"histogram",level:3},{value:"Timer",id:"timer",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-reporter"},"File Reporter"),(0,i.kt)("p",null,"The Ziti Controller event system can write metrics to a file for direct viewing or post-processing into a metrics system of your choice."),(0,i.kt)("h2",{id:"ziti-configuration"},"Ziti Configuration"),(0,i.kt)("p",null,"There are two independent configurations that need to be set up for metric event reporting to work:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Report Interval:")," The controller and routers need to have a metric reporting interval set.  The interval determines how often metrics will be sent to the controller and possibly written out to file"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Event Subscription:")," The subscription is configured in the controller, and determines which of the reported metrics are written.")),(0,i.kt)("h3",{id:"metrics-reporting"},"Metrics Reporting"),(0,i.kt)("p",null,"The reporting interval is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics.reportInterval")," property. While the controller and each router can have a different reporting interval, we suggest that you set them all the same to make lining up metrics across the cluster easier."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"metrics:\n  reportInterval: 20s\n")),(0,i.kt)("p",null,"Routers support an additional configuration parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageQueueSize")," which is the number of unsent metrics messages that can sit in the router metrics queue before metrics gathering is paused."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"metrics:\n  reportInterval: 20s\n  messageQueueSize: 20  // Default 10\n")),(0,i.kt)("h3",{id:"metrics-writing"},"Metrics Writing"),(0,i.kt)("p",null,"Writing of metrics is broken into two pieces:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"subscription:")," Which metrics will be written"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"hander:")," how the metrics will be written")),(0,i.kt)("h4",{id:"metrics-subscription"},"Metrics Subscription"),(0,i.kt)("p",null,"The metrics subscription defines which metrics will be written and how they will be written. "),(0,i.kt)("p",null,"There are two parts to a metrics event reporter\nThe subscription has three components"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"sourceFilter:")," Which components to write metrics for. This is a regular expression. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ctrl_client:")," Special marker for the controller"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Router ID:")," Get metrics for one and only one router"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},".","*",":")," Get metrics from the controller and all routers"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"metricFilter:")," Which metrics to report.  This is a regular expression",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},".","*","pool.","*",":")," Report only pool metrics"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},".","*",":")," Report all metrics")))),(0,i.kt)("h5",{id:"example"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"events:\n  allControllerMetrics:\n    subscriptions:\n      - type: metrics\n        sourceFilter: ctrl_client\n        metricFilter: .*\n  justEdgeRouterPoolMetrics:\n    subscriptions:\n      - type: metrics\n        sourceFilter: .*\n        metricFilter: .*pool.*\n")),(0,i.kt)("h4",{id:"metrics-handling"},"Metrics Handling"),(0,i.kt)("p",null,"The metrics handler defined how metrics are to be written.  It is comprised of:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"type:")," The type of handler.  Supported types are:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"file:")," Metrics will be written to a file")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"maxsizemb:")," File rolling - log files will be rolled when they reach this size.  Default size is ",(0,i.kt)("inlineCode",{parentName:"li"},"10mb"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"maxbackups")," File rolling - the number of files to keep. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"0 (unlimited)"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"format:")," The format of the metric.  Supported formats are: ",(0,i.kt)("inlineCode",{parentName:"li"},"json")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"path:")," The name of the file to write metrics to")),(0,i.kt)("h5",{id:"file-rolling"},"File Rolling"),(0,i.kt)("p",null,"files are rolled when they reach a size of ",(0,i.kt)("inlineCode",{parentName:"p"},"maxsizemb"),". Files are renamed from ",(0,i.kt)("inlineCode",{parentName:"p"},"name.log")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"name-iso8601.log")),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"name-2022-06-07T18-50-44.568.log")),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("p",null,"Write 100mb files, saving 2 of them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    handler:\n      type: file\n      format: json\n      maxsizemb: 100\n      maxbackups: 2\n      path: /tmp/controller-metrics.log\n")),(0,i.kt)("h3",{id:"putting-it-all-together"},"Putting it all together"),(0,i.kt)("p",null,"Controller configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"metrics:\n  reportInterval: 20s\n\nevents:\n  allControllerMetrics:\n    subscriptions:\n      - type: metrics\n        sourceFilter: ctrl_client\n        metricFilter: .*\n    handler:\n      type: file\n      format: json\n      maxsizemb: 50\n      maxbackups: 2\n      path: /tmp/controller-metrics.log\n\n  justPoolMetrics:\n    subscriptions:\n      - type: metrics\n        sourceFilter: .*\n        metricFilter: .*pool.*\n    handler:\n      type: file\n      format: json\n      maxsizemb: 100\n      maxbackups: 5\n      path: /tmp/router-pool-metrics.log\n")),(0,i.kt)("p",null,"Router configuration files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"metrics:\n  reportInterval: 20s\n")),(0,i.kt)(a.default,{mdxType:"MetricTypesMd"}),(0,i.kt)("h2",{id:"metric-examples"},"Metric Examples"),(0,i.kt)("h3",{id:"intvalue"},"intValue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "metric_type": "intValue",\n  "namespace": "metrics",\n  "source_id": "ctrl_client",\n  "version": 2,\n  "timestamp": {\n    "seconds": 1654625684,\n    "nanos": 479708609\n  },\n  "metric": "pool.listener.mgmt.worker_count",\n  "metrics": {\n    "value": 1\n  },\n  "source_event_id": "acb85925-0e17-4ca0-90cb-9a2498b33bc8"\n}\n')),(0,i.kt)("h3",{id:"histogram"},"Histogram"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "metric_type": "histogram",\n  "namespace": "metrics",\n  "source_id": "ctrl_client",\n  "source_entity_id": "xpw7BEDAk",\n  "version": 2,\n  "timestamp": {\n    "seconds": 1654625684,\n    "nanos": 479708609\n  },\n  "metric": "ctrl.queue_time",\n  "metrics": {\n    "count": 57,\n    "max": 21647,\n    "mean": 15266.508771929824,\n    "min": 5753,\n    "p50": 15670,\n    "p75": 16558.5,\n    "p95": 18362.699999999997,\n    "p99": 21647,\n    "p999": 21647,\n    "p9999": 21647,\n    "std_dev": 2604.8795245927113,\n    "variance": 6785397.337642349\n  },\n  "source_event_id": "acb85925-0e17-4ca0-90cb-9a2498b33bc8"\n}\n')),(0,i.kt)("h3",{id:"timer"},"Timer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "metric_type": "timer",\n  "namespace": "metrics",\n  "source_id": "ctrl_client",\n  "version": 2,\n  "timestamp": {\n    "seconds": 1654625684,\n    "nanos": 479708609\n  },\n  "metric": "api.session.enforcer.run",\n  "metrics": {\n    "count": 11,\n    "m15_rate": 0.2,\n    "m1_rate": 0.2,\n    "m5_rate": 0.2,\n    "max": 6842849,\n    "mean": 1096126.3636363635,\n    "mean_rate": 0.20374652060865114,\n    "min": 254514,\n    "p50": 335348,\n    "p75": 1212318,\n    "p95": 6842849,\n    "p99": 6842849,\n    "p999": 6842849,\n    "p9999": 6842849,\n    "std_dev": 1858257.4031879376,\n    "variance": 3453120576502.777\n  },\n  "source_event_id": "acb85925-0e17-4ca0-90cb-9a2498b33bc8"\n}\n')))}u.isMDXComponent=!0},22086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var r=n(87462),i=(n(67294),n(3905));const a={},l="Types of Metrics Reported",o={unversionedId:"core-concepts/metrics/metric-types",id:"core-concepts/metrics/metric-types",title:"Types of Metrics Reported",description:"OpenZiti is instrumenting more code and adding additional metrics all of the time. This section will describe the different types of metrics that OpenZiti reports, not individual metric names.",source:"@site/docs/core-concepts/metrics/metric-types.md",sourceDirName:"core-concepts/metrics",slug:"/core-concepts/metrics/metric-types",permalink:"/docs/core-concepts/metrics/metric-types",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/metrics/metric-types.md",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"On Demand",permalink:"/docs/core-concepts/metrics/inspect"},next:{title:"Ziti Metrics",permalink:"/docs/core-concepts/metrics/overview"}},s={},m=[{value:"intValue/floatValue",id:"intvaluefloatvalue",level:2},{value:"Histogram",id:"histogram",level:2},{value:"Meter",id:"meter",level:2},{value:"Timer",id:"timer",level:2},{value:"Gauge",id:"gauge",level:2}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"types-of-metrics-reported"},"Types of Metrics Reported"),(0,i.kt)("p",null,"OpenZiti is instrumenting more code and adding additional metrics all of the time. This section will describe the different types of metrics that OpenZiti reports, not individual metric names."),(0,i.kt)("h2",{id:"intvaluefloatvalue"},"intValue/floatValue"),(0,i.kt)("p",null,"A gauge of a single value.  The value is the current metric value, and can go up and down over time"),(0,i.kt)("h2",{id:"histogram"},"Histogram"),(0,i.kt)("p",null,"  Histogram metrics utilize the Go metrics module, and are set to a 128 sample exponentially decaying bucket with a alpha value of .015.  This is important to understand, especially in reference to minimum and maximum values.  The bucket is sample bound, not time bound.  In practice this means one will often see a maximum or minimum value that carries on for several time samples; this is expected behavior. For example, link latency is measured every 10 seconds by default.  This means a maximum value can be in place for 21:40 minutes (128 * 10s).  When viewing the measurements, it is important to keep this in mind, as it may appear that a low or high value is more prevalent than it actually is, if you are  familiar with thinking of time bound buckets. The histogram implementation allows for extremely fast and memory efficient data collection.  As some of the metrics are multiplied by multiple levels of cardinality, it is critical to maintaining the operations of the software."),(0,i.kt)("p",null,"  An exponentially decaying histogram means that as the samples age across the 128 sample window, they are weighted less than the newer samples.  This makes functions, such as the mean, which is often used, able to respond more quickly to changes than a straight sliding window.  An alpha value of .015 means that the sample weights range from 1 (the newest sample) to approximately .93.  This means that when calculating the mean, the oldest sample in the window is weighted to 93%, reducing its contribution to the function."),(0,i.kt)("p",null,"  A simple weighting exercise:\nGiven 3 samples, 10, 5, and 5, how does the weighting and order affect the mean function? (This is not the same actual function of the histogram, but is intended to help explain the decaying function nd the impact of the age of the sample on the measurements)\n| Sample\t| Weight | Weighted Value |\n|--------|-------------|----------------|\n| 10 | 1.0 |\t10.0 |\n| 5\t| .95\t| 4.75 |\n| 5\t| .90\t| 4.5 |\n| Sum\t| 2.85 | 19.25 |\n| Mean\t| 19.25/2.85 | 6.75 |"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Sample"),(0,i.kt)("th",{parentName:"tr",align:null},"Weight"),(0,i.kt)("th",{parentName:"tr",align:null},"Weighted Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0"),(0,i.kt)("td",{parentName:"tr",align:null},"5.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},".95"),(0,i.kt)("td",{parentName:"tr",align:null},"4.75")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},".90"),(0,i.kt)("td",{parentName:"tr",align:null},"9.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sum"),(0,i.kt)("td",{parentName:"tr",align:null},"2.85"),(0,i.kt)("td",{parentName:"tr",align:null},"18.75")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mean"),(0,i.kt)("td",{parentName:"tr",align:null},"18.75/2.85"),(0,i.kt)("td",{parentName:"tr",align:null},"6.58")))),(0,i.kt)("p",null,"Standard histograms provide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"min"),(0,i.kt)("li",{parentName:"ul"},"max"),(0,i.kt)("li",{parentName:"ul"},"mean"),(0,i.kt)("li",{parentName:"ul"},"stdev"),(0,i.kt)("li",{parentName:"ul"},"variance"),(0,i.kt)("li",{parentName:"ul"},"percentiles",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"p50"),(0,i.kt)("li",{parentName:"ul"},"p75"),(0,i.kt)("li",{parentName:"ul"},"p95"),(0,i.kt)("li",{parentName:"ul"},"p99"),(0,i.kt)("li",{parentName:"ul"},"p999"),(0,i.kt)("li",{parentName:"ul"},"p9999")))),(0,i.kt)("p",null,"It is important to note the sample size (128) means the more specific percentiles will use the same actual values, and may be repetitive."),(0,i.kt)("h2",{id:"meter"},"Meter"),(0,i.kt)("p",null,"Meters are used for rate measurements, how much of something happened per unit time.  The samples are exponentially decayed, similar to the histogram, however the values are bound to specific time intervals, such as 1, 5, and 15 minutes.  They can also provide similar statistical values to histograms"),(0,i.kt)("p",null,"Meter metric with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"count"),(0,i.kt)("li",{parentName:"ul"},"m1_rate"),(0,i.kt)("li",{parentName:"ul"},"m5_rate"),(0,i.kt)("li",{parentName:"ul"},"m15_rate"),(0,i.kt)("li",{parentName:"ul"},"min"),(0,i.kt)("li",{parentName:"ul"},"max"),(0,i.kt)("li",{parentName:"ul"},"mean"),(0,i.kt)("li",{parentName:"ul"},"std_dev"),(0,i.kt)("li",{parentName:"ul"},"variance"),(0,i.kt)("li",{parentName:"ul"},"percentiles",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"p50"),(0,i.kt)("li",{parentName:"ul"},"p75"),(0,i.kt)("li",{parentName:"ul"},"p95"),(0,i.kt)("li",{parentName:"ul"},"p99"),(0,i.kt)("li",{parentName:"ul"},"p999"),(0,i.kt)("li",{parentName:"ul"},"p9999")))),(0,i.kt)("h2",{id:"timer"},"Timer"),(0,i.kt)("p",null,"Timers provide statistical samples of timed events. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"min"),(0,i.kt)("li",{parentName:"ul"},"max"),(0,i.kt)("li",{parentName:"ul"},"mean"),(0,i.kt)("li",{parentName:"ul"},"std_dev"),(0,i.kt)("li",{parentName:"ul"},"variance"),(0,i.kt)("li",{parentName:"ul"},"percentiles",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"p50"),(0,i.kt)("li",{parentName:"ul"},"p75"),(0,i.kt)("li",{parentName:"ul"},"p95"),(0,i.kt)("li",{parentName:"ul"},"p99"),(0,i.kt)("li",{parentName:"ul"},"p999"),(0,i.kt)("li",{parentName:"ul"},"p9999")))),(0,i.kt)("h2",{id:"gauge"},"Gauge"),(0,i.kt)("p",null,"Gauges present a point in time measurement of a metric.  For example, the number of open database transactions at a given moment."))}c.isMDXComponent=!0}}]);