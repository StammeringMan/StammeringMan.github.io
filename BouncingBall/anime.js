var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height/2;

var dx = 2;
var dy = -2;

var ballRadius = 10;

function drawball(){
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#62cbe7";
	ctx.fill();
	ctx.closePath();
	
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawball();
	x += dx;
	y += dy;

	if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
		dy = -dy;
	}


	if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}

}

setInterval(draw, 10);