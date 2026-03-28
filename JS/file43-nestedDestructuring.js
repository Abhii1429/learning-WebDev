// nested destructuring:

// we can also destructure nested objects and arrays using the same syntax as we do for destructuring top-level objects and arrays.

const users = [
    {userId: 1, firstName: 'harshit', gender: 'male'},
    {userId: 2, firstName: 'abhishek', gender: 'male'},
    {userId: 3, firstName: 'devanand', gender: 'male'},
]

const [user1, user2, user3] = users;
console.log(user1); // output: {userId: 1, firstName: 'harshit', gender: 'male'}

// when we want to destructure only specific properties from the nested objects, we use {} for that:

const [{firstName}, , {gender: user3gender, userId}] = users; // when we want to skip an element in the array, we can use a comma without specifying a variable name.
console.log(firstName); // output: 'harshit'
// console.log(gender); // output will show an error as variable name is changed to user3gender
console.log(user3gender); // output: 'male'
console.log(userId); // output: 3
