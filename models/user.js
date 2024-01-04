import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, minLength: 4, maxLength: 15 },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String, default: "user.png" },
    cart: { type: mongoose.Types.ObjectId, required: true, ref: "Cart" }
})

export default mongoose.model("User", userSchema);