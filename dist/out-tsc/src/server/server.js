"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var database_1 = require("./database");
var currencyRouter_1 = require("./routes/currencyRouter");
var personRouter_1 = require("./routes/personRouter");
var hostname = 'localhost';
var port = 3000;
var server = express();
server.get('/api/', function (req, res, next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
// allow access from client server
server.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);
    // Pass to next layer of middleware
    next();
});
// initiate connection to db
var mysequelize = database_1.sequelize;
// add currencies route
server.use('/api/currencies', currencyRouter_1.currencies);
server.use('/api/people', personRouter_1.people);
server.listen(port, hostname, function () {
    // connect to the DB
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
//# sourceMappingURL=server.js.map