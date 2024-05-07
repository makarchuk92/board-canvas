import Brush from "./Brush";


export default class Eraser extends Brush {
    size: number
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.size = 20
    }

    draw(x: number, y: number) {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = this.size
        this.ctx.lineTo(x, y);
        this.ctx.stroke()
    }
}