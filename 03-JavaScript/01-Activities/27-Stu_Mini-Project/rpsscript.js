

var userChoice = prompt("Please choose R, P, or S")
console.log(userChoice)

window.alert(userChoice)
console.log(gameStatus.game)
// window.alert("You" + message + " !")

var userChoice = {
    userPick: ["r", "p", "s"],
    

}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));



function gameStatus() {
    var game
    if(getRandomInt(3) === userChoice.includes[1,2]) {
        game = "loose"
    } else {
        game = "win"
    }
}



// var gameStatus() {
//   var message
//     if(gameStatus === true) {
//         message = "Win"
//     } else {
//         message = "Loose"
//     }  
// }


// var computerChoice() {
//     function getRandomInt() {
//         return Math.floor(Math.random() *3)
//     }
// }



// r = 1
// p = 2
// s = 3
// var wins = 0;
// var losses = 0;
// var ties = 0;


// window.alert("Hello Class!")

// var whatDoYouLike = window.prompt("what do you like?")

// //asking for user input
// console.log(whatDoYouLike)


// var likeDancee = window.confirm("Do you like to dance?")

// //yes or no - return true or false
// console.log(likeDancee)