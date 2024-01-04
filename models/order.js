import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    intent: { type: String, required: true },
    games: { type: [Number], required: true, ref: "Game" },
    amount: { type: Number, required: true },
    user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    completed: { type: Boolean, index: true, default: false },
    createdAt: { type: Date, expires: 3600, default: Date.now }
})
orderSchema.index({ createdAt: 1 }, {
    expireAfterSeconds: 0,
    partialFilterExpression: {
        completed: false
    }
});
export default mongoose.model("Order", orderSchema);