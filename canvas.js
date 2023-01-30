const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const maxLevel = 5;
const branches = 2;
const sides = Math.floor(Math.random() * 10 + 3);
const spread = Math.random() * 48 + 0.51;

ctx.translate(canvas.width / 2, canvas.height / 2);

const angle = Math.PI * 2 * spread;

function drawLine(level) {
  if (level > maxLevel) return;

  ctx.strokeStyle = "rgb(255,0,0)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 0);
  ctx.stroke();

  for (let i = 1; i < branches + 1; i++) {
    ctx.save();
    ctx.translate((200 * i) / (branches + 1), 0);
    ctx.scale(0.5, 0.5);
    ctx.save();

    ctx.rotate(angle);
    drawLine(level + 1);
    ctx.restore();
    ctx.save();

    ctx.rotate(-angle);
    drawLine(level + 1);
    ctx.restore();

    ctx.restore();
  }
}

function drawSnowflake() {
  for (let i = 0; i < sides; i++) {
    drawLine(0);
    ctx.rotate((Math.PI * 2) / sides);
  }
}

drawSnowflake();

function randomizeSnowflake(){
    sides = Math.floor(Math.random() * 7 + 3);
    spread = Math.random() * 0.6 - 0.3;
    drawSnowflake();
}

const buttonRandom = document.querySelector(".button-canvas").addEventListener("click", randomizeSnowflake());