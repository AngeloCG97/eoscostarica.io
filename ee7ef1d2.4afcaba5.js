(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{108:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(103),r=t(102),s=t(47),m=t.n(s);a.a=function(){return l.a.createElement("div",{className:m.a.footerContent},l.a.createElement("div",null,l.a.createElement("img",{src:Object(c.a)("img/logo-white.png"),alt:"EOS CR LOGO"})),l.a.createElement("div",null,l.a.createElement("h2",null,"FOLLOW US"),l.a.createElement("div",{className:m.a.socialCol},l.a.createElement("div",null,l.a.createElement("a",{href:"https://twitter.com/EOSCostaRica",target:"_blank",className:Object(r.a)(m.a.companySocial,m.a.companyLocation)},"Twitter"),l.a.createElement("a",{href:"https://www.facebook.com/costaricaeos",target:"_blank",className:Object(r.a)(m.a.companySocial,m.a.companyLocation)},"Facebook"),l.a.createElement("a",{href:"https://www.linkedin.com/company/eoscostarica/",target:"_blank",className:Object(r.a)(m.a.companySocial,m.a.companyLocation)},"LinkedIn")),l.a.createElement("div",null,l.a.createElement("a",{href:"https://medium.com/@eoscostarica",target:"_blank",className:Object(r.a)(m.a.companySocial,m.a.companyLocation)},"Medium"),l.a.createElement("a",{href:"https://t.me/eoscr",target:"_blank",className:Object(r.a)(m.a.companySocial,m.a.companyLocation)},"Telegram"),l.a.createElement("a",{href:"https://www.instagram.com/eoscostarica/",target:"_blank",className:Object(r.a)(m.a.companySocial,m.a.companyLocation)},"Instagram")))),l.a.createElement("div",null,l.a.createElement("span",{className:m.a.companyLocation},"Edificio Trifami, 5th floor San Jos\xe9,"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"Costa Rica")))))}},109:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(103),r=t(107),s=t(102),m=function(){return l.a.createElement("svg",{viewBox:"0 0 100 80",width:"40",height:"30"},l.a.createElement("rect",{width:"100",height:"10"}),l.a.createElement("rect",{y:"30",width:"100",height:"10"}),l.a.createElement("rect",{y:"60",width:"100",height:"10"}))},o=t(47),i=t.n(o),u=function(e){var a,t=e.isOpen,n=e.setIsOpen;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:i.a.menuButton,onClick:function(){return n(!0)}},l.a.createElement(m,null)),l.a.createElement("div",{className:Object(s.a)(i.a.sidebar,(a={},a[i.a.active]=t,a)),onClick:function(){return n(!1)}},l.a.createElement("div",{className:i.a.menuSideBar,onClick:function(e){return e.stopPropagation()}},l.a.createElement("div",{className:i.a.imgBox},l.a.createElement("img",{src:Object(c.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"})),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/")},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/services")},"Services")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/about")},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/industries")},"Industries")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/projects")},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/block-producer")},"Bp")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/blog")},"Blog"))))))};a.a=function(){var e,a,t,m,o,d,E,p="undefined"!=typeof window?window.location.pathname:"/",g=Object(r.useMediaQuery)({query:"(max-width: 768px)"}),b=Object(n.useState)(!1),f=b[0],h=b[1];return l.a.createElement("div",{className:i.a.customMenu},g&&l.a.createElement(u,{isOpen:f,setIsOpen:h}),l.a.createElement("div",{className:i.a.boxLeft},l.a.createElement("img",{src:Object(c.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"})),l.a.createElement("div",{className:i.a.boxRight},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/"),className:Object(s.a)((e={},e[i.a.selected]="/"===p,e))},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/services"),className:Object(s.a)((a={},a[i.a.selected]=p.includes("/services"),a))},"Services")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/about"),className:Object(s.a)((t={},t[i.a.selected]=p.includes("/about"),t))},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/block-producer"),className:Object(s.a)((m={},m[i.a.selected]=p.includes("/block-producer"),m))},"BP")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/industries"),className:Object(s.a)((o={},o[i.a.selected]=p.includes("/industries"),o))},"Industries")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/projects"),className:Object(s.a)((d={},d[i.a.selected]=p.includes("/projects"),d))},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(c.a)("/blog"),className:Object(s.a)((E={},E[i.a.selected]=p.includes("/blog"),E))},"Blog")))))}},49:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(102),r=t(48),s=t.n(r);a.default=function(){var e=Object(n.useState)({name:"",lastname:"",email:"",companyName:"",comments:""}),a=e[0],t=e[1],r=function(e){return function(n){var l;t(Object.assign({},a,((l={})[e]=n.target.value,l)))}};return l.a.createElement("section",{className:Object(c.a)(s.a.sectionWhite,s.a.contactUsBox)},l.a.createElement("div",{className:Object(c.a)("container",s.a.noMarginTop)},l.a.createElement("div",{className:Object(c.a)("row",s.a.flexColumn)},l.a.createElement("h1",null,"Contact"),l.a.createElement("span",null,"Let\u2019s get the conversation started. Ask us how we can help you implement blockchain technology into your organization."),l.a.createElement("form",null,l.a.createElement("div",{className:s.a.completeName},l.a.createElement("input",{type:"text",className:s.a.textField,placeholder:"First Name",onChange:r("name"),value:a.name}),l.a.createElement("input",{type:"text",className:s.a.textField,placeholder:"Last Name",onChange:r("lastname"),value:a.lastname})),l.a.createElement("input",{type:"text",className:s.a.textField,placeholder:"Professional Email Address",onChange:r("email"),value:a.email}),l.a.createElement("input",{type:"text",className:s.a.textField,placeholder:"Company Name",onChange:r("companyName"),value:a.companyName}),l.a.createElement("textarea",{className:s.a.textareaField,rows:"4",placeholder:"Additional Comments",onChange:r("comments"),value:a.comments})),l.a.createElement("span",{className:s.a.contactUsMessage},"We will only keep your information to reply to your message and not be using it for any other purposes."),l.a.createElement("button",{className:s.a.mainButton},"Send"))))}},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(102),r=t(48),s=t.n(r),m=function(e){var a,t,r=e.content,m=e.title,o=Object(n.useState)(!1),i=o[0],u=o[1];return l.a.createElement("div",{className:s.a.accordion},l.a.createElement("div",null,l.a.createElement("div",{className:s.a.title,onClick:function(){return u(!i)}},l.a.createElement("span",{className:s.a.titleText},m),l.a.createElement("div",{className:i?s.a.arrowUp:s.a.arrowDown})),l.a.createElement("div",{className:Object(c.a)(s.a.content,(a={},a[s.a.contentOpen]=i,a))},l.a.createElement("div",{className:Object(c.a)(s.a.contentText,(t={},t[s.a.contentTextOpen]=i,t))},r))))};a.default=l.a.memo(m)},51:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(102),r=function(e){var a=e.children,t=e.sectionStyle,n=e.boxStyle,r=e.childrenWrapperStyle;return l.a.createElement("section",{className:t},l.a.createElement("div",{className:Object(c.a)("container",n)},l.a.createElement("div",{className:Object(c.a)("row",r)},a)))};a.default=l.a.memo(r)},97:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(102),r=t(106),s=t(103),m=t(49),o=(t(50),t(51)),i=t(48),u=t.n(i);a.default=function(){return l.a.createElement(r.a,null,l.a.createElement("main",{className:u.a.mainContainer},l.a.createElement(o.default,{sectionStyle:Object(c.a)(u.a.sectionGray,u.a.topBox),boxStyle:u.a.noMarginTop,childrenWrapperStyle:u.a.flexColumn},l.a.createElement("div",{className:u.a.titleBox},l.a.createElement("h1",null,"Enterprise Blockchain Use Cases")),l.a.createElement("span",null,"Get to Know Our Latest Projects"),l.a.createElement("button",{className:u.a.mainButton},"Contact us")),l.a.createElement(o.default,{sectionStyle:u.a.knowEOSCRBox,boxStyle:u.a.noMarginTop},l.a.createElement("div",{className:Object(c.a)(u.a.knowRowBox,u.a.colReverse)},l.a.createElement("picture",null,l.a.createElement("source",{className:u.a.knowEOSCRProjectImg,srcSet:Object(s.a)("img/latamlink2.jp2"),type:"image/jp2"}),l.a.createElement("img",{className:u.a.knowEOSCRProjectImg,src:Object(s.a)("img/latamlink2.webp")})),l.a.createElement("div",null,l.a.createElement("h3",null,"LatamLink"),l.a.createElement("span",{className:u.a.titleH1},"We are part of this voluntary regional alliance, led by Latin American technology companies to offer an EOSIO-based testnet to the LACChain initiative, a program to accelerate the development of the blockchain ecosystem in the region."),l.a.createElement("button",{className:u.a.mainButton},"Read more"))),l.a.createElement("div",{className:Object(c.a)(u.a.knowRowBox,u.a.colReverse)},l.a.createElement("picture",null,l.a.createElement("source",{className:u.a.knowEOSCRProjectImg,srcSet:Object(s.a)("img/lifebank.jp2"),type:"image/jp2"}),l.a.createElement("img",{className:u.a.knowEOSCRProjectImg,src:Object(s.a)("img/lifebank.webp")})),l.a.createElement("div",null,l.a.createElement("h3",null,"Lifebank"),l.a.createElement("span",{className:u.a.titleH1},'An open-source blockchain-based app that incentivizes blood donations by creating a virtuous circle of value between donors, blood banks, and local businesses, leveraged by a token economy. Winner of the "Coding for Change" challenge by block.one.'),l.a.createElement("button",{className:u.a.mainButton},"Read more"))),l.a.createElement("div",{className:Object(c.a)(u.a.knowRowBox,u.a.colReverse)},l.a.createElement("picture",null,l.a.createElement("source",{className:u.a.knowEOSCRProjectImg,srcSet:Object(s.a)("img/smartgate.jp2"),type:"image/jp2"}),l.a.createElement("img",{className:u.a.knowEOSCRProjectImg,src:Object(s.a)("img/smartgate.webp")})),l.a.createElement("div",null,l.a.createElement("h3",null,"SMARTGATE"),l.a.createElement("span",{className:u.a.titleH1},"A blockchain-based platform that provides solutions for in-out gate activity for the container industry and real-time transmission of relevant data required for proper interchange in port logistics"),l.a.createElement("button",{className:u.a.mainButton},"Read more")))),l.a.createElement(o.default,{sectionStyle:Object(c.a)(u.a.sectionGray,u.a.industryBox),boxStyle:u.a.noMarginTop},l.a.createElement("div",{className:u.a.industryTitleBox},l.a.createElement("h1",null,"Other Projects")),l.a.createElement("div",{className:u.a.industryColWrapper},l.a.createElement("div",{className:u.a.industryColBox},l.a.createElement("div",null,l.a.createElement("div",{className:u.a.svgBox},l.a.createElement("picture",null,l.a.createElement("source",{className:u.a.defaultImg,srcSet:Object(s.a)("img/default-image.jp2"),type:"image/jp2"}),l.a.createElement("img",{className:u.a.defaultImg,src:Object(s.a)("img/default-image.webp")}))),l.a.createElement("h3",null,"Enterprise EOSIO Forum"),l.a.createElement("span",null,"We are part of the Enterprise EOSIO Forum, a community-driven initiative to discuss enterprise blockchain solutions deploying EOSIO technology."))),l.a.createElement("div",{className:u.a.industryColBox},l.a.createElement("div",null,l.a.createElement("div",{className:u.a.svgBox},l.a.createElement("picture",null,l.a.createElement("source",{className:u.a.defaultImg,srcSet:Object(s.a)("img/default-image.jp2"),type:"image/jp2"}),l.a.createElement("img",{className:u.a.defaultImg,src:Object(s.a)("img/default-image.webp")}))),l.a.createElement("h3",null,"EOS Foundation"),l.a.createElement("span",null,"We are part of the EOS Foundation proof of concept. It is an autonomous, decentralized, non-profit organization that will enable self-representation and promotion of the EOS community."))),l.a.createElement("div",{className:u.a.industryColBox},l.a.createElement("div",null,l.a.createElement("div",{className:u.a.svgBox},l.a.createElement("picture",null,l.a.createElement("source",{className:u.a.defaultImg,srcSet:Object(s.a)("img/default-image.jp2"),type:"image/jp2"}),l.a.createElement("img",{className:u.a.defaultImg,src:Object(s.a)("img/default-image.webp")}))),l.a.createElement("h3",null,"EOS Rate"),l.a.createElement("span",null,"EOS Rate is an open- source app that allows EOS token holders to access a rating system and voting portal for block producers and proxies in the EOS blockchain.")))),l.a.createElement("div",{className:u.a.industryColWrapper},l.a.createElement("div",{className:u.a.industryColBox},l.a.createElement("div",null,l.a.createElement("div",{className:u.a.svgBox},l.a.createElement("picture",null,l.a.createElement("source",{className:u.a.defaultImg,srcSet:Object(s.a)("img/default-image.jp2"),type:"image/jp2"}),l.a.createElement("img",{className:u.a.defaultImg,src:Object(s.a)("img/default-image.webp")}))),l.a.createElement("h3",null,"EOSIO Dashboard"),l.a.createElement("span",null,"The EOSIO Dashboard is an open-source project that allows users to visualize the rewards distribution along the EOS network to seek accountability and transparency."))),l.a.createElement("div",{className:u.a.industryColBox},l.a.createElement("div",null,l.a.createElement("div",{className:u.a.svgBox},l.a.createElement("picture",null,l.a.createElement("source",{className:u.a.defaultImg,srcSet:Object(s.a)("img/default-image.jp2"),type:"image/jp2"}),l.a.createElement("img",{className:u.a.defaultImg,src:Object(s.a)("img/default-image.webp")}))),l.a.createElement("h3",null,"Evodex"),l.a.createElement("span",null,"Evodex is the front-end user interface for a liquidity pool protocol where users vote on the pool liquidity fees and pay zero gas. We were in charge of UX and front-end design."))),l.a.createElement("div",{className:u.a.industryColBox},l.a.createElement("div",null,l.a.createElement("div",{className:u.a.svgBox},l.a.createElement("picture",null,l.a.createElement("source",{className:u.a.defaultImg,srcSet:Object(s.a)("img/default-image.jp2"),type:"image/jp2"}),l.a.createElement("img",{className:u.a.defaultImg,src:Object(s.a)("img/default-image.webp")}))),l.a.createElement("h3",null,"Undisclosed enterprise project"),l.a.createElement("span",null,"We developed an app for a US-based client in the accounting and tax industry for improved traceability of intercompany transactions.")))),l.a.createElement("div",{className:u.a.industryColWrapper},l.a.createElement("div",{className:u.a.industryColBox},l.a.createElement("div",null,l.a.createElement("div",{className:u.a.svgBox},l.a.createElement("picture",null,l.a.createElement("source",{className:u.a.defaultImg,srcSet:Object(s.a)("img/default-image.jp2"),type:"image/jp2"}),l.a.createElement("img",{className:u.a.defaultImg,src:Object(s.a)("img/default-image.webp")}))),l.a.createElement("h3",null,"Notario Digital"),l.a.createElement("span",null,"Notario Digital is an open- source project that generates a hash of any file to register it immutably on an EOSIO network."))))),l.a.createElement(m.default,null)))}}}]);