import Node from "./node.js";
class NodeNetwork {
    constructor(nodes) {
        this.nodes = nodes;
        console.log(nodes);
        this.start = 3;
        this.end = 5;
    }

    getOtherNodes(ids) {
        return this.nodes.filter(node => {
            return ids.includes(node.id) ? [node.x, node.y] : null;
        });
    }

    draw(ctx) {
        this.nodes.forEach((n) => {
            const otherNodes = this.getOtherNodes(n.bound);
            new Node(ctx, n.x, n.y, otherNodes, n.id);
        });
    }

    setStart(startNr) {
        this.start = startNr;
    }

    setEnd(endNr) {
        this.end = endNr;
    }

    defineRoadmap() {
        filter
    }
}

export default NodeNetwork;