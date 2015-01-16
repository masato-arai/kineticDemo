var canvas  = document.getElementById('myCanvas');
var scratch = document.createElement('canvas');
var ctx  = canvas.getContext('2d');
var ctxS = scratch.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    scratch.width = canvas.width = window.innerWidth;
    scratch.height = canvas.height = window.innerHeight;
}

resizeCanvas();

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(),
        root = document.documentElement;

    // return relative mouse position
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

var circles = [];

canvas.addEventListener('click', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    var message = "Mouse position: " + mousePos.x + "," + mousePos.y;
    var colour = '#' + Math.floor(Math.random() * 16777215).toString(16); //16777215 is the decimal value of #FFFFFF

    circles.unshift({
        x: mousePos.x,
        y: mousePos.y,
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