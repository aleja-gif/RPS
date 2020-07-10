const r = document.getElementById("rock");
const p = document.getElementById("paper");
const s = document.getElementById("sci");
const userScoreSpan = document.getElementById("user_score");
const compScoreSpan = document.getElementById("comp_score");
const result = document.getElementById("reult");
var compScore = 0;
var userScore = 0;

function computerGame() {
  const choicesComp = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  const computerMove = choicesComp[randomNumber];
  if (computerMove == "r") {
    document.querySelector(".compuchoice").innerHTML =
      '<i class="fa fa-hand-rock-o" aria-hidden="true"></i>';
  } else if (computerMove == "p") {
    document.querySelector(".compuchoice").innerHTML =
      '<i class="fa fa-hand-paper-o" aria-hidden="true"></i>';
  } else {
    document.querySelector(".compuchoice").innerHTML =
      '<i class="fa fa-hand-scissors-o" aria-hidden="true"></i>';
  }
  return computerMove;
}

function Game(computermove, yourmove) {
  if (
    (computermove == "r" && yourmove == "p") ||
    (computermove == "p" && yourmove == "s") ||
    (computermove == "s" && yourmove == "r")
  ) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    document.querySelector(".result").innerHTML = "<p>🔥 🔥 YOU WON 🔥 🔥 </p>";
  } else if (computermove == yourmove) {
    document.querySelector(".result").innerHTML = "<p>💩 💩 TIE 💩 💩</p>";
  } else {
    compScore++;
    console.log("Computer Won " + compScore);
    compScoreSpan.innerHTML = compScore;
    document.querySelector(".result").innerHTML =
      "<p>👻 👻 COMPUTER WON 👻 👻</p>";
  }
}

r.addEventListener("click", function () {
  console.log("This is a rock");
  yourmove = "r";
  Game(computerGame(), yourmove);
});

p.addEventListener("click", function () {
  console.log("This is paper");
  yourmove = "p";
  Game(computerGame(), yourmove);
});

s.addEventListener("click", function () {
  console.log("This is scissors");
  yourmove = "s";
  Game(computerGame(), yourmove);
});
