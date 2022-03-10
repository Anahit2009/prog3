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

matrix = generator(8, 15, 10, 8, 10, 15, 15);

io.sockets.emit('send matrix', matrix)

grassArr = [];
grassEaterArr = [];
predatorArr = [];
antArr = [];
lionArr = [];
stoneArr = []

Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Ant = require("./ant")
Lion = require("./lion")
Stone = require("./stone")



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


function game() {
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
        antArr[i].move();
    
    }
    for (var i in lionArr) {
        lionArr[i].mul();
        lionArr[i].eat();
    }
    io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)






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
    io.sockets.emit("send matrix", matrix);
}
function addGrass() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function addAnt() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
            var ant = new Ant(x, y)
            antArr.push(ant)
        }
    }
    io.sockets.emit("send matrix", matrix);
}



function killPred() {
    for (var i = 0; i < 60; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 3) {
            matrix[y][x] = 0
            grassEaterEaterArr[i].die();

        }
    }
    io.sockets.emit("send matrix", matrix);
}

function spawnGr() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                matrix[y][x] = 1
                grassArr.push(new Grass(x, y, 1))
            }
        }
    }
    io.sockets.emit("send matrix", matrix);
}

io.on('connection', function (socket) {
    ObjArt();
    socket.on("kill", kill);
    socket.on("add grass", addGrass);
    socket.on("add Ant", addAnt);
    socket.on('killPr', killPred);
    socket.on('spawnGr', spawnGr);
})



weath = "winter";

function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 4000);
