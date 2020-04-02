let salami; 

function preload (){
 salami = loadImage('salami_art.png');
}


function setup() {
 createCanvas(800,800);
   
}
function draw (){ 
  if (mouseIsPressed) {
    
  image (salami, mouseX, mouseY, 100, 100);
}
}
