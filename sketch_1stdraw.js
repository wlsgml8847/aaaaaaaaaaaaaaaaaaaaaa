function setup() {
createCanvas(1100,650);
background(136,253,155);
}

function draw() {
drawCloud(120,180,110,80,250);
drawCloud(240,600,120,80,250);
drawCloud(450,120,110,80,250);
drawCloud(500,550,120,80,250);
drawCloud(680,340,130,70,250);
drawCloud(900,450,130,90,250);
drawCloud(950,130,120,90,250);

drawFrog(900,350,120);
drawDuck(500,450,50);
drawRabbit(680, 160, 80, 80);
drawPig(240,370);
drawSSU(0.2);

}

function drawCloud(x, y, z, w, k){
  noStroke();
  fill(k);
  ellipse(x,y,z,z);
  ellipse(x-w,y,0.8*z,0.8*z);
  ellipse(x+w,y,0.8*z,0.8*z);
}



function drawDuck( x, y, size){
strokeWeight(0);
noStroke();
fill(255,255,0);
//body//
ellipse(x,y-160,size+100,size+100);
ellipse(x,y,size+120,size+120);
//eyes//
fill(0);
ellipse(x-20,y-170,size-30,size-30);
ellipse(x+20,y-170,size-30,size-30);
//mouse//
fill(255,0,0);
ellipse(x,y-130,size-10,size-20);

}



function drawFrog( x,  y,  size) {  
  noStroke();

  /*head*/
  fill(53, 182, 44);
  ellipse(x, y-size/4.8, size/1.25, size/1.5); 
  ellipse(x-size/4.8, y-size/2, size/4, size/4); 
  ellipse(x+size/4.8, y-size/2, size/4, size/4); 

  /*body*/
  ellipse(x, y+size/4, size, size); 
  fill(109, 200, 59);
  ellipse(x, y+size/3.7, size/1.6, size/1.5);

  /*legs*/
 
  fill(53, 182, 44);
  bezier(x+size/2.4, y+size/80, x+size/1.1, y-size/12, x+size/1.85, y+size/1.5, x+size/2.4, y+size/1.5);
  bezier(x-size/2.4, y+size/80, x-size/1.1, y-size/12, x-size/1.85, y+size/1.5, x-size/2.4, y+size/1.5);
  rect(x+size/3, y+size/2, size/3, size/4.8, 100);
  rect(x-size/1.55, y+size/2, size/3, size/4.8, 100);

  
/*eyes*/
  fill(255); 
  ellipse(x-size/4.8, y-size/2, size/6, size/6); 
  ellipse(x+size/4.8, y-size/2, size/6, size/6); 

  fill(0); 
  ellipse(x-size/4.8, y-size/2, size/8, size/8); 
  ellipse(x+size/4.8, y-size/2, size/8, size/8);   

  ellipse(x-size/24, y-size/2.7, size/40, size/40); 
  ellipse(x+size/24, y-size/2.7, size/40, size/40); 

  fill(255); 
  ellipse(x-size/5.3, y-size/1.9, size/40, size/40); 
  ellipse(x+size/5.3, y-size/1.9, size/40, size/40); 

  /*cheek*/
  fill(200, 0, 0); 
  ellipse(x-size/4, y-size/3.9, size/4, size/4); 
  ellipse(x+size/4, y-size/3.9, size/4, size/4);

  /*mouth*/
  noFill();
  stroke(0);
  strokeWeight(size/55);
  arc(x, y-size/3.5, size/3, size/4, 0, PI);
} 



function drawPig( x, y){

 //tail
 noFill();
 stroke(255,18,120);
 strokeWeight(5);
 arc(x-170,y+100,90,100,radians(0),radians(180),OPEN);
 arc(x-200,y+100,30,40,radians(180),radians(360), OPEN);
arc(x-210,y+100,50,50,radians(0),radians(180),OPEN);
 noStroke();
 
 //leg
 fill(250,190,220);
rect(x-90,y+120,30,70);
rect(x+60,y+120,30,70);
 
fill(0);
rect(x-90,y+170,30,30);
rect(x+60,y+170,30,30);
 
  //body
 fill(250,190,220);
 ellipse(x, y, 350, 300);
 ellipse(x,y-130,230,210);
 //eyes
 fill(0);
 ellipse(x-50,y-150,35,35);
 ellipse(x+50,y-150,35,35);
 fill(255);
 ellipse(x-45,y-145,10,10);
 ellipse(x+55,y-145,10,10);
 
//nose
 fill(245,143,190);
 ellipse(x,y-100,100,80);
 
 //nose hole
fill(0);
 ellipse(x-20,y-100,15,30);
 ellipse(x+20,y-100,15,30);
 //ears
 fill(250,190,220);
 triangle(x-100,y-245,x-90,y-195,x-50,y-225);
 triangle(x+100,y-245,x+90,y-195,x+50,y-225);
 
 //in ears
 fill(245,214,240);
 triangle(x-94,y-238,x-85,y-200,x-58,y-221);
 triangle(x+94,y-238,x+85,y-200,x+58,y-221);
 
fill(255,18,129);
ellipse(x-80,y-120,40,20);
ellipse(x+80,y-120,40,20);
}




function drawRabbit( x,  y, size,heigh){
  
  
  noStroke();
//face
  fill(255, 200, 200); 
  ellipse(x, y, size, heigh);
  fill(0);
  ellipse(x-20, y-5, size/8, heigh/8);
  ellipse(x+20, y-5, size/8, heigh/8);
  triangle(x, y+15, x-10, y+5, x+10, y+5);
//ear
  fill(255, 200, 200);
  ellipse(x-25, y-50, size/8*3, heigh/8*7);
  fill(255, 200, 200);
  ellipse(x+25, y-50, size/8*3, heigh/8*7);
  fill(255);
  ellipse(x-25, y-50, size/8, heigh/8*5);
  ellipse(x+25, y-50, size/8, heigh/8*5); 
//body
  fill(255, 200, 200);
  ellipse(x, y+95, size/8*9, heigh/8*13);
  fill(255);
  arc(x, y+100, size/8*7, heigh/8*9, 0, radians(180));
//arm
  fill(255, 200, 200);
  ellipse(x+40, y+60, size/8*6, heigh/4);
  ellipse(x-40, y+60, size/8*6, heigh/4);
  fill(255);
  ellipse(x-70, y+60, size/4, heigh/16*5);
  ellipse(x+70, y+60, size/4, heigh/16*5);
//feet
  fill(255);
  ellipse(x-35, y+160, size/16*9, heigh/16*5);
  ellipse(x+35, y+160, size/16*9, heigh/16*5);
//ribbon
  fill(255, 0, 0);
  triangle(x, y+40, x-20, y+30, x-20, y+50);
  triangle(x, y+40, x+20, y+30, x+20, y+50);
  fill(255, 150, 150);
  ellipse(x, y+40, size/8, heigh/8);
}







function drawSSU(x){

  scale(x);
  //1
  noStroke();
  fill(7,81,128);
 
  rect(27,26,53,199);
  triangle(99, 26, 43, 27, 67, 89);
  curve(-384, 43, 51, 224, 70, 103, -384, -414);
  curve(140, 844, 85, 145, 62, 26, -332, 118);
  
  //2
  fill(60,169,200);
  rect(135,82,53,200);
  curve(74, 305, 176, 158, 188, 281, -12, 396);
  curve(270, 86, 136, 82, 135, 158, 292, 320);
fill(136,253,155);
  curve(60, 305, 133, 159, 134, 282, -87, 351);
  curve(288, 137, 191, 82, 189, 168, 338, 262);
  
fill(55,203,208);
  rect(225,25,139,195);
  curve(254, 97, 225, 26, 227, 112, 516, 470);
fill(136,253,155);
  curve(24, -12, 223, 105, 225, 227, -110, 192);
  
  //4
  fill(63,84,124);
  rect(386,78,64,171);
  ellipse(418,250,64,63);
  
  //5
  fill(54,159,185);
  rect(474,23,108,203);
  fill(136,253,155);
  rect(473,13,10,203);
  curve(575, 23, 472, 139, 469, 227, 240, 184);
}