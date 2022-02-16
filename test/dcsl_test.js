var should = require('chai').should()
expect = require('chai').expect;
supertest = require('supertest')
api = supertest('http://127.0.0.1:4000')

var { validatePostPlanet, validatePostRobot } = require('./validator')

describe('DCSL Assignment API', function () {

    let planet
    let robot1
    let robot2
    let robot3

    before(async () => {
        planet = { "upperBounds": "5 3" }
        robot1 = { "coordinates": "1 1 E", "path": "RFRFRFRF" }
        robot2 = { "coordinates": "3 2 N", "path": "FRRFLLFFRRFLL" }
        robot3 = { "coordinates": "0 3 W", "path": "LLFFFRFLFL" }
    })

    //Read the origin value
    it('Post Planet 1: should return a 200 response', function (done) {
        api.post(`/planets`)
            .set('Accept', 'application/json')
            .send(planet)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                validatePostPlanet(res.body)
                done()
            })
    })

    it('Post Robot 1: should return a 200 response', function (done) {
        api.post(`/robots`)
            .set('Accept', 'application/json')
            .send(robot1)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                validatePostRobot(res.body)
                done()
            })
    })

    it('Post Robot 2: should return a 200 response', function (done) {
        api.post(`/robots`)
            .set('Accept', 'application/json')
            .send(robot2)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                validatePostRobot(res.body)
                done()
            })
    })

    it('Post Robot 3: should return a 200 response', function (done) {
        api.post(`/robots`)
            .set('Accept', 'application/json')
            .send(robot3)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                validatePostRobot(res.body)
                done()
            })
    })
})

