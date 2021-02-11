var dog,happyDog,foods,foodStock

function preload()
{
  doggy=loadImage("Dog.png");
  happydoggy=loadImage("happydog.png");
}

function setup() {
	createCanvas(500,500);
database=firebase.database();
console.log(database);
dog=createSprite(400,350,10,10);

var foodStock=database.ref('dog/position');
foodStock.on("value",readPosition,showError);

  
}


function draw() {  
bckground(46, 139, 87);

if(keyWentDown(38)){
  writeStock(foodS)
dog=addImage(happydoggy);
} 




// for reading the data from database
  drawSprites();

text("Note:PressUP_ARROWKey to feed Drago Milk");
textSize(7);
fill(red);

function readStock(data){
foodS=data.val();



}
// for writing the data in the database 
function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}


  database.ref('/').update({Food:x});
}

}



