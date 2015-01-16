var canvas  = document.getElementById('myCanvas');
var arrow  = document.getElementById('arrow');
var scratch = document.createElement('canvas');
var ctx  = canvas.getContext('2d');
var ctxS = scratch.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    scratch.width = canvas.width = window.innerWidth;
    scratch.height = canvas.height = window.innerHeight;
}

resizeCanvas();

var circles = [];

arrow.addEventListener('click', function (evt) {
    var colour = '#' + Math.floor(Math.random() * 16777215).toString(16); //16777215 is the decimal value of #FFFFFF

    circles.unshift({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 10,
        colour: colour
    });

}, false);

function circ(x, y, rad, c) {
    ctxS.fillStyle = c;
    ctxS.beginPath();
    ctxS.arc(x, y, rad, 0, 2 * Math.PI, false);
    ctxS.closePath();
    ctxS.fill();
}

function draw() {
    for (var i = circles.length - 1; i >= 0; --i) {
        circ(circles[i].x, circles[i].y, circles[i].radius, circles[i].colour);
        circles[i].radius += 3;
        if (circles[i].radius > canvas.width) circles.splice(i,1);
    }

    ctx.drawImage(scratch, 0, 0);
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);