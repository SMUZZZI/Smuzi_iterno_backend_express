import Router from "express"

import checkAuth from "../utils/checkAuth.js"

const router = new Router()

import TeamController from "../controller/team.controller.js"

router.post("/team", TeamController.createTeam)
router.get("/team", TeamController.getTeam)
router.get("/team/:id", TeamController.getOneTeam)
router.delete("/team/:id", TeamController.deleteTeam)
router.put("/team/:id/edit", TeamController.updateTeam)


export default router