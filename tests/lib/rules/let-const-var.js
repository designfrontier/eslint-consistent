/**
 * @fileoverview checks for consistent use of let/const vs. var
 * @author Daniel Sellers
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/let-const-var"),
    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  }
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("let-const-var", rule, {

    valid: [
        // TODO: figure out how to reinitialize `this` so that multiple passes work
        // "var test = true; var fail = false;",
        // "const test = true; let fail = false;"
    ],

    invalid: [
        {
            code: "const test = true; var fail = false;",
            errors: [{
                message: "please only use let/const OR var within a file not both.",
                type: "VariableDeclaration"
            }]
        }
    ]
});
