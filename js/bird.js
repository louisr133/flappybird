
var xPos = 50;
var yPos = 30;

class Bird{
    constructor(b){
        this.x = b.x;
        this.y = b.y;
        this.velY = 0;
        this.width = b.width;
        this.height = b.height;
    }

    gravity(){
        if(yPos < 500){
            this.velY += gravity;
            yPos += this.velY;
            console.log(this.velY);
        }  
    }

    flap(){
        if(yPos > 45){
            yPos -= 120;
            this.velY = 5;
        }
    }


    // velY < 6 - up      velY > 6 -  down

    show(){
        push();
        translate(xPos, yPos);
        if(this.velY < 6.5) {
            rotate(7*PI/ 4);
        } else {
            rotate(-7*PI/ 4);
        }
        image(bird,this.x, this.y, this.height, this.width);
        pop();
    }
}

var flappy = new Bird({
    x:  0,
    y:  0,
    width: 50,
    height:  70
});