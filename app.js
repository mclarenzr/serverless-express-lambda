// app.js
(function(){

'use strict';

const serverless = require('serverless-http');
const express = require('express');
const config = require('./config');
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
        console.log("memcache callback blt");
        console.log(result);
        res.send(`Hello World!!! ${result}`);
    }

    });
});

//get a value back from memcached
app.get('/get', function (req, res) {
    memcache1.get("test1", (err, result) => {
      if (err) {
          console.log(err);
          res.send(`Hello World!!!!!!!! ${err}`);
      }
      else {
          console.log("memcache callback blt");
        console.log(result);
        res.send(`Hello World!!!!!!!! ${result}`);
      }
    })

});

app.get('/', function (req, res) {
    let jsonstring = JSON.stringify(global.appConfig);
    res.send(`${jsonstring})`);

});

module.exports.handler = serverless(app);

}());