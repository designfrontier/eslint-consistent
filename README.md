# eslint-plugin-be-consistent

enforces consistency within a file for quotes and other things

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-be-consistent`:

```
$ npm install eslint-plugin-be-consistent --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-be-consistent` globally.

## Usage

Add `be-consistent` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "be-consistent"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "be-consistent/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





