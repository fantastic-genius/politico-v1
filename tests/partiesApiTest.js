import app from '../index'

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
})
