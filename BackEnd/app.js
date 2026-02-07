const express = require('express')
const path = require('path')

const app = express();

app.use(express.json())

//Server frontend

app.use(express.static(path.joing(__dirname,'public')));

module.exports = app;