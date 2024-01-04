import express from 'express'
import passport from 'passport';
import { confirmOrder, getOrders } from '../controllers/order.js';

const router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));

router.post("/confirmorder", confirmOrder)

router.get("/getorders", getOrders)

export default router;

