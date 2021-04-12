var canvas;

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    canvas.style('position', 'absolute');
    noStroke();
}

var green;
var blue;

function mouseMoved(){
    green = random(255);
    // blue = random(255);
    red = random(150, 200);
}

  function draw(){
      if(mouseX%5 == 0){
        fill(red, green, 255);
        ellipse(mouseX-5, mouseY-5, 12, 12);
      }
    //background(55, 93, 158);
   //fill(154, 111, 204); 
}