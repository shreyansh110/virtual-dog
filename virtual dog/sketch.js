  var dog,normalDog,happyDog,database,foodS,foodStock;

  function preload(){

  normalDog=loadImage("Dog.png");
  happyDog=loadImage("dog1.png");

  }

  function setup(){
    database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,250,10,10);
  dog.addImage(normalDog)
dog.scale=0.3
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);


  }


  function draw(){
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){

  writeStock(foodS);

  dog.addImage(happyDog);
  dog.scale=0.3

  }
  drawSprites();
  textSize(18);
  text("Note:Press UP_ARROW key to feed milk to the dog",50,50);

  text("Number of bottle remaining:"+foodS,100,100);

  }


  //function to read values

  function readStock(data){

  foodS=data.val();

  }

  //function to write value
  function writeStock(x){


    if(x<=0){
      x=0;
    }else{
      x=x-1
    }

    database.ref('/').update({
      Food:x
      
        })

  }












