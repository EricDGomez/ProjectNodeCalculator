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
    let result = num1 + num2;
    return result;
  } else if (operation == "-") {
    let result = num1 - num2;
    return result;
  } else if (operation == "*") {
    let result = num1 * num2;
    return result;
  } else if (operation == "/") {
    let result = num1 / num2;
    return result;
  }
};

while (true) {
  var operation = rs.question("What operation would you like to perform?");
  if (operation !== "+" && "-" && "*" && "/") {
    console.log("That is not a valid operation");
  } else {
    var num1 = rs.questionInt("What will be the first number?");
    console.log(num1);
    if (isNaN(num1)) {
      console.log("This is not a number");
    }
    var num2 = rs.questionInt("What will be the second number?");
    console.log(num2);
    if (isNaN(num2)) {
      console.log("This is not a number");
    }
    console.log("The result is: " + calc(operation, num1, num2));
    break;
  }
}
