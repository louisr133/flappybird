
class Pipe{
    constructor(p){
        this.height = p.height;
        this.width = p.width;
        this.x = p.x;
        this.y = p.y;
        this.velX = p.velX;
    }

    getHeight(){
        Math.floor(Math.random()*21) -1;
    }

    show(pic){
        image(pic,this.x, this.y, this.width, this.height);
    }
}

//560 is the lowest

var pipeUp = new Pipe({
    height: 200,
    width: 120, 
    x: 300,
    y: 300,
    velX: 20,
});