var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bikes, bike1, bike2, bike3, bike4;
var track, bike1Img, bike2Img, bike3Img, bike4Img;

function preload(){
  track = loadImage("images/track.jpg");
  bike1Img = loadImage("images/bike1.png");
  bike2Img = loadImage("images/bike2.png");
  bike3Img = loadImage("images/bike3.png");
  bike4Img = loadImage("images/bike4.png");
  backgroundImage = loadImage("images/ground.png");
  end = loadImage("images/end.jpeg")
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  
  database = firebase.database();
  game = new Game();
  
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState===2){
    game.end();
    
  }
}