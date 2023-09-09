import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true, index: true },
    header_image: String,
    screenshots: [String],
    movies: [String],
    original_price: Number,
    desc: String,
    developers: [String],
    publishers: [String],
    score: Number,
    releaseDate: {
        type: Object,
        coming_soon: Boolean,
        date: Date
    },
    genres: [String],
    isFeatured: { type: Boolean, default: false, index: true },
    isBestSeller: { type: Boolean, default: false, index: true }
})



export default mongoose.model("Game", GameSchema)