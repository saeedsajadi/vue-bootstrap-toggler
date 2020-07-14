module.exports=function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=5)}([function(n,t,e){var r=e(2),o=e(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){"use strict";var r=e(0);e.n(r).a},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function l(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function s(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],s=t.base?i[0]+t.base:i[0],c=e[s]||0,u="".concat(s," ").concat(c);e[s]=c+1;var d=l(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:b(f,t),references:1}),r.push(u)}return r}function c(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function f(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function p(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var g=null,h=0;function b(n,t){var e,r,o;if(t.singleton){var i=h++;e=g||(g=c(t)),r=f.bind(null,e,i,!1),o=f.bind(null,e,i,!0)}else e=c(t),r=p.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=l(e[r]);a[o].references--}for(var i=s(n,t),c=0;c<e.length;c++){var u=l(e[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=i}}}},function(n,t,e){(t=e(4)(!1)).push([n.i,'/*! ========================================================================\r\n * Bootstrap Toggle: bootstrap-toggle.css v2.2.0\r\n * http://www.bootstraptoggle.com\r\n * ========================================================================\r\n * Copyright 2014 Min Hur, The New York Times Company\r\n * Licensed under MIT\r\n * ======================================================================== */\n.checkbox label .toggle, .checkbox-inline .toggle {\r\n  margin-left: -20px;\r\n  margin-right: 5px;\n}\n.toggle {\r\n  position: relative;\r\n  overflow: hidden;\n}\n.toggle input[type="checkbox"] {\r\n  display: none;\n}\n.toggle-group {\r\n  position: absolute;\r\n  width: 200%;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  transition: left 0.35s;\r\n  -webkit-transition: left 0.35s;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\n}\n.toggle.off .toggle-group {\r\n  left: -100%;\n}\n.toggle-on {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 50%;\r\n  margin: 0;\r\n  border: 0;\r\n  border-radius: 0;\n}\n.toggle-off {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  right: 0;\r\n  margin: 0;\r\n  border: 0;\r\n  border-radius: 0;\n}\n.toggle-handle {\r\n  position: relative;\r\n  margin: 0 auto;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  height: 100%;\r\n  width: 0px;\r\n  border-width: 0 1px;\n}\n.toggle.btn { min-width: 59px; min-height: 34px;\n}\n.toggle-on.btn { padding-right: 24px;\n}\n.toggle-off.btn { padding-left: 20px;\n}\n.toggle.btn-lg { min-width: 79px; min-height: 45px;\n}\n.toggle-on.btn-lg { padding-right: 31px;\n}\n.toggle-off.btn-lg { padding-left: 31px;\n}\n.toggle-handle.btn-lg { width: 40px;\n}\n.toggle.btn-sm { min-width: 50px; min-height: 30px;}\n.toggle-on.btn-sm { padding-right: 20px;\n}\n.toggle-off.btn-sm { padding-left: 20px;\n}\n.toggle.btn-xs { min-width: 35px; min-height: 22px;}\n.toggle-on.btn-xs { padding-right: 12px;\n}\n.toggle-off.btn-xs { padding-left: 12px;\n}\r\n\r\n\r\n/*! ========================================================================\r\n * Added additional styles for use without bootstrap\r\n * ======================================================================== */\n.btn-default {\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #ccc;\n}\n.btn-default {\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #ccc;\n}\n.btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active {\r\n    color: #333;\r\n    background-color: #e6e6e6;\r\n    border-color: #adadad;\n}\r\n',""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,l,s;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},function(n,t,e){"use strict";e.r(t);var r={props:{options:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1},initialValue:{type:Number,default:0},name:{type:String,default:""}},data:()=>({value:!1}),computed:{on(){return null!=this.options.on?this.options.on:"On"},off(){return null!=this.options.off?this.options.off:"Off"}},created(){this.value=!!this.initialValue},methods:{update(){this.disabled||(this.value=!this.value,this.$emit("update",this.value))}}};e(1);var o=function(n,t,e,r,o,i,a,l){var s,c="function"==typeof n?n.options:n;if(t&&(c.render=t,c.staticRenderFns=e,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},c._ssrRegister=s):o&&(s=l?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var u=c.render;c.render=function(n,t){return s.call(t),u(n,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,s):[s]}return{exports:n,options:c}}(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"toggle btn btn-default",class:{off:!n.value,disabled:n.disabled},attrs:{"data-toggle":"toggle"},on:{click:function(t){return n.update()}}},[e("div",{staticClass:"toggle-group"},[e("label",{staticClass:"btn btn-primary toggle-on"},[n._v(n._s(this.on))]),n._v(" "),e("label",{staticClass:"btn btn-default active toggle-off"},[n._v(n._s(this.off))]),n._v(" "),e("span",{staticClass:"toggle-handle btn btn-default"}),n._v(" "),e("input",{attrs:{type:"hidden",name:n.name},domProps:{value:n.value?"1":"0"}})])])}),[],!1,null,null,null);t.default=o.exports}]);
//# sourceMappingURL=index.js.map