const express = require('express');
const router = express.Router();
const service = require('./service');

// validation 
const validateRequest = require('../../middleware/validate-request');
const schemas = require('../../middleware/schemas');

// routes
router.post('/', validateRequest(schemas.robot, "body"), executeRobot);
router.get('/results', robotsPositions);

// route functions

function executeRobot(req, res, next) {
    const { coordinates, path } = req.body
    let robot = service.initRobot(coordinates)
    service.moveRobot(robot, path)
    res.json({ code: 200, message: "Successfully robot creation" })
}

function robotsPositions(req, res, next) {
    let output = service.robotsPositions()
    res.json({ code: 200, output: output })
}

module.exports = router;