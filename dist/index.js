"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=o(function(O,E){
var A=require('@stdlib/array-base-assert-contains/dist').factory,s=require('@stdlib/error-tools-fmtprodmsg/dist'),a=["full","shorthand","either"],u=A(a);function R(r){if(arguments.length>0&&!u(r))throw new Error(s('0s97q',a.join('", "'),r));return r==="shorthand"?/^[0-9A-F]{3}$/i:r==="either"?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}E.exports=R
});var t=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),i=n(),f=/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i,l=/^[0-9A-F]{3}$/i,v=/^[0-9A-F]{6}$/i;t(i,"REGEXP",v);t(i,"REGEXP_SHORTHAND",l);t(i,"REGEXP_EITHER",f);module.exports=i;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
