require("dotenv").config({path: "./.env"})
const express = require("express");
const app = express();
const PORTKANAAM = 3030;



//logger

const logger = require("morgan");
app.use(logger("tiny"));


//routes
app.use("/", require("./routes/indexRouter"));


app.listen(process.env.PORTKANAAM, console.log(`server running on port ${process.env.PORTKANAAM}`));

