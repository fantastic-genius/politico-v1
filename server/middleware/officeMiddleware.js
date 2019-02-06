import {offices} from "../db/db"
import usersModel from "../model/usersModel"
import officesModel from "../model/officesModel"
import partiesModel from "../model/partiesModel"
class OfficeMiddleware{
    createOfficeMiddleware(req, res, next){
        if(!req.body.type || !(req.body.type).trim()){
            return res.status(400).send({
                status: 400,
                error: "Office type not included in the data posted" 
            })
        }else if(!req.body.name || !(req.body.name).trim()){
            return res.status(400).send({
                status: 400,
                error: "Office name not included in the data posted" 
            })
        }else if(!isNaN(parseInt(req.body.type))){
            return res.status(400).send({
                status: 400,
                error: "Office type contains an integer instead of a string" 
            })
        }else if(!isNaN(parseInt(req.body.name))){
            return res.status(400).send({
                status: 400,
                error: "Office name contains an integer instead of a string" 
            })
        }

        offices.map(office => {
            if(office.name === req.body.name){
                return res.status(412).send({
                    status: 412,
                    error: `${req.body.name} already existed` 
                })
            }
        })

        next();
    }

    createCandidateMiddleware(req, res, next){
        if(!req.body.office){
            return res.status(400).send({
                status: 400,
                error: "Political office not provided"
            })
        }else if(!req.body.party){
            return res.status(400).send({
                status: 400,
                error: "Political party not provided"
            })
        }

        const promis = usersModel.selectUserById([req.params.id])
        promis.then(rows => {
            if(rows == null){
                return res.status(404).send({
                    status: 404,
                    error: "User does not exist"
                })
            }else{
                const office = officesModel.selecAnOffice(req.body.office)
                office.then(rows => {
                    if(!rows){
                        return res.status(404).send({
                            status: 404,
                            error: "Political office does not exist"
                        })
                    }else{
                        const party = partiesModel.selecAParty(req.body.party)
                        party.then(rows => {
                            if(!rows){
                                return res.status(404).send({
                                    status: 404,
                                    error: "Political party does not exist"
                                })
                            }else{
                                next()
                            }
                        })
                    }
                }) 
            }
        })
    }
}
const officeMiddleware = new OfficeMiddleware()
export default officeMiddleware
