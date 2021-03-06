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

# Hexadecimal Color

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Regular expression][mdn-regexp] to match a hexadecimal color.

<section class="installation">

## Installation

```bash
npm install @stdlib/regexp-color-hexadecimal
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var reColorHexadecimal = require( '@stdlib/regexp-color-hexadecimal' );
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
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var reColorHexadecimal = require( '@stdlib/regexp-color-hexadecimal' );

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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-color-hexadecimal.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-color-hexadecimal

[test-image]: https://github.com/stdlib-js/regexp-color-hexadecimal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/regexp-color-hexadecimal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-color-hexadecimal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-color-hexadecimal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-color-hexadecimal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-color-hexadecimal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp-color-hexadecimal/tree/deno
[umd-url]: https://github.com/stdlib-js/regexp-color-hexadecimal/tree/umd
[esm-url]: https://github.com/stdlib-js/regexp-color-hexadecimal/tree/esm
[branches-url]: https://github.com/stdlib-js/regexp-color-hexadecimal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-color-hexadecimal/main/LICENSE

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
