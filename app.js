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

app.get('/map', (req, res) => {
    res.render('map.html');
})

app.get("/dataset", (req, res) => {
    res.status(200).json(dataset);
})

app.get("/conceptPass", (req, res) => {
    res.status(200).json(dataset);
})

app.post('/sendRoad', (req, res) => {
    const { end, ip, port } = req.body;
    console.log(req.body);
    const message = (end-2).toString();
    
    // const client = net.createConnection(port, ip);
    const client = new net.Socket();
    client.connect(port, ip, () => {
        console.log("Connecting to the TCP server!");
    })
    
    client.on('connect', function () {
            console.log("Client connected!");
            client.write(message);
            console.log("Data sent!");
            client.end();
        })
    
    client.on('error', function (err) {
            console.log(err);
        })
    client.on("end", function () {
            console.log("Connection ended!");
        })

    res.status(201).json({"message": "success"});
    res.end();
})

app.listen(PORT, () => {
    console.log(`Listening to https://localhost:${PORT}`);
})