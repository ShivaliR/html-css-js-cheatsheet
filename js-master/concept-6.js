var arr = ['Shivali', 'Taher', 'Akshay', 'Huzefa'];
console.log(arr.sort()); //1. SORTS THE ELEMENTS IN AN ARRAY
var arrNew = [1,6,8,0];
console.log(arrNew.sort());

// DATES IN JAVASCRIPT
var dateNew = new Date('2000/01/01 08:00:00');
console.log(dateNew.toDateString()); //Sat Jan 01 2000
console.log(dateNew.getTime());
console.log(dateNew.toISOString());//2000-01-01T02:30:00.000Z
console.log(dateNew.toUTCString());//Sat, 01 Jan 2000 02:30:00 GMT
console.log(dateNew.toTimeString());//08:00:00 GMT+0530 (India Standard Time)
console.log(dateNew.toJSON());//2000-01-01T02:30:00.000Z
console.log(dateNew.toLocaleString());//1/1/2000, 8:00:00 am
console.log(dateNew.toLocaleDateString());//1/1/2000
console.log(dateNew.toLocaleTimeString());//8:00:00 am



function myFunction1 (a, b){
let differenceInTime = Math.abs(a.getTime()-b.getTime());//Math.abs() to find absolute value/modulus i.e. negative number to a positive number
let days = (differenceInTime)/(1000*3600*24);
console.log(days);
}
myFunction1(new Date('2000-01-01'), new Date('2020-06-01'));

function myFunction2(a, b){
let result = Math.abs(a.getTime()-b.getTime());
console.log ((result/1000));
}
myFunction2(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))

function myFunction3(a, b) {
    const currentDays = a.getDate();
    console.log("target", currentDays);
    console.log( a.setDate(currentDays + b));
}
myFunction3(new Date(Date.UTC(2000,01,01)), 31);

let myDate = new Date('2000/01/01 08:00:00');
let dateObj = {};
dateObj.hrs = myDate.getHours();
dateObj.mins = myDate.getMinutes();
dateObj.secs = myDate.getSeconds();
console.log(dateObj);

//----------------------------------------------------------------------------------------------------------------
let tryWithArray = [1,1,1,2,1];
let val=tryWithArray[0];
let counter=0;
tryWithArray.forEach((element) =>{
    if(element===val){
        counter++;
    }
} )
console.log((counter===tryWithArray.length)?true:false);

let str = 'Shivali';
console.log(str.includes('S'));

var a;
if(!a){
    console.log('Something is there!')
}

function greet(name){
    name = name||'<Your name here>';
    console.log('Hello', name);
}
greet('Tony');
greet();
 