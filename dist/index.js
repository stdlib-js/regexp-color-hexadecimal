"use strict";var A=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=A(function(_,a){
var u=require('@stdlib/assert-contains/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),E=["full","shorthand","either"];function s(r){if(arguments.length>0&&!u(E,r))throw new Error(o('0s97q',E.join('", "'),r));return r==="shorthand"?/^[0-9A-F]{3}$/i:r==="either"?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}a.exports=s
});var t=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),i=n(),R=/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i,l=/^[0-9A-F]{3}$/i,H=/^[0-9A-F]{6}$/i;t(i,"REGEXP",H);t(i,"REGEXP_SHORTHAND",l);t(i,"REGEXP_EITHER",R);module.exports=i;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
