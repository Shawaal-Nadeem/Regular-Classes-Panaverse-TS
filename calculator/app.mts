import inquirer from "inquirer";
import functions from "./functions.js";
let calculator=await inquirer.prompt([
    {
name:"num1",
type:"number",
message:"Enter First Number : "
},
{
    name:"num2",
    type:"number",
    message:"Enter Second Number : "
},
{
    name:"operation",
    type:"string",
    message:"Enter Operation you want (Enter + - * /) : "
}
])

if(calculator.operation==='+')
{
console.log(`After Addition your answer is : ${functions.add(calculator.num1,calculator.num2)}`);
}
else if(calculator.operation==='-')
{
console.log(`After Subtraction your answer is : ${functions.sub(calculator.num1,calculator.num2)}`);
}
else if(calculator.operation==='*')
{
console.log(`After Multiplication your answer is : ${functions.mul(calculator.num1,calculator.num2)}`);
}
else if(calculator.operation==='/')
{
console.log(`After Divide your answer is : ${functions.div(calculator.num1,calculator.num2)}`);
}