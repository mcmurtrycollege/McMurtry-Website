_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{FDlP:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people/RHAs",function(){return n("Nrqz")}])},Nrqz:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),o=n("AM0r"),s=n("ivdq"),l=n("e02a"),r=n("0YTE"),c=n("QKO/"),m=n("RUXa"),h=n("qWEp"),p=(n("0iZ1"),n("ARc7")),u=i.a.createElement,d=function(){for(var e=[],t=0;t<p.b.members.length;t++)e.push(u(h.a,{key:"".concat(p.b.members[t].name),name:p.b.members[t].name,bio:p.b.members[t].bio,photo:p.b.members[t].photo,email:p.b.members[t].email,phone:p.b.members[t].phone}));for(var n=[],a=0;a<p.a.members.length;a++)n.push(u(h.a,{key:"".concat(p.a.members[a].name),name:p.a.members[a].name,bio:p.a.members[a].bio,photo:p.a.members[a].photo,email:p.a.members[a].email,phone:p.a.members[a].phone}));return u("div",{className:"wellbeing-page"},u(m.a,{width:300,title:"Rice Health Advisors",smallText:!0}),u(c.Box,{width:[1,.7,.6,.5],ml:"auto",mr:"auto",className:"wellbeing-description"},p.a.description,u("p",{align:"center"},u("strong",null,"Click to view the RHAs' bios!"))),u(c.Box,{width:[330],ml:"auto",mr:"auto"},u("h1",{className:"division-title"},"Head RHAs")),u(c.Box,{width:[1,1,.9,.8],ml:"auto",mr:"auto"},u(c.Flex,{flexWrap:"wrap",flexDirection:"row",justifyContent:"center"},e.map((function(t){return u(c.Flex,{flexDirection:"column",width:[1,.33],key:"C+".concat(e.indexOf(t))},t)})))),u(c.Box,{width:[330],ml:"auto",mr:"auto"},u("h1",{className:"division-title"},"RHAs")),u(c.Box,{width:[1,1,.9,.8],ml:"auto",mr:"auto"},u(c.Flex,{flexWrap:"wrap",flexDirection:"row",justifyContent:"center"},n.map((function(e){return u(c.Flex,{flexDirection:"column",width:[1,.33],key:"C+".concat(n.indexOf(e))},e)})))))},b=(n("NHen"),i.a.createElement);t.default=function(){return b("div",{className:"page"},b(o.a,null),b(s.a,null),b(l.a,null),b(d,null),b(r.a,null))}},qWEp:function(e,t,n){"use strict";var a=n("1OyB"),i=n("vuIU"),o=n("JX7q"),s=n("Ji7U"),l=n("md7G"),r=n("foSv"),c=n("q1tI"),m=n.n(c),h=n("QKO/"),p=(n("cZYg"),m.a.createElement);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(r.a)(e);if(t){var i=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var d=function(e){Object(s.a)(n,e);var t=u(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={contentVisible:!1},i.handleClick=i.handleClick.bind(Object(o.a)(i)),i}return Object(i.a)(n,[{key:"handleClick",value:function(){this.setState({contentVisible:!this.state.contentVisible})}},{key:"render",value:function(){var e={},t={};return e.maxHeight=this.state.contentVisible?"650px":"0",t.maxHeight=this.state.contentVisible?"0":"450px",p(h.Box,{width:1,onClick:this.handleClick},p("div",{className:this.state.contentVisible?"card-visible":"expandable-card-hidden"},this.props.photo&&p("div",{className:"expandable-image-dropdown",style:t},p(h.Box,{className:"expandable-image",width:[.9,.7]},p(h.Image,{src:this.props.photo,alt:""}))),p("h2",{className:"name"},this.props.name),p("h3",{className:"contact-phone",hidden:null==this.props.phone},p("img",{src:"../../../../static/icons/phone.svg",alt:"Phone: "})," ",this.props.phone),this.props.email&&p("a",{href:"mailto:".concat(this.props.email),className:"link"},p("h3",{className:this.state.contentVisible?"contact-email-visible":"contact-email-hidden"},p("img",{src:"../../../../static/icons/email.svg",alt:"Email: "}),this.props.email)),p("div",{style:e,className:"expandable-dropdown"},p("p",null,p("strong",null,"Bio: "),this.props.bio))))}}]),n}(m.a.Component);t.a=d}},[["FDlP",0,2,1,3,5,4]]]);