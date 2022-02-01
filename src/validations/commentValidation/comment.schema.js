import joi from 'joi'

export const commentSchema = joi.object({
    name: joi.string().required().empty(),
    comment: joi.string().max(200).required().empty(),
})
