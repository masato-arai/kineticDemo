// Canvas
var canvas  = document.getElementById('myCanvas');
var ctx  = canvas.getContext('2d');
var scratch = document.createElement('canvas');

// var window.ctx = canvas.getContext("2d");


// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawStuff(); 
}

resizeCanvas();

var circles = [];

function drawStuff() {
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = 300;
        
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fill();
    }
}

function draw() {
    for (var i = circles.length - 1; i >= 0; --i) {
        circ(circles[i].x, circles[i].y, circles[i].radius);
        circles[i].radius += 3;
        if (circles[i].radius > canvas.width) circles.splice(i,1);
    }

    ctx.drawImage(scratch, 0, 0);
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);