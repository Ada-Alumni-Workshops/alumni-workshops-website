(self.webpackChunkada_alumni_workshops=self.webpackChunkada_alumni_workshops||[]).push([[434],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!o(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},8033:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ce}});var r,i,o,a,c=n(7294),u=n(5444),s=n(6125),l="navigation-module--line--vIt0u",f=function(e){var t=e.sites,n=(0,c.useState)(!1),r=n[0],i=n[1],o=t.map((function(e){return c.createElement("li",{key:e.name},c.createElement(u.Link,{to:e.url},e.name))}));return c.createElement("nav",{className:"navigation-module--navigation--Y7+yf "+(r?"navigation-module--active--CAy3t":"")},c.createElement("ul",null,o),c.createElement("button",{className:"navigation-module--icon--s5Xel",id:"toggle",onClick:function(e){e.preventDefault(),i((function(e){return!e}))}},c.createElement("div",{className:l+" navigation-module--line1--YHj6C"}),c.createElement("div",{className:l+" navigation-module--line2--j74lk"})))},p=JSON.parse('[{"name":"Home","url":"/"},{"name":"About","url":"/about"},{"name":"Workshops","url":"/upcoming_workshops"}]'),d=function(e){return c.createElement("header",null,c.createElement("div",null,c.createElement(u.Link,{to:"/"},c.createElement(s.S,{src:"../images/ada_logo.png",alt:e.description,width:610,className:"header-module--logo-image--2GHvc",__imageData:n(7814)}))),c.createElement(f,{sites:p}))},m=n(5697),h=n.n(m),y=n(4839),b=n.n(y),g=n(2993),v=n.n(g),T=n(6494),w=n.n(T),A="bodyAttributes",E="htmlAttributes",C="titleAttributes",O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(O).map((function(e){return O[e]})),"charset"),k="cssText",j="href",P="http-equiv",x="innerHTML",M="itemprop",L="name",I="property",N="rel",R="src",Y="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},U="defaultTitle",q="defer",B="encodeSpecialCharacters",H="onChangeClientState",F="titleTemplate",D=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),G=[O.NOSCRIPT,O.SCRIPT,O.STYLE],z="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=ie(e,O.TITLE),n=ie(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ie(e,U);return t||r||void 0},ee=function(e){return ie(e,H)||function(){}},te=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Q({},e,t)}),{})},ne=function(e,t){return t.filter((function(e){return void 0!==e[O.BASE]})).map((function(e){return e[O.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},re=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&se("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||n===N&&"canonical"===e[n].toLowerCase()||u===N&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==x&&c!==k&&c!==M||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=w()({},r[c],i[c]);r[c]=u}return e}),[]).reverse()},ie=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},oe=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){oe(e)}),0)}),ae=function(e){return clearTimeout(e)},ce="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||oe:n.g.requestAnimationFrame||oe,ue="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ae:n.g.cancelAnimationFrame||ae,se=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},le=null,fe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;me(O.BODY,r),me(O.HTML,i),de(f,p);var d={baseTag:he(O.BASE,n),linkTags:he(O.LINK,o),metaTags:he(O.META,a),noscriptTags:he(O.NOSCRIPT,c),scriptTags:he(O.SCRIPT,s),styleTags:he(O.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},pe=function(e){return Array.isArray(e)?e.join(""):e},de=function(e,t){void 0!==e&&document.title!==e&&(document.title=pe(e)),me(O.TITLE,t)},me=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(z),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(z):n.getAttribute(z)!==a.join(",")&&n.setAttribute(z,a.join(","))}},he=function(e,t){var n=document.head||document.querySelector(O.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===k)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(z,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},ye=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)},ge=function(e,t,n){switch(e){case O.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[z]=!0,i=be(n,r),[c.createElement(O.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=ye(n),o=pe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+J(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case A:case E:return{toComponent:function(){return be(t)},toString:function(){return ye(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[z]=!0,r);return Object.keys(t).forEach((function(e){var n=_[e]||e;if(n===x||n===k){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===x||e===k)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+J(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===G.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},ve=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ge(O.BASE,t,r),bodyAttributes:ge(A,n,r),htmlAttributes:ge(E,i,r),link:ge(O.LINK,o,r),meta:ge(O.META,a,r),noscript:ge(O.NOSCRIPT,c,r),script:ge(O.SCRIPT,u,r),style:ge(O.STYLE,s,r),title:ge(O.TITLE,{title:f,titleAttributes:p},r)}},Te=b()((function(e){return{baseTag:ne([j,Y],e),bodyAttributes:te(A,e),defer:ie(e,q),encode:ie(e,B),htmlAttributes:te(E,e),linkTags:re(O.LINK,[N,j],e),metaTags:re(O.META,[L,S,P,I,M],e),noscriptTags:re(O.NOSCRIPT,[x],e),onChangeClientState:ee(e),scriptTags:re(O.SCRIPT,[R,x],e),styleTags:re(O.STYLE,[k],e),title:$(e),titleAttributes:te(C,e)}}),(function(e){le&&ue(le),e.defer?le=ce((function(){fe(e,(function(){le=null}))})):(fe(e),le=null)}),ve)((function(){return null})),we=(i=Te,a=o=function(e){function t(){return V(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!v()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:t};case O.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return Q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Q({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case O.TITLE:return Q({},i,((t={})[r.type]=a,t.titleAttributes=Q({},o),t));case O.BODY:return Q({},i,{bodyAttributes:Q({},o)});case O.HTML:return Q({},i,{htmlAttributes:Q({},o)})}return Q({},i,((n={})[r.type]=Q({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Q({},t);return Object.keys(e).forEach((function(t){var r;n=Q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(X(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=X(e,["children"]),r=Q({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(i,r)},W(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=ve({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);we.renderStatic=we.rewind;var Ae=we,Ee=function(e){var t,n,r=(0,u.useStaticQuery)("1642819152"),i=null!==(t=null==r||null===(n=r.site)||void 0===n?void 0:n.siteMetadata)&&void 0!==t?t:{},o=e.title||i.title,a=e.description||i.description,s=new URL(e.image||i.image,i.siteUrl),l=new URL(e.path||"/",i.siteUrl);return c.createElement(Ae,null,c.createElement("title",null,o),c.createElement("link",{rel:"icon",href:"data:image/vnd.microsoft.icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABYlBMVEUPNV4QNl8RNl8RN18SOGATOGATOWEUOWEWO2MXO2MXPGMYPGQZPWQZPmUaPmUbP2YcQGYfQ2kgQ2khRGoiRWojRmskRmwkR2wlR20lSG0nSW4nSm4rTXEtTnIvUHMvUHQyU3U1VXc4V3k6WXpCX4BEYoFRbIpRbYpTboxVcI1Yco5cdpFddpJhepVpgZpqgptrgptuhZ5vhp5whp94jaR9kad9kqh/k6mEmKyFmK2Gma2Hmq6KnLCLnbGMnrGUpbeVpbiVpriZqbqZqbuaqrufrr6gr7+hsMCiscCkssKls8KmtMOntcStusivvMmwvMqyvsuzv8y0wM25xNC6xNC6xdG9x9K+yNPFztjGz9nJ0dvK0tvO1t7P1t/S2eDS2eHU2+LY3uXZ3+Xb4efc4efg5eri5+zn6+/q7fHr7vHr7vLu8fTy9Pb09vf5+vv6+/v6+/z7/Pz9/f39/f7+/v7////q4joWAAAA9UlEQVQYGc3B5TtDYQCH4R8bhjG5Mc3RzXR3TjMx3V3v8/9z+Xrenc/uW/9QpFSeWl9fmuWh9xPeu5TSuOH+ATMiu8xVuKqquYFFvyxCB3BUJJWcwG6e3FZgM6CGeuXuwILchs10uvo+P7rlmzNDsghKEwbMqBSUVdYaXF7Dkl9WoQQcFhYfw16+LKJnsBGQcrYhGZFbHDOTppYm+eZhXW79jzFp0pgxaeCpR1ZZ6/xazlAKBQn+7OfLquIcEnABp2WyqLvDTJVD4yzc1spti6+YwuBo8Ju43NqTHVIYHKkz2aYUwuDISxgcecl+fquUp2i1/p8fbeY/mZw3hF4AAAAASUVORK5CYII="}),c.createElement("meta",{name:"description",content:a}),c.createElement("link",{rel:"canonical",href:l}),s&&c.createElement("meta",{name:"image",content:s}),c.createElement("meta",{property:"og:url",content:l}),c.createElement("meta",{property:"og:type",content:"website"}),c.createElement("meta",{property:"og:title",content:o}),c.createElement("meta",{property:"og:description",content:a}),s&&c.createElement("meta",{name:"og:image",content:s}),c.createElement("meta",{name:"twitter:card",content:"summary_large_mage"}),c.createElement("meta",{name:"twitter:title",content:o}),c.createElement("meta",{name:"twitter:description",content:s}),s&&c.createElement("meta",{name:"twitter:image",content:s}))},Ce=function(e){var t=e.children,n=e.title,r=void 0!==n&&n,i=e.description,o=void 0!==i&&i,a=e.image,s=void 0!==a&&a,l=e.path,f=void 0!==l&&l,p=(0,u.useStaticQuery)("1978354112"),m={title:r||p.site.siteMetadata.title,description:o||p.site.siteMetadata.description,image:s||p.site.siteMetadata.image,path:f||p.site.siteMetadata.siteUrl};return c.createElement(c.Fragment,null,c.createElement(Ee,{title:m.title,description:m.description,image:m.image,path:m.path}),c.createElement("div",{className:"container"},c.createElement("div",null,c.createElement(d,{title:m.title,description:m.description,image:m.image}),c.createElement("main",null,t))))}},7814:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#486848","images":{"fallback":{"src":"/static/3efb047981751362d519edaa4b2d5d6d/2d2f1/ada_logo.png","srcSet":"/static/3efb047981751362d519edaa4b2d5d6d/1d0ce/ada_logo.png 153w,\\n/static/3efb047981751362d519edaa4b2d5d6d/1e9c6/ada_logo.png 305w,\\n/static/3efb047981751362d519edaa4b2d5d6d/2d2f1/ada_logo.png 610w","sizes":"(min-width: 610px) 610px, 100vw"},"sources":[{"srcSet":"/static/3efb047981751362d519edaa4b2d5d6d/531d2/ada_logo.webp 153w,\\n/static/3efb047981751362d519edaa4b2d5d6d/331ea/ada_logo.webp 305w,\\n/static/3efb047981751362d519edaa4b2d5d6d/1c02b/ada_logo.webp 610w","type":"image/webp","sizes":"(min-width: 610px) 610px, 100vw"}]},"width":610,"height":152}')}}]);
//# sourceMappingURL=493ac1b6c1e4a2f73a91112facea7c92a68938db-6593099c144cf7fb76e0.js.map