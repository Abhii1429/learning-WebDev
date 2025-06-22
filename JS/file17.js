//Nested if - else

//winning number --> 19
//logic
//19: your guess is right
// 17 too low
//28 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

//prompt() takes input from user in the form of Strings
// console.log(typeof userGuess, userGuess);

if(userGuess === winningNumber){
    console.log("Your guess is right !");
}else{
    // console.log("Your guess is wrong !");
    if(userGuess < winningNumber){
        console.log("too low!!");
    }else{
        console.log("too high!!");
    }
}
