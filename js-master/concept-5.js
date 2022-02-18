const objectOne = {fName: 'Aditya', lname: 'Jain', designation: 'Project Manager'};

// DEALING WITH OBJECTS 
console.log(objectOne['designation']);
console.log(objectOne.fName);
console.log("Object is: ",objectOne); 
console.log("Object is: "+objectOne); //COERCION --> CONVERTING A VALUE FROM ONE TYPE TO ANOTHER.
console.log(objectOne.toString()); 
//CONVERT WHOLE OBJECT INTO ARRAY
const convertIntoArray = Object.entries(objectOne);
console.log("After conversion into array, object becomes "+ typeof(convertIntoArray)); /*HERE, TYPE SHOULD BE ARRAY, BUT RESULT SHOWING AS OBJECT 😢 */
console.log(convertIntoArray);

//CONVERT KEYS OF OBJECT INTO ARRAYS
const keyArr = Object.keys(objectOne);
console.log(keyArr);
console.log(typeof(keyArr));

//CONVERT VALUES OF OBJECT INTO ARRAYS
const valueArr = Object.values(objectOne);
console.log(valueArr);
console.log(typeof(valueArr));

// --------------------------------------------------------------------------------------------------------------------------
// COMBINE TWO ARRAYS INTO ONE OBJECT 
var keyArray = ['foo', 'bar', 'baz'];
var valuesArr = [11, 22, 33];
var newObj = {};
keyArray.forEach((key, i)=> {
    newObj[key] = valueArr[i];
}
);
// console.log('After combining, object is' + newObj); 😢
// ---------------------------------------------------------------------------------------------------------------------------
let arr = [1,2,3];
console.log(typeof(arr));
//---------------------------------------------------------------------------------------------------------------------------