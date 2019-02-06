class voteMiddleWare{
    createVoteMiddleware(req, res, next){
        if(!req.body.createdBy){
            return res.status(400).send({
                status: 400,
                error: "User not provided"
            })
        }else if(!req.body.office){
            return res.status(400).send({
                status: 400,
                error: "Political office not provided"
            })
        }else if(!req.body.candidate){
            return res.status(400).send({
                status: 400,
                error: "Candidate not provided"
            })
        }else if(isNaN(parseInt(req.body.createdBy))){
            return res.status(400).send({
                status: 400,
                error: "User Id should be an integer, not a string"
            })
        }else if(isNaN(parseInt(req.body.office))){
            return res.status(400).send({
                status: 400,
                error: "Integer required but String was passed as office"
            })
        }else if(isNaN(parseInt(req.body.candidate))){
            return res.status(400).send({
                status: 400,
                error: "Integer required but String was passed as office"
            })
        }
    }

    next()
}