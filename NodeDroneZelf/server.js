var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var fs = require('fs');
var io = require('socket.io')(http);
var server = require('http').createServer(app);
var arDrone = require('ar-drone');
var DroneClient = arDrone.createClient();

var turnSpeed = 0.5;
var movementSpeed = 1;

require('ar-drone-png-stream')(DroneClient, {port: 12356})

app.use(express.static(__dirname + "/public"))
//require("dronestream").listen(server);
//server.listen(8080);

//app.listen(80);

//function handler(req, res) {
//    fs.readFile(__dirname + "/index.html",
//        function (err, data) {
//        if (err) {
//            res.writeHead(200);
//            res.end(data);
//        }

//    }
//    );
//}

io.on('connection', function (socket) {
    console.log("Connected with site");
    
    socket.on("message", function (data) {
        
        console.log(data);
        switch (data) {
            case "takeoff":
                DroneClient.takeoff();
                //takeoff with drone
                break;
            case "land":
                DroneClient.land();
                //takeoff with drone
                break;
            case "turnleft":
                DroneClient.counterClockwise(turnSpeed);
                //takeoff with drone
                break;
            case "turnright":
                DroneClient.clockwise(turnSpeed);
                //takeoff with drone
                break;
            case "goleft":
                DroneClient.left(movementSpeed);
                //takeoff with drone
                break;
            case "goright":
                DroneClient.right(movementSpeed);
                //takeoff with drone
                break;
            case "goforward":
                DroneClient.front(movementSpeed);
                //takeoff with drone
                break;
            case "gobackward":
                DroneClient.back(movementSpeed);
                //takeoff with drone
                break;
            case "goup":
                DroneClient.up(movementSpeed);
                //takeoff with drone
                break;
            case "godown":
                DroneClient.down(movementSpeed);
                //takeoff with drone
                break;
            case "stop":
                DroneClient.stop();
                break;
            default:
                DroneClient.stop();
        }
        
        
    });
    
    socket.on("disconnect", function () {
        console.log("Disconnected with site");
    });
})

http.listen(3000, function () {
    console.log("listening on *:3000");
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index - Copy.html'));
    //__dirname : It will resolve to your project folder
})