import jwt from "jsonwebtoken"
import usersModel from "../model/usersModel"
import bcrypt from "bcryptjs"

class AuthController{
    signup(req, res){
        const {firstname, lastname, othername, email, phoneNumber} = req.body;
        const unhashed_pass = req.body.password
        const password = bcrypt.hashSync(unhashed_pass, bcrypt.genSaltSync(8))
        const isAdmin = false
        const values = [firstname, lastname, othername, email, password, phoneNumber, isAdmin]

        const prom = usersModel.createUser(values)
        prom.then(rows => {
            if(rows){
                const token = jwt.sign({id: rows[0].id, email: rows[0].email}, 
                    process.env.SECRET,
                    {expiresIn: '12h'})
        
                res.status(201).send({
                    status: 201,
                    data:[{
                        token,
                        user: rows[0]
                    }]
                })
            }else{
                res.status(500).send({
                    status: 500,
                    error: "Something went wrong, cannot process your request. Pleae try again"
                })
            }

        }).catch(err => {
            console.log(err)
        })        
    }
}

const authController = new AuthController()
export default authController
