// Het spel genereert een willekeurig getal tussen 1 en 100
var targetNumber = Math.floor(Math.random() * 100) + 1;

console.log("JS is connected.");

// Het spel begint met 0 pogingen
var attempts = 0;

// Array om de ingevoerde getallen in op te slaan
var guesses = [];

// Lijst van geluidsbestanden
var winGeluiden = [
  "./sounds/win1.mp3",
  "./sounds/win2.mp3",
  "./sounds/win3.mp3",
  "./sounds/win4.mp3",
  "./sounds/win5.mp3"
];

// Kies een willekeurige index uit de geluiden array
var randomIndex = Math.floor(Math.random() * winGeluiden.length);

// Selecteer het audio-element
var audio = new Audio(winGeluiden[randomIndex]);

// Stel de bron van het audio-element in op het willekeurig gekozen geluidsbestand
audio.src = winGeluiden[randomIndex];

// selecteer het audio-element
var audio2 = new Audio("./sounds/lose3.mp3");

// Referentie naar de ingevoerde getallen worden weergegeven
var guessesElement = document.getElementById("guesses");

// Referentie naar de hoofdtekst (h1)
var h1Element = document.getElementById("mijnH1");

// Referentie naar het formulier
var guessForm = document.getElementById("guessForm");

// Referentie naar de achtergrondblok
var bodyElement = document.querySelector(".div_backblock");

// Referentie naar de knop voor reset
var resetElement = document.createElement("button");

// Referentie naar de submit knop
var submitKnop = document.querySelector(".submit");

// Functie om de tijd in seconden te formatteren naar minuten:seconden formaat
var startTime, endTime;
var timeMessage = document.getElementById("time");

function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;

  var formattedTime = minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
  return formattedTime;
}

// Referentie naar het HTML-element waar de resultaten worden weergegeven
var resultElement = document.getElementById("result");

// Functie om de gebruiker een getal te laten raden
function guessNumber(event) {
  event.preventDefault(); // Voorkomt dat het formulier wordt verzonden
  audio2.play();
  var guessInput = document.getElementById("guessInput");
  var guessNumber = parseInt(guessInput.value);
  // Controleren of de ingevoerde waarde een geldig getal is
  if (isNaN(guessNumber)) {
    resultElement.textContent = "Voer alstublieft een geldig getal in.";
    guessInput.value = "";
    guessInput.focus();
    return;
  }

  // Controleren of de ingevoerde waarde overeenkomt met het doelgetal
  attempts++;
  guesses.push(guessNumber); // Toevoegen van het ingevoerde getal aan de array van pogingen
  console.log("Geraden nummer: " + guessNumber);
  // Weergeven van de ingevoerde getallen als een string van arrays
  var guessesString = guesses.join(" | ");
  guessesElement.textContent = guessesString;

  if (guessNumber === targetNumber) {
    console.log("You win!");
    endTime = new Date(); // De timer wordt geeindigd
    var timeDiff = Math.abs(endTime - startTime);
    var secondsPlayed = Math.floor(timeDiff / 1000);
    timeMessage.textContent = "Je hebt er " + formatTime(secondsPlayed) + " over gedaan.";
    h1Element.textContent = "You win!";
    resultElement.textContent = "Gefeliciteerd! Je hebt het getal geraden in " + attempts + " poging(en)!";
    guessInput.disabled = true;
    bodyElement.classList.add("confetti"); // Confettie wordt toegevoegd aan de achtergrond van div.backblock

    audio.play();

    resetElement.textContent = "Reset"; // Enter tekst van de knop wordt veranderd naar reset.
    resetElement.addEventListener("click", function () {
      location.reload(); // Herlaad pagina
    });

    // Vervang submit knop met een resetknop
    submitKnop.replaceWith(resetElement);

    // Behoud de css van de vorige knop in de resetknop
    resetElement.className = submitKnop.className;
  } else if (guessNumber < targetNumber) {
    resultElement.textContent = "Het getal is hoger. Probeer opnieuw.";
  } else {
    resultElement.textContent = "Het getal is lager. Probeer opnieuw.";
  }

  guessInput.value = "";
  guessInput.focus(); // De cursor blijft automatisch binnen het invoerveld na het invoeren van een getal.
}

// Wanneer je een getal raad, begint de tijd
var guessInput = document.getElementById("guessInput");
guessInput.addEventListener("focus", function () {
  if (startTime === undefined) {
    startTime = new Date();
  }
});

// Referenties naar het knopelement en het audio-element
var fixedButton = document.getElementById("fixedButton");
var audioElement = document.getElementById("audioElement");
audioElement = new Audio("./sounds/bg1.mp3");
audioElement.volume = 0.1;

// Voeg een event listener toe voor het "click" evenement op het knopelement
fixedButton.addEventListener("click", function () {
  // Controleer of de audio wordt afgespeeld
  if (audioElement.paused) {
    // Als de audio is gepauzeerd, speel het af
    audioElement.play();
  } else {
    // Als de audio wordt afgespeeld, pauzeer het
    audioElement.pause();
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

// Het spel start wanneer je op de submit knop hebt geklikt.
window.onload = function () {
  guessForm.addEventListener("submit", guessNumber);
};
