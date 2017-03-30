/**
 * Created by catzillaorz on 2017/3/30.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.send("Welcome Li Zi Yan 's Realtime Server");
});


http.listen(3002, function(){
    console.log('listening on *:3002');
});
