var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

function generator(matLen, gr, grEat, prd, ant, ln, st) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen)

        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < prd; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < ant; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < ln; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < st; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen)

        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    return matrix;
}

matrix = generator(50, 15, 20, 20, 20, 20, 5);

io.sockets.emit('send matrix', matrix)

grassArr = [];
grassEaterArr = [];
predatorArr = [];
antArr = [];
lionArr = [];
stoneArr = []

Grass = require("./Grass")
GrassEater = require("./GrassEater")
Predator = require("./Predator")
Ant = require("./Ant")
Lion = require("./Lion")
Stone = require("./Stone")



var x = 50

function rand(mini, maxi) {
    return Math.random() * (maxi - mini) + mini;
}
for (let y = 0; y < x; y++) {
    matrix[y] = []
    for (let z = 0; z < x; z++) {
        matrix[y][z] = Math.floor(rand(0, 5))

    }

}
io.sockets.emit("send matrix", matrix);


function ObjArt() {


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 1);
                grassEaterArr.push(gre);
            }
            else if (matrix[y][x] == 3) {
                var prd = new Predator(x, y, 1);
                predatorArr.push(prd);
            }
            else if (matrix[y][x] == 4) {
                var ant = new Ant(x, y, 1);
                antArr.push(ant);
            }
            else if (matrix[y][x] == 5) {
                var ln = new Lion(x, y, 1);
                lionArr.push(ln);
            }
            else if (matrix[y][x] == 6) {
                var st = new Stone(x, y, 1);
                stoneArr.push(st);
            }
        }
    }
    io.sockets.emit('send matrix', matrix)
}


function  game() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].mul();
        predatorArr[i].eat();
    }
    for (var i in antArr) {
        antArr[i].mul();
       
    }
    for (var i in lionArr) {
       lionArr[i].mul();
      lionArr[i].eat();
    }
    io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1500)





io.on('connection', function () {
    ObjArt()
})

function kill() {
    GrassArr = [];
GrassEaterArr = [];
PredatorArr = [];
AntArr = [];
LionArr = [];
StoneArr = []
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
}


