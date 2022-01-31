import { createCommentService, getAllCommentsService} from "../services/commentServices.js"

export class CommentController {

    async createComment(req, res, next) {
        try {
            const data = {
                username: req.body.username,
                email: req.body.email,
                message: req.body.message,
                create_at: new Date()
            }
            console.log(data)
            const comment = await createCommentService(data)
            res.status(200).json({ status: 200, message: "Comment created successfully", data: comment })
        } catch (error) {
            console.log(error)
        }
    }
// retrieve one Comment--
    async getAllComments(req, res, next) {
        try {
            const comments = await getAllCommentsService()
            res.status(200).json({ status: 200, message: "These are all the comments", data: comments })
        } catch (error) {
            console.log(error)
        }
    }

}
