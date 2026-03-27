// spread operator:

// The spread operator is a powerful feature in JavaScript that allows you to expand elements of an "iterable" (like an array or object or string) into individual elements. It is denoted by three dots (...). The spread operator can be used in various contexts, such as function calls, array literals, and object literals.

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// const newArray = [...array1, 4, ...array2]; // output: [1, 2, 3, 4, 5, 6, 7]

const newArray = [..."123456789"];  // string is also iterable, so it will be spread into individual characters in the new array
console.log(newArray); // output: ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// spread operator can also be used to create a shallow copy of an array or object, which is useful for avoiding unintended mutations.

//==============================

// spread operator in objects:

const obj1 = {
    key1 : "value1",
    key2 : "value2",
};

const obj2 = {
    key3 : "value3",
    key4 : "value4",
    // key1 : "value5", // if there are duplicate keys, the value from the last object will overwrite the previous ones.
};

const newObject = {...obj1, ...obj2};
console.log(newObject); // output : { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'}

// const newObj = {...obj2, ...obj1};
const newObj = {...obj2, ...obj1, key69 :"value69"};
console.log(newObj); // output : {key3: 'value3', key4: 'value4', key1: 'value1', key2: 'value2', key69: 'value69'}

// if duplicate key in obj2 would have been allowed, then the value from obj1 would have overwritten it in newObj.

const newObjec = {...["item1", "item2"]}
console.lpg(newObjec); // output : {0: "item1", 1: "item2"}