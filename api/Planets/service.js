const Planet = require("./planet");

var planet

function getPlanet() {
    if (planet)
        return planet
    else
        throw new Error("Planet not created")
}

function initPlanet(upperBounds) {
    if (!planet) {
        var upperBoundsArr = upperBounds.split(' ');
        let upperX = parseInt(upperBoundsArr[0])
        let upperY = parseInt(upperBoundsArr[1])

        //validation range
        if (upperX < 0 || upperX > 50)
            throw { status: 400, message: 'coordinate x out of range' }

        //Validation range
        if (upperY < 0 || upperY > 50)
            throw { status: 400, message: 'coordinate y out of range' }

        planet = new Planet(upperX, upperY)
    }
}

function fastDiscovery(instructions) {

}

module.exports = {
    initPlanet,
    fastDiscovery,
    getPlanet
};