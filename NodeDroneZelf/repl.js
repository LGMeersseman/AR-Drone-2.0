﻿var arDrone = require('ar-drone');
var client = arDrone.createClient();
client.disableEmergency();
client.createRepl();







//var pngStream = client.getPngStream();

//var lastPng;

//pngStream
//.on('error', console.log)
//.on('data', function (pngBuffer){
//    lastPng = pngBuffer;
//})

//var server = http.createServer(function (req, res) {
//    if (!lastPng) {
//        res.writeHead(503);
//        res.end('Did not receive any png data yet.');
//        return;
//    }
    
//    res.writeHead(200, { 'Content-Type': 'image/png' });
//    res.end(lastPng);
    
//});

//server.listen(8080, function () {
//    console.log('Serving latest png on port 8080 ...');

//});