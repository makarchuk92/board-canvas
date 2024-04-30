import React, { useEffect, useRef } from 'react'
import '../styles/canvas.scss'
import { observer } from 'mobx-react-lite'
import toolState from '../store/toolState'
import Brush from '../tools/Brush'
import canavasState from '../store/canavasState'

const Canvas = observer ( () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null) 

    useEffect(() => {
      if(canvasRef.current) {
        canavasState.setCanvas(canvasRef.current)
        const brush = new Brush(canvasRef.current)
        toolState.setTool(null)
      }
  
    }, [])

  return (
    <div className='canvas'>
        <canvas ref={canvasRef} width={900} height={600}/>
    </div>
  )
})

export default Canvas