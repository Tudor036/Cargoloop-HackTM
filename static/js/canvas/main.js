import NodeNetwork from "./nodeNetwork.js";
import { nodes } from "./info.js";

const canvas = document.getElementById("canvas-map");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

function init() {
    const network = new NodeNetwork(nodes);
    network.draw(ctx)
}

init();