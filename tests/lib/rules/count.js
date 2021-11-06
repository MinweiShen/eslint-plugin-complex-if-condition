const rule = require("../../../lib/rules/count");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

const errorGen = (allowed, actual) => `The if condition has more than ${allowed} expression(s), it has ${actual}.`

ruleTester.run("count", rule, {
    valid: [
        {
            code: "if ( 1 === 1) {}",
            options: [1]
        },
        {
          code: "if ( 1 === 1 || 2 === 2) {}",
          options: [2],
        },
        { 
          // default allows 3 expressions
          code: "if ( 1 === 1 || 2 === 2 || 3 === 3) {}",
        }
    ],
    invalid: [
        {
            code: "if ( 1 === 1 || 2 === 2) {}",
            options: [1],
            errors: [{ message: errorGen(1, 2) }]
        },
        {
          code: "if ( 1 === 1 && (2 === 2 || 3 === 3) && 4 === 4) {}",
          options: [3],
          errors: [{ message: errorGen(3, 4) }]
        },
        {
          // default allows only 3 conditions
         code: "if ( 1 === 1 || 2 === 2 || 3 === 3 || 4 === 4) {}",
         errors: [{ message: errorGen(3, 4) }]
       }
    ]
});