const { expect } = require("chai");

function validatePostPlanet(res) {
    expect(res).to.have.property('code')
    expect(res.code).to.equal(200)
    expect(res).to.have.property('message')
    expect(res.message).to.be.a('string');
    expect(res.message).to.equal('Successfully planet creation')
}

function validatePostRobot(res) {
    expect(res).to.have.property('code')
    expect(res.code).to.equal(200)
    expect(res).to.have.property('message')
    expect(res.message).to.be.a('string');
    expect(res.message).to.equal('Successfully robot creation')
}

module.exports = {
    validatePostPlanet,
    validatePostRobot
}