import inquirer from "inquirer";
import chalk from "chalk";

console.log('\n');

let calculator=await inquirer.prompt([
    {
name:"num1",
type:"number",
message:chalk.yellow("Enter First Number : ")
},
{
    name:"num2",
    type:"number",
    message: chalk.yellow("Enter Second Number : ")
},
{
    name:"operation",
    type:"string",
    message:chalk.yellow("Enter Operation you want (Enter + - * /) : ")
}
])
export default calculator;