class Snow{
    constructor(x, y, width, height) {
        var options = {
            snow=loadImage("snow4.webp"),

            restitution: 0.4,
            friction: 0.1

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.posi
        tion;
        PushManager()
    }
}