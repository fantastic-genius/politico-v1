import express from "express"
import authController from "../controller/authController"
import authMiddleware from "../middleware/authMiddleware"

const authVersionedApi = "/api/v1/auth/"
const router = express.Router()

router.post(`${authVersionedApi}signup`, authMiddleware.signupMiddleware, authController.signup)
router.post(`${authVersionedApi}login`, authMiddleware.loginMiddleware, authController.login)

export default router
