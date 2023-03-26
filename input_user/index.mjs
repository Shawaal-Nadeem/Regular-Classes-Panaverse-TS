import inquirer from "inquirer";
import add from "./function.js";
let answers = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter Number 1:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Number 2:"
    }
]);
console.log(add(answers.num1, answers.num2));
