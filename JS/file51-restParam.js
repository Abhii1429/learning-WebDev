// rest parameters:

// rest parameters allow us to represent an indefinite number of arguments as an array. It is denoted by three dots (...).

// function myFunc(a,b,c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(3, 4, 5);

// function myFunc(a, b, ...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `, c);
// }
// myFunc(3, 4, 5, 6, 7, 8, 9);

function addAll(...numbers){
    // console.log(numbers);
    // console.log(typeof numbers); // object, because arrays are objects in JavaScript

    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
// addAll(1,2,3,4,5,6,7,8,9);
// const ans = addAll(1,2,3,4,5,6,7,8,9); // 45
const ans = addAll(4,5,4); // 13

console.log(ans);

