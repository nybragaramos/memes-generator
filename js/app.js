//function to handle the file selection
function handleFileSelect(evt) {
  const files = evt.target.files; // FileList object
  console.log(files);
  // Only process image files.
  if (files[0].type.match('image.*')) {
    const reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(file) {
      return function(e) {
        loadAndDrawImage(reader.result);
      };
    })(files[0]);
    // Read in the image file as a data URL.
    reader.readAsDataURL(files[0]);
  }
}

function loadAndDrawImage(src)
{
  // Create an image object. This is not attached to the DOM and is not part of the page.
  const c=document.getElementById("memeImage");
  const ctx=c.getContext("2d");
  const image = new Image();
  // When the image has loaded, draw it to the canvas
  image.onload = function()
  {
      // draw image...
      ctx.drawImage(this,0,0, c.width, c.height);
  }
  // Now set the source of the image that we want to load
  image.src = src;
}
$('#files').on('change', handleFileSelect);