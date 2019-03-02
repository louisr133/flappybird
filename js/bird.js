
var xPos = 50;
var yPos = 300;


var isWinning = function(){
    if(yPos >= 500 || pipeUp.collisionBttm() || pipeUp2.collisionBttm()|| pipeUp3.collisionBttm() || pipeDown.collisionAbove() || pipeDown2.collisionAbove()|| pipeDown3.collisionAbove())
    {
        return false;
    } else {
        return true
    }
}

class Bird{
    constructor(b){
        this.x = b.x;
        this.y = b.y;
        this.velY = 0;
        this.width = b.width;
        this.height = b.height;
    }
    //Bird Methods 
    gravity(){
        if(yPos < 550){
            this.velY += gravity;
            yPos += this.velY;
        }  
    }

    flap(){
        if(yPos > 45){
            this.velY = -5;
        } else if(yPos <= 550){
            this.velY = -5;
            yPos+= this.velY;
        }
    }
    show(){
        push();
        translate(xPos, yPos);


        if(this.velY < 1 && isWinning()) {
            rotate(-PI/ 6);
        } else if(this.velY >=1 && isWinning()) {
            rotate(PI/ 8.5);
        } else if(!isWinning()){
            rotate(PI/2);
        }


        fill(0,255,0);

        //hitbox this.x+7, this.y+4, this.width-12, this.height-7
        // rect(this.x+7, this.y+4, this.width-12, this.height-7);
        image(bird,this.x, this.y, this.width, this.height);
        // ellipse(this.x, this.y, 5,5)

        //posibly going to add collision detection here
        pop();
    }
}

var flappy = new Bird({
    x:  0,
    y:  0,
    width: 70,
    height:  50,

});