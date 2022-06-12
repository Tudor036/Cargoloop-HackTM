import NodeNetwork from "./nodeNetwork.js";

const canvas = document.getElementById("canvas-map");
canvas.width = window.innerWidth > 768 ? window.innerWidth/2 : window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

if(window.innerWidth < 768) {
    ctx.scale(.85, .85);
}

document.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

function init(nodes, startNode, endNode) {
    console.log(startNode, endNode);
    const network = new NodeNetwork(nodes, startNode, endNode);
    network.draw(ctx);
}

export default (nodes, startNode, endNode) => {
    return init(nodes, startNode, endNode);
};