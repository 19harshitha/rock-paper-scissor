let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".pc");
let random = Math.floor(Math.random() * 3);
let triangle = document.querySelector("#rotate");
let winModel = document.querySelector(".win-model");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play");
let scoreComputer = JSON.parse(localStorage.getItem("scoreCom"));
let scoreHuman = JSON.parse(localStorage.getItem("scoreYou"));
let scoreCelement = document.getElementById("score__number1");
let scoreHelement = document.getElementById("score__number2");
let rulebtn = document.querySelector(".btn-rule");
let rulemodel = document.querySelector(".rule-model");
let ruleimage = document.querySelector(".rule-img");

if (scoreComputer) {
  scoreCelement.innerText = scoreComputer;
}
if (scoreHuman) {
  scoreHelement.innerText = scoreHuman;
}

let countCom = 0;
let countHum = 0;

con.forEach((element, index) => {
  element.addEventListener("click", () => {
    triangle.style.display = "none";
    con.forEach((item) => {
      item.style.display = "none";
    });
    element.style.display = "block";
    element.classList.add("show");
    setTimeout(() => {
      computer[random].style.display = "block";
      computer[random].classList.add("right");
    }, 1000);
    setTimeout(() => {
      if (random == index) {
        winModel.style.display = "flex";
        winner.innerText = "TIE UP";
        play.innerText = "REPLAY";
      } else if (
        (index == 0 && random == 1) ||
        (index == 1 && random == 2) ||
        (index == 2 && random == 0)
      ) {
        winModel.style.display = "flex";
        winner.innerText = "YOU WIN";

        
        countHum = scoreHuman;
        countHum += 1;
        scoreHelement.innerText = countHum;
        localStorage.setItem("scoreYou", JSON.stringify(countHum));
      } else {
        winModel.style.display = "flex";
        winner.innerText = "YOU LOST";
        countCom = scoreComputer;
        countCom += 1;
        scoreCelement.innerText = countCom;
        localStorage.setItem("scoreCom", JSON.stringify(countCom));
      }
      if (countHum == 1 && countCom < 1) {
        window.open("result.html", "_blank");
      }
    }, 1500);
  });
});
play.addEventListener("click", () => {
  window.location.reload("index.html");
});

rulebtn.addEventListener("click", () => {
  rulemodel.style.display = "flex";
  setTimeout(() => {
    ruleimage.style.transform = "translateY(0)";
  }, 500);
  console.log("hy");
});
let closebtn = document.querySelector(".close");
closebtn.addEventListener("click", () => {
  ruleimage.style.transform = "translateY(-200%)";
  setTimeout(() => {
    rulemodel.style.display = "none";
  }, 1000);
});

function playagain() {
  window.open("index.html");
}