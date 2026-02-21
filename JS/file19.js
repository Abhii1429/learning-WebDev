// switch statement:

// it is an alternative to if-else-if ladder, when we have to compare the same variable with different values

//  syntax:
// switch(variable){
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     ...
//     default:
//         // code block
// }

// break keyword is used to exit from the switch statement once a case is matched and its code block is executed.
// if break is not used, then the control will continue to the next case and its code block will also be executed (fall through behavior).  

let day = 5;

// if(day === 0){
//     console.log("Sunday");
// }else if(day === 1){
//     console.log("Monday");
// }else if(day === 2){
//     console.log("Tuesday");
// }else if(day === 3){
//     console.log("Wednesday");
// }else if(day === 4){
//     console.log("Thursday");
// }else if(day === 5){
//     console.log("Friday");
// }else if(day === 6){
//     console.log("Saturday");
// }

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");    
    case 3:
        console.log("Wednesday");    
        break;
    case 4:
        console.log("Thursday");    
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;    
    default :
    console.log("Invalid day");            
}