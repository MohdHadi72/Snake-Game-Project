let inputDir = {x: 0, y: 0};

const foodSound = new Audio('food.mp3');
const GameOver = new Audio('gameover.mp3');
const GameMusic = new Audio('music.mp3');
const snakeMove = new Audio('move.mp3');

let speed = 2;
let score = 0;
let lastTimeSet = 0

let snakeArray = [
    {x: 13, y:15}
]
food =  {x: 6, y:7}

function main(currentTime) {
    window.requestAnimationFrame(main);
    // console.log(currentTime)

    if((currentTime - lastTimeSet/1000)  <  1/speed){
        return;
    }
    lastTimeSet = currentTime;

    gameEngine();
}

function isCallide(sarr) {
    return false;



}

function gameEngine() {

if(isCallide(snakeArray)){
     GameOver.play();
     GameMusic.pause();
     inputDir = {x: 0, y: 0};
     alert("Game Over Press Any Key TO Play Again!");
     snakeArray = [{x:13, y:15}];
     GameMusic.play();
     score = 0
}

if(snakeArray[0].y === food.y && snakeArray[0].x === food.x){
    snakeArray.unshift({x: snakeArray[0].x + inputDir.x , y:snakeArray[0].y + inputDir.y});
    let a = 2;
    let b = 16;

    food = {x: Math.round(a + (b-a)* Math.random()), y:Math.round(a + (b-a) * Math.random())};
}

for (let i = snakeArray.length - 2; i>=0; i--) {
    snakeArray[i+1] = {...snakeArray[i]};
    
}
    
snakeArray[0].x  += inputDir.x 
snakeArray[0].y  += inputDir.y 

    snakeing.innerHTML = "";

    snakeArray.forEach((e ,index)=>{

     snakeElement = document.createElement('div');
     snakeElement.style.gridRowStart = e.y;
     snakeElement.style.gridColumnStart = e.x

     if(index === 0){
        snakeElement.classList.add('head')
     }else{
     snakeElement.classList.add('snake')
     }
     snakeing.appendChild(snakeElement)
     
    })

     foodElement = document.createElement('div');
     foodElement.style.gridRowStart = food.y;
     foodElement.style.gridColumnStart = food.x
     foodElement.classList.add('food')
     
     snakeing.appendChild(foodElement)

}






window.requestAnimationFrame(main);

window.addEventListener('keydown', e =>{
    inputDir = {x:0, y:1};
    snakeMove.play();

    switch (e.key) {
    case "ArrowUp":
     console.log("ArrowUp") 
     inputDir.x =  0;
     inputDir.y =  -1;
      break;
    
    case "ArrowDown":
     console.log("ArrowDown") 
     inputDir.x =  1;
     inputDir.y =  0;
    break;
   
    case "ArrowLeft":
    console.log("ArrowLeft") 
    inputDir.x =  -1;
    inputDir.y =  0;
      break;

     case "ArrowRight": 
   console.log("ArrowRight") 
   inputDir.x =  1;
   inputDir.y =  0;
    break;

  default:
   break;
  
}
} )