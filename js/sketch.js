var bird, pipeUpPic ,pipeDownPic, bg, bgStart, startButton, flappyLogo, ground, flap;
var gravity = .15;
var total = 0;
var start = false;


function preload(){ 
    flap = loadSound('sounds/wingFlap.mp3');
    bgStart = loadImage('img/start-game.jpg');
    startButton = loadImage('img/start-button.png');
    flappyLogo = loadImage('img/flappyLogo.png');
    bg = loadImage('img/flappybackground.png');
    ground = loadImage('img/ground.png');
    bird = loadImage('img/flappy.png');
    pipeUpPic = loadImage('img/pipeUP.png');
    pipeDownPic = loadImage('img/pipeDown.png');
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

        background(bg);
        // image(flappyLogo, 0, height/2, 331,100)
    
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

        if(isWinning()){

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
        //Score
        stroke(255);
        textSize(25);
        text(`${total}`, width/2, 50)
    }

    textSize(14);
    text('Created by Louis Roman', 600, 590);
}


function keyPressed(){
    switch(key){
        case ' ':
            flappy.flap();
            flap.play();
            start = true;
            break;
    }
}