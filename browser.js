// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,a){var f,c,p,s;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((c="value"in a)&&(u.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=r,delete e[t],e[t]=a.value,e.__proto__=f):e[t]=a.value),p="get"in a,s="set"in a,c&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,a.get),s&&i&&i.call(e,t,a.set),e};function f(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var c=Math.floor;function p(e){return c(e)===e}function s(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&p(e.length)&&e.length>=0&&e.length<=9007199254740991}function b(e){return"number"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return y&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString,d=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",v=m()?function(e){var t,r,n,o,i;if(null==e)return g.call(e);r=e[h],i=h,t=null!=(o=e)&&d.call(o,i);try{e[h]=void 0}catch(t){return g.call(e)}return n=g.call(e),t?e[h]=r:delete e[h],n}:function(e){return g.call(e)},_=Number,j=_.prototype.toString,w=m();function E(e){return"object"==typeof e&&(e instanceof _||(w?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Number]"===v(e)))}function S(e){return b(e)||E(e)}f(S,"isPrimitive",b),f(S,"isObject",E);var O=Number.POSITIVE_INFINITY,T=_.NEGATIVE_INFINITY;function P(e){return e<O&&e>T&&p(e)}function A(e){return b(e)&&P(e)}function F(e){return E(e)&&P(e.valueOf())}function I(e){return A(e)||F(e)}function N(e){return"string"==typeof e}f(I,"isPrimitive",A),f(I,"isObject",F);var V=String.prototype.valueOf,$=m();function G(e){return"object"==typeof e&&(e instanceof String||($?function(e){try{return V.call(e),!0}catch(e){return!1}}(e):"[object String]"===v(e)))}function R(e){return N(e)||G(e)}function x(e){return e!=e}function H(e){return b(e)&&x(e)}function k(e){return E(e)&&x(e.valueOf())}function C(e){return H(e)||k(e)}function M(e,t,r){var n,o,i;if(!s(e)&&!N(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!A(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");(o=r)<0&&(o=0)}else o=0;if(N(e)){if(!N(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");return-1!==e.indexOf(t,o)}if(n=e.length,H(t)){for(i=o;i<n;i++)if(H(e[i]))return!0;return!1}for(i=o;i<n;i++)if(e[i]===t)return!0;return!1}function X(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}f(R,"isPrimitive",N),f(R,"isObject",G),f(C,"isPrimitive",H),f(C,"isObject",k);var Y=["full","shorthand","either"];function D(e){if(arguments.length>0&&!M(Y,e))throw new Error(X('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',Y.join('", "'),e));return"shorthand"===e?/^[0-9A-F]{3}$/i:"either"===e?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}return f(D,"REGEXP",/^[0-9A-F]{6}$/i),f(D,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),f(D,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i),D},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reColorHexadecimal=t();
//# sourceMappingURL=browser.js.map
