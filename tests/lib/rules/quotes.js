/**
 * @fileoverview wuotes
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
            code: "var test = \"test\", real = 'real';",
            errors: [{
                message: "quote style needs to be consistent within a file",
                type: "Literal"
            }]
        }
    ]
});
