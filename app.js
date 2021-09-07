import express from "express"
import bodyParser from "body-parser"
import exphbs from "express-handlebars"
import nodemailer from "nodemailer"

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello');
});