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
console.log("\n");
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
console.log("\n");

//Array

const fruits=['Strawberry','Bannana','Mango','Apple','Orange'];

for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log("\n");
// Push Pop Unshift Shift Splice Slice filter

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
  console.log('\n');
  
let arrNum=[10,20,30,40,50];


let studentInfo:(string|number)[]=['Shawaal',123];    //Mixed Data Type Array
for(let i=0;i<studentInfo.length;i++)
{
  console.log(studentInfo[i]);
}
console.log('\n');



//      3/12/2023        Sunday Class Work


//********************************************Assignment Rest parameters******************************

function sumO(num1:number,num2?:number):number     //Optional Parameter
{
return num1;
}
console.log(sumO(10));

function sumD(num1:number,num2:number=2):number    //Default Parameters
{
  return num1+num2;
}
console.log(sumD(1));


function sumR(...parameters:number[]):number        // Home Task Rest Parameter

{
  let temp=0;
  for(let param of parameters)
  {
temp=temp+param;
  } 
  return temp;
}
console.log(`${sumR(5,4)}`);

console.log('\n');

//Loops

let Piaic:string[]=['PIAIC1','PIAIC2','PIAIC3','PIAIC4'];
for(let i=0;i<Piaic.length;i++)
{
  console.log(Piaic[i]);
}
console.log('\n');

//Loop with if condition
let cleanCities=['Lahore','Karachi','Peshawar','Islamabad'];   
let temp;
for(let i=0;i<cleanCities.length;i++)                      
{
  if(cleanCities[i]==='Islamabad')
  {
    temp=1;
  console.log(`${cleanCities[i]} is one of the cleanest city.`);
  break;
  }
  else
  {
    temp=0;
  }
}
if(temp===0)
{
  console.log('Not Found');
}
console.log('\n');

//Nested Loop
let firstName=['Alizay','Maryam','Hania','Nancy'];               
let lastName=['Zafar','Ahsaan','Irshad','Shawaal']; 
let fullName=[];
for(let i=0;i<firstName.length;i++)
{ 
  for(let j=0;j<lastName.length;j++)
  {
    fullName.push(firstName[i]+' '+lastName[j]);
  }
}

for(let i=0;i<fullName.length;i++)
{
  console.log(fullName[i]);
}

console.log('\n');

 //Nested Loop with if condition
let fullName1=[];
for(let i=0;i<firstName.length;i++)
{ 
  for(let j=0;j<lastName.length;j++)
  {
    if(i===j)
    {
      fullName1.push(firstName[i]+' '+lastName[j]);
    }
    
  }
}

for(let i=0;i<fullName1.length;i++)
{
  console.log(fullName1[i]);
}
