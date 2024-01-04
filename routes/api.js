import express from 'express'
const router = express.Router();
import gamesRouter from './games.js'
import gameRouter from './game.js'
import searchRouter from './search.js'
import userRouter from './user.js'
import cartRouter from './cart.js'
import orderRouter from './order.js'
router.use("/games", gamesRouter)
router.use("/game", gameRouter)
router.use("/search", searchRouter)
router.use("/user", userRouter)
router.use("/cart", cartRouter)
router.use("/order", orderRouter)
export default router;