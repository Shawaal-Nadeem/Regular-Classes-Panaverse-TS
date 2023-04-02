import calculator from "./input.js";
import functions from "./functions.js";
import chalk from 'chalk';

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