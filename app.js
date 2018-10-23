const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const logsController = require('./controllers/logsController.js');
const usersController = require('./controllers/usersController.js');
const winston = require('./winstonLogs/winston');


app.use(morgan('combined', { stream: winston.stream }));
//logs out logs on calls and saves to document

app.use(bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use(logsController);
app.use(usersController);


const PORT = process.env.PORT || 3003;  // can run in local port

app.get("/",(req,res) =>{
    console.log("responding to root");
    res.send("root working")
});

app.listen(PORT, () => {
    winston.info('Server is listening on 3003',  PORT);
    winston.info('api-rest is available on heroku_1982f1217375ac8',  process.env.PORT);
    console.log("Server is up and listening on: " + PORT)
});

module.exports = app;