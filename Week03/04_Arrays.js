//* Example 1

const myArray = ["Post Malone", "Tattoo Colour", "IU"];
myArray[0] = "Mirrr";
myArray[1] = "NewJeans";
myArray.unshift("LANY");

//* Example 2

let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
let myArray = myString.split("+");
let arrayLength = myArray.length;
let lastItem = myArray[arrayLength - 1];

//* Example 3

let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
myArray.pop();
myArray.push("Mai Shiranui", "Akuma");
myArray = myArray.map((value, index) => `${value} (${index})`);
let myString = myArray.join("-");

//* Example 4

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
let eagle = birds.indexOf("Eagles");
birds.splice(eagle, 1);
let eBirds = birds.map((val) => val.startsWith("E") ? val : null).filter(Boolean);

