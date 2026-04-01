// hoisting:

// hoisting is a default behaviour of javascript in which all the variable and function declarations are moved to the top of their scope before the code execution. This means that we can use variables and functions before they are declared in the code.

// console.log(x); // undefined
// var x = 5;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// =============================================

// hoisting of let/const:

// hello();
// let hello = function(){
//     console.log("hello world"); // Uncaught ReferenceError: hello is not defined
// }

// hello();
// const hello = function(){
//     console.log("hello world"); // Uncaught ReferenceError: Cannot access 'hello' before initialization
// }
// In case of let/ const, it enters into a temporal dead zone from the start of the block until the declaration is processed, which means that we cannot access the variable before its declaration. This is why we get a ReferenceError when we try to call the function before its declaration.

// hoisting of var

// hello(); 
// var hello = function(){ // function expression is not hoisted to the top of the scope and cannot be called before its declaration. Var exits but empty value is assigned to it. So, it will give us undefined when we try to call it before its declaration.
//     console.log("hello world"); // Uncaught TypeError: hellp is not a function
// }

// hoisting of function declaration:

hello();
function hello(){ // function is hoisted to the top of the scope and can be called before its declaration
    console.log("hello world"); // hello world
}

// ===