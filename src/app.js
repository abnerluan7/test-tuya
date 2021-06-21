const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Rotas
const index = require('./routes/index');
const tuyaDeviceRouter = require('./routes/tuyaDeviceRouter');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/tuyaDevice', tuyaDeviceRouter);

module.exports = app;