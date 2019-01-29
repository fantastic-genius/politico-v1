import express from "express"
import partyMiddleware from "../middleware/partyMiddleware"
import partyController from "../controller/partyController"

const router = express.Router()
const partyVersionedAPi = "/api/v1/parties/"

router.post(partyVersionedAPi, partyMiddleware.createPartyMiddleware, partyController.createParty);

export default router;
