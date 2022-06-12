import Node from "./node.js";
class NodeNetwork {
    constructor(nodes, start = 1, end = 3) {
        this.nodes = nodes;

        this.startNode = 1;
        this.intermediateNodes = [2];
        this.endNode = end;
        console.log(this.startNode, this.endNode);
    }

    getOtherNodes(ids) {
        return this.nodes.filter(node => {
            return ids.includes(node.id) ? [node.x, node.y] : null;
        });
    }

    draw(ctx) {
        this.nodes.forEach((n) => {
            const otherNodes = this.getOtherNodes(n.bound);

            let start, intermediate, end;
            if(n.id === this.startNode) {
                start = true;
            } else if(n.id == this.endNode) {
                end = true;
            } else if(this.intermediateNodes.includes(n.id)) {
                intermediate = true;
            }

            new Node(ctx, n.x, n.y, otherNodes, n.id, start, intermediate, end);                
        });
    }

    setStart(startNr) {
        this.start = startNr;
    }

    setEnd(endNr) {
        this.end = endNr;
    }
}

export default NodeNetwork;