// Lexical scope:

// lexical scope is the ability of a function to access variables from its parent scope, even after the parent function has finished executing. This is because the function retains a reference to the variables in its parent scope, allowing it to access and manipulate them as needed. This is a fundamental concept in Javascript and is used to create closures, which are functions that have access to variables from their parent scope even after the parent function has finished executing. Lexical scope is determined at the time of function creation, not at the time of function execution, which means that a function will always have access to the variables in its parent scope, regardless of when it is called.

// const myVar = "value1";

// function myApp(){
//     function myFunc(){
//         const myVar = "value59";
//         console.log("inside myFunc", myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }

// myApp();



const myVar = "value1";

function myApp(){
    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () => {
            console.log("inside myFunc", myVar);
        }
        myFunc2(); // lexical chaining is being done here
    }
    console.log(myVar);
    myFunc();
}

myApp();