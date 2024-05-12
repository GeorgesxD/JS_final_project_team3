// Selecting DOM elements
let startBtn = document.querySelector(".startBtn");
let guideCard = document.querySelector(".guide-card");
let exitBtn = document.querySelector(".exitBtn");
let playBtn = document.querySelector(".playBtn");
let mainHome = document.querySelector(".main-home");
let playPage = document.querySelector(".play-page");
let playPageTitle = document.querySelector(".play-page-title");
let playCard = document.querySelector(".play-card");

// Event listener for the start button
startBtn.addEventListener("click", () => {
  guideCard.classList.remove("active");

  mainHome.classList.add("blur");
});

// Event listener for the exit button
exitBtn.addEventListener("click", () => {
  guideCard.classList.add("active");

  mainHome.classList.remove("blur");
});

// Event listener for the play button
playBtn.addEventListener("click", () => {
  mainHome.classList.remove("blur");

  guideCard.classList.add("active");

  // Setting timeout for animations
  setTimeout(() => {
    mainHome.style.left = 0;
    playPage.style.left = 0;
  }, 1000);

  setTimeout(() => {
    playPageTitle.classList.add("active-title");
    playCard.classList.add("active-page");
  }, 2000);
});
