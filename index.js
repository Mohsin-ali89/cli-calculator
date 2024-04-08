#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstnumber" },
    {
        message: "entre your second number",
        type: "number",
        name: "secondnumber",
    },
    {
        message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//conditional statement
if (answer.operator === "addition") {
    console.log(`The answer of sum is : ${answer.firstnumber + answer.secondnumber}`);
}
else if (answer.operator === "subtraction") {
    console.log(`The answer of subtraction is : ${answer.firstnumber - answer.secondnumber}`);
}
else if (answer.operator === "multiplication") {
    console.log(`The answer of multiplication is : ${answer.firstnumber * answer.secondnumber}`);
}
else if (answer.operator === "division") {
    console.log(`The answer of division is : ${(answer.firstnumber / answer.secondnumber).toFixed(4)}`);
}
