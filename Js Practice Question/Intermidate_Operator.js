// Write a program to find the maximum of two numbers.\

let max1 = 5;
let max2 = 8;
let maximum = Math.max(max1,max2);
console.log(maximum);

// Write a program to find the minimum of two numbers.

let min1 = 5;
let min2 = 2;
let minimum = Math.min(min1,min2);
console.log(minimum);


// Write a program to calculate the average of three numbers.

let avg1 = 5;
let avg2 = 7;
let avg3 = 2;

let average = (avg1 + avg2 + avg3)/3;
console.log(average);


// Write a program to check if a year is a leap year.

let Leap_Year = 2023
if (Leap_Year % 4 == 0) {
    console.log("Leap Year");
}
else{
    console.log(" Not a Leap Year");
}

// Write a program to convert a given number of seconds into hours, minutes, and seconds.

function convertSecondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
  }
  
  // Example usage:
  const seconds = 7320;
  const time = convertSecondsToTime(seconds);
  console.log(`Time: ${time}`);

// Write a program to calculate the factorial of a number.

function factorial(num) {
    if (num ==0 || num == 1) {
        return 1
    }else{
        return num * factorial(num-1)
    }
}

const fact = factorial(5)
console.log(fact);


// Write a program to check if a number is a prime number.

// Write a program to calculate the sum of digits of a number.



// Write a program to reverse a number.

function ReverseNumber(number){
    const numStr = number.toString();
    const reverseStr = numStr.split('').reverse().join('');
    const reverseNum = parseInt(reverseStr,10)

    return reverseNum
}

const reverse = ReverseNumber(12345)
console.log(reverse);
// Write a program to find the area of a triangle given its base and height.

let length = 5;
let breath = 7;

let Area_of_Triangle = 0.5 * length * breath;

console.log('Answer 10 : ',Area_of_Triangle);