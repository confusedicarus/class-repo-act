// WRITE YOUR CODE HERE
var studentNames = ["Leo", "Ben", "Alice", "Ashley" ]
console.log(studentNames.length)
console.log("Welcome to the class " + studentNames[0])
console.log("Welcome to the class " + studentNames[1])
console.log("Welcome to the class " + studentNames[2])
console.log("Welcome to the class " + studentNames[3])
console.log("Welcome to the class " + studentNames)

studentNames[0] = "Rick"
if (studentNames[0] !== "Leo") {
    console.log(studentNames[0] + " is in class" )
}