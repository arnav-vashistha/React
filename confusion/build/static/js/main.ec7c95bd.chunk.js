(window.webpackJsonpconfusion=window.webpackJsonpconfusion||[]).push([[0],{102:function(e,t,a){},109:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(19),o=a.n(l),s=(a(101),a(102),a(12)),c=a(13),m=a(16),i=a(14),u=a(15),d=a(6),E=(a(109),a(49)),p=a(2),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).toggleModal=function(){a.setState({isModalOpen:!a.state.isModalOpen})},a.handleLogin=function(e){a.toggleModal(),alert("Username: "+a.username.value+" Password: "+a.password.value+" Remember: "+a.remember.checked),e.preventDefault()},a.toggleNav=a.toggleNav.bind(Object(E.a)(a)),a.state={isNavOpen:!1,isModalOpen:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(p.A,{onClick:this.toggleNav}),r.a.createElement(p.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(p.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(p.w,{navbar:!0},r.a.createElement(p.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(p.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(p.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(p.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(p.w,{className:"ml-auto",navbar:!0},r.a.createElement(p.x,null,r.a.createElement(p.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(p.q,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(p.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(p.v,{toggle:this.toggleModal},"Login"),r.a.createElement(p.u,null,r.a.createElement(p.n,{onSubmit:this.handleLogin},r.a.createElement(p.o,null,r.a.createElement(p.r,{htmlFor:"username"},"Username"),r.a.createElement(p.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(p.o,null,r.a.createElement(p.r,{htmlFor:"password"},"Password"),r.a.createElement(p.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(p.o,{check:!0},r.a.createElement(p.r,{check:!0},r.a.createElement(p.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(p.c,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component),h=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},g="http://localhost:3001/",b=a(24);function v(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(h,null):n?r.a.createElement("h4",null,n):r.a.createElement(b.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(p.d,null,r.a.createElement(p.g,{src:g+t.image,alt:t.name}),r.a.createElement(p.e,null,r.a.createElement(p.k,null,t.name),t.designation?r.a.createElement(p.i,null,t.designation):null,r.a.createElement(p.j,null,t.description))))}var N=function(e){return console.log(e),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))};var O=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h,null))):this.props.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,this.props.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(p.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(p.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},this.props.dishes.dishes.map(function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.id},r.a.createElement(p.d,{key:e.id},r.a.createElement(d.b,{to:"/menu/".concat(e.id)},r.a.createElement(p.g,{width:"100%",src:g+e.image,alt:e.name}),r.a.createElement(p.h,null,r.a.createElement(p.k,null,e.name)))))})))}}]),t}(n.Component),w=a(8),j=function(e){return e&&e.length},M=function(e){return function(t){return!t||t.length<=e}},k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={isModelOpen:!1},a.toggleModal=function(){a.setState({isModalOpen:!a.state.isModalOpen})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment),this.toggleModal()}},{key:"render",value:function(){var e,t=this;return r.a.createElement(n.Fragment,null,r.a.createElement(p.c,{outline:!0,color:"secondary",onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil"}," ","Submit Comment")),r.a.createElement(p.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(p.v,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(p.u,null,r.a.createElement(w.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{htmlFor:"rating",md:12},"Rating"),r.a.createElement(p.l,{md:12},r.a.createElement(w.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{htmlFor:"author",md:12},"Your Name"),r.a.createElement(p.l,{md:12},r.a.createElement(w.Control.text,{model:".author",name:"author",className:"form-control",placeholder:"Enter Your Name",validators:{required:j,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:M(15)}}),r.a.createElement(w.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{htmlFor:"comment",md:12},"Comment"),r.a.createElement(p.l,{md:12},r.a.createElement(w.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control",validators:{required:j}}),r.a.createElement(w.Errors,{className:"text-danger",model:".comment",show:"touched",messages:{required:"Required"}}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.l,{md:12},r.a.createElement(p.c,{type:"submit",color:"primary"},"Submit")))))))}}]),t}(n.Component);function L(e){var t=e.comments,a=e.dishId,l=e.postComment;return r.a.createElement(n.Fragment,null,r.a.createElement(b.Stagger,{in:!0},t.map(function(e){return r.a.createElement(b.Fade,{in:!0},r.a.createElement("li",{key:e.id},e.comment,r.a.createElement("br",null),"--",e.author," , ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))})),r.a.createElement("br",null),r.a.createElement(k,{dishId:a,postComment:l}))}var D=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.props.isLoading)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h,null)));if(this.props.errMess)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,this.props.errMess)));if(null!=this.props.dish){var e=this.props.dish,t=e.image,a=e.name,n=e.description,l=this.props.comments;return console.log(l),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(p.b,null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement(p.b,{active:!0},this.props.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,this.props.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(b.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(p.d,null,r.a.createElement(p.g,{top:!0,src:g+t,alt:a}),r.a.createElement(p.e,null,r.a.createElement(p.k,null,a),r.a.createElement(p.j,null,n))))),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h3",null," Comments"),r.a.createElement(L,{comments:l,postComment:this.props.postComment,dishId:this.props.dish.id}))))}}}]),t}(n.Component),S=function(e){return e&&e.length},C=function(e){return function(t){return!t||t.length<=e}},P=function(e){return function(t){return t&&t.length>=e}},F=function(e){return!isNaN(Number(e))},x=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},A=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.postFeedback(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(p.a,null,r.a.createElement(p.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(p.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(w.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(p.l,{md:10},r.a.createElement(w.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:S,minLength:P(3),maxLength:C(15)}}),r.a.createElement(w.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(p.l,{md:10},r.a.createElement(w.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:S,minLength:P(3),maxLength:C(15)}}),r.a.createElement(w.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(p.l,{md:10},r.a.createElement(w.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:S,isNumber:F,minLength:P(3),maxLength:C(15)}}),r.a.createElement(w.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",isNumber:"Only Numbers",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(p.l,{md:10},r.a.createElement(w.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:S,validEmail:x}}),r.a.createElement(w.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(p.r,{check:!0},r.a.createElement(w.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(p.l,{md:{size:3,offset:1}},r.a.createElement(w.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(p.l,{md:10},r.a.createElement(w.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.l,{md:{size:10,offset:2}},r.a.createElement(p.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component);function I(e){var t=e.leader;return r.a.createElement(p.s,{tag:"li"},r.a.createElement(p.s,{left:!0,middle:!0},r.a.createElement(p.s,{object:!0,src:g+t.image,alt:t.name})),r.a.createElement(p.s,{body:!0,className:"ml-5"},r.a.createElement(p.s,{heading:!0},t.name),r.a.createElement("h5",null,t.designation),r.a.createElement("p",null,t.description)))}var T=function(e){var t=e.leaders,a=e.leadersLoading,n=e.leadersErrMess;return a?(console.log("leader load ho rahe hain"),r.a.createElement(h,null)):n?r.a.createElement("h4",null,n):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(p.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(p.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(p.d,null,r.a.createElement(p.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(p.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(p.d,null,r.a.createElement(p.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(p.s,{list:!0},r.a.createElement(b.Stagger,{in:!0},t.map(function(e){return r.a.createElement(b.Fade,{in:!0},r.a.createElement("div",{key:e.id,className:"col-12 mt-5"},r.a.createElement(I,{leader:e})))}))))))},R=a(22),q=function(e){return{type:"ADD_COMMENT",payload:e}},_=function(){return{type:"DISHES_LOADING"}},B=function(e){return{type:"DISHES_FAILED",payload:e}},H=function(e){return{type:"ADD_DISHES",payload:e}},G=function(e){return{type:"COMMENTS_FAILED",payload:e}},W=function(e){return{type:"ADD_COMMENTS",payload:e}},Y=function(){return{type:"PROMOS_LOADING"}},U=function(e){return{type:"PROMOS_FAILED",payload:e}},J=function(e){return{type:"ADD_PROMOS",payload:e}},K=function(){return{type:"LEADERS_LOADING"}},z=function(e){return{type:"LEADERS_FAILED",payload:e}},Z=function(e){return{type:"ADD_LEADERS",payload:e}},$=a(54),Q=function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"onDishSelect",value:function(e){console.log(e),this.setState({selectedDish:e})}},{key:"render",value:function(){var e=this;return console.log(this.props.location),console.log(this.props.leaders),r.a.createElement("div",null,r.a.createElement(f,null),null!=this.props.selectedDish?r.a.createElement(D,{dish:this.props.dishes.filter(function(t){return t.id===e.props.selectedDish})[0]}):"",r.a.createElement($.TransitionGroup,null,r.a.createElement($.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(d.f,null,r.a.createElement(d.e,{path:"/home",component:function(){return r.a.createElement(N,{dish:e.props.dishes.dishes.filter(function(e){return e.featured})[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter(function(e){return e.featured})[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter(function(e){return e.featured})[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(d.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(y,{dishes:e.props.dishes})}}),r.a.createElement(d.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(D,{dish:e.props.dishes.dishes.filter(function(e){return e.id===parseInt(a.params.dishId,10)})[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter(function(e){return e.dishId===parseInt(a.params.dishId,10)}),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(d.e,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(A,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(d.e,{path:"/aboutus",component:function(){return r.a.createElement(T,{leaders:e.props.leaders.leaders,leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(d.d,{to:"/home"})))),r.a.createElement(O,null))}}]),t}(n.Component),V=Object(d.g)(Object(R.connect)(function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}},function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(g+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw e}).then(function(e){return e.json()}).then(function(e){return r(q(e))}).catch(function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)})}}(t,a,n,r))},postFeedback:function(t,a,n,r,l,o,s){return e(function(e,t,a,n,r,l,o){return function(s){var c={firstname:e,lastname:t,telnum:a,email:n,agree:r,contactType:l,message:o};return c.date=(new Date).toISOString(),fetch(g+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw e}).then(function(e){return e.json()}).then(function(e){return s(q(e))}).catch(function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)})}}(t,a,n,r,l,o,s))},fetchDishes:function(){e(function(e){return e(_(!0)),fetch(g+"dishes").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(H(t))}).catch(function(t){return e(B(t.message))})})},resetFeedbackForm:function(){e(w.actions.reset("feedback"))},fetchComments:function(){e(function(e){return fetch(g+"comments").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(W(t))}).catch(function(t){return e(G(t.message))})})},fetchPromos:function(){e(function(e){return e(Y()),fetch(g+"promotions").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(J(t))}).catch(function(t){return e(U(t.message))})})},fetchLeaders:function(){e(function(e){return e(K(!0)),fetch(g+"leaders").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(Z(t))}).catch(function(t){return e(z(t.message))})})}}})(Q)),X=a(20),ee=a(23),te=a(94),ae=a.n(te),ne=a(95),re=a.n(ne);function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(a,!0).forEach(function(t){Object(X.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return oe({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return oe({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return oe({},e,{isLoading:!1,errMess:t.payload});default:return e}};function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach(function(t){Object(X.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return me({},e,{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return me({},e,{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return me({},e,{comments:e.comments.concat(a)});default:return e}};function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,!0).forEach(function(t){Object(X.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return de({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return de({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return de({},e,{isLoading:!1,errMess:t.payload});default:return e}};function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach(function(t){Object(X.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return fe({},e,{isLoading:!1,errMess:null,leaders:t.payload});case"LEADERS_LOADING":return fe({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return fe({},e,{isLoading:!1,errMess:t.payload});default:return e}},ge={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""};function be(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var ve=function(){return Object(ee.createStore)(Object(ee.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?be(a,!0).forEach(function(t){Object(X.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):be(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({dishes:se,comments:ie,promotions:Ee,leaders:he},Object(w.createForms)({feedback:ge}))),Object(ee.applyMiddleware)(ae.a,re.a))},Ne=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=ve();return r.a.createElement(R.Provider,{store:e},r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(V,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(171),a(172);o.a.render(r.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,a){e.exports=a(173)}},[[96,1,2]]]);
//# sourceMappingURL=main.ec7c95bd.chunk.js.map