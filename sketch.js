var tower,towerImg,door,doorImg,doorGroup
var climber,climberImg,climberGroup
var ghost,ghostImg
var iB,iBGroup

function preload(){
  towerImg =loadImage("tower.png");
  doorImg =loadImage("door.png");
  climberImg =loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png")
  
  
  
}

function setup(){
  createCanvas(600,600);
  tower= createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY= 1
  
  ghost = createSprite(300,300,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.3;
  
  climberGroup= new Group();
doorGroup =new Group();
  iBGroup = new Group();
 
}

function draw(){
  background("black");
  if(tower.y>400){
    tower.y = 300
  }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
  }
  if(keyDown("space")){
    ghost.velocityY=-5
  }
  ghost.velocityY=ghost.velocityY+0.8
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0
  }
  if(iBGroup.isTouching(ghost)){
    ghost.destroy()
  }
  
  spawnDoor()
 drawSprites() 
}

function spawnDoor(){
  if(frameCount%240===0){
    var door= createSprite(200,-50)
    door.addImage(doorImg)
    
    var climber = createSprite(200,10)
    climber.addImage(climberImg)
    
    var iB=createSprite(200,15)
    iB.width=climber.width
    iB.height=2
    iB.x=door.x
    iB.velocityY=1
    
    
    door.x= Math.round(random(120,400))
    door.velocityY = 1
    
    climber.x= door.x
    climber.velocityY = 1
    
    door.lifetime = 800
    climber.lifetime = 800
    
    ghost.depth=door.depth
    ghost.depth=ghost.depth+1
    
    climberGroup.add(climber)
    doorGroup.add(door)
    iBGroup.add(iB)
      
  }
}
