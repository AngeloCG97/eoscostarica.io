(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{105:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(98),c=t(97),i=t(47),m=t.n(i);a.a=function(){return r.a.createElement("div",{className:m.a.footerContent},r.a.createElement("div",null,r.a.createElement("img",{src:Object(l.a)("img/logo-white.png"),alt:"EOS CR LOGO"})),r.a.createElement("div",null,r.a.createElement("h2",null,"FOLLOW US"),r.a.createElement("div",{className:m.a.socialCol},r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/EOSCostaRica",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"Twitter"),r.a.createElement("a",{href:"https://www.facebook.com/costaricaeos",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"Facebook"),r.a.createElement("a",{href:"https://www.linkedin.com/company/eoscostarica/",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"LinkedIn")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://medium.com/@eoscostarica",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"Medium"),r.a.createElement("a",{href:"https://t.me/eoscr",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"Telegram"),r.a.createElement("a",{href:"https://www.instagram.com/eoscostarica/",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"Instagram")))),r.a.createElement("div",null,r.a.createElement("span",{className:m.a.companyLocation},"Edificio Trifami, 5th floor San Jos\xe9,"," ",r.a.createElement("strong",null,r.a.createElement("i",null,"Costa Rica")))))}},106:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(98),c=t(104),i=t(97),m=function(){return r.a.createElement("svg",{viewBox:"0 0 100 80",width:"40",height:"30"},r.a.createElement("rect",{width:"100",height:"10"}),r.a.createElement("rect",{y:"30",width:"100",height:"10"}),r.a.createElement("rect",{y:"60",width:"100",height:"10"}))},s=t(47),o=t.n(s),u=function(e){var a,t=e.isOpen,n=e.setIsOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o.a.menuButton,onClick:function(){return n(!0)}},r.a.createElement(m,null)),r.a.createElement("div",{className:Object(i.a)(o.a.sidebar,(a={},a[o.a.active]=t,a)),onClick:function(){return n(!1)}},r.a.createElement("div",{className:o.a.menuSideBar,onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:o.a.imgBox},r.a.createElement("img",{src:Object(l.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/")},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/services")},"Services")),r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/about")},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/bp")},"Bp")),r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/blog")},"Blog"))))))};a.a=function(){var e,a,t,m,s,d=Object(n.useRef)(0),E=Object(n.useRef)(0),v="undefined"!=typeof window?window.location.pathname:"/",g=Object(c.useMediaQuery)({query:"(max-width: 768px)"}),f=Object(n.useState)(!1),b=f[0],h=f[1],p=function(){if(!window.matchMedia("(max-width: 768px)").matches)if(document.body.scrollTop>50||document.documentElement.scrollTop>50){var e="scale(0.4, 0.4)";d.current.style.WebkitTransform=e,d.current.style.MozTransform=e,d.current.style.OTransform=e,d.current.style.transform=e,E.current.style.height="75px"}else{var a="scale(1, 1)";d.current.style.WebkitTransform=a,d.current.style.MozTransform=a,d.current.style.OTransform=a,d.current.style.transform=a,E.current.style.height="150px"}};return Object(n.useLayoutEffect)((function(){return window.addEventListener("scroll",p),function(){return window.removeEventListener("scroll",p)}}),[]),Object(n.useEffect)((function(){if(g){var e="scale(1, 1)";return d.current.style.WebkitTransform=e,d.current.style.MozTransform=e,d.current.style.OTransform=e,d.current.style.transform=e,void(E.current.style.height="60px")}if(!g&&"/"!==v&&"/services"!==v){var a="scale(0.4, 0.4)";return d.current.style.WebkitTransform=a,d.current.style.MozTransform=a,d.current.style.OTransform=a,d.current.style.transform=a,void(E.current.style.height="65px")}p()}),[g,v]),r.a.createElement("div",{className:o.a.customMenu,ref:E},g&&r.a.createElement(u,{isOpen:b,setIsOpen:h}),r.a.createElement("div",{className:o.a.boxLeft},r.a.createElement("img",{ref:d,src:Object(l.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"})),r.a.createElement("div",{className:o.a.boxRight},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/"),className:Object(i.a)((e={},e[o.a.selected]="/"===v,e))},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/services"),className:Object(i.a)((a={},a[o.a.selected]=v.includes("/services"),a))},"Services")),r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/about"),className:Object(i.a)((t={},t[o.a.selected]=v.includes("/about"),t))},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/bp"),className:Object(i.a)((m={},m[o.a.selected]=v.includes("/bp"),m))},"BP")),r.a.createElement("li",null,r.a.createElement("a",{href:Object(l.a)("/blog"),className:Object(i.a)((s={},s[o.a.selected]=v.includes("/blog"),s))},"Blog")))))}},107:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n),l=t(100),c=t(51),i=t.n(c);function m(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:i.a.sidebar},r.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},r.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},111:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(97),c=t(99),i=t(109),m=t(100),s=t(112),o=t(98),u=t(53),d=t.n(u),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,u,v,g=e.children,f=e.frontMatter,b=e.metadata,h=e.truncated,p=e.isBlogPostPage,N=void 0!==p&&p,O=b.date,y=b.permalink,_=b.tags,w=b.readingTime,k=f.author,j=f.title,L=f.image,T=f.keywords,x=f.author_url||f.authorURL,I=f.author_title||f.authorTitle,C=f.author_image_url||f.authorImageURL,S=Object(o.a)(L,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,T&&T.length&&r.a.createElement("meta",{name:"keywords",content:T.join(",")}),L&&r.a.createElement("meta",{property:"og:image",content:S}),L&&r.a.createElement("meta",{property:"twitter:image",content:S}),L&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j})),r.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=O.substring(0,10).split("-"),n=t[0],u=E[parseInt(t[1],10)-1],v=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},N?j:r.a.createElement(m.a,{to:y},j)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:O,className:d.a.blogPostDate},u," ",v,", ",n," ",w&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(w)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},C&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:x,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:C,alt:k})),r.a.createElement("div",{className:"avatar__intro"},k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:x,target:"_blank",rel:"noreferrer noopener"},k)),r.a.createElement("small",{className:"avatar__subtitle"},I)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:s.a},g)),(_.length>0||h)&&r.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),_.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),h&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:b.permalink,"aria-label":"Read more about "+j},r.a.createElement("strong",null,"Read More"))))))}},114:function(e,a,t){"use strict";var n=t(0),r=t.n(n);var l=function(e,a,t){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var r=0,i=!1,m=document.getElementsByClassName(e);r<m.length&&!i;){var s=m[r],o=s.href,u=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(a),s.classList.add(a),c(s),i=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},c=t(57),i=t.n(c),m="table-of-contents__link";function s(e){var a=e.headings,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(s,{isChild:!0,headings:e.children}))}))):null}a.a=function(e){var a=e.headings;return l(m,"table-of-contents__link--active",100),r.a.createElement("div",{className:i.a.tableOfContents},r.a.createElement(s,{headings:a}))}},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(103),c=t(111),i=t(100);var m=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},s=t(107),o=t(114);a.default=function(e){var a=e.content,t=e.sidebar,n=a.frontMatter,i=a.metadata,u=i.title,d=i.description,E=i.nextItem,v=i.prevItem,g=i.editUrl,f=n.hide_table_of_contents;return r.a.createElement(l.a,{title:u,description:d},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:t})),r.a.createElement("div",{className:"col col--8"},r.a.createElement(c.a,{frontMatter:n,metadata:i,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,g&&r.a.createElement("a",{href:g,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(E||v)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(m,{nextItem:E,prevItem:v}))),!f&&a.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{headings:a.rightToc})))))}}}]);