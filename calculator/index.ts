#! /usr/bin/env node
import functions from "./functions.js";
import inquirer from "inquirer";
import figlet from "figlet";
const chalk = require('chalk');
const welcome=async()=>{
    console.log(figlet.textSync('Calculator', {
    }));
let calculator = await inquirer.prompt([
    {
      name: "num1",
      type: "number",
      message: chalk.yellow("Enter First Number : "),
    },
    {
      name: "operation",
      type: "list",
      message: chalk.yellow("Select Operation you want: "),
      choices: ['+','-','*','/','%'],
    },
    {
      name: "num2",
      type: "number",
      message: chalk.yellow("Enter Second Number : "),
    },
  ]);

  console.log('\n');

if(calculator.operation==='+')
{
console.log(chalk.green(`After Addition your answer is : ${functions.add(calculator.num1,calculator.num2)}`));
}
else if(calculator.operation==='-')
{
console.log(chalk.green(`After Subtraction your answer is : ${functions.sub(calculator.num1,calculator.num2)}`));
}
else if(calculator.operation==='*')
{
console.log(chalk.green(`After Multiplication your answer is : ${functions.mul(calculator.num1,calculator.num2)}`));
}
else if(calculator.operation==='/')
{
console.log(chalk.green(`After Divide your answer is : ${functions.div(calculator.num1,calculator.num2)}`));
}
else if(calculator.operation==='%')
{
console.log(chalk.green(`After Modulus your answer is : ${functions.mod(calculator.num1,calculator.num2)}`));
}
else
{
    console.log('You Enter wrong operation');   
}
}
await welcome();

const loop=async()=>{
const repeat =await inquirer.prompt([
    {
        name:'alph',
        type:'list',
        message:'Do you want to use again calculator :',
        choices:['Yes','No']
    }
])


if(repeat.alph==='Yes')
{
    await welcome();
    await loop();
}
else
{
    console.log('Thank for Using me. Good Bye!');
}
}
await loop();