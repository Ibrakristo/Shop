import mongoose from 'mongoose';

const cartModel = new mongoose.Schema({
    games: { type: [Number], ref: "Game" }
});

export default mongoose.model("Cart", cartModel);
