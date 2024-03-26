
let countdownTime = 20;

function updateCountdown() {
  document.getElementById("timer").innerHTML = countdownTime;

  countdownTime--;
  

  if (countdownTime < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "Game Over";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
