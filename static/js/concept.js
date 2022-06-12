'use strict';

import init from "./canvas/main.js";

async function getNodes() {
    const jsonRes = await fetch("/conceptPass");
    const res = await jsonRes.json()

    return JSON.parse(res);
}

function showMessage(errMessage, color) {
    const e = document.getElementById('submit-message');
    e.style.color = color;
    e.style.backgroundColor = "white";
    e.textContent = errMessage;

    setTimeout(unshowMessage, 2000)
}

function unshowMessage() {
    const e = document.getElementById('submit-message');
    e.style.backgroundColor = "transparent";
    e.textContent = "";
}

document.addEventListener("DOMContentLoaded", async function () {
    const nodes = await getNodes()
    init(nodes, 1, 3);
    const form = document.getElementById("menu-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const start = Number(event.target.start.value);
        const end = Number(event.target.end.value);
        const ip = event.target.ip.value;
        const port = event.target.port.value;
        init(nodes, start, end);

        const res = await fetch('/sendRoad', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ start, end, ip, port })
        }).catch((err) => {
            showMessage(`Error: ${err.message}`, "red");
        })
        
        if(res != undefined) {
            showMessage("success!", "green");
        } else {
            showMessage("error!", "red");
        }
    });
})