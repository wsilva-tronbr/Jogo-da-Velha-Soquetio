const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let ids = []

io.on('connection', (socket) => {
    ids.push(socket.id)
    io.emit("ids", ids);
   // io.emit("jogo", jogo);

    socket.on('disconnect', () => {
        ids.splice(ids.indexOf(socket.id), 1)
        io.emit("ids", ids);
    });

    socket.on('msg', (msg) => {
        io.emit("jogo", msg);
    });
});

http.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});