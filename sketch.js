//Create variables here

var dog, happyDog, database, foodS, foodStock;
var database;

function preload()
{
	//load images here
dogImage=loadImage("../images/dogImg.png");
dog1Image=loadImage("../images/dogImg1.png");
}

function setup() {
  
  console.log(database);
  database = firebase.database();
  
	createCanvas(500 ,500);

  dog = createSprite(300,300);
  dog.scale=0.15;
  dog.addImage(dogImage);


  foodStock=database.ref('food');
   foodStock.on("value",readStock);
  
}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog1Image);
    dog.scale=0.15;
  }
  textFont("white");
  textSize("10")
  fill("white");
  text("FOOD REMAINING:",150,200);
  text("NOTE:PRESS-UP_ARROW KEY TO FEED THE DOG AND MAKE HIM HAPPY!",50,30);

  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    food:x
  })
}


