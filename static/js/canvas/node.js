import Line from "./line.js";

class Node {
    constructor(ctx, x, y, otherNodes, id) {
        this.ctx = ctx;
        this.id = id;
        this.centerX = x;
        this.centerY = y;

        this.start = false;
        this.end = false;

        this.otherNodes = otherNodes;

        this.draw(this.ctx);
        this.getToolTip(this.ctx);
        this.connect(this.ctx);
    }

    draw(ctx, color = "black") {
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, 15, 0, 2*Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
    }
    
    connect(ctx) {
        this.otherNodes.forEach(otherNode => {
            new Line(ctx, this.centerX, this.centerY, otherNode.x, otherNode.y);
        });
    }

    setStart() {
        if(this.end != true) {
            this.start = true;
        }
    }

    setEnd() {
        if(this.start != true) {
            this.end = true;
        }
    }

    getToolTip(ctx){
        ctx.beginPath();
        ctx.font = '25px Arial';
        ctx.fillText(`${this.id}`, this.centerX - 5, this.centerY - 20);
    }
}

export default Node;