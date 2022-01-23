var canvasOne = document.getElementById('canvas-one');

canvasOne.width = window.innerWidth;
canvasOne.height = window.innerHeight;

var ctx = canvasOne.getContext('2d');

ctx.fillStyle = 'red';

// rectangle
ctx.fillRect(10, 10, 150, 150);

// line
ctx.moveTo(300,50);
ctx.lineTo(800, 800);
ctx.stroke();

// circle
ctx.beginPath();
ctx.arc(300, 300, 150, 0, 2*Math.PI);
ctx.stroke();

console.log(ctx);