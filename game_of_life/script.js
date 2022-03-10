var socket = io();
var side = 25;

weath = "spring"
function setup() {
    frameRate(5);
    createCanvas(30 * side, 30 * side);
    background('#acacac');

}


function nkarel(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[x][y]
            if (obj == 1) {
                if (weath == "summer") {
                    fill("green");
                } else if (weath == "autumn") {
                    fill("#333300");
                } else if (weath == "winter") {
                    fill("white");
                } else if (weath == "spring") {
                    fill("#4dffa6");
                }
            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            else if (obj == 2) {

                fill("#ffff00");


            }
            else if (obj == 3) {
               
                    fill("#476b6b");
                

            }
            else if (obj == 4) {
                
                    fill("#4d2600");
                
            }


            else if (obj == 5) {
                
                    fill("#990000");
                
            }


            else if (obj == 6) {

                
                    fill("#000000");
                
            }
            rect(x * side, y * side, side, side);


        }
    }
}
socket.on('send matrix', nkarel)



function kill() {

    socket.emit("kill")
}

function addGrass() {
    socket.emit("add grass")
}
function addAnt() {
    socket.emit("add Ant")
}

function killPr() {
    socket.emit('killPr');
}
function spawnGr() {
    socket.emit('spawnGr');
}