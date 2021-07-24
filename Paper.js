class Paper{
    constructor(){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.body = Bodies.circle(500,650,27,options);
        this.radius = 27;
        this.image = loadImage("paper.png");

        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 
                this.radius, this.radius)
    }
};