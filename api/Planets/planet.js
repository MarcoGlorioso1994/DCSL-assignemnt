class Planet {
    constructor (upperX, upperY) {
        this.upperX = upperX
        this.upperY = upperY
        this.offPoints = []
    }

    addOffPosition(x, y) {
        let arr = [x, y]
        this.offPoints.push(arr)
    }
}

module.exports = Planet;