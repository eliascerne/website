const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const port = 3000

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello');
});

app.listen(port, () => console.log('Server started at port: ', port));