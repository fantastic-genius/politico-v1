import {offices} from "../db/db"

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

    
}

const officeController = new OfficeController()
export default officeController
