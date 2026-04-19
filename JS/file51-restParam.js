// rest parameters:

// rest parameters allow us to represent an indefinite number of arguments as an array. It is denoted by three dots (...).

// function myFunc(a,b,c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(3, 4, 5);

function myFunc(a, b, ...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is `, c);
}
myFunc(3, 4, 5, 6, 7, 8, 9);

