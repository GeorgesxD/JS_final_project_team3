let startBtn = document.querySelector(".startBtn");
let guideCard = document.querySelector(".guide-card");
let exitBtn = document.querySelector(".exitBtn");
let playBtn = document.querySelector(".playBtn");
let mainHome = document.querySelector(".main-home");
let playPage = document.querySelector(".play-page");
let playPageTitle = document.querySelector(".play-page-title");
let playCard = document.querySelector(".play-card");
let nextBtn = document.querySelector(".nextBtn");
let checkBtn = document.querySelector(".checkBtn");
let answerCont = document.querySelector(".answers");
let answerText = document.querySelector(".answer-text");
let questionKey = document.querySelector(".key");
let counter = document.querySelector(".counter");
let inputUser = document.querySelector(".input-answer");
let inputAnswer = document.querySelector(".input-answer").value;
let scoreCont = document.querySelector(".score");
let scoreText = document.querySelector(".scoreText");
let finalScore = document.querySelector(".finalScore");

let arr = [];
let currentIndex = 0;

let wrong = 0;

scoreCont.style.display = "none";

fetchRepo();

startBtn.addEventListener("click", () => {
  guideCard.classList.remove("active");

  mainHome.classList.add("blur");
});

exitBtn.addEventListener("click", () => {
  guideCard.classList.add("active");

  mainHome.classList.remove("blur");
});

playBtn.addEventListener("click", () => {
  mainHome.classList.remove("blur");

  guideCard.classList.add("active");

  setTimeout(() => {
    mainHome.style.left = 0;
    playPage.style.left = 0;
  }, 1000);

  setTimeout(() => {
    playPageTitle.classList.add("active-title");
    playCard.classList.add("active-page");
    inputUser.focus();
  }, 2000);
});

async function fetchRepo() {
  let request = await fetch("languages.json");

  let questions = await request.json();
  nextBtn.classList.add("disabled");
  if (questions.length === 0) {
    console.log("No Questions");
  } else {
    arr = questions;
    displayElements(arr[currentIndex]);
  }
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < arr.length - 1) {
    inputUser.focus();
    inputUser.value = "";
    answerCont.style.display = "none";
    currentIndex++;
    fetchRepo();
  } else {
    answerCont.style.display = "none";
    finalScore.textContent = currentIndex + 1 - wrong;
    scoreCont.style.display = "block";
    nextBtn.remove();
    checkBtn.remove();
  }
});

function displayElements(question) {
  questionKey.textContent = question.name;
  counter.textContent = currentIndex + 1;
}

checkBtn.addEventListener("click", () => {
  let currentQuestion = arr[currentIndex];
  checkAnswer(currentQuestion.answer);
});

function checkAnswer(answer) {
  let inputAnswer = document.querySelector(".input-answer").value;

  if (inputAnswer.toLowerCase().trim() === answer.toLowerCase().trim()) {
    answerCont.style.display = "block";
    answerText.innerHTML = `Correct !`;
    answerCont.classList.remove("incorrect");
    answerCont.classList.add("correct");
    nextBtn.classList.remove("disabled");
  } else {
    answerCont.style.display = "block";
    answerText.innerHTML = `Incorrect, the Answer : ${answer} `;
    answerCont.classList.add("incorrect");
    wrong++;
  }
}
