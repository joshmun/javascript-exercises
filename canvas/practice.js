document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById('myCanvas');
  canvas.width = 500;
  canvas.height = 500;
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#ff6961';
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(250, 250, 200, 0, 2*Math.PI);
  ctx.strokeStyle = '#aec6cf';
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle='#aec6cf';
  ctx.fill();
});
