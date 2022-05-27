const express = require('express');

const path = require('path');

const app = express();

const staticRes = path.join(__dirname, '..', 'client');
app.use(express.static(staticRes));
app.get('/swport', (req, res) => res.send(appConfig.websocket.port));

module.exports = app;
