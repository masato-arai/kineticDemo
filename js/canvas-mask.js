// Canvas
var canvas  = document.getElementById('myCanvas');
var arrow  = document.getElementById('arrow');
var scratch = document.createElement('canvas');
var ctx  = canvas.getContext('2d');
var ctxS = scratch.getContext('2d');

// var window.ctx = canvas.getContext("2d");


// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    scratch.width = canvas.width = window.innerWidth;
    scratch.height = canvas.height = window.innerHeight;
}

resizeCanvas();

var circles = [];

arrow.addEventListener('click', function (evt) {
//    ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
    circles.unshift({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 10
    });
}, false);


function circ(x, y, rad, c) {
    ctxS.fillStyle = c;
    ctxS.beginPath();
    ctxS.arc(x, y, rad, 0, 2*Math.PI, false);
    ctxS.closePath();
    ctxS.fill();
}

function circleAnimation() {
    for (var i = circles.length - 1; i >= 0; --i) {
        circ(circles[i].x - 18, circles[i].y - 38, circles[i].radius);
        circles[i].radius += 20;
        if (circles[i].radius > canvas.width) circles.splice(i,1);
    }

    ctx.drawImage(scratch, 0, 0);
    window.requestAnimationFrame(circleAnimation);
}

window.requestAnimationFrame(circleAnimation);

function draw() {
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = 34;

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        ctx.beginPath();
        ctx.arc(centerX - 18, centerY - 38, radius, 0, 2 * Math.PI, false);

        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fill();
}

draw(); 
