import inquirer from "inquirer";
import chalk from 'chalk';
console.log('\n');

console.log(chalk.bgCyan('Enter Only one Character to check whether it is vowel or consonant.'));
console.log('\n');

let english=await inquirer.prompt([
    {
        name:"variable",
        type:"string",
        message:chalk.yellow("Enter Character : ")
    }
])

export default english;