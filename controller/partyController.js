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

        db.push(party);

        res.status(201).send({
            status: 201,
            data: [{
                id,
                name
            }]
        })
    }

    getAllParty(req, res){

        const data = [
            {
                id: db[0].id,
                name: db[0].name,
                logoUrl: db[0].logoUrl
            },
            {
                id: db[1].id,
                name: db[1].name,
                logoUrl: db[1].logoUrl
            }
        ]


        res.status(200).send({
            status: 200,
            data
        })
    }
}

const partyController = new PartyController();

export default partyController;