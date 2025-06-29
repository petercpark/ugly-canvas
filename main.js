const canvas = document.getElementById("gameCanvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

canvas.style.backgroundColor = "white";

let date = new Date();
let startTime = date.getTime();

let x = canvas.width / 2 - 50;
let y = 100;
let speed = 5;

let color = "red";
let lastTime = startTime;
let time = 0;

function animate() {
  //drawBackground();

  c.fillStyle = color;
  c.fillRect(x, y, 100, 100);

  time = new Date().getTime();
  if (time - lastTime >= 1000) {
    lastTime = time;
    color = makeRandomColor();
  }

  requestAnimationFrame(animate);
}

animate();

function drawLine() {
  c.strokeStyle = "black";
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(0, canvas.height - 100);
  c.lineTo(canvas.width, canvas.height - 100);
  c.stroke();
}

function drawBackground() {
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
}

function makeRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const canvasOffset = canvas.getBoundingClientRect();
  x = mouseX - canvasOffset.left - 50;
  y = mouseY - canvasOffset.top - 50;
}

document.addEventListener("click", (e) => {
  console.log("click");
  color = makeRandomColor();
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e.key);
  if (e.key === " ") {
    console.log("spacebar pressed");
    drawBackground();
  }
});
