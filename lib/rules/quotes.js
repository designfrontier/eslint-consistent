/**
 * @fileoverview quotes
 * @author Daniel Sellers
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
      docs: {
          description: "ensures that quotes within a file are consistent in type",
          category: "Fill me in",
          recommended: true
      },
      fixable: null,  // or "code" or "whitespace"
      schema: [
          // fill in your schema
      ]
  },

  create: function(context) {
    return {
        // give me methods
      Literal: function (node) {
        var val = node.val,
          quote = node.raw[0];

        if (!this.quote) {
          this.quote = quote;
        }

        if (quote !== this.quote) {
          context.report(node, 'quote style needs to be consistent within a file');
        }
      },

      JSXAttribute: function (node) {
        var val = node.val,
          quote = node.raw[0];

        if (!this.jsxquote) {
          this.jsxquote = quote;
        }

        if (quote !== this.jsxquote) {
          context.report(node, 'quote style needs to be consistent within a file\'s JSX block');
        }
      }
    };
  }
};
