// Single Threaded, Synchronous Execution. 
// Single Threaded means executing one command at a time. --> Javascript is a single-threaded language.
// Synchronous --> almost same as Single threaded --> executing "one command at a time" and "in order".

//Function Invocation and the Execution Stack
//Invocation means running a function, in javascxript by using a parenthesis ()

/*Let's say there is a piece of code
1. variables and functions will be set up in memory
2. whenever function will be called, a new execution context will be created - Every function creates a new execution context(creates and executes)
3. This way execution stack will be formed.
4. and whoever is on the top of execution stack is running currently.
*/
// ------------------------------------------------------------------------------------------------------------------------------

/*Functions, Context and varible environments
    1. variable environment - where the variable is living
*/

function b(){
    var myVar;
    console.log(myVar);
}
function a(){
    var myVar = 2;
    console.log(myVar);
    b();
}
var myVar = 1;
console.log(myVar);
a();

