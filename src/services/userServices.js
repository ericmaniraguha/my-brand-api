import User from "../models/user.js";

export const createUserService = async (data) => {

    const user = await User(data)
    user.save()
    return user
}

export const getAllUsersService = async () => {
    const users = await User.find()
    return users
}

export const getOneUserService = async (id) => {
    const user = await User.findOne({ _id: id })
    return user
}

// update function
export const updateUser = async (id, data) => {

    const user = await User.findOne({ _id: id })
    console.log(user)
    if (data.username) {
        user.username = data.username
    }
    if (data.email) {
        user.email = data.email
    }
    if (data.password) {
        user.password = data.password
    }
    await user.save()
    return user
}

//delete function
export const deleteUser = async (id) => {
    return await User.deleteOne({ _id: id })
}

