var status = "";

function setup() {
   canvas =  createCanvas(480,480);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    var object = document.getElementById('input').value;
}
function modelLoaded() {
    console.log('Model IS loaded!!!!!');
    status = true;
}

function draw() {
    image(video,0,0,480,480);
}
