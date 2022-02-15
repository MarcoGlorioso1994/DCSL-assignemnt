const express = require('express');
const router = express.Router();
const service = require('./service');

// validation 
const validateRequest = require('../../middleware/validate-request');
const schemas = require('../../middleware/schemas');

// routes
router.post('/init', validateRequest(schemas.planet, "body"), initPlanet);
router.post('/fastDiscovery', validateRequest(schemas.instructions, "body"), fastDiscovery)

// route functions
function initPlanet(req, res, next) {
    const { upperBounds } = req.body
    service.initPlanet(upperBounds)
    res.json({ code: 200, message: "Successfully planet creation" })
}

function fastDiscovery(req, res, next) {
    const { instructions } = req.body
    service.fastDiscovery(instructions)
    res.json({ code: 200, message: "Successfully robot creation" })
}

module.exports = router;