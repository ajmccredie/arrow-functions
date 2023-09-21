/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code block
    return a + b;
}
let sum1 = addTwoNumbers(3, 5);
console.log(sum1);

// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers2(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a, b) => a + b;
let sum2 = addTwoNumbers3(3, 5);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello there!!");

const sayHello = () => console.log("Hello");
sayHello();

// Returning Multiple Lines
/// const returnMultipleLines = () => (
//    '<p>
//    This is a multi-line string! 
//    </p>'
//);