import Node from "./node.js";

class NodeNetwork {
    constructor(ctx, nodes) {
        this.nodes = nodes;

        this.draw(ctx);
    }

    draw(ctx) {
        this.nodes.forEach((n) => {
            const id = n.bound[1];
            const otherNode = this.nodes.filter(node => node.id === id);

            const node = new Node(ctx, n.x, n.y, [[n.x, n.y], [otherNode.x, otherNode.y]], n.id);
            console.log(node);
        });
    }
}

export default NodeNetwork;