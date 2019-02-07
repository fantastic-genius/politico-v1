import express from "express"
import officeController from "../controller/officeController"
import officeMiddleware from "../middleware/officeMiddleware"

const officeVersionedApi = "/api/v1/offices/"
const router = express.Router()

router.post(officeVersionedApi, officeMiddleware.createOfficeMiddleware, officeController.createOffice)
router.get(officeVersionedApi, officeController.getAllOffice)
router.get(`${officeVersionedApi}:id`, officeController.getAnOffice)
router.post(`${officeVersionedApi}:id/register`, officeMiddleware.createCandidateMiddleware, officeController.createCandidate)
router.get(`${officeVersionedApi}:id/result`, officeMiddleware.getOfficeVotesMiddleware, officeController.getOfficeVotes)

export default router;
