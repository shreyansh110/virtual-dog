var dog,normalDog,happyDog,database,foodS,foodStock

function preload(){

//normalDog=loadImage("Dog.png");
//happyDog=loadImage("happydog.png");

}

function setup(){
database=firebase.database();
createCanvas(500,500);
dog=createSprite(250,250,10,10);
foodStock=database.ref('Food');
foodStock.on("value",readStock);


}


function draw(){
background(46,139,87);
if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(dogHappy);

}




drawSprites();

text("Note:Press UP_ARROW key to feed milk to the dog",50,250);
textSize(20);

}


//function to read values

function readStock(data){

foodS=data.val();

}

//function to write value
function writeStock(x){


  database.ref('/').update({
Food:x

  })
}












