status="";
function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Object Detecting";
    document.getElementById("name").value;
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}
function draw(){
image(video, 0,0, 480, 380);
if (status != ""){
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetecter.detect(video, gotResults);
    for(i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML="objects detected";
    document.getElementById("nob.num").innerHTML="number of objects detected are- "+objects.length;
    fill(r,g,b);
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+""+percent+"%", objects[i].x+ 15, objects[i].y+ 15);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}
function gotResults(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    objects=results;
}
}