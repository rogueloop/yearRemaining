let daysContainer = document.getElementById("days");
let hoursContainer = document.getElementById("hours");
let minutesContainer = document.getElementById("minutes");
let secondsContainer = document.getElementById("seconds");
function updateCount() {
  let currentYr = 2025;
  let newYear = new Date("January 1, " + currentYr + " 00:00:00");
  let currentTime = new Date();

  let difference = newYear - currentTime;
  if (difference <= 0) {
    currentYr = currentYr + 1;
    newYear = new Date("January 1, " + currentYr + " 00:00:00");
    difference = newYear - currentTime;
  }

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysContainer.innerHTML = days + "<span> Days </span>";
  hoursContainer.innerHTML = hours + "<span> Hours </span>";
  minutesContainer.innerHTML = minutes + "<span> Minutes </span>";
  secondsContainer.innerHTML = seconds + "<span> Seconds </span>";
}

const quotes = [
  "Time waits for no one.",
  "The future depends on what you do today.",
  "Each day is a chance to change your life.",
  "Don't count the days, make the days count.",
  "Time flies over us, but leaves its shadow behind.",
  "The key is in not spending time, but in investing it.",
  "Time is what we want most, but what we use worst."
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomIndex];
}

updateCount();
setInterval(updateCount , 1000)


displayRandomQuote();
setInterval(displayRandomQuote, 2000); 