document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    ball = document.getElementById("ball");
    ball.style.left = 0 + "px";
    ball.style.top = 0 + "px";
    posx = 0;
    posy = 0;
    navigator.accelerometer.watchAcceleration(onSuccess, onError, { frequency: 100 });
}

var ball;
var w = window.innerWidth;
var h = window.innerHeight;
var x;
var y;
var posx;
var posy;

function onSuccess(acceleration){
    x = acceleration.x;
    y = acceleration.y;

    update();
}

function update(){
    posx -= x *1.5;
    posy += y *1.5;

    if (posx > (w - 100) && x < 0) {
        posx = w - 100;
    }

    if (posx < 0 && x > 0) {
        posx = 0;
    }

    

    if (posy > (h - 100) && y > 0) {
        posy = h - 100;
    }

    if (posy < 0 && y < 0) {
        posy = 0;
    }

    ball.style.top = posy + "px";
    ball.style.left = posx + "px";
}

function onError(){
    alert("Device is not supported!");
}