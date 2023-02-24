const character = document.querySelector(".character")
const obstacles = document.querySelector(".obstacles")
const scoreText = document.querySelector(".score")
let score = 0;
let isStarted = false;
let isJumping = false;


function jump(){
  if(character.classList !== "jump" && !isJumping){
    let characterPos = document.getElementById("character").offsetTop;
    if(characterPos < 340){
      isJumping=true;
    }
    console.log(characterPos);
    clearTimeout();
    character.classList.add("jump");
    setTimeout(() => {
      character.classList.remove("jump");
      isJumping = false;
    }, 800); 
  }
}

function startMoving(){
  if(obstacles.classList !=="move"){
    obstacles.classList.add("startMoving");
    clearTimeout();
    setTimeout(() => {
      obstacles.classList.remove("startMoving");
      obstacles.classList.add("move")
    }, 2000);
  }
}

function start(){
  if(!isStarted){
    clearTimeout();
    setTimeout(() =>{
      isStarted = true;
      startMoving();
      scoreCounter();
      checkDead();
    }, 500);
  }
}

function scoreCounter(){
  if(!isStarted){
    return;
  }
  score++;
  scoreText.innerHTML = "Score: " + Math.round(score/20)
  requestAnimationFrame(scoreCounter)
}

function checkDead(){
  let characterTopPosition = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
  let obstaclesLeftPosition = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"))
  if(obstaclesLeftPosition<= 80 && obstaclesLeftPosition>=20 && characterTopPosition>=60){
    isStarted = false;
    obstacles.classList.remove("move")
    alert("Game Over!")
    score = 0;
  }
  requestAnimationFrame(checkDead)
}