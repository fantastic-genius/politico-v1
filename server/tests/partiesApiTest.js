import app from '../../index'
import db from "../db/db"

const chai = require("chai")
const chaiHttp = require("chai-http")


chai.use(chaiHttp)

const should = chai.should();
const expect = chai.expect;

describe("Parties", () => {
    describe("POST /api/v1/parties", () => {
        it('should return newly created party data', (done) => {
            chai.request(app)
                .post("/api/v1/parties")
                .send({
                    name : "peoples democratic party",
                    hqAddress : "Wuse rd, Abuja",
                    logoUrl : "http://apc.com/logo",
                })
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.equal(201);
                    res.type.should.equal("application/json");
                    res.body.should.be.a('object');
                    res.body.status.should.equal(201);
                    res.body.data[0].should.include.keys('id', 'name');
                    done();
                })
        })
    })


    describe("GET /api/v1/parties", () => {
        it('should return all the existing party data', (done) => {
            chai.request(app)
                .get("/api/v1/parties")
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.equal(200);
                    res.type.should.equal("application/json");
                    res.body.should.be.a('object');
                    res.body.status.should.equal(200);
                    res.body.data.length.should.equal(db.length);
                    res.body.data[0].should.include.keys('id', 'name', 'logoUrl');
                    done();
                })
        })
    })

    describe("GET /api/v1/parties/2", () => {
        it('should return the data of the party requested', (done) => {
            chai.request(app)
                .get("/api/v1/parties/2")
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.equal(200);
                    res.type.should.equal("application/json");
                    res.body.should.be.a('object');
                    res.body.status.should.equal(200);
                    res.body.data.length.should.equal(1);
                    res.body.data[0].should.include.keys('id', 'name', 'logoUrl');
                    done();
                })
        })
    })
})
