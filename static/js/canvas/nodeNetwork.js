import Node from "./node.js";
class NodeNetwork {
    constructor(nodes) {
        this.nodes = nodes;
    }

    getOtherNodes(ids) {
        return this.nodes.filter(node => {
            return ids.includes(node.id) ? [node.x, node.y] : null;
        });
    }

    draw(ctx) {
        this.nodes.forEach((n) => {
            const otherNodes = this.getOtherNodes(n.bound);
            const node = new Node(ctx, n.x, n.y, otherNodes, n.id);
        });
    }
}

export default NodeNetwork;