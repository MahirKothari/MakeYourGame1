var player, playerImg;
var backgroungImg;

function preload() {
  playerImg = loadAnimation("Player/1.png, Player/2.png, Player/3.png, Player/4.png, Player/5.png, Player/6.png")
}
function setup() {
  createCanvas(1000,500);
  player = createSprite(500, 350, 50, 20);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}