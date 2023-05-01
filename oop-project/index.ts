//University Management System

class person
{
    name:string;
    age:number;
    constructor(name:string,age:number)
    {
this.name=name;
this.age=age;
    }

    get Name()
    {
        return this.name
    }
}

class student extends person
{
rollNo:string;
courses:course[]=[];
constructor(name:string,age:number,rollNo:string)
{
    super(name,age)
this.rollNo=rollNo;
}
registerForCourse(course:course)
{
    this.courses.push(course);
}
}

let std1=new student("Shawaal",21,"L1F21BSCS0781");
let std2=new student("Nancy",22,"L1F00BSCS0000");
let std3=new student("Hande Ercel",24,"L1F20BSCS0320");

class instructor extends person
{
    salary:number;
    courses:course[]=[];
    constructor(name:string,age:number,salary:number)
    {
        super(name,age)
        this.salary=salary;
    }
    assignCourse(course:course)
    {
     this.courses.push(course);
    }
}

let ins1=new instructor("Bilal Hussain",40,100000);
let ins2=new instructor("Amna Mushtaq",27,150000);

class course
{
    id:number;
    name:string;
    students:student[]=[];
    instructor:instructor[]=[];
constructor(id:number,name:string)
{
    this.id=id;
this.name=name;
}
    addStudent(stud:student)
    {
        this.students.push(stud);
    }
    setInstructor(instructor:instructor)
    {
        this.instructor.push(instructor);
    }
    display()
    {
        console.log(this.id);
        console.log(this.name);
for(let i=0;i<this.students.length;i++)
{
    console.log(this.students[i]);
}
for(let i=0;i<this.instructor.length;i++)
{
    console.log(this.instructor[i]);
    
}
    }
}

let course1=new course(1,"Block Chain");
course1.addStudent(std1);
course1.addStudent(std2);
course1.setInstructor(ins1);
let course2=new course(2,"Metaverse");
course2.addStudent(std3);
class department
{
    name:string;
    courses:course[]=[];
    constructor(name:string)
    {
this.name=name;
    }
    addCourse(course:course)
    {
        this.courses.push(course);
    }
    display()
    {
       console.log(this.name);
       for(let i=0;i<this.courses.length;i++)
       {
        console.log(this.courses[i]);
       }
    }
}

let dep1=new department("Computer Science");
dep1.addCourse(course1);
dep1.display();