import Line from "./line.js";
import NodeNetwork from "./nodeNetwork.js";

class Node extends NodeNetwork {
    constructor(ctx, x, y, bound, id) {
        super();
        this.context = ctx;

        this.id = id;
        this.centerX = x;
        this.centerY = y;

        this.bound = bound;

        this.draw(ctx);
        this.connect(ctx);
    }

    draw(context) {
        context.beginPath();
        context.arc(this.centerX, this.centerY, 10, 0, 2*Math.PI, false);
        context.fillStyle = "green";
        context.fill();
    }

    connect() {
       const connection = new Line(this.context);
    }
}

export default Node;