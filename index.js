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
  if (operation == "+") {
    return num1 + num2;
  } else if (operation == "-") {
    return num1 - num2;
  } else if (operation == "*") {
    return num1 * num2;
  } else if (operation == "/") {
    return num1 / num2;
  }
};

const getNum = (arg) => {
  return rs.questionInt(`What will be the ${arg} number`, {
    limitMessage: "This is not a valid number",
  });
};

while (true) {
  var operation = rs.question("What operation would you like to perform?");
  if (operation !== "+" && "-" && "*" && "/") {
    console.log("That is not a valid operation");
  } else {
    const [num1, num2] = ["first", "second"].map((item) => getNum(item));
    console.log("The result is: " + calc(operation, num1, num2));
    break;
  }
}
