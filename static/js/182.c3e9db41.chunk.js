(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[182],{1182:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return g}});var n=i(2791),s=i(1523),r=i(4806),a=i(7892),o=i.n(a),c=i(184),l=function(t){var e=t.data;return(0,c.jsx)("div",{className:"tag-box",children:e.map((function(t){return(0,c.jsx)("span",{className:"tag",children:t})}))})},u=i(885),h=function(t){var e=t.data,i=(0,n.useState)(!1),s=(0,u.Z)(i,2),r=s[0],a=s[1],o=e.image.split("/"),l=o[o.length-1];return(0,c.jsx)("div",{children:(0,c.jsx)("img",{onClick:function(){a((function(t){return!t}))},className:r?"gallery-img-clicked":"gallery-img",src:"".concat("").concat(e.image),alt:l})})},d=function(t){var e=t.data;return(0,c.jsx)("div",{className:"gallery",children:e.map((function(t,e){return(0,c.jsx)(h,{data:t},e)}))})},f=function(t){var e=t.data;return(0,c.jsx)("div",{className:"cell-container",children:(0,c.jsxs)("article",{className:"mini-post",children:[(0,c.jsxs)("header",{children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:e.link,children:e.title})}),(0,c.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")}),(0,c.jsx)(l,{data:e.tags})]}),(0,c.jsx)("div",{className:"description-alone",children:(0,c.jsxs)("p",{children:[e.desc," ",(0,c.jsx)("a",{className:"link-to-project",href:e.link,children:" Link to Project "})]})}),0===e.images.length?null:(0,c.jsx)(d,{data:e.images})]})})},m=[{title:"Tag Recommendation System for Stackoverflow Questions",subtitle:"Suggests the top N tags with the highest similarity to the given tag",link:"https://github.com/mehditeymorian/JNotes/tree/main/stackoverflow",images:[],date:"2022",desc:"A matrix of tags is created and filled by Confidence(Tag1, Tag2). Confidence is a type of association rule for calculating closeness of items in a dataset. Confidence is the percentage of all transactions satisfying X that also satisfy Y.",tags:["Pandas"]},{title:"Complex Network Analysis",subtitle:"Analyzing a complex graph, which represents interaction between a group of people, using node fitness and connection count",link:"https://github.com/mehditeymorian/JNotes/tree/main/complex-network/characteristics-analysis",images:[],date:"2022",desc:"Analyzing random graph characteristics including average node degree, degree count, and degree change during cycles after applying an initial fitness to each node. These graphs represent an abstract overview of relationships in social media applications like facebook, instagram, and etc.",tags:["NetworkX"]},{title:"QSSE",subtitle:"SSE Over QUIC Protocol in Go",link:"https://github.com/snapp-incubator/qsse",images:[],date:"2022",desc:"Implementation of Server Sent Events by QUIC. A faster replacement for traditional SSE over HTTP/2.",tags:["QUIC","Go","SSE"]},{title:"WebRTC Video Call",subtitle:"Group Video Call using WebRTC",link:"https://github.com/mehditeymorian/webrtc-video-call",images:[],date:"2022",desc:"This project is a video calling application using WebRTC technology. It contains minimum requirements to provide a group video call. WebRTC is a free and open-source project providing web browsers and mobile applications with real-time communication via application programming interfaces.",tags:["JS","Go","WebRTC"]},{title:"Etefagh",subtitle:"HTTP server receives events and publishes them to STAN",link:"https://github.com/mehditeymorian/Etefagh",images:[],date:"2021",desc:"Publishes events to Nats Streaming(STAN) synchornously and asynchronously. Cache events's publish-state using Redis and Store events using MongoDB.",tags:["Go","Nats.io","Redis","MongoDB"]},{title:"Twitter Frontend",subtitle:"Twitter-ish Frontend wirtten with React",link:"https://github.com/mehditeymorian/twitter-react",images:[],date:"2020",desc:"This is a Twitter-like social media with pretty much everything Twitter has and more",tags:["React","JS"]},{title:"Cool Compiler",subtitle:"Compiler for Cool Programming Language",link:"https://github.com/mehditeymorian/Cool-Compiler",images:[],date:"2021",desc:"I wrote this project for Compiler course at Shahid Beheshti University Summer 2021. Java, PGen, ANTLR are the tools that I've leveraged to do this project.",tags:["Java","Assembly"]},{title:"Othello Game",subtitle:"Othello Game With Intelligent agent developed by Genetic Algorithms",link:"https://github.com/mehditeymorian/Othello-Game",images:[],date:"2020",desc:"Implementation of Othello game with model training using evolutionary alogrithms. This project consists of three section, game logic, Minimax tree for AI model and training using evolutionary algorithms.",tags:["Kotlin","Genetic Algorithms","Evolutionary Algorithms"]},{title:"HTTP Client Library",subtitle:"HTTP Client Library for sending http request",link:"https://github.com/mehditeymorian/HttpClient",images:[],date:"2020",desc:"Simple Http Client written for Internet Engineering Lecture.",tags:["Java","HTTP"]},{title:"Smart Task",subtitle:"odo list application with ability to categorized tasks.",link:"https://github.com/mehditeymorian/SmartTask",images:[],date:"2019",desc:"Todo list application with ability to categorized tasks. each task consist of a title, description, deadline, priority and etc. it support persian and english language. and also compatible with darker theme.",tags:["Android","Java","Jetpack"]},{title:"Microcontroller Based Oscillator",subtitle:"Generating different types of waves using a Microcontroller",link:"https://github.com/mehditeymorian/Microcontroller-Oscillator",images:[],date:"2021",desc:"A Microcontroller based Oscillator that produces a periodic, oscillating electronic signal, often a sine wave or a square wave. I used Stm32f microcontroller to complete this project. You can generate up to 8 different types of waves. Also Wave period and frequency are adjustable.",tags:["C","Signal Processing","STM32F","ARM"]}],g=function(){return(0,c.jsx)(r.Z,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:(0,c.jsxs)("article",{className:"post",id:"projects",children:[(0,c.jsx)("header",{children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{"data-testid":"heading",children:(0,c.jsx)(s.rU,{to:"/projects",children:"Projects"})}),(0,c.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),m.map((function(t){return(0,c.jsx)(f,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,i=36e5,n="millisecond",s="second",r="minute",a="hour",o="day",c="week",l="month",u="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],i=t%100;return"["+t+(e[(i-20)%10]||e[i]||e[0])+"]"}},v=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},y={s:v,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),s=i%60;return(e<=0?"+":"-")+v(n,2,"0")+":"+v(s,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),s=e.clone().add(n,l),r=i-s<0,a=e.clone().add(n+(r?-1:1),l);return+(-(n+(i-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:h,w:c,d:o,D:d,h:a,m:r,s:s,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",b={};b[$]=p;var S=function(t){return t instanceof j},w=function t(e,i,n){var s;if(!e)return $;if("string"==typeof e){var r=e.toLowerCase();b[r]&&(s=r),i&&(b[r]=i,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;b[o]=e,s=o}return!n&&s&&($=s),s||!n&&$},M=function(t,e){if(S(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new j(i)},T=y;T.l=w,T.i=S,T.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function p(t){this.$L=w(t.locale,null,!0),this.parse(t)}var v=p.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(T.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var s=n[2]-1||0,r=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return T},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var i=M(t);return this.startOf(e)<=i&&i<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,i){return T.u(t)?this[e]:this.set(i,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var i=this,n=!!T.u(e)||e,u=T.p(t),f=function(t,e){var s=T.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return n?s:s.endOf(o)},m=function(t,e){return T.w(i.toDate()[t].apply(i.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},g=this.$W,p=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case h:return n?f(1,0):f(31,11);case l:return n?f(1,p):f(0,p+1);case c:var $=this.$locale().weekStart||0,b=(g<$?g+7:g)-$;return f(n?v-b:v+(6-b),p);case o:case d:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case r:return m(y+"Seconds",2);case s:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var i,c=T.p(t),u="set"+(this.$u?"UTC":""),f=(i={},i[o]=u+"Date",i[d]=u+"Date",i[l]=u+"Month",i[h]=u+"FullYear",i[a]=u+"Hours",i[r]=u+"Minutes",i[s]=u+"Seconds",i[n]=u+"Milliseconds",i)[c],m=c===o?this.$D+(e-this.$W):e;if(c===l||c===h){var g=this.clone().set(d,1);g.$d[f](m),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[T.p(t)]()},v.add=function(n,u){var d,f=this;n=Number(n);var m=T.p(u),g=function(t){var e=M(f);return T.w(e.date(e.date()+Math.round(t*n)),f)};if(m===l)return this.set(l,this.$M+n);if(m===h)return this.set(h,this.$y+n);if(m===o)return g(1);if(m===c)return g(7);var p=(d={},d[r]=e,d[a]=i,d[s]=t,d)[m]||1,v=this.$d.getTime()+n*p;return T.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=T.z(this),r=this.$H,a=this.$m,o=this.$M,c=i.weekdays,l=i.months,u=function(t,i,s,r){return t&&(t[i]||t(e,n))||s[i].slice(0,r)},h=function(t){return T.s(r%12||12,t,"0")},d=i.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:T.s(o+1,2,"0"),MMM:u(i.monthsShort,o,l,3),MMMM:u(l,o),D:this.$D,DD:T.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,c,2),ddd:u(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:T.s(r,2,"0"),h:h(1),hh:h(2),a:d(r,a,!0),A:d(r,a,!1),m:String(a),mm:T.s(a,2,"0"),s:String(this.$s),ss:T.s(this.$s,2,"0"),SSS:T.s(this.$ms,3,"0"),Z:s};return n.replace(g,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var m,g=T.p(d),p=M(n),v=(p.utcOffset()-this.utcOffset())*e,y=this-p,$=T.m(this,p);return $=(m={},m[h]=$/12,m[l]=$,m[u]=$/3,m[c]=(y-v)/6048e5,m[o]=(y-v)/864e5,m[a]=y/i,m[r]=y/e,m[s]=y/t,m)[g]||y,f?$:T.a($)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return b[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=w(t,e,!0);return n&&(i.$L=n),i},v.clone=function(){return T.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),k=j.prototype;return M.prototype=k,[["$ms",n],["$s",s],["$m",r],["$H",a],["$W",o],["$M",l],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,j,M),t.$i=!0),M},M.locale=w,M.isDayjs=S,M.unix=function(t){return M(1e3*t)},M.en=b[$],M.Ls=b,M.p={},M}()}}]);
//# sourceMappingURL=182.c3e9db41.chunk.js.map