import NodeNetwork from "./nodeNetwork.js";

const canvas = document.getElementById("canvas-map");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

document.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

function init(nodes) {
    console.log("reached init function!")
    const network = new NodeNetwork(nodes);
    network.draw(ctx)
}

export default (nodes) => {
    return init(nodes);
};