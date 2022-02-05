import mongoose from "mongoose"

const schema = mongoose.Schema({
<<<<<<< Updated upstream
    username: String,
    email: String,
    message: String,
    create_at: Date
=======
    name: String,
    comment: String,
    create_at: {
        type: Date,
        default: Date.now()
    }
>>>>>>> Stashed changes
})

export default mongoose.model("Comment", schema)