
import { createArticleService, getAllArticlesService, getOneArticleService, updateArticle, deleteArticle } from "../services/articleServices.js"
import cloudinary from 'cloudinary'

// import {cloudinary} from '../helper/imageUpload.js'
export class ArticleController {

    async createArticle(req, res, next) {
        try {
            console.log(req.file);
            cloudinary.v2.uploader.upload(req.file.path, async function (err, image) {
                if (err) { console.warn(err); }
                req.body.image = image.url
            
                const data = {
                    title: req.body.title,
                    content: req.body.content,
                    image: req.body.image,
                    create_at: new Date()
                }
                console.log(data)
                const article = await createArticleService(data)
                res.status(200).json({ status: 200, message: "Article created successfully.....", data: article })
            });
        }
         catch (error) {
            console.log(error)
        }
    }
    // retrieve one article--
    async getAllArticles(req, res, next) {
        try {
            const articles = await getAllArticlesService()
            res.status(200).json({ status: 200, message: "These are all the articles", data: articles })
        } catch (error) {
            console.log(error)
        }
    }
    
    async getArticle(req, res, next) {
        try {
            const article = await getOneArticleService(req.params.id)
            res.status(200).json({ status: 200, message: "article retieved successfully", data: article })
        } catch (error) {
            console.log(error)
        }
    }
    // update article 
    async updateArticle(req, res, next) {
        try {
            const data = {}
            if (req.body.title) {
                data['title'] = req.body.title
            }
            if (req.body.content) {
                data['content'] = req.body.content
            }
            if (req.body.image) {
                data['image'] = req.body.image
            }
            const article = await updateArticle(req.params.id, data)
            res.send(`username has been updated to ${req.body.title} , has been updated to ${req.body.image}`)

        } catch (error) {
            res.status(404)
            res.send({ error: "Article does not exist...!" })
        }
    }

    // delete article
    async deleteArticle(req, res, next) {
        try {
            await deleteArticle(req.params.id)
            res.send(`Article ${req.params.id} is deleted`)
        } catch (error) {
            res.status(404)
            res.send({ error: "No matching article!" })
            console.log(error)
        }
    }

}
