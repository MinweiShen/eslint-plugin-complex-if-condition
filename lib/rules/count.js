const binary = "BinaryExpression";

function countBinary(node) {
  if (node.type === binary) {
    return 1;
  }
  return countBinary(node.left) + countBinary(node.right);
}

const DEFAULT = 3;

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "check the number of expressions",
      category: "Suggestions",
    },
    schema: [{
      type: "number"
    }]
  },
  create: function(context) {
    return {
      IfStatement: function(node) {
        const c = countBinary(node.test);
        const maxAllowed = Math.max(context.options[0] || DEFAULT, 1);
        if (c > maxAllowed) {
          context.report({node, message: `The if condition has more than ${maxAllowed} expression(s), it has ${c}.`});
        }
      }
    }
  }
};