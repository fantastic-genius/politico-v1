
class PartyMiddleware{

    createPartyMiddleware(req, res, next){
        if(!req.body.name){
            return res.status(400).send({
                status: 400,
                message: "Party name not included in the data posted" 
            })
        }else if(!req.body.hqAddress){
            return res.status(400).send({
                status: 400,
                message: "Party headquarter not included in the data posted" 
            })
        }else if(!req.body.logoUrl){
            return res.status(400).send({
                status: 400,
                message: "Party logo Url not included in the data posted" 
            })
        }

        next();
    }

}

const partyMiddleware = new PartyMiddleware();
export default partyMiddleware;