// Hoisting with the variables***

// console.log(x); // undefined
// console.log(y); // Error: Cannot access 'y' before initialization
// console.log(z); // Error: Cannot access 'z' before initialization

var x = 10;
let y = 30;
const z = 50;

// console.log(y);

// Hoisting with functions***

myFunction();

function myFunction() {
  console.log('CodeBustler');
}

