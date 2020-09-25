const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var pig1;
var engine, world;
var box1;
var log1;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,750,50,50);
    box2 = new Box(1000,750,50,50);
    ground = new Ground(600,height,1200,20)

log1 = new log (900,700,300,PI/2)
pig1 = new pig (900,750,40,40)


box3 = new Box (800,650,50,50)
box4 = new Box (1000,650,50,50)
pig2 = new pig (900,650,40,40)
log2 = new log (900,600,300,PI/2)
box5 = new Box (900,550,50,50)

log3 = new log (830,550,120,PI/7)
log4 = new log (970,550,120,PI/-7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
pig1.display();
box3.display ();
box4.display ();
pig2.display () ;
log2.display () ;
box5.display () ;
log3.display ();
log4.display ();
}