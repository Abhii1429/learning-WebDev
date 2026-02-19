// if
// else if...
// else

// if one condition is true, then corresponding block will be executed  and then the control will come out of the entire if-else ladder.
// if none of the conditions is true, then the control will come out of the entire if-else ladder.
// only one block(first true condition's block) will be executed in the entire if-else ladder.
// once a condition is found true, rest of the conditions will not be checked.
// conditions are checked from top to bottom.

//Example:

let tempInDegree = 45;

// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("it is cold outside");
// } else if(tempInDegree < 25){
//     console.log("weather is okay");
// }else if(tempInDegree < 35){
//     console.log("let's go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot !!");
// }


if(tempInDegree > 40){
    console.log("too hot !!");
}else if(tempInDegree > 30){
    console.log("let's go for swim");
} else if(tempInDegree > 20){
    console.log("weather is okay");
}else if(tempInDegree < 35){
    console.log("weather is cool");
}else if(tempInDegree > 10){
    console.log("it is cold outside");
}else{
    console.log("extremely cold");
}

console.log("Hello ");