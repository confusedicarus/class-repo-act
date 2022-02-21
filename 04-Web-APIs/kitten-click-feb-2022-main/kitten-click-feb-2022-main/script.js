// TODO: CREATE VARIABLES TO REFERENCE HTML ELEMENTS
// TODO: AND REQUIRED VALUES FOR GAME FUNCTIONALITY
var kittenList = [
  {
    source: "https://placekitten.com/400/400",
    description: "Lookit this little cutie!",
  },
  {
    source: "https://placekitten.com/642/573",
    description: "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
  },
  {
    source: "https://placekitten.com/528/174",
    description: "I want to pet!!!!!",
  },
  {
    source: "https://placekitten.com/452/745",
    description: "too cute!?!",
  },
  {
    source: "https://placekitten.com/753/458",
    description: "This one is kinda weird lookin..",
  },
  {
    source: "https://placekitten.com/635/498",
    description: "So many kittens!",
  },
  {
    source: "https://placekitten.com/257/800",
    description: "what a fuzzy little face!!!!!",
  },
  {
    source: "https://www.fillmurray.com/640/360",
    description: "BEST ONE OF ALL!!!!!",
  },
];

var image = document.querySelector(".kitten-img");
var kittenDesc = document.querySelector(".kitten-desc");
var startBtn = document.querySelector(".start-btn");
var clickBt = document.querySelector(".click-me");
var timerText = document.querySelector(".timer");
var scoresUl = document.querySelector(".scores-list");

var timer = 5;
var score = 0;

//for click button to move to next image
var kittenIndex = 0;

var savedScores = jason.parse(localStore.getItem("score")) || [];

// TODO: INITIALIZE PAGE WITH STARTER VALUES/IMAGES
function init() {
  image.setAttribute("src", kittenList[kittenIndex].source);
  kittenDesc.textContent = kittenList[kittenIndex].description;
  startBtn.style.display = "none";
}

function renderKitten() {
  image.setAttribute("src", kittenList[kittenIndex].source);
  kittenDesc.textContent = kittenList[kittenIndex].description;
}
init();

startBtn.addEventListener("click", startGame());

// TODO: USER CLICKS START BUTTON TO START GAME -
// ==================
// GAME FUNCTIONALITY
// ==================
function startGame() {
  // TODO: SHOW KITTEN IMG AND DESCRIPTION
  // TODO: HIDE START BUTTON
  startBtn.style.display = "none";
  // TODO: SHOW CLICK BUTTON
  clickBt.style.display = "block";
  // TODO: START TIMER AND SHOW ON PAGE
  var gameTimer = (setInterval = timer);
  {
    timer--;
    timerText.textContent = timer;

    if (timer <= 0) {
      clearInterval(gameTimer);
      alert("Game Over");
    }
  }
  1000;
  clickBt.addEventListener("click", function () {
    score++;
    kittenIndex++;
    renderKitten();
  });
}

// TODO: USER CLICKS 'CLICK ME' BUTTON --
// TODO: INCREMENT THROUGH ARRAY OF KITTENS AND SCORE

// TODO: TIMER RUNS OUT, GAME HAS ENDED
// ======================
// END-GAME FUNCTIONALITY
// ======================
function endGame() {
  var userInit = window.prompt("What are your initials?");
  var userObj = {
    //same thing
    userInit: userInit,
    score,
  };
  savedScores.push(userObj);
  localStorage.setItem("score", JSON.stringify(savedScores));

  alert("here is your score, " + userInit + "\nScore: " + score);
  startBtn.style.display = "block";
  clickBt.style.display = "hide";
  kittenIndex = 0;
  timer = 5;
  score = 0;
}

function renderScores() {
    for (let savedScores = 0; i < savedScores.length; i++) {
        const element = savedScores[i];
        var newLi = document.createElement("li");
        newLi = savedScores[i].userInit + "--" + savedScores[i].
    }
}
// TODO: GET USER INITIALS
// TODO: SAVE USER/SCORE TO LOCALSTORAGE
// TODO: RESET PAGE AND VARIABLES FOR NEW GAME
// TODO: ...AND SHOW/RENDER SCORES
