var bird;
var pipeUpPic;
var pipeDownPic;
var gravity = .15;
var bg;
var total = 0;


function preload(){ 
    bg = loadImage('img/mariobg.jpg');
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

    //flappy functions
    flappy.show();
    flappy.gravity();

    //First pair  functions
    pipeUp.show(pipeUpPic);
    pipeDown.show(pipeDownPic);

    move(pipeUp, pipeDown);

    if(pipeUp.x < -pipeUp.width){
        pipeUp.x = width;
        pipeUp.y = getRandY();
        pipeDown.y = getY(pipeUp);
        total += 1;
        
    }


    //Second pipe Pair functions 
    pipeUp2.show(pipeUpPic);
    pipeDown2.show(pipeDownPic);

    move(pipeUp2, pipeDown2);

    if(pipeUp2.x < -pipeUp2.width){
        pipeUp2.x = width;
        pipeUp2.y = getRandY();
        pipeDown2.y = getY(pipeUp2);
        total += 1;
    }

    //3rd pipe pair functions

    pipeUp3.show(pipeUpPic);
    pipeDown3.show(pipeDownPic);

    move(pipeUp3, pipeDown3);

    if(pipeUp3.x < -pipeUp3.width){
        pipeUp3.x = width;
        pipeUp3.y = getRandY();
        pipeDown3.y = getY(pipeUp3);
        total += 1;
    }

textSize(16);
fill(255);
text('Created by Louis Roman', 600, 570);
textSize(25);
text(`${total}`, width/2, height/2)
}

function keyPressed(){
    switch(key){
        case ' ':
            flappy.flap();
            break;
    }
}