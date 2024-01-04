
import Cart from "../models/cart.js";
import Game from "../models/game.js";
import Stripe from 'stripe'
import createHttpError from "http-errors";
import Order from "../models/order.js";


const stripe = new Stripe(process.env.STRIPEKEY, {
    apiVersion: '2023-10-16',
    typescript: true
});

const addToCart = async (req, res, next) => {
    let cartId = req.user.cart;
    let gameId = Number(req.body.gameId);
    let exist = await Game.findById(gameId);

    if (!exist) {
        next(createHttpError(409, "No Such Game"));
        return;
    }

    exist = (await Cart.findById(cartId).exec()).games.find((game) => {
        return game == gameId;
    });

    if (!exist) {
        await Cart.findByIdAndUpdate(cartId, { $push: { games: gameId } });
    }

    res.send();
};

const checkout = async (req, res, next) => {
    const user = req.user;
    let amount = 0;
    let cartId = user.cart;

    let cart = await Cart.findById(cartId).exec();
    await cart.populate("games");

    for (let game of cart.games) {
        amount += game.original_price;
    }
    console.log
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'USD'
        });

        const id = paymentIntent.id;

        await Order.create({ intent: id, amount: amount, user: user, games: cart.games });

        res.json({
            clientSecret: paymentIntent.client_secret
        });

    } catch (ex) {
        console.log(ex)
        next(createHttpError(500, "unknown error occurred"));
        return;
    }
};

const getGames = async (req, res, next) => {
    let user = req.user;
    try {
        let cart = await Cart.findById(user.cart).populate("games").exec();
        let games = cart.games;
        res.json(games);
    } catch (ex) {
        next(createHttpError(500, "unknown error occurred"));
    }
};

const removeGames = async (req, res, next) => {
    let user = req.user;
    let gameIds = req.body.gameIds;
    try {
        await Cart.findByIdAndUpdate(user.cart, { $pull: { games: { $in: gameIds } } });
        res.send();
    } catch (ex) {
        next(createHttpError(500, "unknown error occurred"));
    }
};

const emptyCart = async (req, res, next) => {
    let user = req.user;
    try {
        await Cart.findByIdAndUpdate(user.cart, { $set: { games: [] } });
        res.send();
    } catch (ex) {
        next(createHttpError(500, "unknown error occurred"));
    }
};

export { addToCart, checkout, getGames, removeGames, emptyCart };
