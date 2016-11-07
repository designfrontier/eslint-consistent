# eslint-plugin-be-consistent

lint for consistency of rules with in a file not a project

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

* `quotes` - aimed at checking quote consistency within a file and not project.
* `let-const-var` - aimed at checking for consistent use of let/const or var in a file not a project.


## Contributing

Check out the [CONTRIBUTING.md](CONTRIBUTING.md) for some pointers and the 
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).


