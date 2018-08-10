//Global Variables
var objLayer;
var player;

//p5 functions
function setup(){
    // createCanvas(windowWidth, windowHeight);
    createCanvas(767, 505);


    // setup layers
    objLayer = new ObjectLayer();

    // setup gameobjects
    player = new Player(objLayer);
}

//draw function is essentially our update function
function draw(){
    StaticRender(); // everything not moving
    FixedUpdate(); //physics
    Update(); // game logic
    LateUpdate(); // after movement stuff
    Render(); // draw to screen
}


// User defined functions
function FixedUpdate() {
    objLayer.Update();
}

function Update() {
    objLayer.Update();
}

function LateUpdate() {

}

function Render() {
    objLayer.Draw(); // draw all the things in our objectlayer
}

function StaticRender() {
    // background(50); //p5 function
    background(0);
    textAlign(CENTER);
    fill(236, 240, 241);
    textSize(36);
    text("Your Score", width/2, height/2 - 120);
      }
