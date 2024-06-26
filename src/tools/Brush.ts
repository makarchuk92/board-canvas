import Tool from "./Tool";

export default class Brush extends Tool {
    mouseDown: boolean;
    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
        this.mouseDown = false
        this.listen()

    }

    listen() {
        if (this.canvas) {
            this.canvas.onmousedown = this.mouseDownHandler.bind(this)
            this.canvas.onmouseup = this.mouseUpHandler.bind(this)
            this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        }
    }

    mouseUpHandler(e: MouseEvent) {
        this.mouseDown = false
    }
    mouseDownHandler(e: MouseEvent )  {
        this.mouseDown = true
        this.ctx.beginPath()
        const target = e.target as HTMLElement
        this.ctx.moveTo(e.pageX - target.offsetLeft, e.pageY - target.offsetTop)
    }
    mouseMoveHandler(e: MouseEvent)  {
        if (this.mouseDown) {
            const target = e.target as HTMLElement
            this.draw(e.pageX - target.offsetLeft, e.pageY - target.offsetTop)
        }
    }
    draw(x: number, y: number) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }
}

