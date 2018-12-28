// app.js
(function(){

'use strict';

const serverless = require('serverless-http');
const express = require('express');
const config = require('./config');
const logger = require('./logger');
/*

const logger = new Logger().getInstance();
*/
const app = express();

var Memcached = require('memcached');
var memcache1 = new Memcached(appConfig.memcached[0]);

//add a value into the memcached
app.get('/add', function (req, res) {
    memcache1.add("test1","value1", 300, (err, result) => {
        if (err) {
            console.log(err);
            res.send(`Hello World!!! ${err}`);
        }
        else {
            logger.debug(result);
            res.send(`Hello World!!! you have added a value ${result}`);
        }
    });
});

//get a value back from memcached
app.get('/get', function (req, res) {
    memcache1.get("test1", (err, result) => {
        if (err) {
            logger.debug(err);
            res.send(`Hello World! ${err}`);
        }
        else {
            logger.debug(result);
            res.send(`Hello World! your value is ${result}`);
        }
    });
});

app.get('/', function (req, res) {
    let jsonstring = JSON.stringify(global.appConfig);    
    logger.info('test logger');
    res.send(`${jsonstring})`);
});

module.exports.handler = serverless(app);

}());