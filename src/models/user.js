import mongoose from "mongoose"

const schema = mongoose.Schema({
    username: String,
    email: String,
    password: String
  
})

export default mongoose.model("User", schema)

