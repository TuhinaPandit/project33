var snowBackground;
var character;
var snow;

function preload(){
   snowBackground=loadImage("snow1.jpg")
   snow=loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  character = createSprite(400, 200, 50, 50);
 // snow1 = new Snow
  
  }

function draw() {
  background(snowBackground);  
  drawSprites();
  


  if(keyDown("space"))
  {
     character.y = character.y -10
     
  }
  /*if(keyDown("space"))
  {
    character.x = character.x +10
  }

  if(keyDown("space"))
  {
    character.x = character.x -10
  }
*/
  //Engine.update(engine);
  //snow1.display();


}