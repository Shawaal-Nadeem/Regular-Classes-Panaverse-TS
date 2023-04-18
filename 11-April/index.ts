//Structural Typing

interface Ball
{
    diameter:number
}

interface Sphere
{
    diameter:number
}

let ball:Ball=
{
    diameter:10
}

let sphere:Sphere=
{
    diameter:2
}

ball=sphere;             //if we have both interfaces structures (keys name and Datatypes) are same then we can store either ball in sphere or sphere in ball. This method only allows in Typescript
sphere=ball;


interface Tube
{
    diameter:number,
    length:number
}

let tube:Tube=
{
    diameter:30,
    length:5
}

ball=tube;              // no error because ball required one key and tube have on diameter key which staisfy properties of ball and one more key length which is extra
// tube=ball;           error because tube required two keys but ball have only one key


interface Car
{
    wheels:number
    [x:string]:any                    //if we don't know which keyname and its type then we use index signature method
}

let sedanCar:Car=
{
    wheels:4,
    carType:"Sedan"
}

let suvCar:Car=
{
    wheels:4,
    power:2500
}
         // You can see both are inherited by Car and second key of sedanCar and suvCar is different. Because we use index signature method in Car interface


//Nested Objects

interface Author
{
    firstname:string,
    lastname:string
}

interface Book
{
    name:string,
    author:Author
}

let book:Book=
{
    name:"Typescript Book",
    author:{
        firstname:"Shawaal",
        lastname:"Nadeem"
           }
}
console.log(book.author.firstname);


//Intersection types

interface student
{
    studentName:string,
    studentAge:number,
}

interface teacher
{
    teacherName:string,
    teacherAge:number
}

type intersection=student & teacher;

let obj:intersection=
{
    studentName:"Shawaal Nadeem",
    studentAge:21,
    teacherName:"Zia Khan",
    teacherAge:20
}

console.log(obj.studentName);
console.log(obj.teacherName);




// Any

let myval: any;

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK


//Unknown

let value: unknown;

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK


// Assigning a value of type unknown to variables of other types

let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error


// Never

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
 
// Inferred return type is never
function fail() {
  return error("Something failed");
}
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}


//Explicit casting

let myName:unknown="123";
console.log(Number(myName));


//enum

enum color{Red,Green,Blue};
console.log(color.Red);

enum color1{Red=1,Green,Blue};
console.log(color1.Green);
