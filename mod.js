// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,a=e.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var c,f,p,s;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=c):t[r]=l.value),p="get"in l,s="set"in l,f&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,l.get),s&&i&&i.call(t,r,l.set),t};function c(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var f=Math.floor;function p(t){return f(t)===t}function s(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&p(t.length)&&t.length>=0&&t.length<=9007199254740991}function b(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return y&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var _=v()?function(t){var r,e,n,o,i;if(null==t)return g.call(t);e=t[h],i=h,r=null!=(o=t)&&m.call(o,i);try{t[h]=void 0}catch(r){return g.call(t)}return n=g.call(t),r?t[h]=e:delete t[h],n}:function(t){return g.call(t)},d=Number,E=d.prototype.toString;var j=v();function w(t){return"object"==typeof t&&(t instanceof d||(j?function(t){try{return E.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function S(t){return b(t)||w(t)}c(S,"isPrimitive",b),c(S,"isObject",w);var O=Number.POSITIVE_INFINITY,P=d.NEGATIVE_INFINITY;function T(t){return t<O&&t>P&&p(t)}function A(t){return b(t)&&T(t)}function F(t){return w(t)&&T(t.valueOf())}function I(t){return A(t)||F(t)}function R(t){return"string"==typeof t}c(I,"isPrimitive",A),c(I,"isObject",F);var N=String.prototype.valueOf;var G=v();function V(t){return"object"==typeof t&&(t instanceof String||(G?function(t){try{return N.call(t),!0}catch(t){return!1}}(t):"[object String]"===_(t)))}function $(t){return R(t)||V(t)}function H(t){return t!=t}function X(t){return b(t)&&H(t)}function k(t){return w(t)&&H(t.valueOf())}function x(t){return X(t)||k(t)}function M(t,r,e){var n,o,i;if(!s(t)&&!R(t))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+t+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!A(e))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+e+"`.");(o=e)<0&&(o=0)}else o=0;if(R(t)){if(!R(r))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+r+"`.");return-1!==t.indexOf(r,o)}if(n=t.length,X(r)){for(i=o;i<n;i++)if(X(t[i]))return!0;return!1}for(i=o;i<n;i++)if(t[i]===r)return!0;return!1}function C(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}c($,"isPrimitive",R),c($,"isObject",V),c(x,"isPrimitive",X),c(x,"isObject",k);var D=["full","shorthand","either"];function Y(t){if(arguments.length>0&&!M(D,t))throw new Error(C('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',D.join('", "'),t));return"shorthand"===t?/^[0-9A-F]{3}$/i:"either"===t?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}var U=/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i,q=/^[0-9A-F]{3}$/i,z=/^[0-9A-F]{6}$/i;c(Y,"REGEXP",z),c(Y,"REGEXP_SHORTHAND",q),c(Y,"REGEXP_EITHER",U);export{z as REGEXP,U as REGEXP_EITHER,q as REGEXP_SHORTHAND,Y as default};
//# sourceMappingURL=mod.js.map
