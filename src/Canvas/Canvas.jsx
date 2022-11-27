import { useOnDraw} from '../Components/Hooks'

const shadow_dog = require('../sprites/shadow_dog.png');
const Canvas = ({
  width,
  height
}) => {

const setCanvasRef = useOnDraw(onDraw)

function onDraw(ctx, point){
  // ctx.fillStyle = 'blue'
  // ctx.beginPath()
  // ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI)
  // ctx.fill()
  // const canvas = document.getElementById('canvas1')
  // const context = canvas.getContext("2d");
  // const CANVAS_WIDTH = canvas.width = 600;
  // const CANVAS_HEIGHT = canvas.HEIGHT = 600;    
  
  // const playerImage = new Image();
  // playerImage.src = shadow_dog    
  // const spriteWidth = 687
  // const spriteHeight = 523
  // let frameX = 0
  // let frameY = 0
  
  // const animate = () => {
  //   context.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
  //   // context.fillRect(50,50,100,100)
  //   // context.drawImage(image, sx,sy,sw,sh,dx,dy,dw,dh)
  //   context.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
  //   console.log(context)
  //   requestAnimationFrame(animate)
  
  // }
  // animate()

}


return (  
  <canvas
    id={'canvas1'}
    width={width}
    height={height}
    style={canvasStyle}
    ref={setCanvasRef}  
  >
  </canvas>
)
}
export default Canvas

const canvasStyle = {
  border: '1px solid black'
}