import express from "express";
import { checkForRequest } from "../requests.js";
import { getBestSellingGames, getFeaturedGames } from "../controllers/games.js";
const router = express.Router();
router.use(checkForRequest)
router.get("/featured", checkForRequest, getFeaturedGames)

router.get("/bestsellers", checkForRequest, getBestSellingGames)

export default router;