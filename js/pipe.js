//collision test if the pipe hits the bird



//gets random number between 180 and 480
var getRandY = function(){
    let newY = Math.floor(Math.random()*300) + 180;
    return newY;
}
//get y location (for pipe pairing)
var getY = function(whos){
    //980
    return whos.y - 980;
}
//moves pipes to left
var move = function(pipe1,pipe2, lose){
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
    //pipe methods
    show(pic){
        image(pic,this.x, this.y, this.width, this.height);
    }
    collisionBttm(){
        if(this.x <= xPos + flappy.width-12 && xPos <= this.x + this.width && yPos + flappy.height-7 >= this.y){
            return true;
        }
    }
    collisionAbove(){
        if(this.x <= xPos + flappy.width && xPos <= this.x + this.width && this.y + 800 > yPos-4){
            return true;
        }

    }

}

//New pipes
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