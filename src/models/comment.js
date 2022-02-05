import mongoose from "mongoose"
const schema = mongoose.Schema({
    name: String,
    comment: String,
    create_at: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Comment", schema)