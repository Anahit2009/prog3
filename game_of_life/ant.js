let LivingCreature = require('./LivingCreature')
module.exports = class Ant extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 2;
        this.multiply = 0

    }



    


    mul() {
        this.multiply++;
        
        let emptyCells = super.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    
        if (this.multiply >= 8 && newCell) {
            let newAnt = new Ant(newCell[0], newCell[1], this.index);
            antArr.push(newAnt);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
    move() {
        this.energy -= 1
        var emptyCells = super.chooseCell(1)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        console.log(newCell);
        if (newCell && this.energy >= 0) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }



    die() {
        matrix[this.y][this.x] = 0;
        for (var i in antArr) {
            if (this.x == antArr[i].x && this.y == antArr[i].y) {
                antArr.splice(i, 1);

            }
        }
    }

}

   