// Write a program to add two numbers.

const { log } = require("console");

let add1 = 5;
let add2= 14;

let Addition = add1+add2;
console.log("Answer 1 : ",Addition);


// Write a program to subtract two numbers.

let sub1 = 87;
let sub2 = 34;
let substract = sub1 - sub2;
console.log("Answer 2 : ",substract);  

// Write a program to multiply two numbers.

let mul1 = 4;
let mul2 = 6; 
let multiply = mul1 +mul2;
console.log("Answer 3 : ",multiply);

// Write a program to divide two numbers.

let div1 = 45;
let div2 = 5;
let division = div1/div2;
console.log("Answer 4 : ",division);

// Write a program to calculate the remainder of division.

let rem1 = 47;
let rem2 = 5;
let remainder = rem1%rem2;
console.log("Answer 5 : ",remainder);

// Write a program to calculate the area of a rectangle.

let area1 = 5;
let area2 = 5;
let Area_of_Square = area1 * area2
console.log("Answer 6 : ",Area_of_Square);

// Write a program to check if a number is positive or negative.

let pos1 = 5
if(pos1>=1){
    console.log("Answer 7 : Number is Positive");
}else{
    console.log("Answer 7 : Number is Negative");
}

// Write a program to check if a number is even or odd.

let even_odd = 5;

if (even_odd % 2 == 0) {
    console.log("Answer 8 : Even, Number was Entered is : ",even_odd);
}
else{
    console.log("Answer 8 : ODD, Number was Entered is : ",even_odd);
}

// Write a program to swap the values of two variables without using a temporary variable.

let a = 5;
let b = 6;
a = a + b;
b = a - b;
a = a - b;
console.log(`Answer 9 : Value of a is ${a } value of b is ${b}` );


// Write a program to calculate the square of a number.

let sq = Math.pow(4,2)
console.log("Answe 10 : ",sq);