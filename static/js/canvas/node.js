import Line from "./line.js";
import NodeNetwork from "./nodeNetwork.js";

class Node {
    constructor(ctx, x, y, otherNodes, id) {
        this.id = id;
        this.centerX = x;
        this.centerY = y;

        this.otherNodes = otherNodes;

        this.draw(ctx);
        this.connect(ctx);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, 10, 0, 2*Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    connect(ctx) {
        this.otherNodes.forEach(otherNode => {
            new Line(ctx, this.centerX, this.centerY, otherNode.x, otherNode.y);
        });
    }
}

export default Node;