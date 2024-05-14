export default class Tool {
    canvas: HTMLCanvasElement | null;
    ctx:CanvasRenderingContext2D ;
    color: string
    constructor(canvas: HTMLCanvasElement) {
            this.canvas = canvas;
            this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
            this.color = ""
            this.destroyEvents()
    }

    set fillColor(color: string) {
        this.ctx.fillStyle = color
    }

    set strokeColor(color: string) {
        this.ctx.strokeStyle = color
    }

    set lineWidth(width: number) {
        this.ctx.lineWidth = width
    }

    destroyEvents() {
        if (this.canvas) {
            this.canvas.onmousedown = null
            this.canvas.onmouseup = null
            this.canvas.onmousemove = null
        }
        }
       
}