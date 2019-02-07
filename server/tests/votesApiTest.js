import app from '../../index'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()

const chai = require("chai")
const chaiHttp = require("chai-http")

chai.use(chaiHttp)
const should = chai.should();

const token = jwt.sign({id: 1, email: 'admin@politico.com', is_admin: true}, 
                    process.env.SECRET,
                    {expiresIn: '12h'})

describe("Votes", () => {
    describe("POST /api/v1/votes", () => {
        it("Should return status and user votes details", (done) => {
            chai.request(app)
                .post("/api/v1/votes")
                .set("x-access-token", token)
                .send({
                    office: 1,
                    candidate: 1
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