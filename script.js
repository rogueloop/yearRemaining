let daysContainer = document.getElementById("days");
let hoursContainer = document.getElementById("hours");
let minutesContainer = document.getElementById("minutes");
let secondsContainer = document.getElementById("seconds");

function updateCount() {
  let newYear = new Date("January 1, 2025 00:00:00");
  let currentTime = new Date();

  let difference = newYear - currentTime;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60 * 60 * 24)) / 1000);

  daysContainer.innerHTML = days + "<span> Days </span>";
  hoursContainer.innerHTML = hours + "<span> Hours </span>";
  minutesContainer.innerHTML = minutes + "<span> Minutes </span>";
  secondsContainer.innerHTML = seconds  + "<span> Seconds </span>";
}

setInterval(updateCount , 1000)
