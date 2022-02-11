var userChoice = ["r", "p", "s"] 

var wins = 0
var losses = 0
var ties = 0
var userChoice = prompt("Please choose r, p, or s");
console.log(userChoice)

var computerChoice = Math.random();
if (computerChoice < 0.33) {
    computerChoice = "r";
} else if(computerChoice <= 0.66) {
    computerChoice = "p";
} else {
    computerChoice = "s";
}
console.log(computerChoice)
window.alert("Computer Chose " + computerChoice)

function game () {
 if (userChoice === computerChoice) {
    message = " Tie";
    ties++;
} else if (userChoice === "r" && computerChoice === "p") {
    message = " Loose";
    losses++;
} else if (userChoice === "r" && computerChoice === "s") {
    message = " Win";
    wins++;
} else if (userChoice === "p" && computerChoice === "s") {
    message = " Loose";
    losses++ 
} else if (userChoice === "p" && computerChoice === "r") {
    message = " Win";
    wins++;
} else if (userChoice === "s" && computerChoice === "p") {
    message = " Win";
    wins++;
} else if (userChoice === "s" && computerChoice === "r") {
    message = " Loose";
    losses++
} else if (!message) {
    window.alert("Invalid Entry, Plese try again")
    game();
} function playAgain() {
    var playAgain = window.confirm("Would you like to play again?");
    if (playAgain == false) {
        window.alert("Thanks for playing");
    } else if (playAgain == true) {
        game() 
} return playAgain()
}
game()
console.log(message)
console.log(wins)
console.log(losses)
console.log(ties)



window.alert("You" + message)
window.alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties)


// if (playAgain == true){

// } else if (playAgain == false)  {

// }




// window.alert("Hello Class!")
// var whatDoYouLike = window.prompt("what do you like?")
// //asking for user input
// console.log(whatDoYouLike)


// var likeDance = window.confirm("Do you like to dance?")
// //yes or no - return true or false
// console.log(likeDancee)