// function overloading
function add(var1:number,var2:number):number;
function add(var1:string,var2:string):string;
function add(var1:boolean,var2:boolean):boolean;

function add(var1:any,var2:any):any
{
return var1+var2;
}
console.log(add(10,20));
console.log(add('Shawaal','Nadeem'));
console.log(add(true,false));
// console.log(add(2,'Rehman'));  //error because i does not define this type of signature
console.log('\n');


//Tuple
function tuple():readonly[number,string]   //read only apply becauase we does not push pop in tuple.
{
return [2,'Nancy'];
}

let [num,str]=tuple();
console.log(num);
console.log(str);

const object=():{name:string}=>
{
    return {name:'Shawaal'};
}
let {name}=object();
console.log(name);

console.log('\n');

//OOP
class Point{
    x:number;
    y:number;
    constructor(x:number,y:number)
    {
this.x=x;
this.y=y;
    }
}

// Now we create objects of above class
let obj=new Point(4,5);
console.log(obj.x);
console.log(obj.y);

// let obj1=new Point('A',7);     //error because we set x as number in class

