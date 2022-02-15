function outer(){
    var myVarOuter = 10; 
    myVar = 2;
    function inner(){
        let myVarInner = 20;
        if(true){
            const test = 100;
            var test2 = 0;
        }
        console.log("myVar value inside function"+myVar,myVarOuter,myVarInner, test2);
    }
     console.log(test2);
    inner();
}
var myVar = 1;
console.log("myVar value outside function" +myVar);
outer();

/*SCOPE: WHERE A VARIABLE IS PRESENT IN YOUR CODE */
/* ES6 --> Ecmascript 6 / ecmascript 2015  --> next version of javascript --> "let" keyword --> block scope 🤡 */

// Asynchronous : means more than one at a time
// ASYNCHRONOUS CALLBACKS 

// Javascript is synchronous, but whenever events are triggered, javascript maintains an Event queue , so whenever an event (for eg)
// like click triggers, it is present in event queue, and after the javascript normal execution gets completed, then
// it moves to event queue to look for pending events and then execute them line by line, so it's kind of synchronous only.


// javascript engine won't look at the event queue, untill the stack is empty.
// function waitThreeSeconds(){
//     var ms=3000+new Date().getTime();
//     while(new Date() < ms){}
//         console.log("Finished function");
// }

// function clickHandler(){
//     console.log("Click Event");
// }

// window.addEventListener("click", clickHandler);

// waitThreeSeconds();
// console.log('Finished execution entirely');