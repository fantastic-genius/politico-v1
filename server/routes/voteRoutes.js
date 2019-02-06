import express from "express"
import voteMiddleware from "../middleware/voteMiddleware"
import voteController from "../controller/voteController"

const router = express.Router()
const voteVersionedAPi = "/api/v1/votes/"

router.post(voteVersionedAPi, voteMiddleware.createVoteMiddleware, voteController.createVote)

export default router
