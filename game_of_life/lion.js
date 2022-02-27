





let LivingCreature = require('./LivingCreature')
module.exports =class Lion extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 15;
        this.multiply = 0
        
    }

    
    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var newLion = new Lion(newX, newY);
            lionArr.push(newLion);
            this.multiply = 0;
        }
    }

    move() {
        this.energy--
        var emptyCells = super.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        var emptyCells1 = super.chooseCell(1)
        var newCell1 = emptyCells1[Math.floor(Math.random() * emptyCells1.length)]
        if (newCell && this.energy >= 0) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else if (newCell1 && this.energy >= 0) {
            var newX = newCell1[0]
            var newY = newCell1[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 1
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }

    eat() {
        var emptyCells = super.chooseCell(4) 
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        var emptyCells2 = super.chooseCell(2)
        var newCell2 = emptyCells2[Math.floor(Math.random() * emptyCells2.length)]
        var emptyCells3 = super.chooseCell(3)
        var newCell3 = emptyCells3[Math.floor(Math.random() * emptyCells3.length)]
       

        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in antArr) {
                if (newX == antArr[i].x && newY == antArr[i].y) {
                    antArr.splice(i, 1)
                    
                }
            }
        } else if (newCell2) {
            this.energy++
            var newX = newCell2[0]
            var newY = newCell2[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                   
                }
            }
        }if (newCell3) {
            this.energy++
            var newX = newCell3[0]
            var newY = newCell3[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                   
                }
            }
        } else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in lionArr) {
            if (this.x == lionArr[i].x && this.y == lionArr[i].y) {
                lionArr.splice(i, 1);
               
            }
        }
    }
}
