import app from '../../index'

const chai = require("chai")
const chaiHttp = require("chai-http")

chai.use(chaiHttp)
const should = chai.should();

describe("Votes", () => {
    describe("POST /api/v1/votes", () => {
        it("Should return status and user votes details", (done) => {
            chai.request(app)
                .post("/api/v1/votes")
                .send({
                    office: 1,
                    candidate: 1,
                    createdBy: 65
                })
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.equal(201);
                    res.type.should.equal("application/json");
                    res.body.should.be.a('object');
                    res.body.status.should.equal(201);
                    res.body.data[0].should.include.keys('office', 'candidate', 'voter');
                    done();
                })
        })
    })
})