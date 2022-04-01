// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=t,i=r,n=["full","shorthand","either"];var d=e,o=function(e){if(arguments.length>0&&!s(n,e))throw new Error(i("invalid argument. Mode must be either `full`, `shorthand`, or `either`. Value: `%s`.",e));return"shorthand"===e?/^[0-9A-F]{3}$/i:"either"===e?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i},a=/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i,h=/^[0-9A-F]{3}$/i,l=/^[0-9A-F]{6}$/i;d(o,"REGEXP",l),d(o,"REGEXP_SHORTHAND",h),d(o,"REGEXP_EITHER",a);var E=o;export{l as REGEXP,a as REGEXP_EITHER,h as REGEXP_SHORTHAND,E as default};
//# sourceMappingURL=index.mjs.map
