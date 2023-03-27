import english from "./input.mjs";
import chalk from 'chalk';
console.log('\n');

if(english.variable==='A' || english.variable==='a' || english.variable==='E' || english.variable==='e'|| english.variable==='I' || english.variable==='i'|| english.variable==='O'|| english.variable==='o' || english.variable==='U'|| english.variable==='u')
{
    console.log(chalk.green(`${english.variable} is Vowel.`));
}
else
{
    console.log(chalk.green(`${english.variable} is Consonant.`));
    
}