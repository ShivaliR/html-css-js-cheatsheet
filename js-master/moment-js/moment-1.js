//npm install moment
const moment = require('moment');
// moment().format()
//1. CURRENT DATE & TIME
let todayMoment = moment();
console.log(todayMoment);
console.log(typeof(todayMoment));

//2. PARSING
console.log(todayMoment.toISOString());//2022-02-17T11:19:25.058Z
console.log(todayMoment.toString()); //Thu Feb 17 2022 16:48:52 GMT+0530
console.log(todayMoment.toLocaleString())//Thu Feb 17 2022 16:49:25 GMT+0530

//3.STANDARD FOR DECLARING DATE AND TIME - "ISO 8601 string" 
// An ISO 8601 string requires a date part.
// A time part can also be included, separated from the date part by a space or an uppercase T.
let newDate = moment("2021-10-07");
console.log(newDate.toString())

let dateOne = moment("20130208T080910,123");
console.log(dateOne);

let dateTwo=moment("19/02/2021", "MM/DD/YYYY")
console.log(dateTwo.isValid());

//4. RFC 2822 format
let dateThree = moment("12/01/2021 04:50PM", "DD/MM/YYYY hh:mmA");
console.log(dateThree);
console.log(dateThree.toString());//for GMT
console.log(dateThree.toISOString());

let fromMilliSeconds = moment(60000);
console.log(fromMilliSeconds);

var day = new Date(2011, 9, 16);
var dayWrapper = moment(day);
console.log(dayWrapper);

var myUTCTime = new moment.utc("09:00", "HH:mm"); 
console.log(myUTCTime); //UTC time is ending with Z

//5. Getting and Setting Units - Getters, Setter and Min/Max

//GETTING UNITS
let dateNow = new moment("20210109T024030")
console.log(dateNow.minutes()); //GET MINUTES 
console.log(dateNow.hour());
console.log(dateNow.week());

//SETTING UNITS
dateNow.minutes(41);
console.log(dateNow.minutes());
dateNow.week(4);
console.log(dateNow);
console.log(dateNow.day());
dateNow.set("day", 4);
console.log(dateNow);
