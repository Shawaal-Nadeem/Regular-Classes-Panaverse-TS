//                    OOP
//Member visibility

// class Greeter {
//     public greet() {
//       console.log("hi!");
//     }
//   }
//   const g = new Greeter();
//   g.greet();

  class Greeter {
    public greet() {
      console.log("Hello, " + this.getName());
    }
    protected getName() {
      return "hi";
    }
  }
   
  class SpecialGreeter extends Greeter {
    public howdy() {
      // OK to access protected member here
      console.log("Howdy, " + super.getName());     // when we use parent class attribute in child class then we use super keyword instead of this.
    }
  }
  const g = new SpecialGreeter();
  g.greet(); // OK
//   g.getName();           //error because getName is only accessible only child classes


class Base {
    private x = 0;
  }
  const b = new Base();
//   console.log(b.x);           //   error Property 'x' is private and only accessible within class 'Base'.

console.log('\n');

//Static Member
class user
{
  name:string;
  static id:number=0;
  constructor(name:string)
  {
this.name=name;
user.id++;                //static members access only by class name.
  }
  display()
  {
    console.log(this.name);
console.log(user.id);
    
  }
}

let u1=new user("Nancy");
u1.display();
let u2=new user("Shawaal");
u2.display();
console.log('\n');


class student
{
   private id:number=0;             
    constructor(id:number)
    {
      this.id=id;
    }
    get ID()
    {
return this.id;
    }
    set ID(id:number)
    {
      this.id=id;
    }
    display()
    {
        console.log(this.id);
    }
}

let stud=new student(2);
stud.ID                     //method to call gettor
stud.display();
stud.ID=9;                 //method to call settor 
stud.display();
console.log('\n');

interface pingable
{
    ping():void;
}

class Sonar implements pingable        // when implement keyword use then we cumpolsary implement those functions which are present in interface.
{
    ping(): void {
        {
            console.log("Ping !");
        }
    }
}

let p=new Sonar();
console.log(p.ping());

console.log('\n');


class animal
{
    legs():void
    {
        console.log("4");
    }
}

class dog extends animal         //extends means simply inheritance
{
shout():void
{
    console.log("Bow Bow");
    
}
}
let obj=new dog();
console.log(obj.legs());