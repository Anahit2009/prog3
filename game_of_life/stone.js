
let LivingCreature = require('./LivingCreature')
module.exports =class Stone extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.multiply = 0
        
    }
}

