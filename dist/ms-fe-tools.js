!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MsFeTools=e():t.MsFeTools=e()}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=80)}([function(t,e,n){t.exports=!n(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(2),i=n(37),o=n(17),u=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(16)("wks"),i=n(11),o=n(4).Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(4),i=n(15),o=n(18),u=n(9),c=n(39),a=function(t,e,n){var f,l,s,h,p=t&a.F,d=t&a.G,v=t&a.S,y=t&a.P,g=t&a.B,b=d?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,m=d?i:i[e]||(i[e]={}),S=m.prototype||(m.prototype={});for(f in d&&(n=e),n)s=((l=!p&&b&&void 0!==b[f])?b:n)[f],h=g&&l?c(s,r):y&&"function"==typeof s?c(Function.call,s):s,b&&u(b,f,s,t&a.U),m[f]!=s&&o(m,f,h),y&&S[f]!=s&&(S[f]=s)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(4),i=n(18),o=n(8),u=n(11)("src"),c=n(51),a=(""+c).split("toString");n(15).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var f="function"==typeof n;f&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(f&&(o(n,u)||i(n,u,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,e,n){var r=n(7);r(r.S+r.F*!n(0),"Object",{defineProperty:n(1).f})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(42),i=n(14);t.exports=function(t){return r(i(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(15),i=n(4),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(23)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),i=n(25);t.exports=n(0)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(41),i=n(27);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){n(35)("asyncIterator")},function(t,e){t.exports=!1},function(t,e,n){"use strict";var r=n(4),i=n(8),o=n(0),u=n(7),c=n(9),a=n(52).KEY,f=n(3),l=n(16),s=n(53),h=n(11),p=n(6),d=n(36),v=n(35),y=n(54),g=n(44),b=n(2),m=n(5),S=n(29),x=n(12),w=n(17),I=n(25),O=n(45),j=n(59),N=n(31),E=n(28),k=n(1),_=n(19),P=N.f,T=k.f,A=j.f,C=r.Symbol,F=r.JSON,M=F&&F.stringify,R=p("_hidden"),D=p("toPrimitive"),B={}.propertyIsEnumerable,$=l("symbol-registry"),G=l("symbols"),U=l("op-symbols"),W=Object.prototype,J="function"==typeof C&&!!E.f,L=r.QObject,z=!L||!L.prototype||!L.prototype.findChild,V=o&&f((function(){return 7!=O(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=P(W,e);r&&delete W[e],T(t,e,n),r&&t!==W&&T(W,e,r)}:T,H=function(t){var e=G[t]=O(C.prototype);return e._k=t,e},Y=J&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},K=function(t,e,n){return t===W&&K(U,e,n),b(t),e=w(e,!0),b(n),i(G,e)?(n.enumerable?(i(t,R)&&t[R][e]&&(t[R][e]=!1),n=O(n,{enumerable:I(0,!1)})):(i(t,R)||T(t,R,I(1,{})),t[R][e]=!0),V(t,e,n)):T(t,e,n)},X=function(t,e){b(t);for(var n,r=y(e=x(e)),i=0,o=r.length;o>i;)K(t,n=r[i++],e[n]);return t},Z=function(t){var e=B.call(this,t=w(t,!0));return!(this===W&&i(G,t)&&!i(U,t))&&(!(e||!i(this,t)||!i(G,t)||i(this,R)&&this[R][t])||e)},q=function(t,e){if(t=x(t),e=w(e,!0),t!==W||!i(G,e)||i(U,e)){var n=P(t,e);return!n||!i(G,e)||i(t,R)&&t[R][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=A(x(t)),r=[],o=0;n.length>o;)i(G,e=n[o++])||e==R||e==a||r.push(e);return r},tt=function(t){for(var e,n=t===W,r=A(n?U:x(t)),o=[],u=0;r.length>u;)!i(G,e=r[u++])||n&&!i(W,e)||o.push(G[e]);return o};J||(c((C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===W&&e.call(U,n),i(this,R)&&i(this[R],t)&&(this[R][t]=!1),V(this,t,I(1,n))};return o&&z&&V(W,t,{configurable:!0,set:e}),H(t)}).prototype,"toString",(function(){return this._k})),N.f=q,k.f=K,n(30).f=j.f=Q,n(21).f=Z,E.f=tt,o&&!n(23)&&c(W,"propertyIsEnumerable",Z,!0),d.f=function(t){return H(p(t))}),u(u.G+u.W+u.F*!J,{Symbol:C});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var rt=_(p.store),it=0;rt.length>it;)v(rt[it++]);u(u.S+u.F*!J,"Symbol",{for:function(t){return i($,t+="")?$[t]:$[t]=C(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in $)if($[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!J,"Object",{create:function(t,e){return void 0===e?O(t):X(O(t),e)},defineProperty:K,defineProperties:X,getOwnPropertyDescriptor:q,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var ot=f((function(){E.f(1)}));u(u.S+u.F*ot,"Object",{getOwnPropertySymbols:function(t){return E.f(S(t))}}),F&&u(u.S+u.F*(!J||f((function(){var t=C();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(m(e)||void 0!==t)&&!Y(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,M.apply(F,r)}}),C.prototype[D]||n(18)(C.prototype,D,C.prototype.valueOf),s(C,"Symbol"),s(Math,"Math",!0),s(r.JSON,"JSON",!0)},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(20),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(14);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(41),i=n(27).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(21),i=n(25),o=n(12),u=n(17),c=n(8),a=n(37),f=Object.getOwnPropertyDescriptor;e.f=n(0)?f:function(t,e){if(t=o(t),e=u(e,!0),a)try{return f(t,e)}catch(t){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r=n(4),i=n(8),o=n(13),u=n(60),c=n(17),a=n(3),f=n(30).f,l=n(31).f,s=n(1).f,h=n(62).trim,p=r.Number,d=p,v=p.prototype,y="Number"==o(n(45)(v)),g="trim"in String.prototype,b=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=g?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var u,a=e.slice(2),f=0,l=a.length;f<l;f++)if((u=a.charCodeAt(f))<48||u>i)return NaN;return parseInt(a,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(y?a((function(){v.valueOf.call(n)})):"Number"!=o(n))?u(new d(b(e)),n,p):b(e)};for(var m,S=n(0)?f(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;S.length>x;x++)i(d,m=S[x])&&!i(p,m)&&s(p,m,l(d,m));p.prototype=v,v.constructor=p,n(9)(r,"Number",p)}},function(t,e,n){"use strict";var r,i,o=n(34),u=RegExp.prototype.exec,c=String.prototype.replace,a=u,f=(r=/a/,i=/b*/g,u.call(r,"a"),u.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(f||l)&&(a=function(t){var e,n,r,i,a=this;return l&&(n=new RegExp("^"+a.source+"$(?!\\s)",o.call(a))),f&&(e=a.lastIndex),r=u.call(a,t),f&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),l&&r&&r.length>1&&c.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=a},function(t,e,n){"use strict";var r=n(2);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(4),i=n(15),o=n(23),u=n(36),c=n(1).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(6)},function(t,e,n){t.exports=!n(0)&&!n(3)((function(){return 7!=Object.defineProperty(n(38)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(5),i=n(4).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(40);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(8),i=n(12),o=n(55)(!1),u=n(43)("IE_PROTO");t.exports=function(t,e){var n,c=i(t),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~o(f,n)||f.push(n));return f}},function(t,e,n){var r=n(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(16)("keys"),i=n(11);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(13);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(2),i=n(57),o=n(27),u=n(43)("IE_PROTO"),c=function(){},a=function(){var t,e=n(38)("iframe"),r=o.length;for(e.style.display="none",n(58).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=a(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(1).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(0)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var r=n(68)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){"use strict";var r=n(49),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e,n){var r=n(13),i=n(6)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){"use strict";n(69);var r=n(9),i=n(18),o=n(3),u=n(14),c=n(6),a=n(33),f=c("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=c(t),p=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),d=p?!o((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[f]=function(){return n}),n[h](""),!e})):void 0;if(!p||!d||"replace"===t&&!l||"split"===t&&!s){var v=/./[h],y=n(u,h,""[t],(function(t,e,n,r,i){return e.exec===a?p&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=y[0],b=y[1];r(String.prototype,t,g),i(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},function(t,e,n){t.exports=n(16)("native-function-to-string",Function.toString)},function(t,e,n){var r=n(11)("meta"),i=n(5),o=n(8),u=n(1).f,c=0,a=Object.isExtensible||function(){return!0},f=!n(3)((function(){return a(Object.preventExtensions({}))})),l=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},s=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!a(t))return"F";if(!e)return"E";l(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!a(t))return!0;if(!e)return!1;l(t)}return t[r].w},onFreeze:function(t){return f&&s.NEED&&a(t)&&!o(t,r)&&l(t),t}}},function(t,e,n){var r=n(1).f,i=n(8),o=n(6)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(19),i=n(28),o=n(21);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var u,c=n(t),a=o.f,f=0;c.length>f;)a.call(t,u=c[f++])&&e.push(u);return e}},function(t,e,n){var r=n(12),i=n(26),o=n(56);t.exports=function(t){return function(e,n,u){var c,a=r(e),f=i(a.length),l=o(u,f);if(t&&n!=n){for(;f>l;)if((c=a[l++])!=c)return!0}else for(;f>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(20),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(1),i=n(2),o=n(19);t.exports=n(0)?Object.defineProperties:function(t,e){i(t);for(var n,u=o(e),c=u.length,a=0;c>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(4).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(12),i=n(30).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(r(t))}},function(t,e,n){var r=n(5),i=n(61).set;t.exports=function(t,e,n){var o,u=e.constructor;return u!==n&&"function"==typeof u&&(o=u.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},function(t,e,n){var r=n(5),i=n(2),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(39)(Function.call,n(31).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){var r=n(7),i=n(14),o=n(3),u=n(63),c="["+u+"]",a=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,e,n){var i={},c=o((function(){return!!u[t]()||"​"!="​"[t]()})),a=i[t]=c?e(s):u[t];n&&(i[n]=a),r(r.P+r.F*c,"String",i)},s=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(a,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var r=n(7);r(r.S,"Array",{isArray:n(44)})},function(t,e,n){"use strict";var r=n(66),i=n(2),o=n(67),u=n(47),c=n(26),a=n(48),f=n(33),l=n(3),s=Math.min,h=[].push,p=!l((function(){RegExp(4294967295,"y")}));n(50)("split",2,(function(t,e,n,l){var d;return d="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);for(var o,u,c,a=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),s=0,p=void 0===e?4294967295:e>>>0,d=new RegExp(t.source,l+"g");(o=f.call(d,i))&&!((u=d.lastIndex)>s&&(a.push(i.slice(s,o.index)),o.length>1&&o.index<i.length&&h.apply(a,o.slice(1)),c=o[0].length,s=u,a.length>=p));)d.lastIndex===o.index&&d.lastIndex++;return s===i.length?!c&&d.test("")||a.push(""):a.push(i.slice(s)),a.length>p?a.slice(0,p):a}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):d.call(String(i),n,r)},function(t,e){var r=l(d,t,this,e,d!==n);if(r.done)return r.value;var f=i(t),h=String(this),v=o(f,RegExp),y=f.unicode,g=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(p?"y":"g"),b=new v(p?f:"^(?:"+f.source+")",g),m=void 0===e?4294967295:e>>>0;if(0===m)return[];if(0===h.length)return null===a(b,h)?[h]:[];for(var S=0,x=0,w=[];x<h.length;){b.lastIndex=p?x:0;var I,O=a(b,p?h:h.slice(x));if(null===O||(I=s(c(b.lastIndex+(p?0:x)),h.length))===S)x=u(h,x,y);else{if(w.push(h.slice(S,x)),w.length===m)return w;for(var j=1;j<=O.length-1;j++)if(w.push(O[j]),w.length===m)return w;x=S=I}}return w.push(h.slice(S)),w}]}))},function(t,e,n){var r=n(5),i=n(13),o=n(6)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,n){var r=n(2),i=n(40),o=n(6)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||null==(n=r(u)[o])?e:i(n)}},function(t,e,n){var r=n(20),i=n(14);t.exports=function(t){return function(e,n){var o,u,c=String(i(e)),a=r(n),f=c.length;return a<0||a>=f?t?"":void 0:(o=c.charCodeAt(a))<55296||o>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):o:t?c.slice(a,a+2):u-56320+(o-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(33);n(7)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){"use strict";var r=n(2),i=n(29),o=n(26),u=n(20),c=n(47),a=n(48),f=Math.max,l=Math.min,s=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(50)("replace",2,(function(t,e,n,d){return[function(r,i){var o=t(this),u=null==r?void 0:r[e];return void 0!==u?u.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=d(n,t,this,e);if(i.done)return i.value;var s=r(t),h=String(this),p="function"==typeof e;p||(e=String(e));var y=s.global;if(y){var g=s.unicode;s.lastIndex=0}for(var b=[];;){var m=a(s,h);if(null===m)break;if(b.push(m),!y)break;""===String(m[0])&&(s.lastIndex=c(h,o(s.lastIndex),g))}for(var S,x="",w=0,I=0;I<b.length;I++){m=b[I];for(var O=String(m[0]),j=f(l(u(m.index),h.length),0),N=[],E=1;E<m.length;E++)N.push(void 0===(S=m[E])?S:String(S));var k=m.groups;if(p){var _=[O].concat(N,j,h);void 0!==k&&_.push(k);var P=String(e.apply(void 0,_))}else P=v(O,h,j,N,k,e);j>=w&&(x+=h.slice(w,j)+P,w=j+O.length)}return x+h.slice(w)}];function v(t,e,r,o,u,c){var a=r+t.length,f=o.length,l=p;return void 0!==u&&(u=i(u),l=h),n.call(c,l,(function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(a);case"<":c=u[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>f){var h=s(l/10);return 0===h?n:h<=f?void 0===o[h-1]?i.charAt(1):o[h-1]+i.charAt(1):n}c=o[l-1]}return void 0===c?"":c}))}}))},function(t,e,n){var r=n(7);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){"use strict";n(73);var r=n(2),i=n(34),o=n(0),u=/./.toString,c=function(t){n(9)(RegExp.prototype,"toString",t,!0)};n(3)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?c((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):"toString"!=u.name&&c((function(){return u.call(this)}))},function(t,e,n){n(0)&&"g"!=/./g.flags&&n(1).f(RegExp.prototype,"flags",{configurable:!0,get:n(34)})},function(t,e,n){var r=Date.prototype,i=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n(9)(r,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,e,n){"use strict";var r=n(49),i={};i[n(6)("toStringTag")]="z",i+""!="[object z]"&&n(9)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,e,n){var r=n(7);r(r.S+r.F,"Object",{assign:n(77)})},function(t,e,n){"use strict";var r=n(0),i=n(19),o=n(28),u=n(21),c=n(29),a=n(42),f=Object.assign;t.exports=!f||n(3)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||Object.keys(f({},e)).join("")!=r}))?function(t,e){for(var n=c(t),f=arguments.length,l=1,s=o.f,h=u.f;f>l;)for(var p,d=a(arguments[l++]),v=s?i(d).concat(s(d)):i(d),y=v.length,g=0;y>g;)p=v[g++],r&&!h.call(d,p)||(n[p]=d[p]);return n}:f},function(t,e,n){var r=n(7);r(r.S,"Number",{isInteger:n(79)})},function(t,e,n){var r=n(5),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},function(t,e,n){"use strict";n.r(e);n(22),n(24),n(10),n(32),n(46),n(64);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"isObject",value:function(t){return!this.isNull(t)&&"object"===r(t)&&!Array.isArray(t)}},{key:"isNull",value:function(t){if("boolean"==typeof t)return!1;if("number"==typeof t)return!1;if("string"==typeof t)return!1;if("function"==typeof t)return!1;if(void 0===t)return!0;if("object"===r(t)){if(t instanceof Array)return!1;if(null===t)return!0;try{if("{}"===JSON.stringify(t))return!0}catch(t){return!1}}}},{key:"isURL",value:function(t){return!this.isNull(t)&&/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(t)}},{key:"isEmail",value:function(t){return!this.isNull(t)&&/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}},{key:"isMobile",value:function(t){return!this.isNull(t)&&/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(t)}},{key:"isTel",value:function(t){return!this.isNull(t)&&/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(t)}},{key:"isIdCard",value:function(t){return!this.isNull(t)&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t)}}])&&i(e.prototype,n),o&&i(e,o),t}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validate=new o,this._validate.isNull(window))return Error("Can not init LocalStorage because there is no Window object.")}var e,n,r;return e=t,(n=[{key:"set",value:function(t){var e=t.name,n=t.content,r={dataType:u(n),content:n,datetime:(new Date).getTime()};localStorage.setItem(e,JSON.stringify(r))}},{key:"get",value:function(t){var e=t.name,n=t.debug,r=localStorage.getItem(e),i=null;if(n)return r;if(this._validate.isNull(r))return i;try{r=JSON.parse(r)}catch(t){return r}switch(r.dataType){case"string":i=r.content;break;case"number":i=Number(r.content);break;case"boolean":i=Boolean(r.content);break;case"object":default:i=r.content}return i}},{key:"remove",value:function(t){var e=t.name;localStorage.removeItem(e)}},{key:"getAll",value:function(){for(var t=[],e=0;e<localStorage.length;e++)t.push({name:localStorage.key(e),content:this.get({name:localStorage.key(e)})});return t}},{key:"removeAll",value:function(){localStorage.clear()}}])&&c(e.prototype,n),r&&c(e,r),t}();function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validate=new o,this._validate.isNull(window))return Error("Can not init SessionStorage because there is no Window object.")}var e,n,r;return e=t,(n=[{key:"set",value:function(t){var e=t.name,n=t.content,r={dataType:f(n),content:n,datetime:(new Date).getTime()};sessionStorage.setItem(e,JSON.stringify(r))}},{key:"get",value:function(t){var e=t.name,n=t.debug,r=sessionStorage.getItem(e),i=null;if(n)return r;if(this._validate.isNull(r))return i;try{r=JSON.parse(r)}catch(t){return r}switch(r.dataType){case"string":i=r.content;break;case"number":i=Number(r.content);break;case"boolean":i=Boolean(r.content);break;case"object":default:i=r.content}return i}},{key:"remove",value:function(t){var e=t.name;sessionStorage.removeItem(e)}},{key:"getAll",value:function(){for(var t=[],e=0;e<sessionStorage.length;e++)t.push({name:sessionStorage.key(e),content:this.get({name:sessionStorage.key(e)})});return t}},{key:"removeAll",value:function(){sessionStorage.clear()}}])&&l(e.prototype,n),r&&l(e,r),t}();n(65),n(70),n(71),n(72),n(74),n(75),n(76);function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validate=new o}var e,n,r;return e=t,(n=[{key:"mergeDeep",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!n.length)return t;var i=n.shift();if(this._validate.isObject(t)&&this._validate.isObject(i))for(var o in i)this._validate.isObject(i[o])?(t[o]||Object.assign(t,h({},o,{})),this.mergeDeep(t[o],i[o])):Object.assign(t,h({},o,i[o]));return this.mergeDeep.apply(this,[t].concat(n))}},{key:"openWindow",value:function(t,e,n,r){var i=void 0!==window.screenLeft?window.screenLeft:screen.left,o=void 0!==window.screenTop?window.screenTop:screen.top,u=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-n/2+i,c=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-r/2+o,a=window.open(t,e,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+n+", height="+r+", top="+c+", left="+u);window.focus&&a.focus()}},{key:"guid",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)+Math.floor(65536*(1+Math.random())).toString(16).substring(1)+"-"+Math.floor(65536*(1+Math.random())).toString(16).substring(1)}}])&&p(e.prototype,n),r&&p(e,r),t}();function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t){return t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)}var g={LocalStorage:a,SessionStorage:s,Cookie:function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validate=new o,this._validate.isNull(document))return Error("Can not init Cookie because there is no Document object.");this._validate.isNull(e)&&(this.defaultAttributes={path:"/"}),this._common=new d}var e,n,r;return e=t,(n=[{key:"set",value:function(t,e,n){"number"==typeof(n=this._common.mergeDeep({},this.defaultAttributes,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}(e),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var i in n)n[i]&&(r+="; "+i,!0!==n[i]&&(r+="="+n[i].split(";")[0]));return document.cookie=t+"="+e+r}},{key:"get",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],document.cookie?document.cookie.split("; "):[]),n={},r=0;r<e.length;r++){var i=e[r].split("="),o=i.slice(1).join("=");'"'===o[0]&&(o=o.slice(1,-1));try{var u=y(i[0]);if(n[u]=y(o),t===u)break}catch(t){}}return""!==t?n[t]:n}},{key:"remove",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.set(t,"",this._common.mergeDeep({},e,{expires:-1}))}},{key:"removeAll",value:function(){var t=this.get();for(var e in t)t.hasOwnProperty(e)&&this.remove(e)}}])&&v(e.prototype,n),r&&v(e,r),t}()};n(78);function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m={JsonTree:function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.validate=new o,this.validate.isNull(e)||"{}"===JSON.stringify(e))return new Error("Init Failed. Invalid tree object.");this.identifier=n.identifier||"id",this.childrenIdentifier=n.childrenIdentifier||"children",this.nodeGet=null,this.parentNodeGet=null,this.tree=e}var e,n,r;return e=t,(n=[{key:"getNodeByIdentifier",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tree;if(this.validate.isNull(t)||""===t)return e;if(e[this.identifier]===t)this.nodeGet=e;else if(e[this.childrenIdentifier]&&e[this.childrenIdentifier].length>0)for(var n=0;n<e[this.childrenIdentifier].length;n++)this.getNodeByIdentifier(t,e[this.childrenIdentifier][n]);return this.nodeGet}},{key:"getParentNodeByIdentifier",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tree;if(this.validate.isNull(t)||""===t)return e;if(e[this.childrenIdentifier]&&e[this.childrenIdentifier].length>0)for(var n=0;n<e[this.childrenIdentifier].length;n++){if(e[this.childrenIdentifier][n][this.identifier]===t){this.parentNodeGet=e;break}this.getParentNodeByIdentifier(t,e[this.childrenIdentifier][n])}return this.parentNodeGet}},{key:"addNodeByIdentifier",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.tree;if((this.validate.isNull(e)||""===e)&&(r.children?Number.isInteger(n)?r[this.childrenIdentifier].splice(n,0,t):r[this.childrenIdentifier].push(t):(r[this.childrenIdentifier]=[],r[this.childrenIdentifier].push(t))),r[this.identifier]===e)r[this.childrenIdentifier]=r[this.childrenIdentifier]||[],Number.isInteger(n)?r[this.childrenIdentifier].splice(n,0,t):r[this.childrenIdentifier].push(t);else if(r[this.childrenIdentifier]&&r[this.childrenIdentifier].length>0)for(var i=0;i<r[this.childrenIdentifier].length;i++)this.addNodeByIdentifier(t,e,n,r[this.childrenIdentifier][i]);return this.tree}},{key:"updateNodeByIdentifier",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.tree;if(this.validate.isNull(e)||""===e)return this.tree;if(n[this.identifier]===e)return this.tree[this.identifier]===e?this.tree=t:n=t,this.tree;if(n[this.childrenIdentifier]&&n[this.childrenIdentifier].length>0)for(var r=0;r<n[this.childrenIdentifier].length;r++){if(n[this.childrenIdentifier][r][this.identifier]===e){n[this.childrenIdentifier][r]=t;break}n[this.childrenIdentifier][r][this.childrenIdentifier]&&n[this.childrenIdentifier][r][this.childrenIdentifier].length>0&&this.updateNodeByIdentifier(t,e,n[this.childrenIdentifier][r])}return this.tree}},{key:"deleteNodeByIdentifier",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tree;if(this.validate.isNull(t)||""===t)return this.tree;if(e[this.identifier]===t)return this.tree[this.identifier]===t?this.tree=null:e=null,this.tree;if(e[this.childrenIdentifier]&&e[this.childrenIdentifier].length>0)for(var n=0;n<e[this.childrenIdentifier].length;n++){if(e[this.childrenIdentifier][n][this.identifier]===t){e[this.childrenIdentifier].splice(n,1);break}e[this.childrenIdentifier][n][this.childrenIdentifier]&&e[this.childrenIdentifier][n][this.childrenIdentifier].length>0&&this.deleteNodeByIdentifier(t,e[this.childrenIdentifier][n])}return this.tree}}])&&b(e.prototype,n),r&&b(e,r),t}()};e.default={Store:g,Validate:o,Tree:m,Common:d}}]).default}));