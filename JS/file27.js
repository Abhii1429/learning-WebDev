// array push pop
// array shift unshift

let fruits = ["apple", "mango","grapes"];
console.log(fruits);

//# push: adds in the last of the array

// fruits.push("banana");
// console.log(fruits); // output: apple, mango,grapes,banana
// # push() method adds one or more elements to the end of an array and returns the new length of the array. It modifies the original array.
//------------------------------------------------------

//# pop():removes from the last of the array

// console.log(fruits.pop());// printing the return value provided by pop() method 
// output: banana

// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is ", poppedFruit);
// # pop() method removes the last element from an array and returns that element. It modifies the original array.
//------------------------------------------------------
//# unshift: adds in front of the array
 
// fruits.unshift("banana");
// fruits.unshift("myFruit");
// console.log(fruits);
// # unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. It modifies the original array.
//-----------------------------------------------

//shif(): removes from the front of the array

let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruit is", removedFruit);
