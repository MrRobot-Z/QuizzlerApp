/**
 * Created by M.Zaher on 7/26/2018.
 */

var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + "/../");

app.use(express.static(rootPath + "/app"));

app.listen(8000);

console.log("Running ... Listening on port 8000 ...");
