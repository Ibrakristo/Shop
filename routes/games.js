import express from "express";
import { increaseRequests, checkForRequest } from "../requests.js";
import Game from "../models/game.js";
import createHttpError from "http-errors";
import * as cheerio from 'cheerio'
import mongoose from "mongoose";
const router = express.Router();
router.use(checkForRequest)
router.get("/featured", checkForRequest, async (req, res, next) => {
    try {
        if (req.featured === false) {

            await increaseRequests(next);
            mongoose.connection.db.collection("requests").updateOne({}, { $set: { featuredHasChanged: true } });
            let info = await fetch("https://store.steampowered.com/api/featuredcategories");
            info = await info.json();
            info = info.specials.items;
            info.forEach((item) => {
                Game.findOneAndUpdate({ _id: item.id }, {
                    name: item.name,
                    original_price: item.original_price,
                    header_image: item.header_image,
                    isFeatured: true,
                }, { upsert: true }).exec()
            })
            res.json(info)
        }

        else {

            let info = await Game.find({ isFeatured: true });
            res.json(info)


        }
    }
    catch (ex) {
        next(createHttpError(500, ex.message))
    }

})

router.get("/bestsellers", checkForRequest, async (req, res, next) => {
    try {

        if (req.bestSeller === false) {
            await increaseRequests(next);
            mongoose.connection.db.collection("requests").updateOne({}, { $set: { bestSellerHasChanged: true } });
            let data = await fetch("https://store.steampowered.com/search/?filter=topsellers");
            data = await data.text()
            const $ = cheerio.load(data);
            const arr = [];
            $("div#search_resultsRows a")
                .each(async (index, element) => {
                    let item = cheerio.load(element);
                    let id = item("[data-ds-appid]").attr("data-ds-appid")
                    if (!Number(id) || id.includes(",")) {
                        return;
                    }

                    let name = item(".title").text();
                    let header_image = item("img").attr("src");

                    header_image = header_image.replace(/capsule_sm_120\w*.jpg/, "header.jpg");
                    const original = 1 - Number(item(".col.search_discount_and_price.responsive_secondrow").children().first().attr("data-discount")) / 100;
                    let price = Number(item(".col.search_price_discount_combined.responsive_secondrow").attr("data-price-final"));

                    let original_price = original ? (price / original) : price;
                    original_price = original_price.toFixed(0)
                    let obj = { _id: id, name, header_image, original_price, isBestSeller: true };
                    arr.push(obj)
                    try {
                        await Game.findOneAndUpdate({ _id: id }, obj, { upsert: true });
                    } catch (ex) {
                        next(createHttpError(500, ex))
                    }
                });
            res.json(arr);
        } else {
            let info = await Game.find({ isBestSeller: true });
            res.json(info);
        }
    } catch (ex) {
        next(createHttpError(500, ex.message))
    }

})

export default router;