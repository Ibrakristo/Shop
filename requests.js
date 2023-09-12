import mongoose from "mongoose";
import moment from "moment";
import createHttpError from "http-errors";
import Game from "./models/game.js";


export async function increaseRequests(next) {
    let requests = mongoose.connection.db.collection("requests")
    let request = await requests.findOne();
    try {
        if (moment.duration(moment().diff(moment(request.date))).asMinutes() > 5) {
            await requests.updateOne({}, { $set: { count: 0, date: new Date() } });
            return
        }
        if (request.count > 180) {
            next(createHttpError(406, "Pleast try again in 5 minutes"))
        }
        await requests.updateOne({}, { $inc: { count: 1 } })
        return
    }
    catch (ex) {
        next(createHttpError(500, ex.message));
    }
}

export async function checkForRequest(req, res, next) {
    let requests = mongoose.connection.db.collection("requests")
    let request = await requests.findOne();

    if (moment.duration(moment().diff(moment(request.dailyDate))).asHours() > 24) {
        request = await requests.findOneAndUpdate({}, { $set: { bestSellerHasChanged: false, featuredHasChanged: false, dailyDate: Date.now() }, $inc: { count: 1 } });
        Game.updateMany({ $or: [{ isFeatured: true }, { isBestSeller: true }] }, { isFeatured: false, isBestSeller: false }).exec();
    }
    req.bestSeller = request.bestSellerHasChanged;
    req.featured = request.featuredHasChanged;
    next()
}
