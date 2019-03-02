//Then add collision detection and death/lose function
//Add sound
//Add restart button
//Add Start button

var pipePair = [];


//gets random number between 180 and 480
var getRandY = function(){
    let newY = Math.floor(Math.random()*300) + 180;
    return newY;
}
var getY = function(whos){
    return whos.y - 980;
}

var move = function(pipe1,pipe2){
    pipe1.x -= 4;
    pipe2.x = pipe1.x;
}

class Pipe{
    constructor(p){
        this.height = p.height;
        this.width = p.width;
        this.x = p.x;
        this.y = p.y;
        this.velX = p.velX;
    }

    show(pic){
        image(pic,this.x, this.y, this.width, this.height);
        // ellipse(this.x, this.y, 5,5)
    }

}


//480 is the lowest
//100 highest


var pipeUp = new Pipe({
    height: 800,
    width: 100, 
    x: 300,
    y: getRandY(),
    velX: 20,
});

var pipeDown = new Pipe({
    height: 800,
    width: 100, 
    x: pipeUp.x,
    y: getY(pipeUp),
    velX: 20,
});


var pipeUp2 = new Pipe({
    height: 800,
    width: 100, 
    x: 600,
    y: getRandY(),
    velX: 20,
});

var pipeDown2 = new Pipe({
    height: 800,
    width: 100, 
    x: pipeUp2.x,
    y: getY(pipeUp2),
    velX: 20,
});



var pipeUp3 = new Pipe({
    height: 800,
    width: 100, 
    x: 900,
    y: getRandY(),
    velX: 20,
});

var pipeDown3 = new Pipe({
    height: 800,
    width: 100, 
    x: pipeUp3.x,
    y: getY(pipeUp3),
    velX: 20,
});