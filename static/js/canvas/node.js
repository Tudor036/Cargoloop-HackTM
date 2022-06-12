import Line from "./line.js";

class Node {
    constructor(ctx, x, y, otherNodes, id, start = false, intermediate = false, end = false) {
        this.ctx = ctx;
        this.id = id;
        this.centerX = x;
        this.centerY = y;

        this.start = start;
        this.end = end;
        
        this.otherNodes = otherNodes;
        this.connect(this.ctx);

        if(start) {
            this.setStart();
        } else if(end) {
            this.setEnd();
        } else if(intermediate) {
            this.setIntermediate();
        } else {
            this.draw(ctx);
        }
        this.getToolTip(this.ctx);
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
            this.draw(this.ctx, "orange")
        }
    }

    setIntermediate() {
        if(this.start != true && this.end != true) {
            this.draw(this.ctx, "grey")
        }
    }

    setEnd() {
        if(this.start != true) {
            this.draw(this.ctx, "orange")
        }
    }

    getToolTip(ctx){
        ctx.beginPath();
        ctx.font = '25px Arial';
        ctx.fillText(`${this.id}`, this.centerX - 5, this.centerY - 25);
    }
}

export default Node;