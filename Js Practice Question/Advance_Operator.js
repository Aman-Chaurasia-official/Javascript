// Write a program to calculate the nth Fibonacci number.
// Write a program to convert a temperature from Celsius to Fahrenheit and vice versa.

function tempToCelcius(num) {
    // return (num - 32) * 5/9 ;
    return (num * 9/5) + 32;
}

function tempToFahre(num) {
    // return (num * 9/5) + 32;
    return (num - 32) * 5/9;
}

const Fahrenheit = tempToFahre(5)
console.log(Fahrenheit,".F");

const Celcius = tempToCelcius(5)
console.log(Celcius,".C");



// Write a program to find the largest among three numbers.
// Write a program to check if a given string is a palindrome.
// Write a program to calculate the GCD (Greatest Common Divisor) of two numbers.
// Write a program to calculate the LCM (Least Common Multiple) of two numbers.
// Write a program to find the roots of a quadratic equation.
// Write a program to calculate the area of a circle.
// Write a program to find the power of a number using exponentiation operator.
// Write a program to perform bitwise operations (AND, OR, XOR) on two numbers.

function And(num1,num2) {
    return num1 && num2;
}

function or(num1,num2) {
    return num1 || num2;
}

const a = And(1,0)
console.log(a);
const b = or(1,0)
console.log(b);