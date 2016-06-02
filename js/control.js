var canvas = document.getElementById('imageCanvas');
var context = canvas.getContext('2d');
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

var imageObj = new Image();
imageObj.onload = function() {
  context.drawImage(imageObj, 0, 0);
};
imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
