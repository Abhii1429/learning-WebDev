//Rules for Naming variables

//1. You cannot start a variable name with a number

// 1value-->invalid
//value1-->valid

var value1 = 2;
console.log(value1 + 10);
console.log(value1 * 10);
console.log(value1 ** 3);//power is calculated eg:2**3=2*2*2=8
console.log(value1 / 2);

//2. you can use only underscore(_) or dollar sign($) in variable names

// first_name(valid)
// _firstname(valid)

var first_name = "abhi";

// first$name(valid)
// $firstname(valid)

var $firstname = "mithoo";

//3. you cannot use spaces in variable names

//var first name = "abhi"; //invalid
var first_name ="abhi";//snake case writing
var firstName ="abhi";//camel case writing

// conventions:

//1. start with small letter and use camelCase
//2. meaningful names