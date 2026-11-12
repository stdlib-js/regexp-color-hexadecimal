"use strict";var A=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(o){throw (e=0, o)}};};var n=A(function(_,E){
var s=require('@stdlib/array-base-assert-contains/dist').factory,u=require('@stdlib/error-tools-fmtprodmsg/dist'),a=["full","shorthand","either"],R=s(a);function f(r){if(arguments.length>0&&!R(r))throw new Error(u('0s97q',a.join('", "'),r));return r==="shorthand"?/^[0-9A-F]{3}$/i:r==="either"?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}E.exports=f
});var t=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),i=n(),l=/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i,v=/^[0-9A-F]{3}$/i,H=/^[0-9A-F]{6}$/i;t(i,"REGEXP",H);t(i,"REGEXP_SHORTHAND",v);t(i,"REGEXP_EITHER",l);module.exports=i;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
