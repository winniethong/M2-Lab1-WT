var play = true;

var winnerMsg = function(user, computer) {
    if (user === computer) {
        window.alert("Tie!");
      } else if ((user === "rock" && computer === "scissors") ||(user === "scissors" && computer === "paper") || (user === "paper" && computer === "rock")
      ) {
        window.alert("You: " + user + "\nComputer: " + computer + "\nYou win! Yay!");
      } else {
        window.alert("You: " + user + "\nComputer: " + computer + "Computer wins!");
      }
}

while (play) {
  var user = window.prompt("Choose rock, paper, or scissors").toLowerCase();
  var randNum = Math.floor(Math.random() *3);
  var computer = "";

  if (randNum === 0) {
    computer = "rock";
  } else if (randNum === 1) {
    computer ="paper";
  } else {
    computer = "scissors";
  }

  if (
    user !== "rock" && user !== "paper" && user !== "scissors"
  ) {
    window.alert("Invalid answer :( choose rock, paper, or scissors");
  } else {
    winnerMsg(user, computer);
  }

  var answer = window.prompt("Play? (y / n)").toLowerCase();

  if (answer !== "y") {
    play = false;
    window.alert("Play again sooon :)");
  }
}
