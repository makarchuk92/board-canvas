import { makeAutoObservable } from "mobx"
import toolState from "./toolState"
import Tool from "../tools/Tool"

class CanvasState {
    canvas: HTMLCanvasElement | null = null 
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
}


export default new CanvasState()