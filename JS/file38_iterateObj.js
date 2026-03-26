// how to iterate through an Object:

// 1. for in loop
// 2. Object.keys()

const person = {
    name: "abhishek",
    age : 23,
    "person hobbies" : ["coding", "chess", "gym", "travelling", "sleeping"]
}

for(let key in person){
    // console.log(person.key); // output => undefined(3 times)
    console.log(person[key]);

    // for printing key-value pair:
    console.log(`${key} : ${person[key]}`); // using template string 

    // another way to print key-value pair:
    console.log(key, " : ", person[key]); // using comma(,) => it will automatically add space in between key and value 
}
// ===========================================================

// Object.keys() => it will return an array of keys of the object

console.log(Object.keys(person)); // it will return an array of keys of the object

console.log(typeof(Object.keys(person))); // output => object (because array is also a type of object in JavaScript)

const val = Array.isArray(Object.keys(person)); // to check whether the output of Object.keys() is an array or not

console.log(val); // output => true (because the output of Object.keys() is an array)

//=====================================================

for(let key of Object.keys(person)){
    console.log(person[key]);
}
