/**
 * @fileoverview quotes
 * @author Daniel Sellers
 */
"use strict";

var quoteTypes = ['\'', '"', "`"];

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
      schema: []
  },

  create: function(context) {
    return {
      Literal: function (node) {
        var val = node.val,
          quote = node.raw[0];

        if (quoteTypes.indexOf(quote) >= 0 && node.parent.type !== 'JSXAttribute') {
          if (!this.quote) {
            this.quote = quote;
          }

          if (quote !== this.quote) {
            context.report(node, 'quote style needs to be consistent within a file');
          }
        }
      },

      JSXAttribute: function (node) {
        var val = node.value,
          quote = node.value && node.value.raw ? node.value.raw[0] : false;

        if (quote && quoteTypes.indexOf(quote) >= 0) {
          if (!this.jsxquote) {
            this.jsxquote = quote;
          }

          if (quote !== this.jsxquote) {
            context.report(node, 'quote style needs to be consistent within a file\'s JSX block');
          }
        }
      }
    };
  }
};
