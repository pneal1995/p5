//Global Variables
var objLayer;
var player;

var number = new [];

//p5 functions
function preload() {
    // loading images, sounds, data files
  
}

function setup(){

    createCanvas(767, 505);
    
    // setup layers
    objLayer = new ObjectLayer();
    

    // setup gameobjects
    player = new Player(objLayer, "MoveState");

    // bulletbill = new Player(objLayer, "MoveState");
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
    // objLayer.Update();
}

function Update() {
    // objLayer.Update();
}

function LateUpdate() {
    
}

function Render() {
    // objLayer.Draw(); // draw all the things in our objectlayer
}

function StaticRender() {
    // background(50);
}