// "for of" loop in array

const fruits = ["apple","mango","grapes","fruit4", "fruit5"];
// var name is in plural here
const fruits2 =[];
for(let fruit of fruits){ // however  we can use any name of variable but it is good practice to use singular verb as variable name in for of loop when we are iterating over an array which has plural verb as name.
    fruits2.push(fruit.toUpperCase()); // output: "APPLE", "MANGO",...."FRUIT5"
}
console.log(fruits2);