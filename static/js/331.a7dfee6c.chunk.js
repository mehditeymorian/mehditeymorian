"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[331],{1727:function(e,i,n){n.d(i,{Z:function(){return a}});n(2791);var r=n(184),t=function(e){var i=e.data;return(0,r.jsxs)("article",{className:"jobs-container",children:[(0,r.jsxs)("header",{children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("a",{href:i.link,children:i.company})," - ",i.position]}),(0,r.jsxs)("p",{className:"daterange",children:[" ",i.daterange]})]}),(0,r.jsx)("ul",{className:"points",children:i.points.map((function(e){return(0,r.jsx)("li",{children:e},e)}))})]})},s=function(e){var i=e.data,n=e.title;return(0,r.jsxs)("div",{className:"experience",children:[(0,r.jsx)("div",{className:"link-to",id:"experience"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:n})}),i.map((function(e){return(0,r.jsx)(t,{data:e},e.company)}))]})};s.defaultProps={data:[],title:"Experience"};var a=s},7752:function(e,i,n){n(2791);var r=n(1523),t=n(184);i.Z=function(){return(0,t.jsxs)("div",{className:"references",children:[(0,t.jsx)("div",{className:"link-to",id:"references"}),(0,t.jsx)("div",{className:"title",children:(0,t.jsx)(r.rU,{to:"/contact",children:(0,t.jsx)("h3",{children:"References are available upon request"})})})]})}},331:function(e,i,n){n.r(i),n.d(i,{default:function(){return f}});n(2791);var r=n(1523),t=n(4806),s=n(184),a=function(e){var i=e.data;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:i.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:i.link,children:i.school}),", ",i.year[0]," - ",i.year[1]]}),(0,s.jsx)("p",{children:i.description})]})})},c=function(e){var i=e.data;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),i.map((function(e){return(0,s.jsx)(a,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,d=function(e){var i=e.data,n=e.last;return(0,s.jsxs)("li",{className:"course-container",children:[(0,s.jsxs)("a",{href:i.link,children:[(0,s.jsxs)("h4",{className:"course-number",children:[i.number,":"]}),(0,s.jsx)("p",{className:"course-name",children:i.title})]}),!n&&(0,s.jsx)("div",{className:"course-dot",children:(0,s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};d.defaultProps={last:!1};var u=d,h=function(e){return e.sort((function(e,i){var n=0;return e.university>i.university?n=-1:e.university<i.university||e.number>i.number?n=1:e.number<i.number&&(n=-1),n})).map((function(i,n){return(0,s.jsx)(u,{data:i,last:n===e.length-1},i.title)}))},o=function(e){var i=e.data;return(0,s.jsxs)("div",{className:"courses",children:[(0,s.jsx)("div",{className:"link-to",id:"courses"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Selected Courses"})}),(0,s.jsx)("ul",{className:"course-list",children:h(i)})]})};o.defaultProps={data:[]};var m=o,p=n(7752),v=n(1727),y=[{title:"Structured Programming",number:"19/20",link:"https://yazd.ac.ir",university:"Yazd University"},{title:"Discrete Mathematics",number:"20/20",link:"https://yazd.ac.ir",university:"Yazd University"},{title:"Object Oriented Programming",number:"20/20",link:"https://yazd.ac.ir",university:"Yazd University"},{title:"Statistics",number:"20/20",link:"https://yazd.ac.ir",university:"Yazd University"},{title:"Algorithms",number:"19.3/20",link:"https://yazd.ac.ir",university:"Yazd University"},{title:"Data Structures",number:"17.75/20",link:"https://yazd.ac.ir",university:"Yazd University"},{title:"Applied Mathematics",number:"19/20",link:"https://yazd.ac.ir",university:"Yazd University"},{title:"Compiler",number:"20/20",link:"https://en.sbu.ac.ir",university:"Shahid Beheshti University"},{title:"Introduction to Signal Processing",number:"19.66/20",link:"https://en.sbu.ac.ir",university:"Shahid Beheshti University"},{title:"Artificial Intelligence",number:"18.94/20",link:"https://en.sbu.ac.ir",university:"Shahid Beheshti University"},{title:"Web Engineering",number:"20/20",link:"https://en.sbu.ac.ir",university:"Shahid Beheshti University"}],x=[{school:"Yazd University",degree:"B.e. Computer Engineering",link:"https://yazd.ac.ir/en",year:[2018,2023],description:"Thesis: Intelligent Othello game agent trained by deep reinforcement learning"},{school:"Shahid Beheshti University",degree:"B.e. Computer Engineering",link:"https://en.sbu.ac.ir",year:[2020,2022],description:"Guest Student"},{school:"Emam High school",degree:"Diploma Mathematics",link:"#",year:[2014,2018],description:""}],j=[{company:"Amirkabir University",position:"Teaching Assistant",link:"https://aut.ac.ir/en",daterange:"February 2022 - July 2022",points:["Internet Engineering, Dr. Parham Alvani, Spring 2022"]},{company:"Shahid Beheshti University",position:"Teaching Assistant",link:"https://en.sbu.ac.ir",daterange:"February 2021 - July 2022",points:["Advanced Programming, Dr. Sadegh Aliakbari, Spring 2021","Compiler, Professor Jaberi, Fall 2021","Compiler, Professor Jaberi, Spring 2022"]},{company:"Yazd University",position:"Teaching Assistant",link:"https://yazd.ac.ir/en",daterange:"February 2020 \u2013 July 2020",points:["Advanced Programming Lecture, Dr. Zare Bidoki, Spring 2020","Electric Circuit Lecture, Dr. Sadr, Spring 2020"]}],g=["Education","References"],f=function(){return(0,s.jsx)(t.Z,{title:"Education",description:"Mehdi Teymorian's Education. Computer Engineering Undergraduate",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h2",{"data-testid":"heading",children:(0,s.jsx)(r.rU,{to:"education",children:"Education"})}),(0,s.jsx)("div",{className:"link-container",children:g.map((function(e){return(0,s.jsx)("h4",{children:(0,s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,s.jsx)(l,{data:x}),(0,s.jsx)(v.Z,{data:j,title:"Academic Experience"}),(0,s.jsx)(m,{data:y}),(0,s.jsx)(p.Z,{})]})})}}}]);
//# sourceMappingURL=331.a7dfee6c.chunk.js.map