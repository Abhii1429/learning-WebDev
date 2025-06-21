//template string

let age = 22;
let firstName = "abhishek";

// let aboutMe = "my name is " + firstName + " and my age is " + age;

let aboutMe = ` my name is ${firstName} and my age is ${age}`;//output: my name is abhishek and my age is 22
console.log(aboutMe);