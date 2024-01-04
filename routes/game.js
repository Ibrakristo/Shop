import express from "express";
import { getGameDetails } from "../controllers/game.js";
const router = express.Router();

router.get("/", getGameDetails)



export default router;


