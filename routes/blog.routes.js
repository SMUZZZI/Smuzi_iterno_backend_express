import Router from "express"
import { blogValidation } from '../validations/auth.js'
import checkAuth from "../utils/checkAuth.js"
import BlogController from "../controller/blog.controller.js"


const router = new Router()

router.post("/blog", checkAuth, blogValidation, BlogController.createBlog)
router.delete("/blog/:id", checkAuth, BlogController.deleteBlog)
router.get("/blog", BlogController.getBlog)
router.get("/blog/:limit/:page", BlogController.getBlogLimit)
router.get("/blog/:id", BlogController.getOneBlog) 
router.put("/blog/:id/edit", checkAuth, blogValidation, BlogController.updateBlog)




export default router