 //Simple Function
function sum(myNumber1:number,myNumber2:number):number
{
return myNumber1+myNumber2;
}
function mul(myNumber1:number,myNumber2:number):number
{
    return myNumber1*myNumber2;
}
function sub(myNumber1:number,myNumber2:number):number
{
return myNumber1-myNumber2;
}
function div(myNumber1:number,myNumber2:number):number
{
return myNumber1/myNumber2;
}

//Arrow Function
const sum1=(myNumber1:number,myNumber2:number)=> myNumber1+myNumber2;

const mul1=(myNumber1:number,myNumber2:number):number=>
{
    //if we have multiple statements in arrow function then we use return in this case. Otherwise no return need.
    console.log('Hy');
 return myNumber1*myNumber2;
}
const sub1=(myNumber1:number,myNumber2:number)=>myNumber1-myNumber2;

const div1=(myNumber1:number,myNumber2:number)=>myNumber1/myNumber2;

console.log(`Simple Function Sum ${sum(10,5)}`);
console.log(`Arrow Function Sum ${sum1(10,5)}`);
console.log(`Simple Function Multiply ${mul(10,5)}`);
console.log(`Arrow Function Multiply ${mul1(10,5)}`);
console.log(`Simple Function Subtract ${sub(10,5)}`);
console.log(`Arrow Function Subtract ${sub1(10,5)}`);
console.log(`Simple Function Divide ${div(10,5)}`);
console.log(`Arrow Function Divide ${div1(10,5)}`);

//If Else Statements

let num=5;
if (num > 5) {
    console.log(num + 'is Greater');
}
else if (num === 5) {
    console.log('Equal');
}
else {
    console.log(num+'is Lesser');
}


//Array

const fruits=['Strawberry','Bannana','Mango','Apple','Orange'];

for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

// Push Pop Unshift Shift Splice Slice

let guestArray = ["Nancy", "Hande Ercel", "Killjoy"];    //Original Array
for (let i = 0; i < guestArray.length; i++) {
  console.log(guestArray[i]);
}
console.log("\n");
guestArray.push('Ahsaan');    //add something in last index

for (let i = 0; i < guestArray.length; i++) {
    console.log(guestArray[i]);
  }
  console.log('\n');
  guestArray.pop();             //remove last index

  for (let i = 0; i < guestArray.length; i++) {
    console.log(guestArray[i]);
  }
  console.log('\n');
  
guestArray.unshift('Shawaal');  //Add something at first index
for (let i = 0; i < guestArray.length; i++) {
    console.log(guestArray[i]);
  }
console.log('\n');
guestArray.shift();    //Remove at First index
for (let i = 0; i < guestArray.length; i++) {
    console.log(guestArray[i]);
  }
  console.log('\n');
  guestArray.splice(Math.floor(guestArray.length/2),0,'Shawaal');   //Add something at mid of array
//   guestArray.splice(1,0,'Shawaal');   //Add something at index 1 of array, 0 means no of values you wanna delete after index 1 in this case. 
  for (let i = 0; i < guestArray.length; i++) 
  {
    console.log(guestArray[i]);
  }
  console.log('\n');
let newguest=guestArray.slice(1,3);      //Copy from index 1 to 3 but index 3 is not included
// let newguest=guestArray.slice(1);   //Copy from index 1 to upto so on  
for (let i = 0; i < newguest.length; i++) 
{
  console.log(newguest[i]);
}
  