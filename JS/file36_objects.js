// Objects: reference type

// arrays are good but not sufficient for real world data
// objects are used to store "key value pair" data[key:value]
// objects don't have index.
// keys are also called properties and values are also called methods in objects.
// In JS, keys are always string but values can be of any data type. 

// how to create objects:

// const person = {name: "Harshit", age : 26};
const person = {      // object literal syntax
    name: "Abhishek",
    age: 25,
    hobbies: ["coding", "playing", "gym"] // data can be of any type in objects, even array or another object
}

console.log(person);
console.log(typeof person);

// how to access data from objects:
  // dot notation => to access peoperties of objects
console.log(person.name);
console.log(person.age);

// how to add key value pair to objects:
person.gender = "male";
console.log(person);