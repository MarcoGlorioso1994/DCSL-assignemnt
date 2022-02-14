

module.exports = Robot;

class Robot {
    constructor (x, y, orientation) {
        this.x = x
        this.y = y
        this.orientation = orientation
        this.status = 'ACTIVE'
    }

    executeComand(comand) {
        switch (comand) {
            case "L":
                this.moveLeft()
                break
            case "R":
                this.moveRight()
                break
            case "F":
                this.forward()
                break
            default:
                return new Error("Unknow command")
        }
    }

    moveLeft() {
        let orientations = ['N', 'E', 'S', 'W']
        let current = this.orientation
        let idx = orientations.indexOf(current)
        if (idx === orientations.length - 1)
            this.orientation = orientations[0]
        else
            this.orientation = orientations[idx + 1]
    }

    moveRight() {
        let orientations = ['N', 'E', 'S', 'W']
        let current = this.orientation
        let idx = orientations.indexOf(current)
        if (idx === 0)
            this.orientation = orientations[orientations.length - 1]
        else
            this.orientation = orientations[idx - 1]
    }

    forward() {
        switch (this.orientation) {
            case "N":
                this.y += 1
                break
            case "E":
                this.x += 1
                break
            case "S":
                this.y -= 1
                break
            case "W":
                this.x -= 1
                break
            default:
                return new Error("Unknow forward action")
        }
    }

    setStatus(status) {
        this.status = status
    }
}