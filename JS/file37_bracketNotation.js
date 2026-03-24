// example
const person = {
    "name": "Abhishek", // keys are always string in objects, so we can also write keys in double quotes
    "age": 25,
    hobbies: ["coding", "chess", "gym"]     
}
console.log(person);

// how to access data from objects:

    // bracket notation => to access peoperties of objects
    console.log(person["name"]);
    console.log(person["age"]);
    console.log(person.hobbies);

// how to add "key value" pair to objects:

person["gender"] = "male";
console.log(person);
//==========================================================


// difference between dot & bracket notation

const person1 = {
    name : "abhishek",
    age : 24,
    "person hobbies" : ["coding", "chess", "gym"] // if key has space in between then we have to use "bracket" notation to access it
}

console.log(person1["person hobbies"]);

const key = "email"; // we want to add email as key in person1 object.

person1[key] = "abhihopesalive@gmail.com"; // [key] => ["email"] => person1["email"] = "abhihopesalive@gmail.com"

console.log(person1);