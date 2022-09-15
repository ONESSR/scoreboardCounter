let homeScores = 0;

function addOneHome() {
  const homeScoreDisplay = document.getElementById("homeScore");
  homeScoreDisplay.textContent = homeScores += 1;
}

function addThreeHome() {
  const homeScoreDisplay = document.getElementById("homeScore");
  homeScoreDisplay.textContent = homeScores += 3;
}

function addFiveHome() {
  const homeScoreDisplay = document.getElementById("homeScore");
  homeScoreDisplay.textContent = homeScores += 5;
}

let guestScores = 0;

function addOneGuest() {
  const guestScoreDisplay = document.getElementById("guestScore");
  guestScoreDisplay.textContent = guestScores += 1;
}

function addThreeGuest() {
  const guestScoreDisplay = document.getElementById("guestScore");
  guestScoreDisplay.textContent = guestScores += 3;
}

function addFiveGuest() {
  const guestScoreDisplay = document.getElementById("guestScore");
  guestScoreDisplay.textContent = guestScores += 5;
}

function reset() {
  const homeScoreDisplay = document.getElementById("homeScore");
  homeScoreDisplay.textContent = homeScores = 0;

  const guestScoreDisplay = document.getElementById("guestScore");
  guestScoreDisplay.textContent = guestScores = 0;
}
