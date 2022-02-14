

module.exports = Planet;

class Planet {
    constructor (lowBound, highBound) {
        this.surface = this.initSurface(lowBound, highBound);
    }

    initSurface(nRow, nColumn) {
        var matrix = [];
        for (var i = 0; i < nRow; i++) {
            matrix[i] = [];
            for (var j = 0; j < nColumn; j++) {
                matrix[i][j] = undefined;
            }
        }

        return matrix
    }

    setOffPosition(x, y) {
        this.surface[x][y] = "X"
    }

}