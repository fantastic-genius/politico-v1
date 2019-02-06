import {offices} from "../db/db"
import candidatesModel from "../model/candidatesModel"
class OfficeController{
    createOffice(req, res){
        const body = req.body
        const {type, name} = body
        const len = offices.length
        const id = offices[len-1].id + 1;
        const office = {
            id,
            type,
            name
        }

        offices.push(office)

        return res.status(201).send({
            status: 201,
            data: [office]
        })
    }

    getAllOffice(req, res){      

        return res.status(200).send({
            status: 200,
            data: offices
        })
    }

    getAnOffice(req, res){
        const id = parseInt(req.params.id)

        if(isNaN(id)){
            return res.status(400).send({
                status: 400,
                error: "An integer is required to be passed in"
            })
        }
        
        offices.map(office => {
            if(office.id === id){
                const {id, type, name} = office

                return res.status(200).send({
                    status: 200,
                    data: [{
                        id,
                        type,
                        name
                    }]
                })
                
            }

        })

        return res.status(404).send({
            status: 404,
            error: "Office not found"
        })
        
    }

    createCandidate(req, res){
        const values = [req.params.id]
        const promis = candidatesModel.createCandidate(values)
        promis.then(rows => {
            if(rows){
                return res.status(201).send({
                    status: 201,
                    data: {
                        office: rows[0].office,
                        user: rows[0].candidate
                    }
                })
            }
        })

    }
    
}

const officeController = new OfficeController()
export default officeController
