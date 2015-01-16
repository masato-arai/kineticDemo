$(function() {
    window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
    
    function drawRect(myRectangle, context) {
        context.beginPath();
        context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
        context.fillStyle = '#000';
        context.fill();
    }
    function animate(lastTime, myRectangle, runAnimation, canvas, context) {
        if(runAnimation.value) {
            // update
            var time = (new Date()).getTime();
            var timeDiff = time - lastTime;
            
            // pixels / second
            var linearSpeed = 100;
            var linearDistEachFrame = linearSpeed * timeDiff / 1000;
            var currentX = myRectangle.x;
            
            if(currentX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
                var newX = currentX + linearDistEachFrame;
                myRectangle.x = newX;
            }
    
            // clear
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            // draw
            drawRect(myRectangle, context);
        
            // request new frame
            requestAnimFrame(function() {
                animate(time, myRectangle, runAnimation, canvas, context);
            });
        }
    }
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    window.ctx = canvas.getContext("2d");

var scratch = document.createElement('canvas');
var ctxS = scratch.getContext('2d');



    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when 
         * you resize the browser window and the canvas goes will be cleared.
         */
         

        // do cool things with the context
        drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {

        if (canvas.getContext){
            var context = canvas.getContext('2d');
            var radius = 300;
            var myRectangle = {
                x: canvas.width / 2,
                y: canvas.height / 2,
                width: 100,
                height: 100,
                borderWidth: 5
            };
            
            /*
            * define the runAnimation boolean as an obect
            * so that it can be modified by reference
            */
            var runAnimation = {
                value: false
            };
            
            // add click listener to canvas
            document.getElementById('arrow').addEventListener('click', function() {
                // flip flag
                runAnimation.value = !runAnimation.value;
                
                if(runAnimation.value) {
                    var date = new Date();
                    var time = date.getTime();
                    animate(time, myRectangle, runAnimation, canvas, context);
                }
            });
	    }
	}
});