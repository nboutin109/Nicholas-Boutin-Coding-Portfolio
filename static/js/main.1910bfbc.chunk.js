(this.webpackJsonpnbportfolio=this.webpackJsonpnbportfolio||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/978A0641.0bb253e6.jpg"},25:function(e,a,t){e.exports=t.p+"static/media/LI.e919b798.png"},26:function(e,a,t){e.exports=t.p+"static/media/GH.6cab5c0e.png"},32:function(e,a,t){e.exports=t.p+"static/media/Capture1.4ee659ba.PNG"},33:function(e,a,t){e.exports=t.p+"static/media/notes.ab0606e4.PNG"},34:function(e,a,t){e.exports=t.p+"static/media/Capture30.3c2f507e.png"},35:function(e,a,t){e.exports=t.p+"static/media/Capture4.237af299.PNG"},36:function(e,a,t){e.exports=t.p+"static/media/Capture6.9c4203ee.PNG"},37:function(e,a,t){e.exports=t.p+"static/media/Capture18.46c18bb3.PNG"},38:function(e,a,t){e.exports=t.p+"static/media/Fitness.ded20238.PNG"},39:function(e,a,t){e.exports=t.p+"static/media/Planner.d8adc068.PNG"},40:function(e,a,t){e.exports=t.p+"static/media/PWGEN.0ad699c4.PNG"},44:function(e,a,t){e.exports=t(58)},54:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),o=t.n(l),i=t(11),c=t(5),s=(t(20),t(59)),m=t(60),p=t(27),u=t(61),h=t(24),d=t.n(h),g=t(25),E=t.n(g),f=t(26),y=t.n(f);var b=function(){return r.a.createElement("div",null,r.a.createElement(s.a,{style:{textAlign:"left"}},r.a.createElement("h1",{style:{paddingLeft:"0",paddingTop:"1rem"}},"About Me"),r.a.createElement(m.a,null,r.a.createElement(p.a,{md:3},r.a.createElement(u.a,{src:d.a,rounded:!0,style:{height:"15rem",width:"11rem"}}),r.a.createElement("a",{href:"https://www.linkedin.com/in/nboutin",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,{src:E.a,style:{padding:"1rem",height:"5rem",width:"13rem"}})),r.a.createElement("a",{href:"https://github.com/nboutin109",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,{src:y.a,style:{padding:"1rem",height:"5rem",width:"13rem"}}))),r.a.createElement(p.a,{md:9},r.a.createElement("span",{style:{textAlign:"left"}},"My name is Nicholas Boutin and I am currently searching for a position to start my career in the technology industry. I am a recent graduate of "),r.a.createElement("span",{style:{textDecoration:"underline"}},"Georgia Institute of Technology's full-stack web design bootcamp"),r.a.createElement("span",null," and I also posess a Bachelor's in Business Administration from Georgia State University. I currently hold a position at the Coca-Cola Atlanta headquarters as an events/meetings ambassador and previously worked in the hotel industry."),r.a.createElement("p",null),r.a.createElement("p",null,"My current skillset includes:"),r.a.createElement("p",{style:{textIndent:"1rem"}},"HTML, CSS, and Javascript"),r.a.createElement("p",{style:{textIndent:"1rem"}},"jQuery and bootstrap"),r.a.createElement("p",{style:{textIndent:"1rem"}},"MongoDB and MySQL"),r.a.createElement("p",{style:{textIndent:"1rem"}},"React and Reactstrap (used to make this portfolio)"),r.a.createElement("p",{style:{textIndent:"1rem"}},"Node.js, express, and multiple NPM packages"),r.a.createElement("p",null,"If you would like to know more about me you can also"),r.a.createElement("a",{href:"https://drive.google.com/file/d/1I0pwWar30BVUy9-WB2yZmC-JeuAd8Sl4/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"View my full resume here")),r.a.createElement("p",null)))))},v=t(28),w=t(29),k=t(30),x=t(43),C=t(42),T=t(62),N=t(64),I=t(31),P=t(14),B=t.n(P),A=function(e){Object(x.a)(t,e);var a=Object(C.a)(t);function t(){var e;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",company:"",email:"",message:"",errors:[]},e.handleChange=function(a,t){e.setState(Object(v.a)({},a,t.target.value))},e}return Object(k.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t={name:a.name,company:a.company,email:a.email,message:a.message};I.send("service_wuify9c","template_eysun2c",t,"user_vCKER3fc5KPLMVxrNRVQK").then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.log(e)})),this.resetForm(),B()("#thanks").html("Thanks! I'll get back to you soon!"),setTimeout((function(){B()("#thanks").fadeOut().empty()}),5e3)}},{key:"resetForm",value:function(){this.setState({name:"",company:"",email:"",message:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(s.a,{style:{textAlign:"left"}},r.a.createElement(p.a,{xs:"auto"},r.a.createElement("h4",{style:{paddingTop:"1rem",fontWeight:"bold"}},"Thanks again for taking a peek at my portfolio!"),r.a.createElement("h4",{style:{fontWeight:"bold"}},"If you would like to contact me about any opportunities, please use the form below."),r.a.createElement(T.a,{onSubmit:this.handleSubmit.bind(this)},r.a.createElement(T.a.Group,{controlId:"name"},r.a.createElement(T.a.Label,null,"Please enter your name"),r.a.createElement(T.a.Control,{type:"text",name:"name",placeholder:"Your name here",size:"lg",style:{maxWidth:"50rem"},value:this.state.name,onChange:this.handleChange.bind(this,"name"),required:!0})),r.a.createElement(T.a.Group,{controlId:"company"},r.a.createElement(T.a.Label,null,"What is the name of your company?"),r.a.createElement(T.a.Control,{type:"text",name:"company",placeholder:"Your companys' name (if applicable)",size:"lg",style:{maxWidth:"50rem"},value:this.state.company,onChange:this.handleChange.bind(this,"company")})),r.a.createElement(T.a.Group,{controlId:"email"},r.a.createElement(T.a.Label,null,"Please enter your email address"),r.a.createElement(T.a.Control,{type:"email",name:"email",placeholder:"Your email here",size:"lg",style:{maxWidth:"50rem"},value:this.state.email,onChange:this.handleChange.bind(this,"email")})),r.a.createElement(T.a.Group,{controlId:"message"},r.a.createElement(T.a.Label,null,"Please input your message here:"),r.a.createElement(T.a.Control,{as:"textarea",row:5,name:"message",placeholder:"Your message here",size:"lg",style:{maxWidth:"50rem"},value:this.state.message,onChange:this.handleChange.bind(this,"message")})),r.a.createElement(N.a,{variant:"primary",type:"submit",id:"submit"},"Send"),r.a.createElement("div",{className:"text-danger",id:"thanks"}))),r.a.createElement(p.a,{xs:"auto"})))}}]),t}(n.Component),_=t(63),L=t(32),G=t.n(L),S=t(33),V=t.n(S),W=t(34),M=t.n(W),j=t(35),J=t.n(j),z=t(36),O=t.n(z),D=t(37),Q=t.n(D),q=t(38),F=t.n(q),R=t(39),Y=t.n(R),K=t(40),H=t.n(K);t(54);var U=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};var X=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(m.a,null,r.a.createElement("h1",{style:{paddingTop:"1rem",paddingLeft:"1rem"}},"Samples from github")),r.a.createElement(m.a,null,r.a.createElement(U,null,r.a.createElement(_.a,{style:{width:"18rem"}},r.a.createElement(_.a.Img,{variant:"top",src:G.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Javascript Quiz"),r.a.createElement(_.a.Text,null,"A Javascript quiz with a timer that also keeps the users' score, made with jQuery."),r.a.createElement(N.a,{variant:"primary",href:"https://github.com/nboutin109/Javascript-knowledge-quiz",target:"_blank",rel:"noopener noreferrer"},"View code"),r.a.createElement(N.a,{variant:"primary",style:{float:"right",backgroundColor:"green"},href:"https://nboutin109.github.io/Javascript-knowledge-quiz/",target:"_blank",rel:"noopener noreferrer"},"Live site")))),r.a.createElement(U,null,r.a.createElement(_.a,{style:{width:"18rem"}},r.a.createElement(_.a.Img,{variant:"top",src:V.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Express note application"),r.a.createElement(_.a.Text,null,"An application made with Node and Express which allows the user to take, delete, and save notes."),r.a.createElement(N.a,{variant:"primary",href:"https://github.com/nboutin109/Express-Notetaker",target:"_blank",rel:"noopener noreferrer"},"View code"),r.a.createElement(N.a,{variant:"primary",style:{float:"right",backgroundColor:"green"},href:"https://express-notetaker-app109.herokuapp.com/notes",target:"_blank",rel:"noopener noreferrer"},"Live site")))),r.a.createElement(U,null,r.a.createElement(_.a,{style:{width:"18rem"}},r.a.createElement(_.a.Img,{variant:"top",src:M.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Stock tracker"),r.a.createElement(_.a.Text,null,"A webpage which can display stock information and news for searched companies using API calls."),r.a.createElement(N.a,{variant:"primary",href:"https://github.com/nboutin109/Stock-and-news-tracker",target:"_blank",rel:"noopener noreferrer"},"View code"),r.a.createElement(N.a,{variant:"primary",style:{float:"right",backgroundColor:"green"},href:" https://stock-and-news-tracker.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live site"))))),r.a.createElement(m.a,null,r.a.createElement(U,null,r.a.createElement(_.a,{style:{width:"18rem"}},r.a.createElement(_.a.Img,{variant:"top",src:J.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"MySQL workplace manager"),r.a.createElement(_.a.Text,null,"A CLI application which allows one to manage a workplace by adding and removing employees and their details from a database."),r.a.createElement(N.a,{variant:"primary",href:"https://github.com/nboutin109/MySQL-employee-manager",target:"_blank",rel:"noopener noreferrer"},"View code")))),r.a.createElement(U,null,r.a.createElement(_.a,{style:{width:"18rem"}},r.a.createElement(_.a.Img,{variant:"top",src:O.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Weather forecast"),r.a.createElement(_.a.Text,null,"A webpage which can show a 5-day forecast for a searched city using AJAX and information from outside websites."),r.a.createElement(N.a,{variant:"primary",href:"https://github.com/nboutin109/Weather-forecast-API",target:"_blank"},"View code"),r.a.createElement(N.a,{variant:"primary",style:{float:"right",backgroundColor:"green"},href:"https://nboutin109.github.io/Weather-forecast-API/",target:"_blank",rel:"noopener noreferrer"},"Live site")))),r.a.createElement(U,null,r.a.createElement(_.a,{style:{width:"18rem"}},r.a.createElement(_.a.Img,{variant:"top",src:Q.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Budget Tracker"),r.a.createElement(_.a.Text,null,"A webpage app which keeps track of a user's inputted debits and credits on a graph, also caches data for offline use."),r.a.createElement(N.a,{variant:"primary",href:"https://github.com/nboutin109/Budget-tracker",target:"_blank",rel:"noopener noreferrer"},"View code"))))),r.a.createElement(m.a,null,r.a.createElement(U,null,r.a.createElement(_.a,{style:{width:"18rem"}},r.a.createElement(_.a.Img,{variant:"top",src:F.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Fitness tracker"),r.a.createElement(_.a.Text,null,"A fitness tracking app which allows the user to input their workouts and view past ones via a Mongo Database."),r.a.createElement(N.a,{variant:"primary",href:"https://github.com/nboutin109/Fitness-Tracker",target:"_blank",rel:"noopener noreferrer"},"View Code")))),r.a.createElement(U,null,r.a.createElement(_.a,{style:{width:"18rem"}},r.a.createElement(_.a.Img,{variant:"top",src:Y.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Day planner app"),r.a.createElement(_.a.Text,null,"A day planner application which allows events to be scheduled for working hours and keeps time."),r.a.createElement(N.a,{variant:"primary",href:"https://github.com/nboutin109/Day-planner",target:"_blank",rel:"noopener noreferrer"},"View code"),r.a.createElement(N.a,{variant:"primary",style:{float:"right",backgroundColor:"green"},href:"https://nboutin109.github.io/Day-planner/",target:"_blank",rel:"noopener noreferrer"},"Live site")))),r.a.createElement(U,null,r.a.createElement(_.a,{style:{width:"18rem"}},r.a.createElement(_.a.Img,{variant:"top",src:H.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Password Generator"),r.a.createElement(_.a.Text,null,"A webpage which generates a password to the user's specification."),r.a.createElement(N.a,{variant:"primary",href:"https://github.com/nboutin109/Javascript-password-generator",target:"_blank",rel:"noopener noreferrer"},"View code"),r.a.createElement(N.a,{variant:"primary",style:{float:"right",backgroundColor:"green"},href:"https://nboutin109.github.io/Javascript-password-generator/",target:"_blank",rel:"noopener noreferrer"},"Live site")))))))};var Z=function(){var e=Object(c.e)();return r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement("li",{className:"nav-item",style:{paddingRight:"1rem"}},r.a.createElement("h3",null,"Nicholas Boutin")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/Nicholas-Boutin-Coding-Portfolio/",className:"/Nicholas-Boutin-Coding-Portfolio/"===e.pathname?"nav-link active":"nav-link"},"About me")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/Nicholas-Boutin-Coding-Portfolio/portfolio",className:"/Nicholas-Boutin-Coding-Portfolio/portfolio"===e.pathname?"nav-link active":"nav-link"},"Portfolio")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/Nicholas-Boutin-Coding-Portfolio/contact",className:"/Nicholas-Boutin-Coding-Portfolio/contact"===e.pathname?"nav-link active":"nav-link"},"Contact")))};var $=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(U,null,r.a.createElement(c.a,{exact:!0,path:"/Nicholas-Boutin-Coding-Portfolio/",component:b}),r.a.createElement(c.a,{exact:!0,path:"/Nicholas-Boutin-Coding-Portfolio/about",component:b}),r.a.createElement(c.a,{exact:!0,path:"/Nicholas-Boutin-Coding-Portfolio/portfolio",component:X}),r.a.createElement(c.a,{exact:!0,path:"/Nicholas-Boutin-Coding-Portfolio/contact",component:A}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1910bfbc.chunk.js.map