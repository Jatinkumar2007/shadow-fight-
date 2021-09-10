
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var destiny
var wizard1,wizard2
var fire,fire1,thunder,thunder1

function preload(){
 // destinyImage=loadAnimation("destiny.jpg","destiny2.jpg","destiny3.jpg","destiny4.jpg")
 destinyImage=loadImage("destiny.jpg")
backgroundImage=loadImage("background1.jpg")
wizard1Image=loadImage("wizard1.gif")
wizard2Image=loadImage("wizard2.gif")
}
function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;
  
  destiny=createSprite(40,300,50,50);
  destiny.addImage("destiny",destinyImage)
  destiny.scale=4
  wizard1=createSprite(660,300,45,45)
  wizard1.addImage("wizard1",wizard1Image)
  wizard1.scale=1
wizard2=createSprite(350,300,45,45)
wizard2.addImage("wizard2",wizard2Image)
wizard2.scale=1

}

function draw() {
  background(backgroundImage)  
  Engine.update(engine);
// moving destiny with arrow keys
if(keyDown("right")){
  destiny.x=destiny.x+4
}
if(keyDown("left")){
  destiny.x=destiny.x-4
}
if(keyDown("up")){
  destiny.y=destiny.y-4
}
if(keyDown("down")){
  destiny.y=destiny.y+4
}
if(destiny.isTouching(wizard1)){
  fire=createSprite(700,280,25,25)
  
}
  drawSprites();
}
