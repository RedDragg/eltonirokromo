let correctNumber;
let startTime;
let attempts = 0;
const guessHistory = [];
const winSounds = [
  "./sounds/win1.mp3",
  "./sounds/win2.mp3",
  "./sounds/win3.mp3",
  "./sounds/win4.mp3",
  "./sounds/win5.mp3"
];
let audio2 = new Audio("./sounds/lose3.mp3");

var bodyElement = document.querySelector(".container");

function sidemenu() {
let menu = document.getElementById("sidemenu");
menu.classList.toggle("sidemenu");
} 

document.getElementById("chevron").addEventListener("click", function() {
let menu = document.getElementById("sidemenu");
this.classList.toggle("chevron-left");
menu.classList.toggle("sidemenu2");
});



function startGame() {
  correctNumber = Math.floor(Math.random() * 100) + 1;
  startTime = null;
  attempts = 0;
  guessHistory.length = 0;
  document.getElementById('guessField').value = '';
  document.getElementById('guessField').disabled = false;
  document.getElementById('guessResult').textContent = '';
  document.getElementById('guessHistory').textContent = '';
  document.getElementById('timeTaken').textContent = '';
  document.getElementById('submitGuessButton').style.display = 'inline-block';
  document.getElementById('resetGameButton').style.display = 'none';
}
console.log(correctNumber)

function startTimer() {
  startTime = new Date();
}

function stopTimer() {
  const endTime = new Date();
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Rond de tijd af tot twee decimalen
  document.getElementById('timeTaken').textContent = `Behaalde tijd: ${timeTaken} seconds`;
}

function playSound(audio) {
  audio.play();
}

function checkGuess() {
    if (!startTime) {
      startTimer();
    }
    const userGuessStr = document.getElementById('guessField').value.trim(); // Trim witruimtes aan het begin en einde
    if (!/^\d+$/.test(userGuessStr)) {
      result.textContent = 'Voer alstublieft een geldig getal in.';
      return;
    }
    const userGuess = parseInt(userGuessStr);
    attempts++;
    
    const result = document.getElementById('guessResult');
    const guessHistoryElement = document.getElementById('guessHistory');
    
    guessHistory.push(userGuess);
    guessHistoryElement.textContent = guessHistory.join(', ');
    
    document.getElementById('guessField').value = '';
    
    if (userGuess < 1 || userGuess > 100) {
      result.textContent = 'Voer een getal tussen 1 en 100 in.';
    } else {
      if (userGuess === correctNumber) {
        stopTimer();
        result.textContent = `Gefeliciteerd! Je hebt het getal geraden in ${attempts} poging(en)!`;
        document.getElementById('submitGuessButton').style.display = 'none';
        document.getElementById('resetGameButton').style.display = 'inline-block';
        document.getElementById('guessField').disabled = true;
        // Randomly select a win sound
        const randomIndex = Math.floor(Math.random() * winSounds.length);
        const winSound = new Audio(winSounds[randomIndex]);
        bodyElement.classList.add("confetti");
        playSound(winSound);
      } else if (userGuess < correctNumber) {
        playSound(audio2);
        result.textContent = "Het getal is hoger. Probeer opnieuw.";
      } else {
        playSound(audio2);
        result.textContent = "Het getal is lager. Probeer opnieuw.";
      }
    }
  }
  
  

function resetGame() {
  startGame();
  startTime = null; // Reset the timer
}

document.getElementById('guessField').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    checkGuess();
  }
});

// Videos toevoegen aan de body
var knop2 = document.querySelector("#mijnKnop2");
knop2.addEventListener("click", function () {
var video = document.getElementById("achtergrondVideo");
video.src = "./img/road.mp4"; // Vervang video
video.load(); // Laad de nieuwe video in de body
});

var knop3 = document.querySelector("#mijnKnop3");
knop3.addEventListener("click", function () {
var video = document.getElementById("achtergrondVideo");
video.src = "./img/neon.mp4"; // Vervang video
video.load(); // Laad de nieuwe video in de body
});

var knop5 = document.querySelector("#mijnKnop5");
knop5.addEventListener("click", function () {
var video = document.getElementById("achtergrondVideo");
video.src = "./img/tunnel.mp4"; // Vervang video
video.load(); // Laad de nieuwe video in de body
});

var knop6 = document.querySelector("#mijnKnop6");
knop6.addEventListener("click", function () {
var video = document.getElementById("achtergrondVideo");
video.src = "./img/tunnel2.mp4"; // Vervang video
video.load(); // Laad de nieuwe video in de body
});

var knop7 = document.querySelector("#mijnKnop7");
knop7.addEventListener("click", function () {
var video = document.getElementById("achtergrondVideo");
video.src = "./img/tunnel1.mp4"; // Vervang video
video.load(); // Laad de nieuwe video in de body
});

function pausePlay() {
  var video = document.getElementById("achtergrondVideo");
  var btn = document.getElementById("pausebtn");
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


var fixedButton = document.getElementById("musicButton");
var audioElement = new Audio("./sounds/bg1.mp3");


if (fixedButton && audioElement) {
audioElement.volume = 0.1;


fixedButton.addEventListener("click", function () {

if (audioElement.paused) {
  audioElement.play();
  fixedButton.innerHTML = "Pause Vibezzz";
} else {
  audioElement.pause();
  fixedButton.innerHTML = "vibezzz";
}
});
} 

document.getElementById('guessField').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      checkGuess();
    } else {
      // Controleren of de ingevoerde waarde groter is dan 100
      const userGuess = parseInt(this.value.trim()); // Trim witruimtes aan het begin en einde
      if (!isNaN(userGuess) && userGuess > 100) {
        this.value = '100'; // Als de ingevoerde waarde groter is dan 100, verander deze in 100
      }
    }
  });
  


startGame(); // Start the game when the page loads