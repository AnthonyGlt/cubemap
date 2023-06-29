var port = process.env.PORT || 8070;


var express = require('express');
const { dirname } = require('path');
var app = express();
var http = require('http').Server(app);

var io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));


http.listen(port, function () {
});





io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });


  socket.on('switchScene', function (msg) {
    console.log('switchScene: ' + msg);
    socket.broadcast.emit('switchScene', msg);
  });



});

