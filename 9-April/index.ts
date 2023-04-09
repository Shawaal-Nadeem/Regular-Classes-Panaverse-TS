


// Object
let person:{
    name:string,
    age:number,
}
person={
    name:"ahsaan",
    age:60,
}

// Aliased Object Type
type student ={
name:string,
age:number,
}
let Student:student={
    name:"Farhan",
    age:50,
}
let Student2:student={
    name:"Ahsaan",
    age:40,
}

// Interface Object
interface manager {
    name:string,
    age:number,
    gender:string,
}

let man1:manager={
    name:"Shawal",
    gender:"Male",
    age:90,
}

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
let indian1:{name:string; jhootiIndex:number}=
{
    name:"Baghat Singh",
    jhootiIndex:1,
};

let pakistani1:{name:string;jhootiIndex:number;goliBaziIndex:number}=
{
name:"Ahmed",
jhootiIndex:2,
goliBaziIndex:1,
}
indian1=pakistani1
console.log(indian1);

// Fresh Object Case 
interface ball
{
    diameter:number,
}
interface sphere
{
    diameter:number,
}
let Ball:ball={diameter:10} //if we declare fresh object then we should only pass the number of keys define in interface
let Sphere:sphere={diameter:20}
Sphere=Ball

//Stale Object
interface tube{
    diameter:number,
    length:number,
}
let Tube:tube={
    diameter:20,
    length:40,
}
//Tube=Ball Error 
Ball=Tube

// Index Signature
let x:{name:string,[x:string]:any}
x={
    name:"Hannan",
    age:35,
}