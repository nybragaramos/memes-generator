// Create an image object. This is not attached to the DOM and is not part of the page.
const canvas=document.getElementById("memeImage");
const ctx=canvas.getContext("2d");

//function to handle the file selection
function loadImage() {
  const input = $('#files')[0]; // FileList object
  console.log(input);
  const file = input.files[0];
  // Only process image files.
  if (input.files[0].type.match('image.*')) {
    const reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(file) {
      return function(e) {
        drawImage(reader.result);
      };
    })(input.files[0]);
    // Read in the image file as a data URL.
    reader.readAsDataURL(input.files[0]);
  }
}

function drawImage(src)
{
  const image = new Image();
  // When the image has loaded, draw it to the canvas
  image.onload = function()
  {
      // draw image...
      ctx.drawImage(this,0,0);
  }
  // Now set the source of the image that we want to load
  image.src = src;
}

function textStyle(){
  // Set the text style to that to which we are accustomed
  ctx.lineWidth  = 3;
  ctx.font = '36pt impact';
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.lineJoin = 'round';
  ctx.globalCompositeOperation='destination-over';
}

function addUpperText() {
   // Draw the text
  let text = $('#upper').val();
  text = text.toUpperCase();
  x = canvas.width/2;
  y = 75;
  ctx.strokeText(text, x, y);
  ctx.fillText(text, x, y);
}

function addBottonText() {
   // Draw the text
  let text = $('#bottom').val();
  text = text.toUpperCase();
  x = canvas.width/2;
  y = canvas.height - 50;
  ctx.strokeText(text, x, y);
  ctx.fillText(text, x, y);
}

$("#create").submit(function(e) {
    e.preventDefault();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    loadImage();
    textStyle();
    addUpperText();
    addBottonText();
});
