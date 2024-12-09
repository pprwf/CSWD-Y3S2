//* Example 1

let finalResult;
let evenOddResult;

let first = 2, second = 4, third = 8, fourth = 16;

let add = first + second;
let subtract = fourth - third;

finalResult = add * subtract;
evenOddResult = finalResult % 2 === 0 ? 0 : 1

//* Example 2

let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

result *= result2

let finalResult = result.toFixed(2);
let finalNumber = Number(finalResult);

//* Example 3

let weightComparison, heightComparison, pwdMatch;

//? Statement 1: The elephant weight less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

weightComparison = eleWeight < mouseWeight ? 1 : 0;

//? Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

heightComparison = ostrichHeight > duckHeight ? 1 : 0;

//? Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

pwdMatch = pwd1 === pwd2 ? 1 : 0
