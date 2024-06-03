const express = require("express")
const app = express();
const errorMiddleware = require("./middleware/errors.js")
const cookieParser=require("cookie-parser")
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')



//Uso de constantes importadas
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

const productos=require("./routes/Products.js")
const usuarios = require("./routes/auth.js")
const ordenes=require("./routes/orders.js")

app.use('/api',productos)
app.use('/api',usuarios)
app.use('/api',ordenes)


module.exports=app
