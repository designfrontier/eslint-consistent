/**
 * @fileoverview semicolons
 * @author Clay Diffrient
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/semicolons"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("semicolons", rule, {

    valid: [
      `var x = 5;
       var y = 10;
       var z = 20;`,
      `var x = 5
       var y = 10
       var z = 20`
    ],

    invalid: [
        {
            code: `var test = 'test';
                   var real = 'real'
                   var another = 'no';`,
            errors: [{
                message: "semicolon style needs to be consistent within a file"
            }]
        },
        {
            code: `var test = 'test'
                   var real = 'real';
                   var another = 'no'`,
            errors: [{
                message: "semicolon style needs to be consistent within a file"
            }]
        }
    ]
});
