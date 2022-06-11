import Node from "./node.js";
import NodeNetwork from "./nodeNetwork.js";

const nodes = [
    {
        id: 0,
        x: 250,
        y: 200, 
        bound: [3, 4]
    },
    {
        id: 1,
        x: 400,
        y: 180, 
        bound: [4]
    },
    {
        id: 2,
        x: 450,
        y: 250, 
        bound: [1, 4]
    },
    {
        id: 3,
        x: 320,
        y: 350, 
        bound: [0, 4]
    },
    {
        id: 4,
        x: 250,
        y: 500, 
        bound: [1, 2, 3]
    },
                
    

]

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
    new NodeNetwork(ctx, nodes);
}

init();