import mongoose from "mongoose"

const schema = mongoose.Schema({
    username: String,
    email: String,
    message: String,
    create_at: Date
})

export default mongoose.model("Comment", schema)