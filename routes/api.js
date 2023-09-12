import express from 'express'
const router = express.Router();
import gamesRouter from './games.js'
import gameRouter from './game.js'
import searchRouter from './search.js'

router.use("/games", gamesRouter)
router.use("/game", gameRouter)
router.use("/search", searchRouter)

export default router;