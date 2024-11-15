var playerOneRun = 0;
var playerTwoRun = 0;
var playerOneName = "";
var playerTwoName = "";

// start game

function displayNone() {
  document.getElementById("game").style.display = "none";
}
displayNone();

function startGame() {
  document.getElementById("list").style.display = "block";
  document.getElementById("playersName").style.display = "none";
  document.getElementById("controls").style.display = "none";
}

function controls() {
  document.getElementById("list").style.display = "none";
  document.getElementById("playersName").style.display = "none";
  document.getElementById("controls").style.display = "block";
}

function playersName() {
  document.getElementById("list").style.display = "none";
  document.getElementById("playersName").style.display = "block";
  document.getElementById("controls").style.display = "none";
}
startGame();

// getting name

function submit() {
  playerOneName = document.getElementById("firstName").value;
  playerTwoName = document.getElementById("secondName").value;
  document.getElementById("firstPlayerName").innerHTML = `${playerOneName}`;
  document.getElementById("secondPlayerName").innerHTML = `${playerTwoName}`;

  if (playerOneName !== "" && playerTwoName !== "") {
    document.getElementById("gettingUserInfo").style.display = "none";
    document.getElementById("game").style.display = "block";
  } else {
    Swal.fire("Please Enter Players Name");
  }

  startTimer();
}

function playerOneKeys() {
  Swal.fire({
    title:
      "Press Arrow left & right for Moving & Press Arrow up & down for Fighting",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });
}

function playerTwoKeys() {
  Swal.fire({
    title: "Press A & D for Moving & Press W & S for Fighting",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });
}

// timer

var timeLeft = 30;
var timerDisplay = document.getElementById("time");

function startTimer() {
  var timeStart = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timeStart);
      var userShow = Swal.fire("Time Over");
    }
  }, 1000);
}

// keyCode

window.onkeydown = function () {
  // Player-One-Code-Start
  if (event.keyCode === 39) {
    playerOneRun += 15;

    document.getElementById("player1").src = `./Assets/Player1/andyWalk.gif`;
    document.getElementById("player1").style.left = playerOneRun + "px";
    setTimeout(() => {
      document.getElementById(
        "player1"
      ).src = `./Assets/Player1/andyStance.gif`;
    }, 400);
  }

  if (event.keyCode === 37) {
    playerOneRun -= 15;

    document.getElementById("player1").src = `./Assets/Player1/andyWalk.gif`;
    document.getElementById("player1").style.left = playerOneRun + "px";
    setTimeout(() => {
      document.getElementById(
        "player1"
      ).src = `./Assets/Player1/andyStance.gif`;
    }, 400);
  }

  if (event.keyCode === 38) {
    document.getElementById("player1").src = `./Assets/Player1/andyPunch.gif`;

    setTimeout(() => {
      document.getElementById(
        "player1"
      ).src = `./Assets/Player1/andyStance.gif`;
    }, 400);
  }
  if (event.keyCode === 40) {
    document.getElementById("player1").src = `./Assets/Player1/andyKicks.gif`;

    setTimeout(() => {
      document.getElementById(
        "player1"
      ).src = `./Assets/Player1/andyStance.gif`;
    }, 400);
  }
  // Player-One-Code-End

  // Player-Two-Code-Start
  if (event.keyCode === 65) {
    playerTwoRun += 20;
    document.getElementById("player2").classList.add("imgResize");
    document.getElementById("player2").src = `./Assets/Player2/adonWalk.gif`;
    document.getElementById("player2").style.right = playerTwoRun + "px";
    setTimeout(() => {
      document.getElementById(
        "player2"
      ).src = `./Assets/Player2/adonStance1.gif`;
      document.getElementById("player2").classList.remove("imgResize");
    }, 400);
  }

  if (event.keyCode === 68) {
    playerTwoRun -= 20;
    document.getElementById("player2").classList.add("imgResize");
    document.getElementById("player2").src = `./Assets/Player2/adonWalk.gif`;
    document.getElementById("player2").style.right = playerTwoRun + "px";
    setTimeout(() => {
      document.getElementById(
        "player2"
      ).src = `./Assets/Player2/adonStance1.gif`;
      document.getElementById("player2").classList.remove("imgResize");
    }, 400);
  }

  if (event.keyCode === 87) {
    document.getElementById("player2").classList.add("imgResize");
    document.getElementById("player2").src = `./Assets/Player2/adonPunch.gif`;

    setTimeout(() => {
      document.getElementById(
        "player2"
      ).src = `./Assets/Player2/adonStance1.gif`;
      document.getElementById("player2").classList.remove("imgResize");
    }, 400);
  }
  if (event.keyCode === 83) {
    document.getElementById("player2").classList.add("imgResize");
    document.getElementById("player2").src = `./Assets/Player2/adonKick.gif`;

    setTimeout(() => {
      document.getElementById(
        "player2"
      ).src = `./Assets/Player2/adonStance1.gif`;
      document.getElementById("player2").classList.remove("imgResize");
    }, 400);
  }
};
