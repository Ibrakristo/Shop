import express from "express";
import { getLoadingContent, searchGames } from "../controllers/search.js";
const router = express.Router();

router.get("/", searchGames)

router.post("/loadingcontent", getLoadingContent)
export default router;

