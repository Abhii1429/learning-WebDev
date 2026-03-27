// object inside an array

// we can have an array of objects and objects can also have an array as a property
// very useful in real world applications

const users = [
    {userId: 1, firstName: "harshit", gender:'male'},
    {userId: 2, firstName: "divanshu", gender:'male'},
    {userId: 3, firstName: "devanand", gender:'male'},
]

for(let user of users){
    console.log(user); // output: {userId: 1, firstName: "harshit", gender: 'male'}, {userId: 2, firstName: "divanshu", gender:'male'}, {userId: 3, firstName: "devanand", gender: 'male'}  
    console.log(user.firstName); // output: harshit, divanshu, devanand
    console.log(user.userId); // output: 1, 2, 3
}

