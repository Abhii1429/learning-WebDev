// Parameter Destructuring:

// We can also destructure the parameters of a function. This is particularly useful when we have a function that takes an object as an argument and we want to extract specific properties from that object.
// It allows us to directly access the properties of the object without having to reference the object itself. This can make our code cleaner and more concise.

// mostly used in :
// object
// react

const person =  {
    firstName : "Abhi",
    gender : "male",
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age); // undefined
// }

function printDetails({firstName, gender, age}){ // here input parameter is object so it is being destructured here 
    console.log(firstName); // we don't need to write obj.firstName because we have destructured the object in the parameter itself
    console.log(gender);
    console.log(age); // undefined
}

printDetails(person);