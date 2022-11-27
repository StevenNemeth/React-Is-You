import './App.css';
import Board from './Board/Board';
import { useEffect, useState } from 'react';
import Canvas from './Canvas/Canvas';
const App = () => {


  const shadow_dog = require('./sprites/shadow_dog.png');

  //   useEffect(() => {
  //   const canvas = document.getElementById('canvas1')
  //   const context = canvas.getContext("2d");
  //   const CANVAS_WIDTH = canvas.width = 600;
  //   const CANVAS_HEIGHT = canvas.HEIGHT = 600;    
  
  //   const playerImage = new Image();
  //   playerImage.src = shadow_dog    
  //   const spriteWidth = 687
  //   const spriteHeight = 523
  //   let frameX = 0
  //   let frameY = 0

  //   const animate = () => {
  //     context.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
  //     // context.fillRect(50,50,100,100)
  //     // context.drawImage(image, sx,sy,sw,sh,dx,dy,dw,dh)
  //     context.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
  //     console.log(context)
  //     requestAnimationFrame(animate)

  //   }
  //   animate()

  // }, []);
  
  return (
    <div className="App">
    <Canvas 
    width={600} 
    height={600}>
    </Canvas>

    </div>
  );
}

export default App;
