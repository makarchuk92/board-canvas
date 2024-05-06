import Tool from "./Tool";


export default class Circle  extends Tool {
    mouseDown: boolean;
    startX: number;
    startY: number;
    saved: string | null;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.mouseDown = false
        this.startX = 0
        this.startY = 0
        this.saved = null
        this.listen()
    }

    listen() {
        if(this.canvas) {
            this.canvas.onmousedown = this.mouseDownHandler.bind(this);
            this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
            this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        }
    }

    mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true
        this.ctx.beginPath()
        const target = e.target as HTMLElement
        this.startX = e.pageX - target.offsetLeft
        this.startY = e.pageY - target.offsetTop
        if(this.canvas) {
            this.saved = this.canvas.toDataURL()
        }
    }
    
    mouseUpHandler(e: MouseEvent) {
        this.mouseDown = false
    }

    mouseMoveHandler(e: MouseEvent) {
        if(this.mouseDown) {
            const target = e.target as HTMLElement
            let currentX = e.pageX - target.offsetLeft
            let currentY = e.pageY - target.offsetTop
            let width = currentX - this.startX
            let height = currentY - this.startY
            let r = Math.sqrt(width**2 + height**2)
            this.draw(this.startX, this.startY, r)
        }
    }

    draw(x: number, y: number, r: number) {
        if(this.canvas && this.ctx && this.saved) {
            const img = new Image()
            img.src = this.saved
            img.onload = () => {
                if(this.canvas) {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
                }
                this.ctx.beginPath()
                this.ctx.arc(x, y, r, 0, 2*Math.PI)
                this.ctx.fill()
                this.ctx.stroke()
            }
        }
    }
}