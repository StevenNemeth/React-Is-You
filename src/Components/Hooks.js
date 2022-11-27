import { useRef } from "react";

const shadow_dog = require('../sprites/shadow_dog.png');

export function useOnDraw(onDraw) {   
  
  const playerImage = new Image();
  playerImage.src = shadow_dog    
  const spriteWidth = 575
  const spriteHeight = 523

  const canvasRef = useRef(null)

  function setCavasRef(ref) {
    if (!ref) return;
    canvasRef.current = ref
    initMouseMoveListener()
  }


  function initMouseMoveListener() {
    const mouseMoveListener = (e) => {
      const point = computePointInCanvas(e.clientX, e.clientY)
      const ctx = canvasRef.current.getContext('2d')
      if(onDraw) onDraw(ctx, point)
      
    }
    window.addEventListener('mousemove', mouseMoveListener)
  }
  
  // function playerMover(){
  //   const wasdListener = (e) => {
  //     window.addEventListener('keydown', onKeyDown, false)
  //   }
  // }

  window.addEventListener("keydown", onKeyDown, false);
  window.addEventListener("keyup", onKeyUp, false);
  
  function onKeyDown(event) {
    var keyCode = event.keyCode;
    switch (keyCode) {
      case 68: //d
      keyD = true;      
      break;

      case 83: //s
      keyS = true;      
      break;

      case 65: //a
      keyA = true;      
      break;

      case 87: //w
      keyW = true;      
      break;
    }
    console.log(keyCode, 'down')
  }
  
  function onKeyUp(event) {
    var keyCode = event.keyCode;
  
    switch (keyCode) {
      case 68: //d
        keyD = false;
        frameX++
        break;
      case 83: //s
        keyS = false;
        frameY++
        break;
      case 65: //a
        keyA = false;
        frameX --
        break;
      case 87: //w
        keyW = false;
        frameY --
        break;
    }
    console.log(keyCode, 'up', frameX,frameY)
  }

  var frameX = 0;
  var frameY = 0;

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

const animate = () => {
  var canvas = document.getElementById("canvas1");
  var c = canvas.getContext("2d");
  c.clearRect(0,0, 600, 600)
  // context.fillRect(50,50,100,100)
  // context.drawImage(image, sx,sy,sw,sh,dx,dy,dw,dh)
  c.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, frameX*20, frameY*20, spriteWidth/2, spriteHeight/2)
  
  // requestAnimationFrame(animate)  s
}

//main animation function
function drawStuff() {
  window.requestAnimationFrame(drawStuff);
  var canvas = document.getElementById("canvas1");
  var c = canvas.getContext("2d");   
 

  if (keyD == true) {
    if(frameX < 7) frameX++
    else frameX = 0
    animate()      
  }
  if (keyS == true) {
    if(frameY < 7) frameY++
    else frameY = 0
    animate()    
  }
  if (keyA == true) { 
    if(frameX > 0) frameX--
  else frameX = 7   
    animate()
  }
  if (keyW == true) {
    if(frameY > 0) frameY--
    else frameY = 7
    animate()
    frameY--;
  }
}
window.requestAnimationFrame(drawStuff);

  function computePointInCanvas(clientX, clientY) {
    if(canvasRef.current){
      const boundingRect = canvasRef.current.getBoundingClientRect()
      
        return {
          x: clientX - boundingRect.left,
          y: clientY - boundingRect.top
        }    
    }
    else 
    return null
  }


  return setCavasRef
}