# checks for consistent use of let/const vs. var (let-const-var)

This rule is designed to prevent the mixed use of ES2015 variable declerations and 
ES5 declerations. So no mixing of `let/const` and `var` in a single file. The rule 
does not check within the entire code base just within a single file.


## Rule Details

This rule aims to...

The following patterns are considered warnings:

```js

const test = true;
var fail = false;

or

var test = true;
let fail = false;

```

The following patterns are not warnings:

```js

var test = true;
var fail = false;

or

const test = true;
const fail = false;

or

const test = true;
let status = false;

```

## When Not To Use It

If you don't care about a mix of `const/let` and `var` in your files.
