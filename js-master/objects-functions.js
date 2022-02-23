//OBJECTS AND THE DOTS
let myObj = {
    empName: 'Shivali Ranka',
    empId: 001600300,
    empAddress: {
        houseNumber: 219,
        colony: "Teacher's Colony",
        city: 'Meghnagar'
    }
}
console.log(myObj.empAddress); //DOT OPERATOR
console.log(myObj["empAddress"]["colony"]);
console.log(myObj["empAddress"].colony);

//OBJECTS AND OBJECT LITERALS
var myObjNew = new Object();
console.log(myObjNew);

// THIS IS OBJECT LITERAL, SAME AS OBJECT 
var myNewObj = {fName: 'Shivali', lName: 'Ranka'};
myNewObj.city = "Jhabua";
myNewObj.fName = "Pankaj";
console.log(myNewObj);

//NAMESPACES
