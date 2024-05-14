import { makeAutoObservable } from "mobx"
import toolState from "./toolState"
import Tool from "../tools/Tool"

class CanvasState {
    canvas: HTMLCanvasElement | null = null 
    undoList: Array<string> = []
    redoList: Array<string> = []

    constructor() {
        makeAutoObservable(this)
    }
    setCanvas(canvas: HTMLCanvasElement | null) {
        (this.canvas = canvas)
    }
    setToolIfCanvasExists(tool: any) {
        if (this.canvas) {
            toolState.setTool(tool) 
        }
    }
    pushToUndo(data: string ) {
        this.undoList.push(data)
    }
    pushToRedo(data: string) {
        this.redoList.push(data)
    }
    undo() {
        let ctx = this.canvas?.getContext("2d") as CanvasRenderingContext2D
        if (this.undoList.length > 0) {
            let dataUrl = this.undoList.pop()
            this.redoList.push(this.canvas?.toDataURL() as string)
            let img = new Image() ;
            img.src = dataUrl as string
            img.onload = () => {
                if(this.canvas) {
                    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                     ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
                }
            }
        } else {
            if(this.canvas) {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            }
            
        }
    }
    redo() {
        let ctx = this.canvas?.getContext("2d") as CanvasRenderingContext2D
        if (this.redoList.length > 0) {
            let dataUrl = this.redoList.pop()
            this.undoList.push(this.canvas?.toDataURL() as string)
            let img = new Image() ;
            img.src = dataUrl as string
            img.onload = () => {
                if(this.canvas) {
                    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                     ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
                }
            }
        } 
    }
}


export default new CanvasState()