import Tool from "./Tool";


export default class Line extends Tool {
    mouseDown: boolean
    saved: string | null 
    name: string
    currentX: number
    currentY: number
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.mouseDown = false;
        this.saved = null;
        this.currentX = 0;
        this.currentY = 0;
        this.listen()
        this.name = "Line";
    }

    listen() {
        if(this.canvas) {
            this.canvas.onmousedown = this.mouseDownHandler.bind(this)
            this.canvas.onmouseup = this.mouseUpHandler.bind(this)
            this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        }
    }

    mouseDownHandler(e: MouseEvent) {
        
            this.mouseDown = true
            const target = e.target as HTMLElement
            this.currentX = e.pageX - target.offsetLeft
            this.currentY = e.pageY - target.offsetTop
            this.ctx.beginPath()
            this.ctx.moveTo(this.currentX, this.currentY)
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
            this.draw(this.currentX, this.currentY, e.pageX - target.offsetLeft, e.pageY - target.offsetTop)
        }
    }

    draw(x: number, y: number, currentX: number, currentY: number) {
        if(this.canvas && this.ctx && this.saved) {
            const img = new Image()
            img.src = this.saved
            img.onload = () => {
                if(this.canvas ) {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
                    this.ctx.beginPath()
                    this.ctx.moveTo(currentX, currentY)
                this.ctx.lineTo(x, y)
                this.ctx.stroke()
                }
                
            }
        }
    }
}