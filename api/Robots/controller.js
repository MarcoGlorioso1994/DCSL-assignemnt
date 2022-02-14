const express = require('express');
const router = express.Router();
const service = require('./service');

// validation 
const validateRequest = require('../../middleware/validate-request');
const schemas = require('../../middleware/schemas');

// routes
router.post('/robots', validateRequest(schemas.coordinates, "body"), initRobot());
router.get('/robots', getCurrentStatus());

// route functions

function initRobot(req, res, next) {
    const { coordinates, path } = req.body
    service.initRobot(coordinates)
    service.moveRobot(path)
        .then(res.json({ code: 200, message: "Successfully robot creation" }))
        .catch(next);
}

function getCurrentStatus(req, res, next) {
    service.getCurrentStatus()
        .then(output => res.json({ code: 200, output: output }))
        .catch(next);
}

module.exports = router;