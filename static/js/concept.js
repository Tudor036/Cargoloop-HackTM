'use strict';

import init from "./canvas/main.js";

async function getNodes() {
    const jsonRes = await fetch("/dataset");
    const res = await jsonRes.json()

    console.log(JSON.parse(res));
    return JSON.parse(res);
}

function sendMessage(errMessage, color) {
    const e = document.getElementById('submit-message');
    e.style.color = color;
    e.textContent = errMessage;
}

document.addEventListener("DOMContentLoaded", async function () {
    init(await getNodes());
    const form = document.getElementById("menu-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const start = event.target.start.value;
        const end = event.target.end.value;
        const ip = event.target.ip.value;
        const port = event.target.port.value;
        console.log(start, end, ip, port);

        await fetch('/sendRoad', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ start, end, ip, port })
        }).then(() => {
            sendMessage("success", "green");
        }).catch((err) => {
            sendMessage(err.message, "red");
        })
    });
})