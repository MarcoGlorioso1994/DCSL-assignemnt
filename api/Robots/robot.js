
var servicePlanet = require('../Planets/service')

const orientations = ['N', 'E', 'S', 'W']

class Robot {
    constructor (x, y, orientation) {
        this.x = x
        this.y = y
        this.orientation = orientation
        this.status = 'ACTIVE'
        this.planet = servicePlanet.getPlanet()
    }

    executeComand(comand) {
        switch (comand) {
            case "L":
                this.turnLeft()
                break
            case "R":
                this.turnRight()
                break
            case "F":
                this.forward()
                break
            default:
                return new Error("Unknow command")
        }
    }

    turnRight() {
        let current = this.orientation
        let idx = orientations.indexOf(current)
        if (idx === orientations.length - 1)
            this.orientation = orientations[0]
        else
            this.orientation = orientations[idx + 1]
    }

    turnLeft() {
        let current = this.orientation
        let idx = orientations.indexOf(current)
        if (idx === 0)
            this.orientation = orientations[orientations.length - 1]
        else
            this.orientation = orientations[idx - 1]
    }

    forward() {
        if (this.status !== 'LOST') {
            switch (this.orientation) {
                case "N":
                    this.moveNorth()
                    break
                case "E":
                    this.moveEast()
                    break
                case "S":
                    this.moveSouth()
                    break
                case "W":
                    this.moveWest()
                    break
                default:
                    return new Error("Unknown forward direction")
            }
        }
    }

    moveNorth() {
        let newY = this.y + 1
        if (newY <= this.planet.upperY)
            this.y += 1
        else {
            this.invalidateStatusAndScentRobot()
        }
    }

    moveEast() {
        let newX = this.x + 1
        if (newX <= this.planet.upperX)
            this.x += 1
        else {
            this.invalidateStatusAndScentRobot()
        }
    }

    moveSouth() {
        let newY = this.y - 1
        if (newY >= 0)
            this.y -= 1
        else {
            this.invalidateStatusAndScentRobot()
        }
    }

    moveWest() {
        let newX = this.x - 1
        if (newX >= 0)
            this.x -= 1
        else {
            this.invalidateStatusAndScentRobot()
        }
    }

    invalidateStatusAndScentRobot() {
        if (!this.planet.offPoints.includes([this.x, this.y])) {
            this.planet.addOffPosition([this.x, this.y])
            this.status = "LOST"
        }
    }

}

module.exports = Robot