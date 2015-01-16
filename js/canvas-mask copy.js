$(function() {
   
    // Canvas
    var canvas = document.getElementById('myCanvas'),
        context = canvas.getContext('2d');
        window.ctx = canvas.getContext("2d");

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
            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;
            var radius = 300;
            
            context.fillStyle = 'black';
            context.fillRect(0,0,window.innerWidth,window.innerHeight);
            
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            
            context.fillStyle = 'rgba(0,0,0,1)';
            context.globalCompositeOperation = 'destination-out';
            context.fill();
        }
	}
});