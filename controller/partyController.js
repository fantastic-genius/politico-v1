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

        return res.status(201).send({
            status: 201,
            data: [{
                id,
                name
            }]
        })
    }

    getAllParty(req, res){

        let data = []

        db.map(party => {
            let {id, name, logoUrl} = party
            let cur_data = {
                id,
                name,
                logoUrl
            }
            data.push(cur_data)
        })


        return res.status(200).send({
            status: 200,
            data
        })
    }

    getAParty(req, res){
        const id = parseInt(req.params.id)
        
        db.map(party => {
            if(party.id === id){
                const data = [
                    {
                        id: db[0].id,
                        name: db[0].name,
                        logoUrl: db[0].logoUrl
                    }
                ]

                return res.status(200).send({
                    status: 200,
                    data
                })
                
            }

        })

        return res.status(400).send({
            status: 400,
            message: "Party not found"
        })
        
    }
}

const partyController = new PartyController();

export default partyController;