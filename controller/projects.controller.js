import ProjectModel from "../models/project.js"
import { validationResult } from 'express-validator'

class ProjectController {
    async createProject(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array());
            }

            const doc = new ProjectModel({
                projectid: req.body.projectid,
                title: req.body.title,
                tag: req.body.tag,
                img: req.body.img,
                client: req.body.client,
                category: req.body.category,
                tags: req.body.tags.split(" "),
                link: req.body.link,
                mainTitle: req.body.mainTitle,
                mainText: req.body.mainText,
            })

            const project = await doc.save();

            res.json(project)

        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось создать проект",
                error,
            })
        }
    }
    async getProjects(req, res) {
        try {
            const project = await ProjectModel.find()
            res.json(project)
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти проект"
            })
        }
    }
    async getProjectLimit(req, res) {
        try {
            let projectid = req.params.projectid
            let limit = req.params.limit;
            let page = req.params.page;
            limit = limit || 8;
            page = page || 1;
            let offset = page * limit - limit;
            
            const project = await ProjectModel.find({ projectid: projectid }).skip(offset).limit(limit)
            res.json(project)
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти проекты"
            })
        }
    }
    async getProjectsByParams(req, res) {
        try {
            let projectid = req.params.projectid;

            const project = await ProjectModel.find({ projectid: projectid })
            res.json(project)
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти проекты"
            })
        }
    }
    async getOneProject(req, res) {
        try {
            let id = req.params.id;
            const project = await ProjectModel.findOne({ _id: id })
            res.json(project)
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти пост"
            })
        }
    } 
    async updateProject(req, res) {
        try {
            let id = req.params.id;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array());
            }

            const doc = {
                projectid: req.body.projectid,
                title: req.body.title,
                tag: req.body.tag,
                img: req.body.img,
                client: req.body.client,
                category: req.body.category,
                tags: req.body.tags,
                link: req.body.link,
                mainTitle: req.body.mainTitle,
                mainText: req.body.mainText,
            }

            await ProjectModel.findOne({ _id: id }).updateOne(doc);
            const project = await ProjectModel.findOne({ _id: id });
            res.json(project)

        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось обновить проект"
            })
        }
    }
    async deleteProject(req, res) {
        try {
            const id = req.params.id
            await ProjectModel.findOneAndDelete({ _id: id })
            res.json({
                message: "Проект был удален"
            })
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти проект"
            })
        }
    }
}

export default new ProjectController()