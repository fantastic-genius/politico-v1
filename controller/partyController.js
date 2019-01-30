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


        res.status(201).send({
            status: 201,
            data: [{
                id,
                name
            }]
        })
    }
}

const partyController = new PartyController();

export default partyController;