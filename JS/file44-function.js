// function:

// function is a block of code that performs a specific task. It can be reused and called multiple times in a program.


// function expression:

// 1
function singHappyBirthday(){ 
    console.log("happy birthday to you...");
}

// const singHappyBirthday = function(){ // this function and above function are same that's why shows error
//     console.log("happy birthday to you...");
// }


// 2
function twoPlusFour(){
    console.log(2+4);
}

twoPlusFour();
twoPlusFour();
twoPlusFour();

// a/c to DRY, we use function to avoid repeating but it isn't getting the job done

// 3
function sumTwoNumbers(number1, number2){ // number1, number2 => parameters
    return number1 + number2;
}

const returnedValue = sumTwoNumbers(9, 5); // 9,5 => arguments
console.log(returnedValue); // 14

// 4
// function sumThreeNumbers(number1, number2, number3  ){ // number1, number2 => parameters
//     return number1 + number2 + number3;
// }

const sumThreeNumber = function(number1, number2, number3){ // this function and above function are same that's why shows error in console
    return number1 + number2 + number3;
}

const returnedValue1 = sumThreeNumbers(9,2, 5); // 9,2,5 => arguments
console.log(returnedValue1); // 16

// console.log(2 + 3 + undefined); // output=> NaN

// 5
// isEven function:
// input : 1 number1
// output: true, false

function isEven(number){
    if(number % 2 === 0){
        return true;
    } else{
        return false;
    }
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

// above function can be written in a shorter way:

function isEven(number){
    return number % 2 === 0;
}

console.log(isEven(4)); // true

// 6
// function:
// input : String
// output: firstCharacter

function firstChar(anyString){
    return anyString[0];
}

console.log(firstChar("abc")); // a

// 7 :
// input : array, target(number)
// output: index of target present in array

function findTarget(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1; // -1 => target not found in array
}
const myArray = [1, 3, 8, 90];
const ans = findTarget(myArray, 4);
console.log(ans); // -1

