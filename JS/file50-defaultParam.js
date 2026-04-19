// default parameters

// function addTwo(a, b){
//     if(typeof b === "undefined"){
//         b = 0; // this was the old way to set default parameters before ES6
//     }
//     return a + b;
// }

// const ans = addTwo(4);
// const ans = addTwo(4,5);
// console.log(ans); // 4;9

// ES6 way to set default parameters

function addTwo(a, b = 0){
    return a + b;
}

// const ans = addTwo(4); // 4
const ans = addTwo(4,5); // 9
console.log(ans);