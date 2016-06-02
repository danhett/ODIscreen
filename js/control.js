var canvas = document.getElementById('imageCanvas');
var context = canvas.getContext('2d');
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

// LEEDS
var leeds1 = {prefix:"leeds/grabs1/screen2-", count:518};
var leeds2 = {prefix:"leeds/grabs2/screen2-", count:678};
var leeds3 = {prefix:"leeds/grabs3/screen2-", count:776};
var leeds4 = {prefix:"leeds/grabs4/screen2-", count:498};
var leeds5 = {prefix:"leeds/grabs5/screen2-", count:602};

// LONDON
var london1 = {prefix:"london/grabs1/screen2-", count:538};
var london2 = {prefix:"london/grabs2/screen2-", count:502};
var london3 = {prefix:"london/grabs3/screen1-", count:827};

// MANCHESTER
var manchester1 = {prefix:"manchester/grabs1/screen2-", count:1980};
var manchester2 = {prefix:"manchester/grabs2/screen2-", count:877};

// SHEFFIELD
var sheffield1 = {prefix:"sheffield/grabs1/", count:890};
var sheffield2 = {prefix:"sheffield/grabs2/", count:684};
var sheffield3 = {prefix:"sheffield/grabs3/screen2+", count:1463};

var screens = []
var index = 0;
var max;
var liveInterval = 2913000;

// ON UPDATE
updateImage = function() {
  var imageObj = new Image();
  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, context.canvas.width, context.canvas.height);
  };

  imageObj.src = "images/" + screens[index] + ".png";

  if(index < (max-1))
    index++;
  else {
    console.log("done");
  }

  localStorage.setItem(state + "-lastIndex", index);
}

// POPULATE IMAGERY
populateScreens = function() {
  populate(leeds1);
  populate(leeds2);
  populate(leeds3);
  populate(leeds4);
  populate(leeds5);
  populate(london1);
  populate(london2);
  populate(london3);
  populate(manchester1);
  populate(manchester2);
  populate(sheffield1);
  populate(sheffield2);
  populate(sheffield3);

  max = screens.length;
}

populate = function(item) {
  for(var i = 1; i <= item.count; i++) {
    screens.push(item.prefix+i);
  }
}

// MARK THE START OF THE PROCESS
startProcess = function() {
  if(state === "live")
    setInterval(updateImage, liveInterval); // one image about every 40-odd minutes
  else if(state === "test")
    setInterval(updateImage, 1000);

  if(!localStorage.getItem(state + "-lastIndex"))
    index = 0;
  else
    index = localStorage.getItem(state + "-lastIndex");
}

// go.
this.populateScreens();
this.startProcess();
