import React, { useEffect, useRef } from 'react'
import '../styles/canvas.scss'
import { observer } from 'mobx-react-lite'
import toolState from '../store/toolState'
import Brush from '../tools/Brush'
import canavasState from '../store/canvasState'

const Canvas = observer ( () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null) 

    useEffect(() => {
      if(canvasRef.current) {
        canavasState.setCanvas(canvasRef.current)
        const brush = new Brush(canvasRef.current)
        toolState.setTool(null!)
      }
  
    }, [])

    const mouseDownHandler = () => {
      canavasState.pushToUndo(canvasRef.current?.toDataURL() as string)
    }

  return (
    <div className='canvas'>
        <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={900} height={600}/>
    </div>
  )
})

export default Canvas