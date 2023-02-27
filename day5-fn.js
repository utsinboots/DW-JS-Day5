function add(num1, num2){       //parameter - value that we receive
    //console.log(num1 + num2);
    let result = num1 + num2;
    return result
}

function subtract(num1, num2){
    //console.log(num1 - num2);
    let result = num1 - num2;
    return result;
}

// let num1 = 10
// let num2 = 6
// add(num2, num2)         //argument passed to function 
// subtract(num1, num2)

console.log(`Sum = ${add(10, 4)}`)
console.log(`Difference = ${subtract(5, 2)}`)

//Problem: 10 + 20 - 5
console.log(`Result of 10+20-5 = ${subtract(add(10,20), 5)}`)

function sayHi(){
    console.log("Hi")
}
sayHi()

//Function to welcome user

// function welcome(user){
//     console.log(`Welcome ${user}`)
// }
let welcome = user => console.log(`Welcome ${user}`)    //Alternate one-line function  aka Arrow function
welcome("Ram")

//One line function 
// //higher order function / callback function
let sum = (num1, num2) => num1 + num2       //using arrow function
let minus = (num1, num2) => num1 - num2

function calculate(num1, num2, operation)
{
    return operation(num1, num2)
}
function run(num1, num2, sym)
{
    let fn
    if(sym =="+")
        fn = sum;
    else
        fn = minus;

    console.log(calculate(num1, num2, fn))
}

run(10, 20, "+")
run(10, 20, "-")
