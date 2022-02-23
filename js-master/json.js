let jsonObj = {
    empName: 'Akshay Paritosh',
    empId: 001600300,
    empAddress: {
        flatNumber: 123,
        flatName: 'Prasad Villa',
        city: "Patna"
    }
}
console.log(jsonObj);//THIS IS JSON OBJECT

let convertJsonToString = JSON.stringify(jsonObj);
console.log(convertJsonToString);//PARSE JSON OBJECT TO STRING
//WE CONVERT JSON OBJECT TO STRING SO THAT WE CAN PERFORM ALL STRING MANIPULATION METHODS AND TRANSFER THIS STRING ANYWHERE

let newString = convertJsonToString.replace('Akshay', 'Yash');
console.log(newString);

//PARSE STRING TO JSON OBJECT
let convertStringToJsonObj = JSON.parse(convertJsonToString);
console.log(convertStringToJsonObj);