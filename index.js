// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,a=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,p,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||a.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),p="get"in r,s="set"in r,c&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),s&&u&&u.call(e,t,r.set),e};function c(e,t,r){f(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var p=Math.floor;function s(e){return p(e)===e}function b(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&s(e.length)&&e.length>=0&&e.length<=9007199254740991}function y(e){return"number"==typeof e}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return g&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString,h=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",_=m()?function(e){var t,r,n,o,i;if(null==e)return d.call(e);r=e[v],i=v,t=null!=(o=e)&&h.call(o,i);try{e[v]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[v]=r:delete e[v],n}:function(e){return d.call(e)},E=Number,j=E.prototype.toString,w=m();function O(e){return"object"==typeof e&&(e instanceof E||(w?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Number]"===_(e)))}function S(e){return y(e)||O(e)}c(S,"isPrimitive",y),c(S,"isObject",O);var T=Number.POSITIVE_INFINITY,P=E.NEGATIVE_INFINITY;function A(e){return e<T&&e>P&&s(e)}function F(e){return y(e)&&A(e)}function I(e){return O(e)&&A(e.valueOf())}function R(e){return F(e)||I(e)}function N(e){return"string"==typeof e}c(R,"isPrimitive",F),c(R,"isObject",I);var G=String.prototype.valueOf,V=m();function $(e){return"object"==typeof e&&(e instanceof String||(V?function(e){try{return G.call(e),!0}catch(e){return!1}}(e):"[object String]"===_(e)))}function H(e){return N(e)||$(e)}function x(e){return e!=e}function X(e){return y(e)&&x(e)}function M(e){return O(e)&&x(e.valueOf())}function k(e){return X(e)||M(e)}function C(e,t,r){var n,o,i;if(!b(e)&&!N(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!F(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");(o=r)<0&&(o=0)}else o=0;if(N(e)){if(!N(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");return-1!==e.indexOf(t,o)}if(n=e.length,X(t)){for(i=o;i<n;i++)if(X(e[i]))return!0;return!1}for(i=o;i<n;i++)if(e[i]===t)return!0;return!1}function D(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}c(H,"isPrimitive",N),c(H,"isObject",$),c(k,"isPrimitive",X),c(k,"isObject",M);var Y=["full","shorthand","either"];function U(e){if(arguments.length>0&&!C(Y,e))throw new Error(D('invalid argument. Mode must be one of the following: "%s". Value: `%s`.',Y.join('", "'),e));return"shorthand"===e?/^[0-9A-F]{3}$/i:"either"===e?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}var q=/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i,z=/^[0-9A-F]{3}$/i,B=/^[0-9A-F]{6}$/i;c(U,"REGEXP",B),c(U,"REGEXP_SHORTHAND",z),c(U,"REGEXP_EITHER",q),e.REGEXP=B,e.REGEXP_EITHER=q,e.REGEXP_SHORTHAND=z,e.default=U,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).reColorHexadecimal={});
//# sourceMappingURL=index.js.map
