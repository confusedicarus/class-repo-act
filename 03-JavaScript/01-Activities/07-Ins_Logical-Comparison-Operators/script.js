var a = 100;
var b = 10;
var c = "10";

// Arithmetic operators combine with numbers to form an expression that returns a single number
console.log(a + b);//110
console.log(a - b);//90
console.log(a / b);//10
console.log(a * b);//1000

// Modulus returns the remainder between two numbers.  
console.log(a % b);

// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality


//equality operator
console.log(b == c);//true only checks the value it does not check the data type
console.log(b != c);

// Compares equality and type (strict equality)
//=== strict equality operator = checks value and data type
console.log(b === c);//false
console.log(b !== c);

// Greater than or less than
console.log(a > b);
console.log(a < b);

// Greater than or equal to and less than or equal to
console.log(a <= b);
console.log(a >= b);

// Logical operators take in two or more expressions and return true or false 
var expression1 = (b == c);//true
var expression2 = (a > b);//true

// Evaluates to true if expression1 AND expression2 are both true, otherwise false

//both of these variables(conditions) have to be true in order for this expression to evaluate to true

//&& - bother have to evaluate to true in order to be true
console.log(expression1 && expression2);//true

// Evaluates to true if expression1 OR expression2 is true, otherwise false
// || = or  (|| = Shift+\)
console.log(expression1 || expression2);

// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true

console.log(expression2);

// Returns false
//logical not operator
//takes the inverse of the original value
console.log(!expression2);
