// Declares student variable using var keyword 
//declares in global memory a variable called studentName, what is its value?
var studentName; //undefined
console.log(studentName)

// Uses assignment operator(=) to assign a value
//go find a variable called studentName in global memory and output to the console its value
var studentName = "Abdul";
console.log("studentName")


var studentAge = 32;

// To re-assign a variable, use only the variable's name  
studentName = "Tonya";
studentAge = 52;

// To access a value stored in a variable, use the variable's name
console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
console.log("My name is ");

// Logs "My name is Tonya"
//string concatenation
console.log("My name is " + studentName);
