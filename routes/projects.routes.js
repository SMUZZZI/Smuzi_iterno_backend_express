import Router from "express"
import checkAuth from "../utils/checkAuth.js"
import { projectValidation } from "../validations/auth.js"

import projectController from "../controller/projects.controller.js"

const router = new Router()

router.post("/project", checkAuth, projectValidation, projectController.createProject)
router.delete("/project/:id", checkAuth, projectController.deleteProject)
router.get("/project", projectController.getProjects)
router.get("/project/:projectid", projectController.getProjectsByParams)
router.get("/project/id=/:id", projectController.getOneProject) 
router.put("/project/:id/edit", projectValidation, projectController.updateProject)

export default router