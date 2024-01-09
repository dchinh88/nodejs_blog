import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';

// const express = require('express')
// const morgan = require('morgan')
// const engine = require('express-handlebars')
// const path = require('path');

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//HTTP Logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));



//Routes init
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
