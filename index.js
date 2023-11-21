let hitNum = 0;
let scoreval = 0;
let timerint;

function bubble() {
  let clutter = "";
  for (let i = 1; i <= 110; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#bottom").innerHTML = clutter;
}

function timer() {
  let time = 60;
  timerint = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timerbox").textContent = time;
    } else {
      clearInterval(timerint);
      document.querySelector(
        "#bottom"
      ).innerHTML = `<h1>TimeOut</h1> <br/> <h1>Your Score :${scoreval}</h1> <br/>`;

      let playAgainButton = document.createElement("button");
      playAgainButton.textContent = "Play Again";
      playAgainButton.addEventListener("click", resetGame);
      document.querySelector("#bottom").appendChild(playAgainButton);
    }
  }, 1000);
}

function hit() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitint").textContent = hitNum;
}

function score() {
  scoreval += 10;
  document.querySelector("#scoreval").textContent = scoreval;
}

function resetGame() {
  scoreval = 0;
  document.querySelector("#scoreval").textContent = scoreval;

  clearInterval(timerint);
  //   document.querySelector("#bottom").innerHTML = "";

  timer();
  hit();
  bubble();
}

document.querySelector("#bottom").addEventListener("click", function (detail) {
  //   console.log(detail.target.textContent);
  let clicked = Number(detail.target.textContent);
  if (clicked === hitNum) {
    score();
    bubble();
    hit();
  }
});

bubble();
timer();
hit();
