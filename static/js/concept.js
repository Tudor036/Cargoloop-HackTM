'use strict';

import init from "./canvas/main.js";

async function getNodes() {
    const jsonRes = await fetch("/conceptPass");
    const res = await jsonRes.json()

    return JSON.parse(res);
}

function sendMessage(errMessage, color) {
    const e = document.getElementById('submit-message');
    e.style.color = color;
    e.style.backgroundColor = "white";
    e.textContent = errMessage;
}

document.addEventListener("DOMContentLoaded", async function () {
    const nodes = await getNodes()
    init(nodes, 1, 3);
    const form = document.getElementById("menu-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const start = event.target.start.value;
        const end = event.target.end.value;
        const ip = event.target.ip.value;
        const port = event.target.port.value;
        init(nodes, start, end);

        console.log("Data from concept.js ", start, end)

        await fetch('/sendRoad', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ start, end, ip, port })
        }).then(() => {
            sendMessage("success", "green");
        }).catch((err) => {
            sendMessage(`Error: ${err.message}`, "red");
        })
    });
})