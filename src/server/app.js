const express = require('express');

const path = require('path');

const app = express();

const staticRes = path.join(__dirname, '..', 'client');
app.use(express.static(staticRes));

module.exports = app;
