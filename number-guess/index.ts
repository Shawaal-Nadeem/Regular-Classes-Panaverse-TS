
import inquirer from "inquirer";
//User put value
console.log("Enter any Number Range(1 -> 5)");
async function userNum()
{
    let answers = await inquirer.prompt([{
        name: "num",
        type: "number",
        message: "Your Turn : "
    }
    ]);

    // Computer put value
let range1=1;
let range2=5;
let randomNum = Math.floor(Math.random() * (range2 - range1 + 1)) + range1;
console.log(`Computer turn : ${randomNum}`);

if(answers.num===randomNum)
{
    console.log("Matched");
}
else
{
    console.log("No Match!!! Try Again");
    console.log('\n');
 userNum();   
}
}
userNum();
