const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const BookRoute = require("./Routes/Book")

mongoose.connect(process.env.DATABASE).then(()=>{console.log("Connected to database")}).catch(err=>{console.log(err)});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(morgan("dev"));
app.use("/image", express.static("image"));
app.use("/api",BookRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Start Server Port : ${process.env.PORT}`);
});