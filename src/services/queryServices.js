import Query from "../models/query.js";


export const createQueryService = async (data) => {

    const query = await Query(data)
    query.save()
    return query
}

export const getAllQueriesService = async () => {
    const queries = await Query.find()
    return queries
}

export const getOneQueryService = async (id) => {
    const query = await Query.findOne({ _id: id })
    return query
}

export const deleteQuery = async (id) => {
    return await Query.deleteOne({ _id: id })
}

