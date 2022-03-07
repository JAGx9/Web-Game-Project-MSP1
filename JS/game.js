// drawing var
var canvas;
var ctc;


// Input var
var upKey;
var rightKey;
var downKey;
var leftKey;


// game var
var gameLoop;
var player;



// On page load
window.onload = function (){
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    canvas.style.left = '-900px'
    // Key listeners



    //Create Player
    player = new Player(100,400);
   
    //Game loop (update)
    gameLoop = setInterval(step, 1000/30)

}


function step(){
    //Player step
    player.step();
    // draw everything 
    draw();
}

function draw() {
    //Clear canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1080,720);

    //Draw Player
    player.draw();
}


function setInputs (){
    document.addEventListener('keydown', function(event){
        if (event.key === "w" || event.key === "ArrowUP") {
            upKey = true;
        } else if (event.key === "a" || event.key === "ArrowLeft"){
            leftKey = true;
        } else if (event.key === "s" || event.key === "ArrowDown"){
            downKey = true;
        }else if (event.key === "d" || event.key === "ArrowRight"){
            rightKey = true;
        }
    
    });
    document.addEventListener('keyup', function(event){
        if (event.key === "w" || event.key === "ArrowUP") {
            upKey = false;
        } else if (event.key === "a" || event.key === "ArrowLeft"){
            leftKey = false;
        } else if (event.key === "s" || event.key === "ArrowDown"){
            downKey = false;
        }else if (event.key === "d" || event.key === "ArrowRight"){
            rightKey = false;
        }
    });
}
setInputs();