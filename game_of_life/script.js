var socket = io();
var side = 25;

weath = "spring"
function setup() {
    frameRate(5);
    createCanvas(30 * side, 30 * side);
    background('#acacac');

}


function nkarel(matrix) {
    console.log(matrix);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[x][y]
            if (obj == 1) {
                if (weath == "summer") {
                    fill("green");
                } else if (weath == "autumn") {
                    fill("#cc6600");
                } else if (weath == "winter") {
                    fill("#e6f9ff");
                } else if (weath == "spring") {
                    fill("#00ff55");
                }
            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            
            else if (obj == 2) {
                if (weath == "summer") {
                    fill("#ffff00");
                } else if (weath == "autumn") {
                    fill("#ffcc00");
                } else if (weath == "winter") {
                    fill("#fff5cc");
                } else if (weath == "spring") {
                    fill("#ffff1a");
                }
                
                
            }
            else if (obj == 3) {
                if (weath == "summer") {
                    fill("#476b6b");
                } else if (weath == "autumn") {
                    fill("#334d4d");
                } else if (weath == "winter") {
                    fill("#e0ebeb");
                } else if (weath == "spring") {
                    fill("#334d4d");
                }
                
            }
            else if (obj == 4) {
                if (weath == "summer") {
                    fill("#4d2600");
                } else if (weath == "autumn") {
                    fill("#b35900");
                } else if (weath == "winter") {
                    fill("#fff2e6");
                } else if (weath == "spring") {
                    fill("#cc6600");
                }
            }
            
            
            else if (obj == 5) {
                if (weath == "summer") {
                    fill("#990000");
                } else if (weath == "autumn") {
                    fill("#ff1a1a");
                } else if (weath == "winter") {
                    fill("#ff4d4d");
                } else if (weath == "spring") {
                    fill("#660000");
                }
                
            }
            
            
            else if (obj == 6) {
                
                if (weath == "summer") {
                    fill("#000000");
                } else if (weath == "autumn") {
                    fill("#000000");
                } else if (weath == "winter") {
                    fill("#ffffff");
                } else if (weath == "spring") {
                    fill("#000000");
                }
            }
            rect(x * side, y * side, side, side);


    }
}
}
socket.on('send matrix',nkarel)



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
function spawnGr(){
    socket.emit('spawnGr');
}