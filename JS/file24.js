//break keyword--> stops the loop

// continue keyword-->skips the iteration

// for(let i = 1; i <= 10; i++){
//     if(i === 4){
//         break;
//     }
//     console.log(i);
// } 
// break keyword breaks the loop forcefully

for(let i = 1; i <= 10; i++){
    if(i === 4){
        continue; //it skips the 4 in output
    }
    console.log(i);
} 
console.log("hello there");