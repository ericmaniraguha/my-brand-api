import { createQueryService, getAllQueriesService,  getOneQueryService,  deleteQuery } from "../services/queryServices.js"

export class QueryController {

    async createQuery(req, res, next) {
        try {
            const data = {
                username: req.body.username,
                email: req.body.email,
                message: req.body.message,
                create_at: new Date()
            }
            console.log(data)
            const query = await createQueryService(data)
            res.status(200).json({ status: 200, message: "Query created successfully", data: query })
        } catch (error) {
            console.log(error)
        }
    }
// retrieve one query--
async getAllQueries(req, res, next) {
    try {
        const queries = await getAllQueriesService()
        res.status(200).json({ status: 200, message: "These are all the queries", data: queries })
    } catch (error) {
        console.log(error)
    }
    }
    async getQuery(req, res, next) {
        try {
            const query = await getOneQueryService(req.params.id)
            res.status(200).json({ status: 200, message: "query retieved successfully", data: query })
        } catch (error) {
            console.log(error)
        }
    }

     // delete query
     async deleteQuery(req, res, next) {
        try {
            await deleteQuery(req.params.id)
            res.send(`Query ${req.params.id} is deleted`)
        } catch (error) {
            res.status(404)
            res.send({ error: "No matching query!" })
            console.log(error)
        }
    }

}
