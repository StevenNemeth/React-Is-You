import React, {useEffect, useRef} from "react";

import './Board.css';
const Board = () => {   
  console.log('board')

  return (
    <canvas id ="canvas1" style={{border: '5px solid black', position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%)`, width: '600px', height: '600px'}}
    >
      </canvas>  
  )

};

export default Board;
