import Comment from "../models/comment.js";


export const createCommentService = async (data) => {

    const comment = await Comment(data)
    comment.save()
    return comment
}

export const getAllCommentsService = async () => {
    const comments = await Comment.find()
    return comments
}



