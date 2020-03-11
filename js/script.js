// adding 50 to different numbers 
// were doing a big No-No by repeating ourselves!!! BAD
let problem1 = 14 + 50
let problem2 = 24 + 50
let problem3 = 34 + 50
let problem4 = 44 + 50

// create a functions that takes in the number to be added to as a parameter 
//  Define the behavior
function addTo50(number){
    return number + 50
}
// calling the fuction and placing the the result inside a variable. 
let problem5 = addTo50(23)
let problem6 = addTo50(100)
let problem7 = addTo50(17)
let problem8 = addTo50(55)

//  Math Practice 
//  1a Create a function that adds 23 to the parameter you give the function

function add23(number) {
    return number + 23;
}

let result1a = add23(7);
console.log(result1a);

//  1b Create a function that subtracts 77 from parameter you give the function

function subtract77(number) {
    return number - 77;
}

let result1b = subtract77(177);
console.log(result1b);

// 1c Create a function that multiplies the parameter by 2

function multiplyBy2(number) {
    return number * 2;
}

let result1c = multiplyBy2(12);
console.log(result1c);

// 1d Create a function that divides parameters by 3.

function divideBy3(number) {
    return number / 3;
}

let result1d = divideBy3(99);
console.log(result1d);

//  1e Create a function that  that takes in your name and returns a String below
// “<your name> i love doing math problems”

function mathProblems(name) {
    return `${name} I love doing math problems`;
}

result1e = mathProblems("Jamie");
console.log(result1e);

// 2a Create a function that multiplies 2 parameters together and returns the result

function multiply2Parameters(a, b) {
    return a * b;
}

result2a = multiply2Parameters(5, 10);
console.log(result2a);

// 2b Create a function that divides 2 parameters  and returns the result

function divideBy2(x, y) {
    return x / y;
}

result2b = divideBy2(81, 9);
console.log(result2b);

// 2c Create a function that subtracts 2 parameters  from each other and returns the result

function subtract2Parameters(c, d) {
    return c - d;
}

result2c = subtract2Parameters(63, 7);
console.log(result2c);

// 2d Create a function that adds 2 parameters together and returns the result

function add2Parameters(e, f) {
    return e + f;
}

result2d = add2Parameters(44, 13);
console.log(result2d);

// 2e Create a function that takes in your name and your favorite math topic and returns a String below
// “<math topic> is <your name> favorite topic in math!”

function mathSentence(name, topic) {
    return `${topic} is ${name}'s favorite topic in math!`;
}

result2e = mathSentence("Jamie", "Non-Euclidean geometry");
console.log(result2e);
