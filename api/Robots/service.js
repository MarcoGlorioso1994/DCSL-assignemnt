const db = require('../../helpers/db');
const readCSVtoJson = require('../../helpers/csv');
const getNewPrice = require('../../helpers/movement');

async function getAll() {
    return await db.Building.findAll();
}

async function getBuilding(id) {
    const building = await db.Building.findByPk(id);
    if (!building) throw 'Building not found';
    return building;
}

async function initSqlData() {
    let jsonArray = await readCSVtoJson()

    //Store only one time
    let entries = await getAll()
    if (entries.length == 0) {
        for (let el of jsonArray) {
            const building = new db.Building(el);
            //save user
            await building.save();
        }
    }

    return
}

async function getEstimatedPrice(lat, long) {
    return await getNewPrice(lat, long)
}

module.exports = {
    getEstimatedPrice,
    initSqlData
};