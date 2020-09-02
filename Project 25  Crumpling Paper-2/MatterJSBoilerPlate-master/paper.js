class Sheet{
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.2,
            friction: 50,
            density: 1.2
        }
        
        
        this.body = Bodies.rectangle(100,560,60,60,options);
        this.image = loadImage("sprites/paper.png");
        World.add(world,this.body);
    }
 
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //push()
        //translate(pos.x,pos.y);
        //rotate(angle);
        rectMode(CENTER);
        fill("lightblue");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,60,60);
        //pop()
        
    }
 }