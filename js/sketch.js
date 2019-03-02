var bird;
var pipeUpPic;
var pipeDownPic;
var gravity = .09;
var bg;


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
    clear();
    background(bg);
    push();
    imageMode(CENTER);
    flappy.show();
    pop();
    flappy.gravity();
    pipeUp.show(pipeUpPic);
}

function keyPressed(){
    switch(key){
        case ' ':
            flappy.flap();
            break;
    }
}