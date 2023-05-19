var rs = require("readline-sync");

// console.log(operation);
// if (!operation == "+" || "-" || "*" || "/") {
//   console.log("That is not a valid operation");
//   console.log(operation);
// } else {
//   console.log(num1);
//   console.log(num2);
//   if (operation === "+") {
//     console.log(num1 + num2);
//   } else if (operation === "-") {
//     console.log(num1 - num2);
//   } else if (operation === "*") {
//     console.log(num1 * num2);
//   } else if (operation === "/") {
//     console.log(num1 / num2);
//   }
// }

let calc = function (operation, num1, num2) {
  const opObj = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  return opObj[operation](num1, num2);
};

const getOperation = (limit) => {
  return rs.question("What operation would you like to perform?", {
    limit,
    limitMessage: "This is not a valid operator",
  });
};

const getNum = (arg) => {
  return rs.questionInt(`What will be the ${arg} number`, {
    limitMessage: "This is not a valid number",
  });
};

const opList = ["+", "-", "*", "/"];

const runCalc = (limit) => {
  const operation = getOperation(limit);
  const [num1, num2] = ["first", "second"].map((item) => getNum(item));
  return calc(operation, num1, num2);
};

console.log("The result is: ", runCalc(opList));
