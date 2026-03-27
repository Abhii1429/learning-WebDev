// object destructuring:

// Object destructuring is a convenient way to extract values from objects and assign them to variables. It allows you to unpack properties from an object into distinct variables in a concise syntax.

// const band = {
//     bandName : "led zappelin",
//     famousSong : "stairway to heaven",
// };

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// // bandName = "queen"; // this will throw an error because bandName is a constant variable
// console.log(bandName, famousSong); // output : led zeppelin  stairway to heaven
//==============================

// using object destructuring:

// above code can be rewritten using object destructuring as follows:

// const {bandName, famousSong} = band; // here bandName cannot be updated becoz it's a constt var. but it can be updated if use "let".
// console.log(bandName); // output : led zappelin

//===============================

// we can also assign new variable names while destructuring:

const band1 = {
    bandName : "led zappelin",
    famousSong : "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
};

let{bandName : var1, famousSong : var2} = band1;
// console.log(bandName); // error: bandName is not defined
console.log(var1); // output: led zappelin


const band = {
    bandName : "led zappelin",
    famousSong : "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
};

let{ bandName, famousSong, ...restProps } = band; 
console.log(bandName);
console.log(restProps); // output: { year: 1968, anotherFamousSong: 'kashmir' }