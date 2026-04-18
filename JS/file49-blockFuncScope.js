// block scope V/s function scope

// let and const are block scope
// var is function scope

// block scope

{
    let firstName = "Abhi"; 
    console.log(firstName); // output: Abhi
}
// console.log(firstName); // output: ReferenceError: firstName is not defined

{
    let firstName = "Dev"; // var name is same but both are in different blocks so they are different var.
    console.log(firstName); // output: Dev
}
// "let" and "const" can only be accessed within the block they are defined in.

const firstName = "Sid"; // this is glpbal scope variable
console.log(firstName); // output: Sid

// function scope

{
    var firstName = "Abhi";
    console.log(firstName); // output: Abhi
}

{
    console.log(firstName); // this can also access the "firstName" variable because "var" is function scope not block scope.
}

// if(true){
//     let firsName = "Champ";
//     console.log(firstName); 
// }
// console.log(firstName); // this cannot access the var inside the block as let is block scope.


if(true){
    var firsName = "Champ";
    // console.log(firstName); 
}
console.log(firstName); // accessible as var is not block scope

function myApp(){
    if(true){
        var firstName = "harshit"; 
        console.log(firstName);
    }
    console.log(firstName); // using let or const, wew cannot access this var here.
    if(true){
        console.log(firstName);
    }
}
myApp();