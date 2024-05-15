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

let qa = {"Java":'System.out.println("Hello World!")',"Python":'print("Hello World!")',"Javascript":'console.log("Hello World!")',"C++":'cout << "Hello World!"',"C#":'Console.WriteLine("Hello World!")',"GO":'fmt.Println("Hello World!")',"Rust":'println!("Hello World!")',"Pascal":"writeln('Hello World!')","Swift":'print("Hello World!")',"php":'echo "Hello World!"'};
let keys = ["Java","Python","Javascript","C++","C#","GO","Rust","Pascal","Swift","php"];
let i=0;
let wrong = 0;

function checkAnswer(){
  let answer = document.getElementById("answer").value;
    if(i>=9){
      if(qa[keys[9]]===answer){
        alert("Good Job!");
      }
      else{
        alert(" Incorrect, the correct answer was: "+qa[keys[9]]);
      }
      
      document.getElementById("q").innerHTML = 'Your Results'
      document.getElementById("counter").innerHTML = "10 out of 10";
      document.getElementById("answer-texts").innerHTML = "Your final score is: "+(10-wrong)+"/10 !";
      document.getElementById("answer").value="";
    }
    else if(qa[keys[i]]===answer && i<9){
      alert("Good Job!");
      i++;
      document.getElementById("q").innerHTML ='Do you Know How to Write " Hello World! " in '+keys[i]+" ?";
      document.getElementById("counter").innerHTML = (i+1)+" out of 10";
      document.getElementById("answer").value="";
    }
    else {
      alert(" Incorrect, the correct answer was: "+qa[keys[i]]);
      i++;
      document.getElementById("q").innerHTML ='Do you Know How to Write " Hello World! " in '+keys[i]+" ?";
      document.getElementById("counter").innerHTML = (i+1)+" out of 10";
      document.getElementById("answer").value="";
      wrong++;
    }
 };

 

