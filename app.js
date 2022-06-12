import path from 'path';
import fs from 'fs';
import net from 'net';
import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;

const dataset = fs.readFileSync('./dataset.json', 'utf-8', (err, data) => {
    return data.toString();
})

app.engine('.html', ejs.__express);
app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/css', express.static(path.join(__dirname, 'static')));
app.use('/js', express.static(path.join(__dirname, 'static')));
app.set("view engine", "html");

app.get('/', (req, res) => {
    res.render("home.html");
});

app.get('/concept', (req, res) => {
    res.render("concept.html")
})

app.get('/map', (req, res) => {
    res.render('map.html');
})

app.get("/conceptPass", (req, res) => {
    res.status(200).json(dataset);
})

app.post('/sendRoad', (req, res) => {
    const { end, ip, port } = req.body;
    console.log(req.body);

    const client = new net.Socket();

    client.connect(8888, "10.10.10.29", () => {
        console.log("Connecting!");
    })

    client.on('error', (err) => {
        console.log(err);
    })

    client.on("connect", () => {
        console.log("Connected!");
        client.write((end-2).toString());
        console.log("Data sent!");
    })

    client.on("end", () => {
        console.log("connection ended");
    })

    res.send("Response!");
})

app.listen(PORT, () => {
    console.log(`Listening to https://localhost:${PORT}`);
})