
import TeamModel from "../models/team.js"

import { validationResult } from 'express-validator'

class TeamController {
    async createTeam(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array());
            }

            const doc = new TeamModel({
                img: req.body.img,
                name: req.body.name,
                tag: req.body.tag,
                profession: req.body.profession,
                description: req.body.description,
                social: req.body.social,
                links: req.body.links, 
                biography: req.body.biography, 
                qnaDis: req.body.qnaDis, 
                qnaData: req.body.qnaData, 
            })

            const team = await doc.save();

            res.json(team)

        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось создать пользователя"
            })
        }
    }
    async getTeam(req, res) {
        try {
            const Team = await TeamModel.find()
            res.json(Team)
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти пользователей"
            })
        }
    }
    async getOneTeam(req, res) {
        try {
            let id = req.params.id;
            const Team =  await TeamModel.findOne({ _id: id })
            res.json(Team)
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти пользователя"
            })
        }
    } 
    async updateTeam(req, res) {
        try {
            let id = req.params.id;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array());
            }

            const doc = {
                img: req.body.img,
                name: req.body.name,
                tag: req.body.tag,
                profession: req.body.profession,
                description: req.body.description,
                social: req.body.social,
                links: req.body.links, 
                biography: req.body.biography, 
                qnaDis: req.body.qnaDis, 
                qnaData: req.body.qnaData, 
            }

            await TeamModel.findOne({ _id: id }).updateOne(doc);
            const Team = await TeamModel.findOne({ _id: id });
            res.json(Team)

        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось создать пользователя"
            })
        }
    }
    async deleteTeam(req, res) {
        try {
            const id = req.params.id
            await TeamModel.findOneAndDelete({ _id: id })
            res.json({
                message: "Пользователь был удален"
            })
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Не удалось найти пользователя"
            })
        }
    }
}

export default new TeamController()