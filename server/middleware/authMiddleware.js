import Helper from "../helper/helper"
import usersModel from "../model/usersModel"

class AuthMiddleware{
    signupMiddleware(req, res, next){
        if(!req.body.firstname || !(req.body.firstname).trim()){
            return res.status(400).send({
                status: 400,
                error: "Firstname not provided"
            })
        }else if(!req.body.lastname || !(req.body.lastname).trim()){
            return  res.status(400).send({
                status: 400,
                error: "Lastname not provided"
            })
        }else if(!req.body.email || !(req.body.email).trim()){
            return res.status(400).send({
                status: 400,
                error: "Email not provided"
            })
        }else if(!req.body.password || !(req.body.password).trim()){
            return  res.status(400).send({
                status: 400,
                error: "Password not provided"
            })
        }else if(!req.body.phoneNumber || !(req.body.phoneNumber).trim()){
            return res.status(400).send({
                status: 400,
                error: "Phone Number not provided"
            })
        }else if(!isNaN(parseInt(req.body.firstname))){
            return res.status(400).send({
                status: 400,
                error: "Firstname contains an integer instead of a string" 
            })
        }else if(!isNaN(parseInt(req.body.lastname))){
            return res.status(400).send({
                status: 400,
                error: "Lastname contains an integer instead of a string" 
            })
        }else if(!isNaN(parseInt(req.body.othername))){
            return res.status(400).send({
                status: 400,
                error: "Othername contains an integer instead of a string" 
            })
        }else if(!isNaN(Number(req.body.email))){
            return res.status(400).send({
                status: 400,
                error: "Email contains an integer instead of a string" 
            })
        }else if(!Helper.isValidEmail(req.body.email)){
            return res.status(400).send({
                status: 400,
                error: "Email provided not a vaild email" 
            })
        }

        let emailExist = false
        const prom = usersModel.selectAllUsers()
        prom.then(rows => {
                rows.map(row => {
                    if(row.email == req.body.email){
                        return res.status(400).send({
                            status: 400,
                            error: "Email provided already exist" 
                        })
                    }
                })
                return next()
            }).catch(error => {
                console.log(error)
            })

        // if(emailExist === false){
        //     next()
        // }
        
    }

    loginMiddleware(req, res, next){
        if(!req.body.email || !(req.body.email).trim()){
            return res.status(400).send({
                status: 400,
                error: "Email not provided"
            })
        }else if(!req.body.password || !(req.body.password).trim()){
            return  res.status(400).send({
                status: 400,
                error: "Password not provided"
            })
        }else if(!isNaN(Number(req.body.email))){
            return res.status(400).send({
                status: 400,
                error: "Email contains an integer instead of a string" 
            })
        }else if(!Helper.isValidEmail(req.body.email)){
            return res.status(400).send({
                status: 400,
                error: "Email provided not a vaild email" 
            })
        }

        next()
    }
}

const authMiddleware = new AuthMiddleware()
export default authMiddleware
