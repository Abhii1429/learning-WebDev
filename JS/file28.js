// Primitive Vs Reference data types

// Primitive type: number, string, boolean, null, undefined, symbol
// Primitive DT are stored in stack memory(cuz they take less space) and they are immutable. when we assign a primitive value to a variable then it creates a copy of that value and stores it in a different memory location. when we change the value of one variable then it does not affect the other variable because both variables are stored in different memory locations.

// let num1 = 6;
// let num2 = num1;
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);

// num1++;

// console.log("after incrementing num1");
// console.log("value of num1 is", num1); // 7
// console.log("value of num2 is", num2);// 6

// value of num2 does not increases because num2 is a copy of num1 and both are stored in different memory locations. num1 and num2 are independent of each other.
//-----------------------------------------------------

// Reference type: array, object, function

// array
let array1 = ["item1", "item2"];
let array2 = array1;

console.log("array1",array1);
console.log("array2",array2);

array1.push("item3");
console.log("after pushing element to array 1");

console.log("array1", array1); // ["item1", "item2", "item3"]
console.log("array2",array2); // ["item1", "item2", "item3"]
// same output for both array1 and array2 because both are stored in the same memory location. array1 and array2 are reference to the same array in memory. if we change the value of array1 then it also changes the value of array2 because both are reference to the same array in memory.
