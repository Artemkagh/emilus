(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[7],{268:function(e,t,c){"use strict";var a=c(2),n=c(4),r=c(12),o=c(7),s=c.n(o),i=c(0),l=c(65),f=c(475),b=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(c[a[n]]=e[a[n]])}return c};var u=["xs","sm","md","lg","xl","xxl"],j=i.forwardRef((function(e,t){var c=i.useContext(l.b),o=c.getPrefixCls,j=c.direction,d=i.useContext(f.a),p=d.gutter,m=d.wrap,O=d.supportFlexGap,h=e.prefixCls,x=e.span,v=e.order,g=e.offset,y=e.push,w=e.pull,N=e.className,C=e.children,P=e.flex,E=e.style,S=b(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),k=o("col",h),A={};u.forEach((function(t){var c={},o=e[t];"number"===typeof o?c.span=o:"object"===Object(r.a)(o)&&(c=o||{}),delete S[t],A=Object(n.a)(Object(n.a)({},A),Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},"".concat(k,"-").concat(t,"-").concat(c.span),void 0!==c.span),"".concat(k,"-").concat(t,"-order-").concat(c.order),c.order||0===c.order),"".concat(k,"-").concat(t,"-offset-").concat(c.offset),c.offset||0===c.offset),"".concat(k,"-").concat(t,"-push-").concat(c.push),c.push||0===c.push),"".concat(k,"-").concat(t,"-pull-").concat(c.pull),c.pull||0===c.pull),"".concat(k,"-rtl"),"rtl"===j))}));var R=s()(k,Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},"".concat(k,"-").concat(x),void 0!==x),"".concat(k,"-order-").concat(v),v),"".concat(k,"-offset-").concat(g),g),"".concat(k,"-push-").concat(y),y),"".concat(k,"-pull-").concat(w),w),N,A),F={};if(p&&p[0]>0){var G=p[0]/2;F.paddingLeft=G,F.paddingRight=G}if(p&&p[1]>0&&!O){var T=p[1]/2;F.paddingTop=T,F.paddingBottom=T}return P&&(F.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),!1!==m||F.minWidth||(F.minWidth=0)),i.createElement("div",Object(n.a)({},S,{style:Object(n.a)(Object(n.a)({},F),E),className:R,ref:t}),C)}));t.a=j},269:function(e,t,c){"use strict";var a=c(4),n=c(2),r=c(12),o=c(6),s=c(7),i=c.n(s),l=c(0),f=c(65),b=c(202),u=c(166),j=c(51),d=c(475),p=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(c[a[n]]=e[a[n]])}return c};Object(j.a)("top","middle","bottom","stretch"),Object(j.a)("start","end","center","space-around","space-between","space-evenly");function m(e,t){var c=l.useState("string"===typeof e?e:""),a=Object(o.a)(c,2),n=a[0],s=a[1];return l.useEffect((function(){!function(){if("string"===typeof e&&s(e),"object"===Object(r.a)(e))for(var c=0;c<u.b.length;c++){var a=u.b[c];if(t[a]){var n=e[a];if(void 0!==n)return void s(n)}}}()}),[JSON.stringify(e),t]),n}var O=l.forwardRef((function(e,t){var c=e.prefixCls,s=e.justify,j=e.align,O=e.className,h=e.style,x=e.children,v=e.gutter,g=void 0===v?0:v,y=e.wrap,w=p(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),N=l.useContext(f.b),C=N.getPrefixCls,P=N.direction,E=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=Object(o.a)(E,2),k=S[0],A=S[1],R=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),F=Object(o.a)(R,2),G=F[0],T=F[1],D=m(j,G),J=m(s,G),W=Object(b.a)(),B=l.useRef(g);l.useEffect((function(){var e=u.a.subscribe((function(e){T(e);var t=B.current||0;(!Array.isArray(t)&&"object"===Object(r.a)(t)||Array.isArray(t)&&("object"===Object(r.a)(t[0])||"object"===Object(r.a)(t[1])))&&A(e)}));return function(){return u.a.unsubscribe(e)}}),[]);var I=C("row",c),L=function(){var e=[void 0,void 0];return(Array.isArray(g)?g:[g,void 0]).forEach((function(t,c){if("object"===Object(r.a)(t))for(var a=0;a<u.b.length;a++){var n=u.b[a];if(k[n]&&void 0!==t[n]){e[c]=t[n];break}}else e[c]=t})),e}(),z=i()(I,Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},"".concat(I,"-no-wrap"),!1===y),"".concat(I,"-").concat(J),J),"".concat(I,"-").concat(D),D),"".concat(I,"-rtl"),"rtl"===P),O),M={},Y=null!=L[0]&&L[0]>0?L[0]/-2:void 0,$=null!=L[1]&&L[1]>0?L[1]/-2:void 0;if(Y&&(M.marginLeft=Y,M.marginRight=Y),W){var q=Object(o.a)(L,2);M.rowGap=q[1]}else $&&(M.marginTop=$,M.marginBottom=$);var H=Object(o.a)(L,2),K=H[0],Q=H[1],U=l.useMemo((function(){return{gutter:[K,Q],wrap:y,supportFlexGap:W}}),[K,Q,y,W]);return l.createElement(d.a.Provider,{value:U},l.createElement("div",Object(a.a)({},w,{className:z,style:Object(a.a)(Object(a.a)({},M),h),ref:t}),x))}));t.a=O},475:function(e,t,c){"use strict";var a=c(0),n=Object(a.createContext)({});t.a=n},499:function(e,t,c){"use strict";var a=c(269);t.a=a.a},500:function(e,t,c){"use strict";var a=c(268);t.a=a.a},532:function(e,t,c){"use strict";c.r(t);c(0);var a=c(499),n=c(500),r=c(119),o=c(453),s=c(19),i=c(43),l=c(167),f=c(39),b=c(5);t.default=()=>{const e=Object(f.c)((e=>e.theme.currentTheme));return Object(b.jsx)("div",{className:"h-100 ".concat("light"===e?"bg-white":""),children:Object(b.jsxs)("div",{className:"container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===e?"logo.png":"logo-white.png"),alt:""})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(a.a,{align:"middle",children:[Object(b.jsxs)(n.a,{xs:24,sm:24,md:8,children:[Object(b.jsx)("h1",{className:"font-weight-bold mb-4 display-4",children:"Page not found"}),Object(b.jsx)("p",{className:"font-size-md mb-4",children:"We've noticed you lost your way, no worries, we will help you to found the correct path."}),Object(b.jsx)(i.c,{to:"/app",children:Object(b.jsx)(r.a,{type:"primary",icon:Object(b.jsx)(o.a,{}),children:"Go back"})})]}),Object(b.jsx)(n.a,{xs:24,sm:24,md:{span:14,offset:2},children:Object(b.jsx)("img",{className:"img-fluid mt-md-0 mt-4",src:"/img/others/img-20.png",alt:""})})]})}),Object(b.jsxs)(l.a,{mobileFlex:!1,justifyContent:"between",children:[Object(b.jsxs)("span",{children:["Copyright  \xa9  ","".concat((new Date).getFullYear())," ",Object(b.jsx)("span",{className:"font-weight-semibold",children:"".concat(s.b)})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{className:"text-gray",href:"/#",onClick:e=>e.preventDefault(),children:"Term & Conditions"}),Object(b.jsx)("span",{className:"mx-2 text-muted",children:" | "}),Object(b.jsx)("a",{className:"text-gray",href:"/#",onClick:e=>e.preventDefault(),children:"Privacy & Policy"})]})]})]})})}}}]);
//# sourceMappingURL=7.41fe520d.chunk.js.map