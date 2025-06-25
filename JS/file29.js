// how to clone array

// how to concatenate two array


let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];

// let array2 = array1.slice(0);//method 1
// let array2 = array1.slice(0).concat(["item3", "item4"]);

// let array2 = [].concat(array1);// method 2
//  let array2 = [].concat(array1, ["item3", "item4"]);

//method 3 --> Spread operator

// let array2 = [...array1,"item3", "item4", "item5"];
let oneMoreArray = ["Ram", "Shyam"];
let array2 = [...array1, ...oneMoreArray];

// array1.push("item3");
console.log(array1 === array2);
console.log(array1);
console.log(array2);