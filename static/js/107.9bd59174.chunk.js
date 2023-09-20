"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[107],{8107:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(2791),i=n(1523),a=n(4806),o=n(184),c=function(e){var t=e.data;return(0,o.jsx)("article",{className:"degree-container",children:(0,o.jsxs)("header",{children:[(0,o.jsx)("h4",{className:"degree",children:t.degree}),(0,o.jsxs)("p",{className:"school",children:[(0,o.jsx)("a",{href:t.link,children:t.school}),", ",t.year[0]," - ",t.year[1]]}),(0,o.jsx)("p",{children:t.description})]})})},s=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"education",children:[(0,o.jsx)("div",{className:"link-to",id:"education"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,o.jsx)(c,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(){return(0,o.jsxs)("div",{className:"references",children:[(0,o.jsx)("div",{className:"link-to",id:"references"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)(i.rU,{to:"/contact",children:(0,o.jsx)("h3",{children:"References are available upon request"})})})]})},p=function(e){var t=e.data;return(0,o.jsxs)("article",{className:"jobs-container",children:[(0,o.jsxs)("header",{children:[(0,o.jsxs)("h4",{children:[(0,o.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,o.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,o.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,o.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data,n=e.title;return(0,o.jsxs)("div",{className:"experience",children:[(0,o.jsx)("div",{className:"link-to",id:"experience"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:n})}),t.map((function(e){return(0,o.jsx)(p,{data:e},e.company)}))]})};d.defaultProps={data:[],title:"Experience"};var y=d;function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=n(9611);function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function v(e,t){if(t&&("object"===g(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}var j=n(4942),k=n(1413),x=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,o.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},D=function(e){var t=e.data,n=e.last;return(0,o.jsxs)("li",{className:"course-container",children:[(0,o.jsx)("p",{className:"course-name",children:t.title}),!n&&(0,o.jsx)("div",{className:"course-dot",children:(0,o.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};var S=D,O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,h.Z)(e,t)}(a,e);var t,n,r,i=b(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,k.Z)((0,k.Z)({},n),{},(0,j.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,k.Z)((0,k.Z)({},e),{},(0,j.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(e,t,n){return(0,o.jsx)(S,{last:t+1===n.length,data:{title:e.title}},e.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,o.jsx)(x,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,o.jsxs)("div",{className:"skills",children:[(0,o.jsx)("div",{className:"link-to",id:"skills"}),(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h3",{children:"Skills"}),(0,o.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,o.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,o.jsx)("div",{className:"courses",children:(0,o.jsx)("ul",{className:"course-list",children:this.getRows()})})]})}}])&&m(t.prototype,n),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.Component);O.defaultProps={skills:[],categories:[]};var w=O,N=[{school:"Yazd University",degree:"B.e. Computer Engineering",link:"https://yazd.ac.ir/en",year:[2018,2023],description:"Thesis: Intelligent Othello game agent trained by deep reinforcement learning"},{school:"Shahid Beheshti University",degree:"B.e. Computer Engineering",link:"https://en.sbu.ac.ir",year:[2020,2022],description:"Guest Student"},{school:"Emam High school",degree:"Diploma Mathematics",link:"#",year:[2014,2018],description:""}],P=[{company:"Amirkabir University",position:"Teaching Assistant",link:"https://aut.ac.ir/en",daterange:"February 2022 - July 2022",points:["Internet Engineering, Dr. Parham Alvani, Spring 2022"]},{company:"Shahid Beheshti University",position:"Teaching Assistant",link:"https://en.sbu.ac.ir",daterange:"February 2021 - July 2022",points:["Mentored 200+ students in 3 college semesters","Delivered lectures, assessed homework and course projects","Advanced Programming, Dr. Sadegh Aliakbari, Spring 2021","Compiler, Professor Jaberi, Fall 2021","Compiler, Professor Jaberi, Spring 2022"]},{company:"Yazd University",position:"Teaching Assistant",link:"https://yazd.ac.ir/en",daterange:"February 2020 \u2013 July 2020",points:["Mentored 100+ students in 1 college semester","Delivered lectures, assessed homework and course projects","Advanced Programming Lecture, Dr. Zare Bidoki, Spring 2020","Electric Circuit Lecture, Dr. Sadr, Spring 2020"]}],C=[{company:"Snapp!",position:"Software Engineer",link:"https://snapp.ir/",daterange:"October 2021 - Present",points:["Maintained stability of exchanging events with more than 270k concurrent clients using MQTT protocol in a mission-critical infrastructure team.","Created Snappline, a new sub-application of the Snapp super app for static daily rides, and managed the tech team to scale the user base to more than 2M users.","Developed and contributed to in-app messaging and audio calling services for more than 50M users."]},{company:"EBCOM",position:"Backend Developer",link:"https://ebcom.ir/",daterange:"April 2021 - September 2021",points:["Developing microservices using Java and Node.js","Maintaining old microservices","Work with different Bank vendors to achieve variety in payment methods"]},{company:"Cafe Bazaar",position:"Freelance Android Developer",link:"https://cafebazaar.ir/developer/945069160608?l=en",daterange:"January 2018 - April 2021",points:["Pursuing my passion in programming as an Android developer"]}],B=n(907);var A=n(181);var E,M=[{title:"Linux",competency:5,category:["Tools"]},{title:"Microservices",competency:5,category:["Backend Development"]},{title:"Node.js",competency:5,category:["Backend Development","Web Development"]},{title:"Go",competency:5,category:["Backend Development","Languages"]},{title:"Python",competency:5,category:["Data Science","Languages"]},{title:"Javascript",competency:5,category:["Web Development","Languages"]},{title:"React",competency:5,category:["Web Development"]},{title:"HTML",competency:5,category:["Web Development"]},{title:"CSS",competency:5,category:["Web Development"]},{title:"Java",competency:5,category:["Languages"]},{title:"Matlab",competency:5,category:["Data Science","Languages"]},{title:"Kotlin",competency:5,category:["Languages"]},{title:"C/C++",competency:5,category:["Languages"]},{title:"MYSQL",competency:5,category:["Databases"]},{title:"MongoDB",competency:5,category:["Databases"]},{title:"Redis",competency:5,category:["Databases"]},{title:"Elasticsearch/ELK Stack",competency:5,category:["Data Science","Backend Development"]},{title:"RabbitMQ",competency:5,category:["MessageBroker","Backend Development"]},{title:"NATS",competency:5,category:["MessageBroker","Backend Development"]},{title:"ActiveMQ",competency:5,category:["MessageBroker","Backend Development"]},{title:"EMQX",competency:5,category:["MessageBroker","Backend Development"]},{title:"NetworkX",competency:5,category:["Data Science"]},{title:"Numpy",competency:5,category:["Data Science"]},{title:"Matplotlib",competency:5,category:["Data Science"]},{title:"PyQT5",competency:5,category:["Data Science"]},{title:"Assembly",competency:5,category:["Languages"]},{title:"Antlr",competency:5,category:["Tools"]},{title:"Git",competency:5,category:["Tools"]},{title:"Github/Gitlab",competency:5,category:["Tools"]},{title:"Kubernetes",competency:5,category:["Devops"]},{title:"Docker",competency:5,category:["Devops"]},{title:"Grafana",competency:5,category:["Devops"]},{title:"OpenShift RedHat",competency:5,category:["Devops"]},{title:"Prometheus",competency:5,category:["Devops"]},{title:"WebRTC",competency:5,category:["Web Development"]},{title:"Bash",competency:5,category:["Languages"]},{title:"Redux",competency:5,category:["Web Development"]},{title:"Material UI",competency:5,category:["Web Development"]}].map((function(e){return(0,k.Z)((0,k.Z)({},e),{},{category:e.category.sort()})})),T=(E=new Set(M.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,B.Z)(e)}(E)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(E)||(0,A.Z)(E)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e){return{name:e}})),L=["Education","Experience","Skills","References"],R=function(){return(0,o.jsx)(a.Z,{title:"CV",description:"Mehdi Teymorian's CV. Computer Engineering Undergraduate",children:(0,o.jsxs)("article",{className:"post",id:"resume",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(i.rU,{to:"cv",children:"Curriculum Vitae"})}),(0,o.jsx)("div",{className:"link-container",children:L.map((function(e){return(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,o.jsx)(l,{data:N}),(0,o.jsx)(y,{data:C,title:"Working Experience"}),(0,o.jsx)(y,{data:P,title:"Academic Experience"}),(0,o.jsx)(w,{skills:M,categories:T}),(0,o.jsx)(u,{})]})})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=107.9bd59174.chunk.js.map