var turf = require("@turf/turf");
var readCSVtoJson = require('./csv')

var planet
var robots = []

async function initInterpolationModel() {

    if (!predictions) {
        //script to create the predictions
        let features = []
        let jsonArray = await readCSVtoJson()

        for (let el of jsonArray) {
            let price = el["Price/m^2"]
            let geom = el['Coordinates']
            let obj = { "type": "Feature", "properties": { price }, "geometry": geom }
            features.push(obj)
        }

        //featureCollection
        var points = {
            features: features,
            type: 'FeatureCollection'
        };

        var options = { gridType: 'points', property: 'price', units: 'kilometers' };
        //every 100 meters. Acceptable value for buildings
        var results = turf.interpolate(points, 0.05, options);

        predictions = results.features
        console.log("Initialized interpolation predictions")
    }
}

async function getNewPrice(lat, long) {
    let bestMatch = await getBestPrediction(lat, long)
    let price = bestMatch.properties.price
    return Math.round(price * 100) / 100
}

async function getBestPrediction(lat, long) {
    let result = {}
    let min = Number.MAX_VALUE
    let from = turf.point([lat, long]);
    let options = { units: 'kilometers' };

    await initInterpolationModel()

    for (let to of predictions) {
        let distance = turf.distance(from, to, options)
        if (min > distance) {
            min = distance
            result = to
        }
    }

    return result
}

module.exports = getNewPrice

