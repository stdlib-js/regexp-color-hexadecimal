<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reColorHexadecimal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Regular expression][mdn-regexp] to match a hexadecimal color.



<section class="usage">

## Usage

```javascript
import reColorHexadecimal from 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-color-hexadecimal@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/regexp-color-hexadecimal/tags). For example,

```javascript
import reColorHexadecimal from 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-color-hexadecimal@v0.2.2-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { REGEXP, REGEXP_EITHER, REGEXP_SHORTHAND } from 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-color-hexadecimal@deno/mod.js';
```

#### reColorHexadecimal( \[mode] )

Returns a [regular expression][mdn-regexp] to match a full hexadecimal color. 

```javascript
var RE = reColorHexadecimal();
// returns <RegExp>

var bool = RE.test( 'ffffff' );
// returns true

bool = RE.test( '000' );
// returns false
```

To return a [regular expression][mdn-regexp] that matches a shorthand hexadecimal color, set the `mode` argument to `shorthand`.

```javascript
var RE = reColorHexadecimal( 'shorthand' );
// returns <RegExp>

var bool = RE.test( '000' );
// returns true
```

To return a [regular expression][mdn-regexp] that matches **either** a shorthand or a full length hexadecimal color, set the `mode` argument to `either`.

```javascript
var RE = reColorHexadecimal( 'either' );
// returns <RegExp>

var bool = RE.test( '000' );
// returns true
```

#### reColorHexadecimal.REGEXP

[Regular expression][mdn-regexp] to match a full length hexadecimal color. 

```javascript
var bool = reColorHexadecimal.REGEXP.test( 'ffffff' );
// returns true

bool = reColorHexadecimal.REGEXP.test( '000' );
// returns false
```

#### reColorHexadecimal.REGEXP_SHORTHAND

[Regular expression][mdn-regexp] to match a shorthand hexadecimal color. 

```javascript
var bool = reColorHexadecimal.REGEXP_SHORTHAND.test( 'ffffff' );
// returns false

bool = reColorHexadecimal.REGEXP_SHORTHAND.test( '000' );
// returns true
```

#### reColorHexadecimal.REGEXP_EITHER

[Regular expression][mdn-regexp] to match **either** a shorthand or a full length hexadecimal color. 

```javascript
var bool = reColorHexadecimal.REGEXP_EITHER.test( 'ffffff' );
// returns true

bool = reColorHexadecimal.REGEXP_EITHER.test( '000' );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isString = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string' ).isPrimitive;
import reColorHexadecimal from 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-color-hexadecimal@deno/mod.js';

function isHexColor( value, mode ) {
    if ( !isString( value ) ) {
        return false;
    }
    if ( mode === 'shorthand' ) {
        return reColorHexadecimal.REGEXP_SHORTHAND.test( value );
    }
    if ( mode === 'either' ) {
        return reColorHexadecimal.REGEXP_EITHER.test( value );
    }
    return reColorHexadecimal.REGEXP.test( value );
}

var bool = isHexColor( 'ffffff', 'full' );
// returns true

bool = isHexColor( '474747', 'either' );
// returns true

bool = isHexColor( '0A5BBE', 'shorthand' );
// returns false

bool = isHexColor( '000', 'full' );
// returns false

bool = isHexColor( '000', 'either' );
// returns true

bool = isHexColor( 'F7b', 'shorthand' );
// returns true

bool = isHexColor( 'abcd', 'either' );
// returns false

bool = isHexColor( '', 'either' );
// returns false

bool = isHexColor( null, 'either' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-color-hexadecimal.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-color-hexadecimal

[test-image]: https://github.com/stdlib-js/regexp-color-hexadecimal/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/regexp-color-hexadecimal/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-color-hexadecimal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-color-hexadecimal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-color-hexadecimal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-color-hexadecimal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp-color-hexadecimal/tree/deno
[deno-readme]: https://github.com/stdlib-js/regexp-color-hexadecimal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/regexp-color-hexadecimal/tree/umd
[umd-readme]: https://github.com/stdlib-js/regexp-color-hexadecimal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/regexp-color-hexadecimal/tree/esm
[esm-readme]: https://github.com/stdlib-js/regexp-color-hexadecimal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/regexp-color-hexadecimal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-color-hexadecimal/main/LICENSE

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
