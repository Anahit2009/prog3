
var side = 15;


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
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
}


function draw() {

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
                fill("brown");
                rect(x * side, y * side, side, side);
             }else if (matrix[y][x] == 5) {
                fill(random(255),random(255),random(255));
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }
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
    
}