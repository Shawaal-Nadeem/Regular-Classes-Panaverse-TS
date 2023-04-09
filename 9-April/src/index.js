"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Object
let person;
person = {
    name: "ahsaan",
    age: 60,
};
let Student = {
    name: "Farhan",
    age: 50,
};
let Student2 = {
    name: "Ahsaan",
    age: 40,
};
let man1 = {
    name: "Shawal",
    gender: "Male",
    age: 90,
};
console.log("Type Object");
console.log(Student.name);
console.log(Student.age);
console.log(Student2.name);
console.log(Student2.age);
console.log("Interface Object");
console.log(man1.name);
console.log(man1.age);
console.log(man1.gender);
// Structural Object
let indian1 = {
    name: "Baghat Singh",
    jhootiIndex: 1,
};
let pakistani1 = {
    name: "Ahmed",
    jhootiIndex: 2,
    goliBaziIndex: 1,
};
indian1 = pakistani1;
console.log(indian1);
let Ball = { diameter: 10 }; //if we declare fresh object then we should only pass the number of keys define in interface
let Sphere = { diameter: 20 };
Sphere = Ball;
let Tube = {
    diameter: 20,
    length: 40,
};
//Tube=Ball Error 
Ball = Tube;
// Index Signature
let x;
x = {
    name: "Hannan",
    age: 35,
};
