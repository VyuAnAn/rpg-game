import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

/*
import VyuWalk from './assets/Female-4-Walk.png';
import terrainAtlas from './assets/terrain.png';
import worldCfg from './configs/world.json';
import sprites from './configs/sprites.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const spriteWidth = 48;
const spriteHeight = 48;

const terrain = document.createElement('img');
terrain.src = terrainAtlas;

terrain.addEventListener('load', () => {
//    console.log(worldCfg);
//    console.log(sprites);
    const {map} = worldCfg;
    map.forEach((cfgRow, y) => {
        cfgRow.forEach((cfgCell, x) => {
//            console.log(cfgCell[0]);
//            console.log(sprites.terrain[cfgCell[0]].frames);
    const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
    ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteWidth, y * spriteHeight, spriteWidth, spriteHeight);
        });
    })
});

*/
/*
const shots = 3; // кадры.
let cycle = 0; // цикл кадра
let bottomPressed = false;
let topPressed = false;
let leftPressed = false;
let rightPressed = false;
let direct = 0;
let pX = 270;
let pY = 270;

function keyDownHandler(event) {
  switch (event.key) {
    case 'Down':
    case 'ArrowDown':
      bottomPressed = true;
      break;
    case 'Up':
    case 'ArrowUp':
      topPressed = true;
      break;
    case 'Left':
    case 'ArrowLeft':
      leftPressed = true;
      break;
    case 'Right':
    case 'ArrowRight':
      rightPressed = true;
      break;
    default:
      break;
  }
}

function keyUpHandler(event) {
  switch (event.key) {
    case 'Down':
    case 'ArrowDown':
      bottomPressed = false;
      break;
    case 'Up':
    case 'ArrowUp':
      topPressed = false;
      break;
    case 'Left':
    case 'ArrowLeft':
      leftPressed = false;
      break;
    case 'Right':
    case 'ArrowRight':
      rightPressed = false;
      break;
    default:
      break;
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = VyuWalk;

//ctxf.beginPath();
//ctxf.moveTo(50, 50);
//ctxf.lineTo(550, 50);
//ctxf.stroke();
//ctxf.closePath();
//
//ctxf.beginPath();
//ctxf.strokeRect(150, 150, 300, 300);
//ctxf.arc(300, 300, 100, 0, 2 * Math.PI);
//ctxf.stroke();
//ctxf.closePath();
//
//ctxf.beginPath();
//ctxf.moveTo(50, 550);
//ctxf.lineTo(550, 550);
//ctxf.stroke();
//ctxf.closePath();


function walk(timestamp) {
//    console.log("timestamp", timestamp);
    if (bottomPressed) {
      if (pY >= 550) {
        pY = 550;
      } else {
        pY += 10;
      }
      cycle = (cycle + 1) % shots;
      direct = 0;
    }
    if (topPressed) {
      if (pY <= 0) {
        pY = 0;
      } else {
        pY -= 10;
      }
      cycle = (cycle + 1) % shots;
      direct = 3;
    }
    if (leftPressed) {
      if (pX <= 0) {
        pX = 0;
      } else {
        pX -= 10;
      }
      cycle = (cycle + 1) % shots;
      direct = 1;
    }
    if (rightPressed) {
      if (pX >= 550) {
        pX = 550;
      } else {
        pX += 10;
      }
      cycle = (cycle + 1) % shots;
      direct = 2;
    }

    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(
      img,
      cycle * spriteWidth,
      direct * spriteHeight,
      spriteWidth,
      spriteHeight,
      pX,
      pY, // где начнем рисовать
      spriteWidth,
      spriteHeight,
    ); // ширина высота изобржения

    window.requestAnimationFrame(walk);
}
img.addEventListener('load', () => {
    window.requestAnimationFrame(walk);
//    setInterval(() => { }, 120);
});*/
