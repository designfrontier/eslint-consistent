/**
 * @fileoverview checks for consistent use of let/const vs. var
 * @author Daniel Sellers
 */
"use strict";

var allowedKinds = {
  'var': ['var'],
  'let': ['let', 'const'],
  'const': ['let', 'const'],
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "checks for consistent use of let/const vs. var",
            category: "style",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
            VariableDeclaration: function(node) {
                var kind = node.kind;

                if (!this.allowedKind) {
                    this.allowedKind = allowedKinds[kind]
                }

                if (this.allowedKind.indexOf(node.kind) < 0) {
                    context.report(node, 'please only use let/const OR var within a file not both.');
                }
            }
        };
    }
};
