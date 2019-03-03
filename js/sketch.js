var bird, pipeUpPic ,pipeDownPic, bg, bgStart, startButton, flappyLogo, ground, flap, over, miley;
var gravity = .15;
var total = 0;
var start = false;


var restart = function(){
    total = 0;
    start = false;
    gameOver = false;
    xPos = 50;
    yPos = 300;

    pipeUp = new Pipe({
        height: 800,
        width: 100, 
        x: 300,
        y: getRandY(),
        velX: 20,
    });
    
    pipeDown = new Pipe({
        height: 800,
        width: 100, 
        x: pipeUp.x,
        y: getY(pipeUp),
        velX: 20,
    });
    
    pipeUp2 = new Pipe({
        height: 800,
        width: 100, 
        x: 600,
        y: getRandY(),
        velX: 20,
    });
    
    pipeDown2 = new Pipe({
        height: 800,
        width: 100, 
        x: pipeUp2.x,
        y: getY(pipeUp2),
        velX: 20,
    });
    
    pipeUp3 = new Pipe({
        height: 800,
        width: 100, 
        x: 900,
        y: getRandY(),
        velX: 20,
    });
    
    pipeDown3 = new Pipe({
        height: 800,
        width: 100, 
        x: pipeUp3.x,
        y: getY(pipeUp3),
        velX: 20,
    });

}


function preload(){ 
    //sounds
    flap = loadSound('sounds/wingFlap.mp3');

    //images
    bgStart = loadImage('img/start-game.jpg');
    startButton = loadImage('img/start-button.png');
    flappyLogo = loadImage('img/flappyLogo.png');
    bg = loadImage('img/flappybackground.png');
    ground = loadImage('img/ground.png');
    bird = loadImage('img/flappy.png');
    pipeUpPic = loadImage('img/pipeUp.png');
    pipeDownPic = loadImage('img/pipeDown.png');
    over = loadImage('img/gameover.png');
}

function setup(){
    createCanvas(800,600);
}

function draw(){

    //background 
    clear();
    background(bg);
    image(flappyLogo, 230, 150, 331,100);
    image(startButton, 320, 370, 150, 80);

    textSize(20);
    noStroke();
    text('Press Space Bar to Begin', 280, 360);


    if(start){
        isWinning();

        background(bg);
    
        //Show functions
        pipeUp.show(pipeUpPic);
        pipeDown.show(pipeDownPic);
        pipeUp2.show(pipeUpPic);
        pipeDown2.show(pipeDownPic);
        pipeUp3.show(pipeUpPic);
        pipeDown3.show(pipeDownPic);
        image(ground, 0,550,width,);
        flappy.show();
        flappy.gravity();

        //while flappy hasn't lost
        if(!gameOver){

            //First pipe pair  functions
            move(pipeUp, pipeDown);

            if(pipeUp.x < -pipeUp.width){
                pipeUp.x = width;
                pipeUp.y = getRandY();
                pipeDown.y = getY(pipeUp);
                total += 1;
            }

            //Second pipe Pair functions 
            move(pipeUp2, pipeDown2);
    
            if(pipeUp2.x < -pipeUp2.width){
                pipeUp2.x = width;
                pipeUp2.y = getRandY();
                pipeDown2.y = getY(pipeUp2);
                total += 1;
            }
    
            //3rd pipe pair functions
            move(pipeUp3, pipeDown3);
    
            if(pipeUp3.x < -pipeUp3.width){
                pipeUp3.x = width;
                pipeUp3.y = getRandY();
                pipeDown3.y = getY(pipeUp3);
                total += 1;
            }
    
        }

        if(gameOver){
            image(over, 230, 150, 331,100);
            fill(0);
            textSize(25);
            text(`Press 'n' to start a new game!`, 240, 300)
        }


        //Score
        fill(225);
        textSize(25);
        text(`${total}`, width/2, 50)
    } 
    //created
    fill(0);
    textSize(14);
    text('Created by Louis Roman', 600, 590);
}


function keyPressed(){
    if(keyCode == 32){
        if(!gameOver){
            flappy.flap();
            flap.play();
        }
        start = true;
    }
    if(keyCode == 78 ){
        restart();
    }
}