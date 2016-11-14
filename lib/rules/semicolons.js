/**
 * @fileoverview semicolons
 * @author Clay Diffrient
 */
"use strict";

const OPT_OUT_PATTERN = /^[-[(/+]$/; // One of [(/+-, but not ++ or --

/**
 * Checks whether a token is a semicolon punctuator.
 * @param {Token} token The token.
 * @returns {boolean} True if token is a semicolon punctuator.
 * Taken from: https://github.com/eslint/eslint/blob/master/lib/rules/semi.js
 */
 function isSemicolon(token) {
   return (token.type === "Punctuator" && token.value === ";");
 }

 /**
 * Check if a semicolon is unnecessary, only true if:
 *   - next token is on a new line and is not one of the opt-out tokens
 *   - next token is a valid statement divider
 * @param {Token} lastToken last token of current node.
 * @returns {boolean} whether the semicolon is unnecessary.
 * Taken from: https://github.com/eslint/eslint/blob/master/lib/rules/semi.js
 */
function isUnnecessarySemicolon(lastToken) {
    if (!isSemicolon(lastToken)) {
        return false;
    }

    const nextToken = sourceCode.getTokenAfter(lastToken);

    if (!nextToken) {
        return true;
    }

    const lastTokenLine = lastToken.loc.end.line;
    const nextTokenLine = nextToken.loc.start.line;
    const isOptOutToken = OPT_OUT_PATTERN.test(nextToken.value);
    const isDivider = (nextToken.value === "}" || nextToken.value === ";");

    return (lastTokenLine !== nextTokenLine && !isOptOutToken) || isDivider;
}

let lastTokenFound = null;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
      docs: {
          description: "ensures that semicolons within a file are consistent",
          category: "Fill me in",
          recommended: true
      },
      fixable: null,  // or "code" or "whitespace"
      schema: [
          // fill in your schema
      ]
  },

  create: function(context) {
    const sourceCode = context.getSourceCode();

    function checkForSemicolon(node) {
      const lastToken = sourceCode.getLastToken(node);
      if (!lastTokenFound) {
        lastTokenFound = lastToken;
      }
      console.log(lastToken);
      if (isSemicolon(lastToken) && !isSemicolon(lastTokenFound)) {
        context.report(node, 'semicolon style needs to be consistent within a file');
      } else if (!isSemicolon(lastToken) && isSemicolon(lastTokenFound)) {
        context.report(node, 'semicolon style needs to be consistent within a file');
      }
      // if (isSemicolon(lastToken)) {
      //   if (!isUnnecessarySemicolon(lastToken)) {
      //     if (!this.lastToken) {
      //       this.lastToken = lastToken;
      //     }
      //     if (lastToken !== this.lastToken) {
      //       context.report(node, 'semicolon style needs to be consistent within a file');
      //     }
      //   }
      // }
    }

    /**
     * Checks to see if there's a semicolon after a variable declaration.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     * Taken from: https://github.com/eslint/eslint/blob/master/lib/rules/semi.js
     */
    function checkForSemicolonForVariableDeclaration(node) {
        const ancestors = context.getAncestors(),
            parentIndex = ancestors.length - 1,
            parent = ancestors[parentIndex];

        if ((parent.type !== "ForStatement" || parent.init !== node) &&
            (!/^For(?:In|Of)Statement/.test(parent.type) || parent.left !== node)
        ) {
            checkForSemicolon(node);
        }
    }


    return {
      VariableDeclaration: checkForSemicolonForVariableDeclaration,
      ExpressionStatement: checkForSemicolon,
      ReturnStatement: checkForSemicolon,
      ThrowStatement: checkForSemicolon,
      DoWhileStatement: checkForSemicolon,
      DebuggerStatement: checkForSemicolon,
      BreakStatement: checkForSemicolon,
      ContinueStatement: checkForSemicolon,
      ImportDeclaration: checkForSemicolon,
      ExportAllDeclaration: checkForSemicolon
    };
  }
};
