const path = require('path');
const express = require('express');

const app = express();
const PORT = 5000;

app.engine('.html', require('ejs').__express);
app.use(express.static("static"));
app.use('/css', express.static(path.join(__dirname, 'static')));
app.use('/js', express.static(path.join(__dirname, 'static')));
app.set("view engine", "html");

app.get('/', (req, res) => {
    res.render("map.html");
});

app.listen(PORT, () => {
    console.log(`Listening to https://localhost:${PORT}`)
})