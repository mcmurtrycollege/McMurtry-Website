(window.webpackJsonp=window.webpackJsonp||[]).push([["9032"],{C3vF:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),c=n.n(a),i=n("AM0r"),s=n("ivdq"),l=n("e02a"),o=n("0YTE"),d=n("0iUn"),m=n("sLSF"),r=n("MI3g"),u=n("a7VT"),p=n("AT/M"),h=n("Tit0"),f=n("QKO/"),w=n("RUXa"),E=(n("qrwY"),[{name:"Consitution",document:"../../../../static/documents/mcm_constitution.pdf",icon:"https://icon.now.sh/account_balance"},{name:"Bylaws",document:"../../../../static/documents/mcm_bylaws.pdf",icon:"https://icon.now.sh/import_contacts"},{name:"Housing Bylaws",document:"../../../../static/documents/mcm_housing_bylaws.pdf",icon:"https://icon.now.sh/home"},{name:"Parking Bylaws",document:"../../../../static/documents/mcm_parking_bylaws.pdf",icon:"https://icon.now.sh/directions_car"},{name:"Tax Exempt Form",document:"../../../../static/documents/tax_exempt_form.pdf",icon:"https://icon.now.sh/attach_money"}]),_=function(e){function t(e){var n;return Object(d.default)(this,t),(n=Object(r.default)(this,Object(u.default)(t).call(this,e))).state={slide:0},n.handleClick=n.handleClick.bind(Object(p.default)(n)),n}return Object(h.default)(t,e),Object(m.default)(t,[{key:"handleClick",value:function(e){this.setState({slide:e})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"documents-page"},c.a.createElement(w.a,{title:"Documents",width:250,smallText:!0}),c.a.createElement(f.Flex,{flexDirection:"row",justifyContent:"center"},E.map(function(t){return c.a.createElement("div",{onClick:function(){return e.handleClick(E.indexOf(t))},className:E.indexOf(t)===e.state.slide?"active-doc":"inactive-doc",key:t.name},c.a.createElement("p",{className:"doc-key"},t.name))})),c.a.createElement("div",{className:"embedded-doc"},c.a.createElement("embed",{src:E[this.state.slide].document,type:"application/pdf",width:"600",height:"820px",page:"7",scrollbar:"1",toolbar:"1"})),c.a.createElement("div",{className:"doc-link-container"},c.a.createElement("a",{href:E[this.state.slide].document,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},c.a.createElement("div",{className:"doc-link"},c.a.createElement("img",{src:"".concat(E[this.state.slide].icon,"/2B2F3A/90"),alt:""}),c.a.createElement("p",null,E[this.state.slide].name," ",c.a.createElement("img",{src:"https://icon.now.sh/open_in_new/2B2F3A/13",alt:""}))))))}}]),t}(c.a.Component);n("NHen"),t.default=function(){return c.a.createElement("div",{className:"page"},c.a.createElement(i.a,null),c.a.createElement(s.a,null),c.a.createElement(l.a,null),c.a.createElement(_,null),c.a.createElement(o.a,null))}},btJR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/documents",function(){var e=n("C3vF");return{page:e.default||e}}])}},[["btJR","5d41","9da1","ad9d"]]]);