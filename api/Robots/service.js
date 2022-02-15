var Robot = require('./robot')

var robots = new Array()

function initRobot(coordinates) {
    var coordinatesArr = coordinates.split(' ');

    let x = parseInt(coordinatesArr[0])
    let y = parseInt(coordinatesArr[1])
    let orientation = coordinatesArr[2]

    //validation range
    if (x < 0 || x > 50)
        throw { status: 400, message: 'coordinate x out of range' }

    //Validation range
    if (y < 0 || y > 50)
        throw { status: 400, message: 'coordinate y out of range' }

    //validation value
    if (!['N', 'E', 'S', 'W'].includes(orientation))
        throw { status: 400, message: 'Unknown orientation value' }

    var rb = new Robot(x, y, orientation)
    robots.push(rb)
    return rb
}

function moveRobot(robot, path) {
    for (let cmd of path)
        robot.executeComand(cmd)
}

function robotsPositions() {
    var output = ""
    for (let rb of robots) {
        output += `${rb.x} ${rb.y} ${rb.orientation}`
        if (rb.status === 'LOST')
            output += " LOST\n"
        else
            output += "\n"
    }
    console.log(output)
    return output
}

module.exports = {
    initRobot,
    moveRobot,
    robotsPositions
};