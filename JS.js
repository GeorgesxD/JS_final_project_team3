let startBtn = document.querySelector(".startBtn");
let guideCard = document.querySelector(".guide-card");
let exitBtn = document.querySelector(".exitBtn");
let playBtn = document.querySelector(".playBtn");
let mainHome = document.querySelector(".main-home");
let playPage = document.querySelector(".play-page");

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
});
