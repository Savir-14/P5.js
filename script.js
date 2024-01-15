document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('drawingCanvas');
  const context = canvas.getContext('2d');
  let isDrawing = false; //variable to track when the user is drawing

  //initial dimensions of the canvas
  canvas.width = 800;
  canvas.height = 400;
  
  //event listeners for mouse and keyboard interactions
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
  document.addEventListener('keydown', handleKeyDown);

  //function to start drawing when mouse pressed
  function startDrawing(e) {
    isDrawing = true;
    draw(e);
  }

  //function to draw on canvas while mouse moving
  function draw(e) {
    if (!isDrawing) return;

    //sets drawing styles
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = '#FFFFFF';

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop); //draws line to current mouse position
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop); //moves drawing cursor to current mouse position
    context.stroke(); //strokes the path to draw on canvas
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop); //moves the cursor to current mouse position for continuous drawing
  }

  //function to stop drawing when mouse released
  function stopDrawing() {
    isDrawing = false;
    context.beginPath(); // resets current path to start fresh for next drawing
  }

  //function to press ener key to clear canvas
  function handleKeyDown(e) {
    if (e.key == 'Enter') {
      clearCanvas();
    }
  }

  //function to clear entire canvas
  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
});