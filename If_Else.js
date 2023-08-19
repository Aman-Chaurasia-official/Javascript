// if (true) {
//     console.log("exectue");
// }

// if (2 === "2") {
//     console.log("correct");
// }
// else{
//     console.log("Incorrect");
// }

// const sum = 500

// if (sum < 500) {
//     console.log("sum is less than 500");
// }
// else if(sum >= 500 && sum < 750) {
//     console.log("sum is between 500 and 750");
// } else {
//     console.log("sum is greater than 750");
// }

// const UserLoggedIn = true;
// const DebitCard = true;
// const LoggedInbyEmail = true;
// const LoggedInbyGoogle = false;

// if(UserLoggedIn && DebitCard){
//     console.log("Allow to buy the products");
// }else{
//     console.log("Not Allow to Buy");
// }

// if(LoggedInbyEmail || LoggedInbyGoogle){
//     console.log("Logged In");
// }
// else{
//     console.log("Logged Out");
// }





// Switch Condition

// const month = "April"

// switch (month) {
//     case "Jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("febuary");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "April":
//         console.log("April");
//         break;
//     case "May":
//         console.log("May");
//         break;

//     default:
//         console.log("Month does'nt match with any cases");
//         break;
// }




// Falsey Value 

// false,0 ,-0 , BigInt : 0n,"", null, undefined , NaN

// truthy values

// true, "0", "false" , " ", [] , {} , function () {}





// const EmptyArray = []

// if (EmptyArray) {
//     console.log("Aman");
// }

// if (EmptyArray.length == 0) {
//     console.log("Empty Array");
// }

// const EmptyObject  = {}

// if (Object.keys(EmptyObject).length == 0) {
//     console.log("Empty Object");
// }


// Nullish Coaliscing Operator

// const val = 2 ?? 10
// const val1 = null ?? 5

// console.log(val);
// console.log(val1);





// Terniary Operator

// condition ? true : false

const tea  = 30
 tea <= 25 ? console.log("Expensive") : console.log("Normal Price");