(this["webpackJsonprecipe-ui"]=this["webpackJsonprecipe-ui"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),c=n(20),r=n.n(c),o=(n(45),n(7)),l=n(8),u=n(3),d=n(10),h=n(9),j=(n.p,n(46),n(16)),b=n(5),p=n.n(b),m=function(e){return Object(s.jsx)("div",{class:"card",children:Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("h5",{class:"card-title",children:Object(s.jsx)("a",{href:e.recipe.link,children:e.recipe.name})}),Object(s.jsxs)("p",{class:"card-text",children:[" This recipe has ",e.recipe.ingredients.length," ingredients. ",e.recipe.time.total?"Cook time is "+e.recipe.time.total:null]}),Object(s.jsx)(j.b,{to:"/recipes/"+e.recipe._id,children:"Show Detail"}),Object(s.jsx)("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModal",children:Object(s.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(s.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})}),Object(s.jsx)("div",{class:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(s.jsx)("div",{class:"modal-dialog",role:"document",children:Object(s.jsxs)("div",{class:"modal-content",children:[Object(s.jsxs)("div",{class:"modal-header",children:[Object(s.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Modal title"}),Object(s.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(s.jsx)("div",{class:"modal-body"}),Object(s.jsxs)("div",{class:"modal-footer",children:[Object(s.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(s.jsx)("button",{type:"button",class:"btn btn-primary",children:"Save changes"})]})]})})})]})})},g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).deleteRecipe=s.deleteRecipe.bind(Object(u.a)(s)),s.state={recipes:[]},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/recipes").then((function(t){e.setState({recipes:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteRecipe",value:function(e){p.a.delete("/api/recipes/"+e).then((function(e){console.log(e.data)})),this.setState({recipes:this.state.recipes.filter((function(t){return t._id!==e}))})}},{key:"recipeList",value:function(){var e=this;return this.state.recipes.map((function(t){return Object(s.jsx)(m,{recipe:t,deleteRecipe:e.deleteRecipe},t._id)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Recipes"}),Object(s.jsx)(j.b,{to:"/add",children:"Add"}),this.recipeList()]})}}]),n}(a.Component),O=n(76),x=n(77),f=n(78),v=n(21),y=n.n(v),C=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:e.recipe.name}),Object(s.jsx)("p",{children:e.recipe.link}),y.a.times(e.recipe.rating,(function(){return Object(s.jsx)("span",{class:"fa fa-star"})}))," Rated ",e.recipe.rating," Stars",Object(s.jsx)("br",{}),Object(s.jsx)("button",{class:"btn btn-primary",onClick:e.notify,children:"Text Me Ingredients!"}),Object(s.jsx)("img",{src:e.recipe.image,width:"100%"}),Object(s.jsxs)(O.a,{defaultActiveKey:"0",children:[Object(s.jsxs)(x.a,{children:[Object(s.jsx)(x.a.Header,{children:Object(s.jsx)(O.a.Toggle,{as:f.a,variant:"link",eventKey:"0",children:"Ingredients"})}),Object(s.jsx)(O.a.Collapse,{eventKey:"0",children:Object(s.jsx)(x.a.Body,{children:Object(s.jsx)("table",{class:"table",children:Object(s.jsx)("tbody",{children:e.recipe.ingredients?e.recipe.ingredients.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{children:[e.quantity," ",e.unit]}),Object(s.jsx)("td",{children:e.name})]})})):Object(s.jsx)("tr",{children:Object(s.jsx)("td",{children:"No Ingredients Found"})})})})})})]}),Object(s.jsxs)(x.a,{children:[Object(s.jsx)(x.a.Header,{children:Object(s.jsx)(O.a.Toggle,{as:f.a,variant:"link",eventKey:"1",children:"Instructions"})}),Object(s.jsx)(O.a.Collapse,{eventKey:"1",children:Object(s.jsx)(x.a.Body,{children:Object(s.jsx)("ol",{children:e.recipe.instructions?e.recipe.instructions.map((function(e){return Object(s.jsx)("li",{children:e})})):Object(s.jsx)("li",{children:"No instructions found!"})})})})]})]}),Object(s.jsx)("p",{children:e.recipe.notes})]})},k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={recipe:{}},s.notify=s.notify.bind(Object(u.a)(s)),s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/recipes/"+this.props.match.params.id).then((function(t){e.setState({recipe:t.data})})).catch((function(e){console.log(e)}))}},{key:"notify",value:function(){p.a.post("/api/recipes/text",{recipe:this.state.recipe}).then((function(e){console.log(e.body)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Recipe"}),Object(s.jsx)(C,{recipe:this.state.recipe,notify:this.notify},this.state.recipe._id)]})}}]),n}(a.Component),N=n(72),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onChangeName=s.onChangeName.bind(Object(u.a)(s)),s.onChangeLink=s.onChangeLink.bind(Object(u.a)(s)),s.onSubmit=s.onSubmit.bind(Object(u.a)(s)),s.state={name:"",link:"",ingredients:[],instructions:[],time:{},scrapedRecipe:{},image:""},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeLink",value:function(e){this.setState({link:e.target.value}),this.getRecipeFromLink(e.target.value)}},{key:"setIngredient",value:function(){}},{key:"parseIngredient",value:function(e){var t=e.split(" "),n=t.shift();try{if(n=N(n),t.length<2)return{name:t.shift(),quantity:n,unit:null};var s=t.shift();return{name:t.join(" "),quantity:n,unit:s}}catch(a){return t.unshift(n),{name:t.join(" "),quantity:null,unit:null}}}},{key:"getRecipeFromLink",value:function(e){var t=this;p.a.post("/api/recipes/scrape",{link:e}).then((function(e){console.log(e.data);var n=e.data.ingredients.map((function(e){return t.parseIngredient(e)}));console.log(n),t.setState({name:e.data.name,image:e.data.image,ingredients:n,instructions:e.data.instructions,time:e.data.time})}))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,link:this.state.link,ingredients:this.state.ingredients,instructions:this.state.instructions,time:this.state.time,rating:0,notes:this.state.notes,image:this.state.image};console.log(t),p.a.post("/api/recipes",t).then((function(e){console.log(e.data),window.location="/"})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Add New Recipe"}),Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Link: "}),Object(s.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.link,onChange:this.onChangeLink})]}),this.state.image?Object(s.jsx)("img",{width:"100%",src:this.state.image}):null,Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Recipe "}),Object(s.jsx)("input",{ref:"nameInput",required:!0,className:"form-control",value:this.state.name,onChange:this.onChangeName})]}),this.state.ingredients.length?"Ingredients:":null,Object(s.jsx)("ul",{children:this.state.ingredients.map((function(e){return Object(s.jsxs)("li",{children:[e.name,", ",e.quantity,", ",e.unit]})}))}),this.state.instructions.length?"Instructions:":null,Object(s.jsx)("ul",{children:this.state.instructions.map((function(e){return Object(s.jsx)("li",{children:e})}))}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"submit",value:"Create Recipe",className:"btn btn-primary"})})]})]})}}]),n}(a.Component),S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onChangeIngredient=s.onChangeIngredient.bind(Object(u.a)(s)),s.onChangeInstruction=s.onChangeInstruction.bind(Object(u.a)(s)),s.onChangeNote=s.onChangeNote.bind(Object(u.a)(s)),s.submit=s.submit.bind(Object(u.a)(s)),s.state={recipe:{},$push:[],$set:{}},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/recipes/"+this.props.match.params.id).then((function(t){e.setState({recipe:t.data})})).catch((function(e){console.log(e)}))}},{key:"onChangeIngredient",value:function(e,t,n){var s=this.state.recipe.ingredients[e];s[n]=t.target.value;var a=this.state.$push;a.push(s),this.setState({$push:a})}},{key:"onChangeInstruction",value:function(e,t){var n=this.state.recipe.ingredients[e],s=this.state.$push;s.push(n),this.setState({$push:s})}},{key:"onChangeNote",value:function(e){var t=this.state.$set;t.push({note:e.target.value}),this.setState({$set:t})}},{key:"submit",value:function(){p.a.put("/api/recipes",this.state.recipe).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Recipe"}),Object(s.jsx)("h1",{children:this.state.recipe.name}),Object(s.jsx)("p",{children:this.state.recipe.link}),y.a.times(this.state.recipe.rating,(function(){return Object(s.jsx)("span",{class:"fa fa-star"})}))," Rated ",this.state.recipe.rating," Stars",Object(s.jsx)("br",{}),Object(s.jsx)("div",{class:"card",children:Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("h5",{class:"card-title",children:"Ingredients"}),this.state.recipe.ingredients?this.state.recipe.ingredients.map((function(t,n){return Object(s.jsxs)("form",{class:"form-inline",children:[Object(s.jsxs)("label",{for:"email",children:[n+1," Name"]}),Object(s.jsx)("input",{type:"text",class:"form-control",placeholder:t.name,onChange:function(t){e.onChangeIngredient(n,t,"name")}}),Object(s.jsx)("label",{for:"pwd",children:"Quantity"}),Object(s.jsx)("input",{type:"text",class:"form-control",placeholder:t.quantity,onChange:function(t){e.onChangeIngredient(n,t,"quantity")}}),Object(s.jsx)("label",{for:"pwd",children:"Unit"}),Object(s.jsx)("input",{type:"text",class:"form-control",placeholder:t.unit,onChange:function(t){e.onChangeIngredient(n,t,"unit")}})]})})):Object(s.jsx)("p",{children:"No Ingredients Found"})]})}),Object(s.jsx)("div",{class:"card",children:Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("h5",{class:"card-title",children:"Instructions"}),this.state.recipe.instructions?this.state.recipe.instructions.map((function(t,n){return Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsxs)("label",{children:["Instruction ",n+1]}),Object(s.jsx)("textarea",{class:"form-control",value:t,id:"instruction"+n,onChange:function(t){e.onChangeInstruction(n,t)}})]})})):Object(s.jsx)("p",{children:"No instructions found!"})]})}),Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{children:"Notes"}),Object(s.jsx)("textarea",{class:"form-control",value:this.state.note,id:"notes",onChange:this.onChangeNote})]}),Object(s.jsx)("button",{class:"btn btn-primary",onClick:this.submit,children:"Submit"})]})}}]),n}(a.Component),I=(a.Component,function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).logout=s.logout.bind(Object(u.a)(s)),s}return Object(l.a)(n,[{key:"logout",value:function(e){var t=this;e.preventDefault(),console.log("logging out"),p.a.post("/api/sessions/logout").then((function(e){200===e.status&&t.props.updateUser({loggedIn:!1,username:null})})).catch((function(e){console.log(e),console.log("Logout error")}))}},{key:"render",value:function(){return Object(s.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(s.jsx)("a",{class:"navbar-brand",href:"#",children:"Recipe Brain"}),this.props.isLoggedIn?Object(s.jsxs)("div",{children:[" Hey, ",this.props.username," "]}):null,this.props.loggedIn?Object(s.jsx)("ul",{class:"my-2 my-lg-0",children:Object(s.jsx)("li",{children:Object(s.jsxs)("a",{onClick:this.logout,children:[Object(s.jsx)("span",{class:"glyphicon glyphicon-user"}),"Logout"]})})}):Object(s.jsxs)("ul",{class:"my-2 my-lg-0",children:[Object(s.jsx)("li",{children:Object(s.jsxs)("a",{href:"/signup",children:[Object(s.jsx)("span",{class:"glyphicon glyphicon-user"}),"Sign Up"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("a",{href:"/login",children:[Object(s.jsx)("span",{class:"glyphicon glyphicon-log-in"}),"Login"]})})]})]})}}]),n}(a.Component)),U=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onChangeUserName=s.onChangeUserName.bind(Object(u.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(u.a)(s)),s.onSubmit=s.onSubmit.bind(Object(u.a)(s)),s.state={username:"",email:"",password:"",countryCode:"",phoneNumber:""},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"onChangeUserName",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};console.log(t),p.a.post("/api/sessions/login",t).then((function(e){console.log(e.data),window.location="/"})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Username: "}),Object(s.jsx)("input",{type:"text",name:"username",className:"form-control",value:this.state.username,onChange:this.onChangeUserName})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password: "}),Object(s.jsx)("input",{type:"text",name:"password",className:"form-control",value:this.state.password,onChange:this.onChangePassword})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"submit",value:"Create Recipe",className:"btn btn-primary"})})]})})}}]),n}(a.Component),M=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onChangeUserName=s.onChangeUserName.bind(Object(u.a)(s)),s.onChangeEmail=s.onChangeEmail.bind(Object(u.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(u.a)(s)),s.onChangeCountryCode=s.onChangeCountryCode.bind(Object(u.a)(s)),s.onChangePhoneNumber=s.onChangePhoneNumber.bind(Object(u.a)(s)),s.onSubmit=s.onSubmit.bind(Object(u.a)(s)),s.state={username:"",email:"",password:"",countryCode:"",phoneNumber:""},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"onChangeUserName",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeCountryCode",value:function(e){this.setState({countryCode:e.target.value})}},{key:"onChangePhoneNumber",value:function(e){this.setState({phoneNumber:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,email:this.state.email,password:this.state.password,countryCode:this.state.countryCode,phoneNumber:this.state.phoneNumber};console.log(t),p.a.post("/api/users",t).then((function(e){console.log(e.data),window.location="/"})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Username: "}),Object(s.jsx)("input",{type:"text",name:"username",className:"form-control",value:this.state.username,onChange:this.onChangeUserName})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Email: "}),Object(s.jsx)("input",{type:"text",name:"username",className:"form-control",value:this.state.email,onChange:this.onChangeEmail})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password: "}),Object(s.jsx)("input",{type:"text",name:"password",className:"form-control",value:this.state.password,onChange:this.onChangePassword})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Country Code: "}),Object(s.jsx)("input",{type:"text",name:"username",className:"form-control",value:this.state.countryCode,onChange:this.onChangeCountryCode})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Phone Number: "}),Object(s.jsx)("input",{type:"text",name:"username",className:"form-control",value:this.state.phoneNumber,onChange:this.onChangePhoneNumber})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"submit",value:"Create Recipe",className:"btn btn-primary"})})]})})}}]),n}(a.Component),R=(n(73),n(6)),L=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={loggedIn:!1,username:null},e.getUser=e.getUser.bind(Object(u.a)(e)),e.componentDidMount=e.componentDidMount.bind(Object(u.a)(e)),e.updateUser=e.updateUser.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"updateUser",value:function(e){this.setState(e)}},{key:"getUser",value:function(){var e=this;p.a.get("/api/users").then((function(t){console.log("Get user response: "),console.log(t.data),t.data.user?(console.log("Get User: There is a user saved in the server session: "),e.setState({loggedIn:!0,username:t.data.user.username})):(console.log("Get user: no user"),e.setState({loggedIn:!1,username:null}))}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(I,{loggedIn:this.state.loggedIn,username:this.state.username,updateUser:this.updateUser}),Object(s.jsxs)("div",{class:"grid-container",children:[Object(s.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(s.jsx)("div",{id:"left-sidebar"}),Object(s.jsx)("div",{id:"main",children:Object(s.jsx)(j.a,{id:"router",children:Object(s.jsxs)("div",{className:"Container",children:[Object(s.jsx)("br",{}),Object(s.jsx)(R.a,{path:"/",exact:!0,component:g}),Object(s.jsx)(R.a,{path:"/recipes/:id",exact:!0,component:k}),Object(s.jsx)(R.a,{path:"/edit/:id",exact:!0,component:S}),Object(s.jsx)(R.a,{path:"/add",exact:!0,component:w}),Object(s.jsx)(R.a,{path:"/login",exact:!0,component:U}),Object(s.jsx)(R.a,{path:"/signup",exact:!0,component:M})]})})}),Object(s.jsx)("div",{id:"right-sidebar"})]})]})}}]),n}(a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),P()}},[[74,1,2]]]);
//# sourceMappingURL=main.39ecf9a9.chunk.js.map