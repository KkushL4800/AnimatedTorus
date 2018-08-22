let angle=0.3;
function setup() {
createCanvas(windowWidth,windowHeight,WEBGL);
}
function draw() {
background(186);
let dx=mouseX-width/2;
let dy=mouseY-height/2;
directionalLight(0,150,5,dx,dy,0);
//pointLight(10,250,0,0,-5,0);
rotateY(angle*0.3);
//ambientLight(0,0,255,100);
//ambientMaterial(54,197,112);
torus(200,50);
angle +=0.07;
}
