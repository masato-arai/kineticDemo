var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var $canvas=$("#canvas");
var canvasOffset=$canvas.offset();
var offsetX=canvasOffset.left;
var offsetY=canvasOffset.top;
var scrollX=$canvas.scrollLeft();
var scrollY=$canvas.scrollTop();

var cw = canvas.width;
var ch = canvas.height;
var cx = canvas.width / 2;
var cy = canvas.height / 2;
var radius = 50;
var PI2 = Math.PI*2;

var img=new Image();
img.onload=function(){
    requestAnimationFrame(animate);
};
img.src="images/02.jpg";


function draw(){
    ctx.clearRect(0,0,cw,ch);
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx,cy,radius,0,PI2);
    ctx.closePath();
    ctx.stroke();
    ctx.clip();
    ctx.drawImage(img,0,0);
    ctx.restore();
}

function animate(time){
    if(cx-radius>cw || cy-radius>ch){return;}
    requestAnimationFrame(animate);
    cx+=0.2;
    cy+=0.2;
    draw();
}
