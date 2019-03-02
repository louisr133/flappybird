
var xPos = 50;
var yPos = 30;


var isWinning = function(){
    if(yPos >= 500)
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
        if(yPos < 500){
            this.velY += gravity;
            yPos += this.velY;
        }  
    }

    flap(){
        if(yPos > 45){
            this.velY = -5;
        } else if(yPos >= 500){
            this.velY = -5;
            yPos+= this.velY;
        }
    }
    show(){
        push();
        translate(xPos, yPos);
        if(this.velY < 1 && yPos < 500) {
            rotate(-PI/ 6);
        } else if(this.velY < 10 && yPos < 500) {
            rotate(PI/ 8.5);
        } else if(!isWinning()){
            rotate(PI/2);
        }
        // rect(this.x, this.y, this.width, this.height);
        image(bird,this.x, this.y, this.width, this.height);
        // ellipse(this.x, this.y, 5,5)
        pop();
    }
}

var flappy = new Bird({
    x:  0,
    y:  0,
    width: 70,
    height:  50,

});