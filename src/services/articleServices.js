import Article from "../models/article.js";

export const createArticleService = async (data) => {

    const article = await Article(data)
    article.save()
    return article
}

export const getAllArticlesService = async () => {
    const articles = await Article.find()
    return articles
}

export const getOneArticleService = async (id) => {
    const article = await Article.findOne({ _id: id })
    return article
}

// update function
export const updateArticle = async (id, data) => {

    const article = await Article.findOne({ _id: id })
    console.log(article)
    if (data.title) {
        article.title = data.title
    }
    if (data.content) {
        article.content = data.content
    }
    if (data.image) {
        article.image = data.image
    }
    await article.save()
    return article
}

//delete function
export const deleteArticle = async (id) => {
    return await Article.deleteOne({ _id: id })
}

