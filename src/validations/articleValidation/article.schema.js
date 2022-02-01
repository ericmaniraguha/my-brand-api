import joi from '@hapi/joi'

export const articleSchema = joi.object({
    title: joi.string().max(1000).required(),
    authorname: joi.string().max(500).required(),
    content: joi.string().required(),
})
