import Router from "express"

import { registerValidation } from '../validations/auth.js'
import checkAuth from "../utils/checkAuth.js"

const router = new Router()

import AdminController from "../controller/admin.controller.js"

router.post("/auth/register", registerValidation, AdminController.register)
router.post("/auth/login", registerValidation, AdminController.login)
router.get("/auth/me", checkAuth, AdminController.getMe)




export default router