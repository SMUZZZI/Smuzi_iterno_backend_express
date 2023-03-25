
import BlogModel from "../models/blog.js"

import { validationResult } from 'express-validator'

class BlogController {
    async createBlog(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array());
            }

            const doc = new BlogModel({
                title: req.body.title,
                tag: req.body.tag,
                img: req.body.img,
                text: req.body.text,
                list: req.body.list,
                mainText: req.body.mainText,
                secondText: req.body.secondText,
            })

            const blog = await doc.save();

            res.json(blog)

        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось создать пост"
            })
        }
    }
    async getBlog(req, res) {
        try {
            const blog = await BlogModel.find()
            res.json(blog)
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти пост"
            })
        }
    }
    async getBlogLimit(req, res) {
        try {
            let limit = req.params.limit;
            let page = req.params.page;
            limit = limit || 6;
            page = page || 1;
            let offset = page * limit - limit;
            
            const blog = await BlogModel.find().skip(offset).limit(limit)
            res.json(blog)
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти посты"
            })
        }
    }
    async getOneBlog(req, res) {
        try {
            let id = req.params.id;
            const blog =  await BlogModel.findOne({ _id: id })
            res.json(blog)
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти пост"
            })
        }
    } 
    async updateBlog(req, res) {
        try {
            let id = req.params.id;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array());
            }

            const doc = {
                title: req.body.title,
                tag: req.body.tag,
                img: req.body.img,
                text: req.body.text,
                list: req.body.list,
                mainText: req.body.mainText,
                secondText: req.body.secondText,
            }

            await BlogModel.findOne({ _id: id }).updateOne(doc);
            const blog = await BlogModel.findOne({ _id: id });
            res.json(blog)

        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось создать пост"
            })
        }
    }
    async deleteBlog(req, res) {
        try {
            const id = req.params.id
            await BlogModel.findOneAndDelete({ _id: id })
            res.json({
                message: "Пост был удален"
            })
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти пост"
            })
        }
    }
}

export default new BlogController()