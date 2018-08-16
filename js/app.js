//function to handle the file selection
function handleFileSelect(evt) {
  const files = evt.target.files; // FileList object
  console.log(files);
  // Only process image files.
  if (!files[0].type.match('image.*')) {
    continue;
  }
  const reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function(file) {
    return function(e) {
      //Do something
    };
  })(file);
  // Read in the image file as a data URL.
  reader.readAsDataURL(file);
}
$('#files').on('change', handleFileSelect);