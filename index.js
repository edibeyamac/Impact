//js
const fs = require('fs');
const express = require('express');
const app = express();
var path = require('path');
const PORT = process.env.PORT || 5500;
app.listen(PORT, console.log("Server don start for port: " + PORT))


const homeController = require('./routes/index.js')


app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', homeController );