_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{FDlP:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people/RHAs",function(){return a("Nrqz")}])},Nrqz:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("AM0r"),s=a("ivdq"),l=a("e02a"),r=a("0YTE"),c=a("QKO/"),m=a("RUXa"),u=a("qWEp"),h=(a("0iZ1"),a("ARc7")),p=i.a.createElement,b=function(){for(var e=[],t=0;t<h.b.members.length;t++)e.push(p(u.a,{key:"".concat(h.b.members[t].name),name:h.b.members[t].name,bio:h.b.members[t].bio,photo:h.b.members[t].photo,email:h.b.members[t].email,phone:h.b.members[t].phone}));for(var a=[],n=0;n<h.a.members.length;n++)a.push(p(u.a,{key:"".concat(h.a.members[n].name),name:h.a.members[n].name,bio:h.a.members[n].bio,photo:h.a.members[n].photo,email:h.a.members[n].email,phone:h.a.members[n].phone}));return p("div",{className:"wellbeing-page"},p(m.a,{width:300,title:"Rice Health Advisors",smallText:!0}),p(c.Box,{width:[1,.7,.6,.5],ml:"auto",mr:"auto",className:"wellbeing-description"},h.a.description,p("p",{align:"center"},p("strong",null,"Click to view the RHAs' bios!"))),p(c.Box,{width:[330],ml:"auto",mr:"auto"},p("h1",{className:"division-title"},"Head RHAs")),p(c.Box,{width:[1,1,.9,.8],ml:"auto",mr:"auto"},p(c.Flex,{flexWrap:"wrap",flexDirection:"row",justifyContent:"center"},e.map((function(t){return p(c.Flex,{flexDirection:"column",width:[1,.33],key:"C+".concat(e.indexOf(t))},t)})))),p(c.Box,{width:[330],ml:"auto",mr:"auto"},p("h1",{className:"division-title"},"RHAs")),p(c.Box,{width:[1,1,.9,.8],ml:"auto",mr:"auto"},p(c.Flex,{flexWrap:"wrap",flexDirection:"row",justifyContent:"center"},a.map((function(e){return p(c.Flex,{flexDirection:"column",width:[1,.33],key:"C+".concat(a.indexOf(e))},e)})))))},d=(a("NHen"),i.a.createElement);t.default=function(){return d("div",{className:"page"},d(o.a,null),d(s.a,null),d(l.a,null),d(b,null),d(r.a,null))}},qWEp:function(e,t,a){"use strict";var n=a("1OyB"),i=a("vuIU"),o=a("JX7q"),s=a("Ji7U"),l=a("md7G"),r=a("foSv"),c=a("q1tI"),m=a.n(c),u=a("QKO/"),h=(a("cZYg"),m.a.createElement);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(r.a)(e);if(t){var i=Object(r.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(l.a)(this,a)}}var b=function(e){Object(s.a)(a,e);var t=p(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={contentVisible:!1},i.handleClick=i.handleClick.bind(Object(o.a)(i)),i}return Object(i.a)(a,[{key:"handleClick",value:function(){this.setState({contentVisible:!this.state.contentVisible})}},{key:"render",value:function(){var e={},t={};return e.maxHeight=this.state.contentVisible?"650px":"0",t.maxHeight=this.state.contentVisible?"0":"450px",h(u.Box,{width:1,onClick:this.handleClick},h("div",{className:this.state.contentVisible?"card-visible":"expandable-card-hidden"},this.props.photo&&h("div",{className:"expandable-image-dropdown",style:t},h(u.Box,{className:"expandable-image",width:[.9,.7]},h(u.Image,{src:this.props.photo,alt:""}))),h("h2",{className:"name"},this.props.name),h("h3",{className:"contact-phone"},h("img",{src:"../../../../static/icons/phone.svg",alt:"Phone: "})," ",this.props.phone),this.props.email&&h("a",{href:"mailto:".concat(this.props.email),className:"link"},h("h3",{className:this.state.contentVisible?"contact-email-visible":"contact-email-hidden"},h("img",{src:"../../../../static/icons/email.svg",alt:"Email: "}),this.props.email)),h("div",{style:e,className:"expandable-dropdown"},h("p",null,h("strong",null,"Bio: "),this.props.bio))))}}]),a}(m.a.Component);t.a=b}},[["FDlP",0,2,1,3,5,4]]]);