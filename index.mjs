// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";var e=["full","shorthand","either"];function i(r){if(arguments.length>0&&!s(e,r))throw new Error(t("0s97q",e.join('", "'),r));return"shorthand"===r?/^[0-9A-F]{3}$/i:"either"===r?/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i:/^[0-9A-F]{6}$/i}var n=/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i,o=/^[0-9A-F]{3}$/i,d=/^[0-9A-F]{6}$/i;r(i,"REGEXP",d),r(i,"REGEXP_SHORTHAND",o),r(i,"REGEXP_EITHER",n);export{d as REGEXP,n as REGEXP_EITHER,o as REGEXP_SHORTHAND,i as default};
//# sourceMappingURL=index.mjs.map
