const express = require('express');
// const bodyParser =require('body-parser');
const path = require('path');

const app = express();

const staticRes = path.join(__dirname, '..', 'client');
app.use(express.static(staticRes));
// app.use(bodyParser());
app.get('/swport', (req, res) => {
    res.status(200).send({ "port": appConfig.websocket.port });
});

module.exports = app;
