const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.json({data: 'pong' });
});

app.get('/', function (req, res) {
    res.sendStatus(200)
});

app.listen(process.env.PORT || 8080);