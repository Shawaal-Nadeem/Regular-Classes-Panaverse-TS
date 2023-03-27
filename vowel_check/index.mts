import inquirer from "inquirer";
console.log('\n');

console.log('Enter Only one Character to check whether it is vowel or consonant.');
console.log('\n');

let english=await inquirer.prompt([
    {
        name:"variable",
        type:"string",
        message:"Enter Character : "
    }
])

if(english.variable==='A' || english.variable==='a' || english.variable==='E' || english.variable==='e'|| english.variable==='I' || english.variable==='i'|| english.variable==='O'|| english.variable==='o' || english.variable==='U'|| english.variable==='u')
{
    console.log(`${english.variable} is Vowel.`);
}
else
{
    console.log(`${english.variable} is Consonant.`);
    
}