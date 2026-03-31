// Arrow function:
// - Arrow function is a shorter syntax for writing function expressions.

// function singHappyBirthday(){ 
//     console.log("happy birthday to you...");
// }

// const singHappyBirthday = function(){ 
//     console.log("happy birthday to you...");
// }

const singHappyBirthday = () => {  // Arrow function is created by using => symbol and removing the "function" keyword.
    console.log("happy birthday to you...");
}

const sumThreeNumber = (number1, number2, number3) => { 
    return number1 + number2 + number3;
}
const ans = sumThreeNumber(2,3,4);
console.log(ans); // 9

const isEven = (number) => { // when function takes only 1 parameter, we can remove the parentheses around the parameter.Incase of 0 parameter, we have to use empty parentheses eg-1
    return number % 2 === 0;
}
console.log(isEven(4)); // true

// const isEven = number => number % 2 === 0; // above function can be written in a shorter way when there is only one statement in the function body, we can remove the curly braces and the return keyword. This is called implicit return.


// const firstChar = (anyString) => {
//     return anyString[0];
// }

const firstChar = anyString => anyString[0];
console.log(firstChar("harshit")); // h

const findTarget = (array, target) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1; // -1 => target not found in array
}

