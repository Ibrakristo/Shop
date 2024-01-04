
import createHttpError from 'http-errors';
import Order from '../models/order.js';
import cart from '../models/cart.js';


const confirmOrder = async (req, res, next) => {
    const id = req.body.id;
    const user = req.user;
    if (!id) {
        next(createHttpError(400, "DATA IS MISSING"));
        return;
    }
    try {
        const order = await Order.findOneAndUpdate({ intent: id }, { $set: { completed: true } }).exec();
        if (!order) {
            next(createHttpError(409, "Order Not found"));
            return;
        }
        const gameIds = order.games;
        await cart.findByIdAndUpdate(user.cart, { $pull: { games: { $in: gameIds } } });
        res.send();
    } catch (ex) {
        next(500, "unknown error occurred");
    }
};

const getOrders = async (req, res, next) => {
    const user = req.user;
    try {
        const orders = await Order.find({ user: user.id, completed: true }).populate("games").exec();
        console.log(orders);
        res.json(orders);
    } catch (ex) {
        next(createHttpError(500, "unknown error occurred"));
    }
};

export { confirmOrder, getOrders };
