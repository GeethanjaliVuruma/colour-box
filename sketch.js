var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(500,400);

    block1 = createSprite(80,390,90,20);
    block1.shapeColor = "blue";

    block2 = createSprite(180,390,90,20);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(280,390,90,20);
    block3.shapeColor = "brown";

    block4 = createSprite(380,390,90,20);
    block4.shapeColor = "black";

    ball = createSprite(random(20,390),100, 30,30);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
ball.velocityX=-5;
ball.velocityY=-9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        //music.play();
    }



    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "black";
       ball.velocityX=0;
       ball.velocityY=0; 
       text("ball is caught",350,200); 
       fill("black");
      size(100) ;//write code to stop music
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "brown";
        //music.play();
    }
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //music.play();
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
