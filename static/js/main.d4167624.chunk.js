(this.webpackJsonpnbportfolio=this.webpackJsonpnbportfolio||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/978A0641.0bb253e6.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/LI.e7cfb64d.png"},25:function(e,a,t){e.exports=t.p+"static/media/GH.4eb836ff.png"},31:function(e,a,t){e.exports=t.p+"static/media/Capture1.4ee659ba.PNG"},32:function(e,a,t){e.exports=t.p+"static/media/notes.ab0606e4.PNG"},33:function(e,a,t){e.exports=t.p+"static/media/Capture30.3c2f507e.png"},34:function(e,a,t){e.exports=t.p+"static/media/Capture4.237af299.PNG"},35:function(e,a,t){e.exports=t.p+"static/media/Capture6.9c4203ee.PNG"},36:function(e,a,t){e.exports=t.p+"static/media/Capture18.46c18bb3.PNG"},37:function(e,a,t){e.exports=t.p+"static/media/Fitness.f02ff080.PNG"},38:function(e,a,t){e.exports=t.p+"static/media/Planner.d8adc068.PNG"},39:function(e,a,t){e.exports=t.p+"static/media/PWGEN.ccd13d33.PNG"},43:function(e,a,t){e.exports=t(58)},53:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),o=t.n(l),i=t(11),s=t(5),c=t(59),m=t(60),u=t(26),p=t(61),d=t(23),h=t.n(d),E=t(24),g=t.n(E),b=t(25),f=t.n(b);var y=function(){return r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(c.a,{className:"glass"},r.a.createElement("h1",null,"About Me"),r.a.createElement(m.a,null,r.a.createElement(u.a,{xs:3},r.a.createElement(p.a,{src:h.a,rounded:!0,style:{height:"15rem",width:"11rem"}}),r.a.createElement("a",{href:"https://www.linkedin.com/in/nboutin",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.a,{src:g.a,style:{paddingTop:"1rem",height:"4rem",width:"11rem"}})),r.a.createElement("a",{href:"https://github.com/nboutin109",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.a,{src:f.a,style:{paddingTop:"1rem",height:"4rem",width:"11rem"}}))),r.a.createElement(u.a,{md:9},r.a.createElement("span",{style:{textAlign:"left"}},"My name is Nicholas Boutin and I am currently searching for a position to start my career in the technology industry. I am a recent graduate of "),r.a.createElement("span",{style:{textDecoration:"underline"}},"Georgia Institute of Technology's full-stack web design bootcamp"),r.a.createElement("span",null," and I also posess a Bachelor's in Business Administration from Georgia State University. I currently hold a position at the Coca-Cola Atlanta headquarters as an events/meetings ambassador and previously worked in the hotel industry."),r.a.createElement("p",null),r.a.createElement("p",null,"My current skillset includes:"),r.a.createElement("ul",null,r.a.createElement("li",{style:{textIndent:"1rem"}},"HTML, CSS, and Javascript"),r.a.createElement("li",{style:{textIndent:"1rem"}},"jQuery and bootstrap"),r.a.createElement("li",{style:{textIndent:"1rem"}},"MongoDB and SQL/MySQL"),r.a.createElement("li",{style:{textIndent:"1rem"}},"React.js (used to make this portfolio)"),r.a.createElement("li",{style:{textIndent:"1rem"}},"Node.js, Express.js, and multiple NPM packages"),r.a.createElement("li",{style:{textIndent:"1rem"}},"RESTful APIS"),r.a.createElement("li",{style:{textIndent:"1rem"}},"Currently learning Angular.js and animation")),r.a.createElement("p",null,"If you would like to know more about me you can also",r.a.createElement("a",{href:"https://drive.google.com/file/d/1Bcv7ymDJhWPY6byXyqdspvvIq0YruS3e/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",style:{color:"white"}}," view my resume here")),r.a.createElement("br",null),r.a.createElement("p",null,"I can be contacted through my email ",r.a.createElement("a",{href:"mailto:nboutin109@gmail.com",style:{color:"white"}},"nboutin109@gmail.com")," or through ",r.a.createElement("a",{href:"https://nboutin109.github.io/Nicholas-Boutin-Coding-Portfolio/contact",style:{color:"white"}},"this form"))))))},v=t(27),k=t(28),N=t(29),x=t(42),w=t(41),C=t(62),T=t(64),I=t(30),B=t(14),P=t.n(B),A=function(e){Object(x.a)(t,e);var a=Object(w.a)(t);function t(){var e;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",company:"",email:"",message:""},e.handleChange=function(a,t){e.setState(Object(v.a)({},a,t.target.value))},e}return Object(N.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t={name:a.name,company:a.company,email:a.email,message:a.message};I.send("service_wuify9c","template_eysun2c",t,"user_vCKER3fc5KPLMVxrNRVQK").then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.log(e)})),this.resetForm(),P()("#thanks").removeClass("invisible"),setTimeout((function(){P()("#thanks").addClass("invisible")}),5e3)}},{key:"resetForm",value:function(){this.setState({name:"",company:"",email:"",message:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(c.a,{style:{textAlign:"left"}},r.a.createElement(u.a,{xs:"auto"},r.a.createElement("h4",{style:{paddingTop:"1rem",fontWeight:"bold"}},"Thanks for taking a peek at my portfolio!"),r.a.createElement("h4",{style:{fontWeight:"bold"}},"If you would like to contact me about any opportunities, please use the form below."),r.a.createElement(C.a,{onSubmit:this.handleSubmit.bind(this)},r.a.createElement(C.a.Group,{controlId:"name"},r.a.createElement(C.a.Label,null,"Please enter your name"),r.a.createElement(C.a.Control,{type:"text",name:"name",placeholder:"Your name here",size:"lg",style:{maxWidth:"50rem"},value:this.state.name,onChange:this.handleChange.bind(this,"name"),required:!0})),r.a.createElement(C.a.Group,{controlId:"company"},r.a.createElement(C.a.Label,null,"What is the name of your company?"),r.a.createElement(C.a.Control,{type:"text",name:"company",placeholder:"Your companys' name (if applicable)",size:"lg",style:{maxWidth:"50rem"},value:this.state.company,onChange:this.handleChange.bind(this,"company")})),r.a.createElement(C.a.Group,{controlId:"email"},r.a.createElement(C.a.Label,null,"Please enter your email address"),r.a.createElement(C.a.Control,{type:"email",name:"email",placeholder:"Your email here",size:"lg",style:{maxWidth:"50rem"},value:this.state.email,onChange:this.handleChange.bind(this,"email")})),r.a.createElement(C.a.Group,{controlId:"message"},r.a.createElement(C.a.Label,null,"Please input your message here:"),r.a.createElement(C.a.Control,{as:"textarea",row:5,name:"message",placeholder:"Your message here",size:"lg",style:{maxWidth:"50rem"},value:this.state.message,onChange:this.handleChange.bind(this,"message")})),r.a.createElement(T.a,{variant:"primary",type:"submit",id:"submit",style:{backgroundColor:"green",marginBottom:"1rem"}},"Send")),r.a.createElement("div",{role:"alert",id:"thanks",className:"alert alert-success invisible",style:{maxWidth:"50rem"}},"Thanks! I'll get back to you soon!"))))}}]),t}(n.Component),_=t(63),j=t(31),L=t.n(j),S=t(32),z=t.n(S),G=t(33),M=t.n(G),W=t(34),J=t.n(W),Q=t(35),V=t.n(Q),U=t(36),D=t.n(U),q=t(37),O=t.n(q),R=t(38),Y=t.n(R),F=t(39),H=t.n(F);t(53);var K=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};var X=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(m.a,null,r.a.createElement("h1",{style:{paddingTop:"1rem",paddingLeft:"1rem"}},"Samples from github")),r.a.createElement(m.a,{style:{display:"flex"}},r.a.createElement(K,null,r.a.createElement(_.a,{border:"info",className:"cardEdit"},r.a.createElement(_.a.Img,{variant:"top",src:O.a,style:{paddingTop:"1rem",height:"200px"},className:"zoom"}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Fitness tracker"),r.a.createElement(_.a.Text,null,"A fitness tracking app which allows the user to input their workouts and view past ones. Uses node.js and MongoDB."),r.a.createElement("br",null),r.a.createElement(T.a,{variant:"outline-primary",className:"btn1",href:"https://github.com/nboutin109/Fitness-Tracker",target:"_blank",rel:"noopener noreferrer"},"View Code"),r.a.createElement(T.a,{variant:"outline-success",className:"btn2",href:"https://mongo-fitness-tracker109.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live site")))),r.a.createElement(K,null,r.a.createElement(_.a,{border:"info",className:"cardEdit"},r.a.createElement(_.a.Img,{variant:"top",src:z.a,className:"zoom",style:{paddingTop:"1rem",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Express note application"),r.a.createElement(_.a.Text,null,"An application made with Node and Express which allows the user to take, delete, and save notes. Uses Express."),r.a.createElement("br",null),r.a.createElement(T.a,{variant:"outline-primary",className:"btn1",href:"https://github.com/nboutin109/Express-Notetaker",target:"_blank",rel:"noopener noreferrer"},"View code"),r.a.createElement(T.a,{variant:"outline-success",className:"btn2",href:"https://express-notetaker-app109.herokuapp.com/notes",target:"_blank",rel:"noopener noreferrer"},"Live site")))),r.a.createElement(K,null,r.a.createElement(_.a,{border:"info",className:"cardEdit"},r.a.createElement(_.a.Img,{variant:"top",src:M.a,className:"zoom",style:{paddingTop:"1rem",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Stock tracker"),r.a.createElement(_.a.Text,null,"A webpage which can display stock information and news for searched companies. Uses multiple AJAX calls and Handlebars."),r.a.createElement(T.a,{variant:"outline-primary",className:"btn1",href:"https://github.com/nboutin109/Stock-and-news-tracker",target:"_blank",rel:"noopener noreferrer"},"View code"),r.a.createElement(T.a,{variant:"outline-success",className:"btn2",href:" https://stock-and-news-tracker.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live site"))))),r.a.createElement(m.a,null,r.a.createElement(K,null,r.a.createElement(_.a,{border:"info",className:"cardEdit"},r.a.createElement(_.a.Img,{variant:"top",className:"zoom",src:J.a,style:{paddingTop:"1rem",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"MySQL workplace manager"),r.a.createElement(_.a.Text,null,"A CLI application which keeps track of entered employees, departments, and other details. Uses MySQL and Node.js."),r.a.createElement(T.a,{variant:"outline-primary",className:"btn1",href:"https://github.com/nboutin109/MySQL-employee-manager",target:"_blank",rel:"noopener noreferrer"},"View code")))),r.a.createElement(K,null,r.a.createElement(_.a,{border:"info",className:"cardEdit"},r.a.createElement(_.a.Img,{variant:"top",className:"zoom",src:V.a,style:{paddingTop:"1rem",width:"285px",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Weather forecast"),r.a.createElement(_.a.Text,null,"A webpage which can show a 5-day forecast for a searched city. Uses jQuery with AJAX calls."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T.a,{variant:"outline-primary",className:"btn1",href:"https://github.com/nboutin109/Weather-forecast-API",target:"_blank"},"View code"),r.a.createElement(T.a,{variant:"outline-success",className:"btn2",href:"https://nboutin109.github.io/Weather-forecast-API/",target:"_blank",rel:"noopener noreferrer"},"Live site")))),r.a.createElement(K,null,r.a.createElement(_.a,{border:"info",className:"cardEdit"},r.a.createElement(_.a.Img,{variant:"top",className:"zoom",src:D.a,style:{paddingTop:"1rem",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Budget Tracker"),r.a.createElement(_.a.Text,null,"A webpage app which keeps track of a user's inputted debits and credits on a graph, also caches data for offline use. Uses Node.js and MongoDB."),r.a.createElement(T.a,{variant:"outline-primary",className:"btn1",href:"https://github.com/nboutin109/Budget-tracker",target:"_blank",rel:"noopener noreferrer"},"View code"),r.a.createElement(T.a,{variant:"outline-success",className:"btn2",href:"https://mongo-budget-tracker109.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live site"))))),r.a.createElement(m.a,null,r.a.createElement(K,null,r.a.createElement(_.a,{border:"info",className:"cardEdit"},r.a.createElement(_.a.Img,{variant:"top",className:"zoom",src:L.a,style:{paddingTop:"1rem",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Javascript Quiz"),r.a.createElement(_.a.Text,null,"A Javascript quiz with a timer that also keeps the users' score. Uses Javascript and jQuery."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T.a,{variant:"outline-primary",className:"btn1",href:"https://github.com/nboutin109/Javascript-knowledge-quiz",target:"_blank",rel:"noopener noreferrer"},"View code"),r.a.createElement(T.a,{variant:"outline-success",className:"btn2",href:"https://nboutin109.github.io/Javascript-knowledge-quiz/",target:"_blank",rel:"noopener noreferrer"},"Live site")))),r.a.createElement(K,null,r.a.createElement(_.a,{border:"info",className:"cardEdit"},r.a.createElement(_.a.Img,{variant:"top",className:"zoom",src:Y.a,style:{paddingTop:"1rem",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"Day planner app"),r.a.createElement(_.a.Text,null,"A day planner application which allows events to be scheduled for working hours and keeps time. Uses Javascript, jQuery, and moment.js."),r.a.createElement(T.a,{variant:"outline-primary",className:"btn1",href:"https://github.com/nboutin109/Day-planner",target:"_blank",rel:"noopener noreferrer"},"View code"),r.a.createElement(T.a,{variant:"outline-success",className:"btn2",href:"https://nboutin109.github.io/Day-planner/",target:"_blank",rel:"noopener noreferrer"},"Live site")))),r.a.createElement(K,null,r.a.createElement(_.a,{border:"info",className:"cardEdit"},r.a.createElement(_.a.Img,{variant:"top",className:"zoom",src:H.a,style:{paddingTop:"1rem",height:"200px"}}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,"this.code"),r.a.createElement(_.a.Text,null,"The code used to make this portfolio. Uses React and node.js."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T.a,{variant:"outline-primary",className:"btn1",href:"https://github.com/nboutin109/React-Portfolio",target:"_blank",rel:"noopener noreferrer"},"View code")))))))};t(54);var Z=function(){var e=Object(s.e)();return r.a.createElement("ul",{className:"nav nav-tabs",style:{backgroundColor:"white"}},r.a.createElement("li",{className:"nav-item",style:{paddingRight:"1rem"}},r.a.createElement("h3",null,"Nicholas Boutin")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/Nicholas-Boutin-Coding-Portfolio/",className:"/Nicholas-Boutin-Coding-Portfolio/"===e.pathname?"nav-link active":"nav-link"},"About me")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/Nicholas-Boutin-Coding-Portfolio/portfolio",className:"/Nicholas-Boutin-Coding-Portfolio/portfolio"===e.pathname?"nav-link active":"nav-link"},"Portfolio")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/Nicholas-Boutin-Coding-Portfolio/contact",className:"/Nicholas-Boutin-Coding-Portfolio/contact"===e.pathname?"nav-link active":"nav-link"},"Contact")))};var $=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(K,null,r.a.createElement(s.a,{exact:!0,path:"/Nicholas-Boutin-Coding-Portfolio/",component:y}),r.a.createElement(s.a,{exact:!0,path:"/Nicholas-Boutin-Coding-Portfolio/about",component:y}),r.a.createElement(s.a,{exact:!0,path:"/Nicholas-Boutin-Coding-Portfolio/portfolio",component:X}),r.a.createElement(s.a,{exact:!0,path:"/Nicholas-Boutin-Coding-Portfolio/contact",component:A}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d4167624.chunk.js.map