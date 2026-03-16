// Setting up the canvas
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.7;

let isDrawing = false;
let brushColor = '#000000';
let brushSize = 5;
let currentTool = 'brush';

// Start drawing
canvas.addEventListener('mousedown', () => {
    isDrawing = true;
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath(); // Start a new path
});

canvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;

    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;

    if (currentTool === 'brush') {
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = brushColor;
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else if (currentTool === 'eraser') {
        ctx.clearRect(x, y, brushSize, brushSize);
    }
});

// Change brush color
document.getElementById('colorPicker').addEventListener('input', (event) => {
    brushColor = event.target.value;
});

// Change brush size
document.getElementById('brushSize').addEventListener('input', (event) => {
    brushSize = event.target.value;
});

// Clear canvas
document.getElementById('clearButton').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save canvas to localStorage
function saveCanvas() {
    const dataURL = canvas.toDataURL(); // Convert canvas to image Data URL
    localStorage.setItem('savedCanvas', dataURL); // Save it to localStorage
    alert('Canvas saved successfully!');
}

// Load canvas from localStorage
function loadCanvas() {
    const dataURL = localStorage.getItem('savedCanvas'); // Retrieve saved Data URL
    if (dataURL) {
        const img = new Image(); // Create an image element
        img.src = dataURL; // Set its source to the saved Data URL
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear current canvas
            ctx.drawImage(img, 0, 0); // Draw the saved image onto the canvas
        };
    } else {
        alert('No saved canvas found!');
    }
}

// Toolbar buttons for additional functionality
const saveButton = document.createElement('button');
saveButton.textContent = 'Save Canvas';
saveButton.classList.add('toolbar-button');
saveButton.addEventListener('click', saveCanvas);

const loadButton = document.createElement('button');
loadButton.textContent = 'Load Canvas';
loadButton.classList.add('toolbar-button');
loadButton.addEventListener('click', loadCanvas);

const penButton = document.createElement('button');
penButton.textContent = 'Pen';
penButton.classList.add('toolbar-button');
penButton.addEventListener('click', () => selectTool('brush'));

document.querySelector('.toolbar').appendChild(penButton);

const eraserButton = document.createElement('button');
eraserButton.textContent = 'Eraser';
eraserButton.classList.add('toolbar-button');
eraserButton.addEventListener('click', () => selectTool('eraser'));

document.querySelector('.toolbar').appendChild(saveButton);
document.querySelector('.toolbar').appendChild(loadButton);
document.querySelector('.toolbar').appendChild(eraserButton);

// Tool selection function
function selectTool(tool) {
    currentTool = tool;
}
// Toggle theme functionality
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

const themeButton = document.createElement('button');
themeButton.textContent = 'Toggle Theme';
themeButton.classList.add('toolbar-button');
themeButton.addEventListener('click', toggleTheme);
document.querySelector('.toolbar').appendChild(themeButton);