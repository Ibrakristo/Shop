import passport from "passport";
import express from "express";
import { addToCart, checkout, emptyCart, getGames, removeGames } from "../controllers/cart.js";
const router = express.Router();
router.use(passport.authenticate("jwt", { session: false }))

router.post("/addtocart", addToCart)

router.get("/checkout", checkout);


router.get("/getgames", getGames)

router.post("/removegames", removeGames)

router.get("/emptycart", emptyCart)


export default router;