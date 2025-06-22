// and(&&) or(||) operator

let firstName = "Abhishek";
let age = "12";

// if(firstName[0] === "A"){
//     console.log("your name starts with A");
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "A" && age > 18){
//     console.log("Name starts with A and above 18");
// }else{
//     console.log("inside else");
// }

if(firstName[0] === "A" || age > 18){
    console.log("inside if");
}else{
    console.log("inside else");
}
