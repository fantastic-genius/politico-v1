import {offices} from "../db/db"

class OfficeController{
    createOffice(req, res){
        const body = req.body
        const {type, name} = body
        const id = offices.length + 1
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

    
}

const officeController = new OfficeController()
export default officeController
