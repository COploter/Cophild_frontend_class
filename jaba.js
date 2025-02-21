let isLoggedIn  = true;
if (isLoggedIn == true){
    console.log("Welcome back!")
}else{
    console.log("Please log in");
}

// Ternary operator()
let isloggedin2 = true;
console.log(isloggedin2 ? "Welcome back!" : "Please log in");

// E. switch statement
// Used when multiple conditions depend on a singll=e value or one variable
let day = 3;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
}
// Note: always use break; to prevent fail through

// loops
// Loops help execute a block of code multiple times.

for (let i=1; i<=5; i++){
    console.log("iteration:", i);
}

let count = 1;
while(count <= 5){
    console.log("count:", count);
    count++;
}

let  num = 1;
do{
    console.log("Number:", num);
    num++;
} while (num <= 6);

for (let a = 1; a <= 5; a++) {
    if(a === 3) continue; //skips 3
    console.log(a);
}

for(let ab = 1; ab == 15; ab++) {
    if (ab === 12) break; //stops 12
    console.log(ab);
}

for (let i = 0; i < 21; i+=3) {
    console.log(i);
}

function greet() {
    console.log("Hello, world!");
}

greet();

function Code() {
    console.log("Java, world!")
}
Code();

function add(kc, lk) {
    return kc + lk;
}

let sum = add(5, 3);
console.log(sum);

function multiply(a, b, c) {
    return a * b * c;
}

let multiple = multiply(3, 4, 5);
console.log(multiple);

const multiply2 = function (x, y, w) {
    return x * y - w;
};
console.log(multiply2(4, 2, 5)); //

const subtract = (a, b) => a - b;
console.log(subtract(10, 3));

const greetUser = (name) => {
    console.log("Hello," + name + " you are welcome")
    console.log("Welcome!");
};

greetUser("Alice");

const greetUser2 = (name) => {
    console.log("Hello," + name + " you are welcome");
};

greetUser2("Alice");


// IIFE (Immediately invoked Function Expression)
(function () {
    console.log("This runs immediately");
})();

(function (name) {
    console.log(`Hello, ${name}!`);
})("John");

(function (name) {
    console.log(`Hello, ${name}!`);
})(" Tishe Isaiah Abodunrin");

// summary
// Function Type Syntax Hoisting
// Function Declaration        function name() {} (corrrect)
// Function Expression const name = function(){} (wrong)
// Arrow Function const name = () => {} (wrong)
// IIFE    (function(){})()    (correct)


// DOM (Document object Model)used to interect with html elements in js
// Data structures store organised data effiiently


// Javascript data structure
// Data structures store and organize data efficiently
// The  main ones in Javascriptare arrays, objects, sets, and maps.

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[2]); //outputs: Apple
console.log(fruits); //outputs Apple, Banana, Cherry

// Arrays methods
// .Push(value) 
// .pop()      Removes the last element
// .shift()       Removes the lastlement 
// .upshift(value)     Removes the first element
// .map(fn)       Creates a new array by applying fn to each element
// .filter(fn)      Creates a new array with elements that match fn
// .foreach()       Loops through array elements 

fruits.push("Mango");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift()
console.log(fruits);
fruits.unshift("orange")
console.log(fruits);

let numbers = [1, 2, 3,  4, 5]

// multiply each number by 2
let doubled = numbers.map(num => num * 2);
console.log(doubled); //[2, 4, 6, 8, 10]

// Get numbers greater than 2
let filtered = numbers.filter(num => num > 2);
console.log(filtered); //[3, 4, 5]

// let arrayloop = numbers.forEach(num => num * 2);
// console.log(arrayloop);

numbers.forEach(
    num => {
console.log(num * 2);
    }
)
// console.log(num * 3);
// console.log(num * 4);
// console.log(num * 5);

// 2. Objects  and objects Manipulation
// An object is a collection  of key value pairs.

let person = {
    name: "Alice",
    age: 25, 
    isStudent: false,
    city: "Lagos"
};

// person.age = 26 
delete person.isStudent;
console.log(person.isStudent);
console.log(person.name);
console.log(person.age * 3);
console.log(person.city);
console.log(person);

// javascript DOM manipulation
// The Document Object Model (DOM) allows javascript to interact with HTMl elements dynamically

// 1.Selecting elements
// 2.Changing content and attribuites
// 3. Event handling (addEventListener)
// 4.Form handling

// getElementById it select a single element by id
let heading = document.getElementById("jaba_ader");
console.log(heading.innerText)

// querySelector
// querySelector("Selector") = Selects the first matching elements
// querySelectorAll("Selector") = Selecting all matching elements

let firstparagraph = document.querySelector("p");
let allparagraphs = document.querySelectorAll("p");

console.log(firstparagraph.innerText);

allparagraphs.forEach(allparagraphs =>{
    console.log(allparagraphs.textContent);
})

document.getElementById("container").innerHTML = "<h2>New content</h2>";

function reveal (){
    console.log("Reveal hidden content")
}

// Event  handling(addEventlistener)
// Events allow user interaction with the webpage

// A. Click  Event

let  button = document.getElementById("myButton")
button.addEventListener("click", function () {
    alert("Button Clicked");
});



let variable = document.getElementById("hoverbox")

variable.addEventListener("mouseover", function(){
    variable.style.color = "pink";
});
variable.addEventListener("mouseout", function (){
    variable.style.color = "white";
    alert("Color changed to pink ealier")
});
