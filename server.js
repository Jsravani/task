var express = require('express');
var app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var morgan = require('morgan');
app.use(morgan('dev'));

var cors = require('cors');
app.use(cors());

var config = require('./config/database.config');
var mongoose = require('mongoose');

mongoose.connect(config.url)
.then(() => {
    console.log("connection established")
}).catch(() => {
    console.log("error in connection")
    process.exit();
})



app.listen(2001,() => console.log("server started on port 2001"));

var calenderRouter = require('./app/routes/routes.js');
app.use(calenderRouter);
