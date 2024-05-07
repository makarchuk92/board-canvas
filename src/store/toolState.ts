import { makeAutoObservable } from "mobx";
interface Tool {
    fillColor: string | null;
    strokeColor: string | null
}
class ToolState {
    tool: Tool |null = null;
    constructor() {
        makeAutoObservable(this)
    }
    setTool(tool: Tool ) {
        this.tool = tool
    }
    setFillColor(color: string) {
        if (this.tool) {
            this.tool.fillColor = color  
        }  
    }
    setStrokeColor(color: string) {
        if (this.tool) {
            this.tool.strokeColor = color
        }
    }
}

export default new ToolState()