const express = require('express');
const router = express.Router();
const service = require('./service');

// validation 
const validateRequest = require('../../middleware/validate-request');
const schemas = require('../../middleware/schemas');

// routes
router.post('/', validateRequest(schemas.planet, "body"), initPlanet);

// route functions
function initPlanet(req, res, next) {
    const { upperBounds } = req.body
    service.initPlanet(upperBounds)
    res.json({ code: 200, message: "Successfully planet creation" })
}

module.exports = router;