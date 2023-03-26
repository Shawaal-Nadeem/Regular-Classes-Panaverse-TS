// import a from "./first";                        // in case of export default we can change variable /key name when we import 
// import  {b}  from "./second";                   // in case of multiple exports we cannot change variable /key name when we import, we use {} notation and inside bracket we use vriable name that we use in export file
// import  {c}  from "./second";                   
// console.log(a);
// console.log(b);
// console.log(c);

//2nd approach

import a from "./first.js";                        // in case of export default we can change variable /key name when we import 
import  secondFile  from "./second.js";           // in case of multiple default exports we export object and we import, we change variable /key name when we import, we use e.g. secondFile.b to get value of b
console.log(a);
console.log(secondFile.b);
console.log(secondFile.c);
