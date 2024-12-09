//* Example 1

const quoteStart = "Don't judge each day by the harvest you reap ";
const quoteEnd = "but by the seeds that you plant";

let finalQuote = quoteStart + quoteEnd;

//* Example 2

const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

let quoteLength = quote.length;
let index = quote.indexOf(substring);
let revisedQuote = quote.slice(0, index + substring.length + 1);

//* Example 3

const quote = "I dO nOT lIke gREen eGgS anD HAM";

let fixedQuote = quote.charAt(0).toUpperCase() + quote.slice(1).toLowerCase().replace("green eggs and ham", "dog meat");
let finalQuote = fixedQuote + ".";

//* Example 4

const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;

const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(a ** 2 + b ** 2)}.`;
