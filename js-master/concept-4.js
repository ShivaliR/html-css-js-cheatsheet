function myFunction(a) {
  return a.filter(el => el < 0).length;
//   return a.filter((el) => el*4);
}
// myFunction([1,-2,2,-4]);
console.log(myFunction([1,-2,2,-4]));
//THE FILTER() CREATES A NEW ARRAY WITH ALL THE ELEMENTS THAT PASS THE TEST IMPLEMENTED BY THE PROVIDED FUNCTION.

const words = ['Banana', 'Apple', 'Orange',1, 'Grapes', 2];
console.log(words.filter(element => isNaN(element)).length);
// ----------------------------------------------------------------------------------------------------------------------

// Javascript is dynamically typed

/* Primitive type is a single value , obv. an object is not a primitive type. Primitive types - undefined (lack of
existence, null, boolean, string, number(floating point number - always decimals attached to it), Symbol(used in ES6)).
*/

/*stack, web apis, event queue */

// "setTimeout" is not a guaranteed time of execution, it's a minimumtime taken to execution 

// Synchronous - block - you can't click things or do anything till the code is executed, asynchronous is non-blocking 
// "The  event loop job is to look at the stack and look at the task queue. If the stack is empty, it takes the first thing on the queue and pushed it on to the stack."

/*Operators 

*/