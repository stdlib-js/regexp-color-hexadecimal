// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var f,c,p,s;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((c="value"in a)&&(u.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=f):t[e]=a.value),p="get"in a,s="set"in a,c&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,a.get),s&&i&&i.call(t,e,a.set),t};function f(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var c=Math.floor;function p(t){return c(t)===t}function s(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&p(t.length)&&t.length>=0&&t.length<=9007199254740991}function y(t){return"number"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return b&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString,d=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",v=m()?function(t){var e,r,n,o,i;if(null==t)return g.call(t);r=t[h],i=h,e=null!=(o=t)&&d.call(o,i);try{t[h]=void 0}catch(e){return g.call(t)}return n=g.call(t),e?t[h]=r:delete t[h],n}:function(t){return g.call(t)},_=Number,j=_.prototype.toString,w=m();function E(t){return"object"==typeof t&&(t instanceof _||(w?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Number]"===v(t)))}function O(t){return y(t)||E(t)}f(O,"isPrimitive",y),f(O,"isObject",E);var S=Number.POSITIVE_INFINITY,T=_.NEGATIVE_INFINITY;function P(t){return t<S&&t>T&&p(t)}function A(t){return y(t)&&P(t)}function F(t){return E(t)&&P(t.valueOf())}function I(t){return A(t)||F(t)}function N(t){return"string"==typeof t}f(I,"isPrimitive",A),f(I,"isObject",F);var $=String.prototype.valueOf,V=m();function G(t){return"object"==typeof t&&(t instanceof String||(V?function(t){try{return $.call(t),!0}catch(t){return!1}}(t):"[object String]"===v(t)))}function R(t){return N(t)||G(t)}function x(t){return t!=t}function H(t){return y(t)&&x(t)}function k(t){return E(t)&&x(t.valueOf())}function C(t){return H(t)||k(t)}function X(t,e,r){var n,o,i;if(!s(t)&&!N(t))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+t+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!A(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");(o=r)<0&&(o=0)}else o=0;if(N(t)){if(!N(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==t.indexOf(e,o)}if(n=t.length,H(e)){for(i=o;i<n;i++)if(H(t[i]))return!0;return!1}for(i=o;i<n;i++)if(t[i]===e)return!0;return!1}function M(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}f(R,"isPrimitive",N),f(R,"isObject",G),f(C,"isPrimitive",H),f(C,"isObject",k);var Y=["full","shorthand","either"];function q(t){if(arguments.length>0&&!X(Y,t))throw new Error(M("0s97q,O2",Y.join('", "'),t));return"shorthand"===t?/^[0-9A-F]{3}$/i:"either"===t?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}return f(q,"REGEXP",/^[0-9A-F]{6}$/i),f(q,"REGEXP_SHORTHAND",/^[0-9A-F]{3}$/i),f(q,"REGEXP_EITHER",/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i),q},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).reColorHexadecimal=e();
//# sourceMappingURL=index.js.map
