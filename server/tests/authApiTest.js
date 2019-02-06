import chai from 'chai'
import chaiHttp from 'chai-http'
import app from "../../index"

chai.use(chaiHttp)
const should = chai.should()

describe("Auth", () => {
    describe("POST api/v1/auth/signup", () => {
        it("should return status 201, token and user data", (done) => {
            chai.request(app)
                .post("/api/v1/auth/signup")
                .send({
                    firstname: 'John',
                    lastname: 'Doe',
                    othername: '',
                    email: 'user@example.com',
                    password: 'password',
                    phoneNumber: '08012345678'
                })
                .end((err, res) => {
                    should.not.exist(err)
                    res.status.should.equal(201)
                    res.type.should.equal('application/json')
                    res.body.should.be.a('object');
                    res.body.status.should.equal(201);
                    res.body.data[0].should.include.keys('token', 'user');
                    done();
                })
        })
    })

    describe("POST api/v1/auth/login", () => {
        it("should return status 201, token and user data", (done) => {
            chai.request(app)
                .post("/api/v1/auth/login")
                .send({
                    email: 'user@example.com',
                    password: 'password'
                })
                .end((err, res) => {
                    should.not.exist(err)
                    res.status.should.equal(200)
                    res.type.should.equal('application/json')
                    res.body.should.be.a('object');
                    res.body.status.should.equal(200);
                    res.body.data[0].should.include.keys('token', 'user');
                    done();
                })
        })
    })
})
