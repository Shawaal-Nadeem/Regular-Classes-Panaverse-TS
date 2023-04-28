"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(var1, var2) {
    return var1 + var2;
}
console.log(add(10, 20));
console.log(add('Shawaal', 'Nadeem'));
console.log(add(true, false));
// console.log(add(2,'Rehman'));  //error because i does not define this type of signature
console.log('\n');
//Tuple
function tuple() {
    return [2, 'Nancy'];
}
let [num, str] = tuple();
console.log(num);
console.log(str);
const tuple1 = () => {
    return { name: 'Shawaal' };
};
let { name } = tuple1();
console.log(name);
