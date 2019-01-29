import db from "../db/db"

class PartyController{
    createParty(req, res){

        const body = req.body;
        const {name, hqAddress, logoUrl} = body;
        const id = db.length + 1;
        const party = {
            id,
            name,
            hqAddress,
            logoUrl
        }

        const data = [
            {
                id: db[0],
                name: db[0],
                logoUrl: db[0]
            },
            {
                id: db[1],
                name: db[1],
                logoUrl: db[1]
            }
        ]

        res.status(201).send({
            status: 201,
            data
        })
    }

    getAllParty(req, res){
        res.status(200).send({
            status: 200,
            data: db
        })
    }
}

const partyController = new PartyController();

export default partyController;