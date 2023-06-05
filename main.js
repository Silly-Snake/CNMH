noseXc=0;
noseYc=0;
noseXm=0;
noseYm=0;
noseXh=0;
noseYh=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    hat=loadImage('https://i.postimg.cc/k4HN0DvS/th-removebg-preview-8.png');;
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model is Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseXc=results[0].pose.nose.x-15;
        noseYc=results[0].pose.nose.y-15;
        noseXm=results[0].pose.nose.x-18;
        noseYm=results[0].pose.nose.y-7;
        noseXh=results[0].pose.nose.x-25;
        noseYh=results[0].pose.nose.y-120;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseXc, noseYc, 30, 30);
    image(mustache, noseXm, noseYm, 40, 40);
    image(hat, noseXh, noseYh, 50, 50);
}

function snapshot(){
    save('clown_nose_and_mustache_and_hat.png');
}