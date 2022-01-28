import { createUserService, getAllUsersService, getOneUserService, updateUser, deleteUser } from "../services/userServices.js"
export class UserController {

    async createUser(req, res, next) {
        try {
            const data = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
            console.log(data)
            const user = await createUserService(data)
            res.status(200).json({ status: 200, message: "User created successfully", data: user })
        } catch (error) {
            console.log(error)
        }
    }
     // retrieve one user--
     async getAllUsers(req, res, next) {
        try {
            const users = await getAllUsersService()
            res.status(200).json({ status: 200, message: "These are all the users", data: users })
        } catch (error) {
            console.log(error)
        }
    }
    
    async getUser(req, res, next) {
        try {
            const user = await getOneUserService(req.params.id)
            res.status(200).json({ status: 200, message: "user retieved successfully", data: user })
        } catch (error) {
            console.log(error)
        }
    }
     // update user
     async updateUser(req, res, next) {
        try {
            const data = {}
            if (req.body.username) {
                data['username'] = req.body.username
            }
            if (req.body.email) {
                data['email'] = req.body.email
            }
            if (req.body.password) {
                data['password'] = req.body.password
            }
            const user = await updateUser(req.params.id, data)
            res.send(`username has been updated to ${req.body.username} , has been updated to ${req.body.email}`)

        } catch (error) {
            res.status(404)
            res.send({ error: "User does not exist...!" })
        }
    } // delete user
    async deleteUser(req, res, next) {
        try {
            await deleteUser(req.params.id)
            res.send(`User ${req.params.id} is deleted`)
        } catch (error) {
            res.status(404)
            res.send({ error: "User not found!" })
            console.log(error)
        }
    }

}
