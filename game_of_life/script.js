var socket = io();
var side = 25;


function setup() {
    frameRate(5);
    createCanvas(30 * side, 30 * side);
    background('#acacac');
    
}


function nkarel(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 3) {
                fill("white");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 4) {
                fill("aqua");
                rect(x * side, y * side, side, side);
             }else if (matrix[y][x] == 5) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }

}

socket.on('send matrix', nkarel)

function kill() {
    
    socket.emit("kill")
}
function kill(){
    socket.emit('killAll');
    }
    function addGrass() {
        socket.emit("add grass")
    }