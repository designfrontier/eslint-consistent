/**
 * @fileoverview consistent quotes within a file
 * @author Daniel Sellers
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/quotes"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("quotes", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "const a = require('a'); const b = require(\"b\");",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
