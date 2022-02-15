// This covers Syntax parsers, Execution contexts and Lexical environments
// SYNTAX PARSER - This is the part which translates the written js code into the language which computer understands (done by compiler) Compiler converts those lines of code into computer instructions

//LEXICAL ENVIRONMENT - where it physically sits for eg variable declared inside function, basically sits inside function
// where you see things written will give you an idea where it is stored in computer's memory.

//EXECUTION CONTEXT -

// Name-value pairs in javascript - a name which maps to a unique value
// Object - a collection of name-value pairs; and that value can be another object.

// Global environment and global object - whenever code is run in javascript, it runs inside execution context.

// Whenever code is return, execution context creates two things: 'Global object' and 'this' keyword by js engine.

// There is always a global object when we run javascript, in case of client-side programming, it is "window".

// Global in javascript means "not inside a function"

var a = 'Learn Javascript';

// function b() {
//     // console.log("Called b");
// }
// b();
// console.log(a);
// so window.a and a is same

// Hoisting phenomenon - bad idea --> here, variables set up and set equal to undefined.
// Execution context is created (Creation phase) --> global object, this keyword and outer environment

// console.time();
let array = ["Banana"];
array.forEach(element => {
    // console.log(array);
});
// console.timeEnd();

// console.time();
let array2 = ["Banana"];
for (let index = 0; index < array2.length; index++) {
    // console.log(array2[index])   
}
// console.timeEnd();

let myObj = {name: 'Shivali'};
// console.log(Object.keys(myObj));

a = {a:1,b:2,c:3};
let b = 'b';
let result = false;
let keyArr = Object.keys(a);
keyArr.forEach(element => {
    if(element == b){
        result = true;
    }
})
// return result;

let str = 'ShivaliR';
let halfLength = str.length/2;
let firstHalf = str.substring(0, halfLength);
console.log(firstHalf);

function myFunc(params) {
    let myObj = {key: params};
    console.log(myObj)
}
myFunc('Shivali');

let arr = [1,2,4, 9 ,10];
let newArr = arr.slice(0,4); //slice() can be used in arrays as well
// console.log(newArr);
console.log(arr.splice(3))

let my_str = 'Shivali';
// console.log(my_str.slice(0,-3));

// First phase of execution context is "creation phase - set up variables and functions" and second phase is "Execution phase - run your code
// line by line, translating it into computer understandable language and compile and run".


