"use strict";
//Structural Typing
Object.defineProperty(exports, "__esModule", { value: true });
let ball = {
    diameter: 10
};
let sphere = {
    diameter: 2
};
ball = sphere; //if we have both interfaces structures (keys name and Datatypes) are same then we can store either ball in sphere or sphere in ball. This method only allows in Typescript
sphere = ball;
let tube = {
    diameter: 30,
    length: 5
};
ball = tube; // no error because ball required one key and tube have on diameter key which staisfy properties of ball and one more key length which is extra
let sedanCar = {
    wheels: 4,
    carType: "Sedan"
};
let suvCar = {
    wheels: 4,
    power: 2500
};
let book = {
    name: "Typescript Book",
    author: {
        firstname: "Shawaal",
        lastname: "Nadeem"
    }
};
console.log(book.author.firstname);
let obj = {
    studentName: "Shawaal Nadeem",
    studentAge: 21,
    teacherName: "Zia Khan",
    teacherAge: 20
};
console.log(obj.studentName);
console.log(obj.teacherName);
// Any
let myval;
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
let value;
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
let val;
const val1 = val; // OK
const val2 = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error
// Never
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
//Explicit casting
let myName = "123";
console.log(Number(myName));
//enum
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
console.log(color.Red);
var color1;
(function (color1) {
    color1[color1["Red"] = 1] = "Red";
    color1[color1["Green"] = 2] = "Green";
    color1[color1["Blue"] = 3] = "Blue";
})(color1 || (color1 = {}));
;
console.log(color1.Green);
