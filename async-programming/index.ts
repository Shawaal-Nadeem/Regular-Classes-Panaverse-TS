//callback

import { resolve } from "path";

function mycallback(item:string)
{
    console.log(`Purchased ${item}`);
}

function callingfunction(item:string,mycallback:(i:string)=>void)
{
console.log("Searching");
console.log("Searching");
console.log("Searching");

mycallback(item);
}

callingfunction("Pizza",mycallback)

//promises

function delay(milliseconds:number):Promise<void>
{
return new Promise((resolve)=>{
    setTimeout(()=>
    {
        resolve();
    },milliseconds)
})
}

delay(1000)
.then(()=>
{
    console.log("The delay is over.");
})
.catch((error)=>
{
console.log("Error is ", error);

})
.finally(()=>
{
        console.log("This is always executed.");
        
})


//try catch finally  
//if u wanna use await in try u will use async word with function
async function delay1(milliseconds:number):Promise<void> {
    return new Promise((resolve)=>
    {
setTimeout(()=>
{
    resolve();
},milliseconds)
    })
}

try
{
    await delay1(1000);
    console.log("Delay is over.");
    
}
catch(error)
{
    console.log("Error message is : ",error);    
}
finally{
    console.log("This is always executed");
    
}