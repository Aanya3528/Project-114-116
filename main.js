
noseX=0;
noseY=0;

function preload(){

img = loadImage("Sorting hat.jpg");

}

function setup(){

canvas= createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(400,550);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded(){

console.log('PoseNet is Initialized');

}

function gotPoses(results){

if(results.length>0){

console.log(results);
noseX = results[0].pose.nose.x-140;
noseY = results[0].pose.nose.y-400;

}

}

function draw(){

image(video, 0, 0, 300, 300);
image(img,noseX,noseY,170,170);

}

function take_snapshot(){

save("Filter Image.jpg")

}

function ravenclaw(){

hogwarts=["Ravenclaw","Hufflepuff","Slytherin","Gryffindor"];

random_no = Math.floor((Math.random()*4)+0);
Element_of_array = hogwarts[random_no];
document.getElementById("hogwarts").innerHTML = "Your house is......"+Element_of_array+"!!!";
}