require("dotenv").config({path: "./.env"})
const express = require("express");
const app = express();
const PORTKANAAM = 3030;



//logger

const logger = require("morgan");
app.use(logger("tiny"));

//routes
app.use("/", require("./routes/indexRouter"));


// Error

const ErrorHandler = require("./utils/ErrorHandler");
const { generatedErrors } = require("./middlewares/error");

app.all("*", (req, res, next)=>{
    next( new ErrorHandler(`Requested URL Not Found ${req.url}`, 404))
    
});

app.use(generatedErrors);




app.listen(process.env.PORTKANAAM, console.log(`server running on port ${process.env.PORTKANAAM}`));

