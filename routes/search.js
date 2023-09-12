import express from "express";
import createHttpError from "http-errors";
import { increaseRequests } from "../requests.js";
import * as cheerio from 'cheerio';
import Game from '../models/game.js'
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        increaseRequests(next);
        const name = req.query.name;
        let data = await fetch(`https://store.steampowered.com/search?term=${name}`);
        data = await data.text();
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
                let price = item(".col.search_price_discount_combined.responsive_secondrow").attr("data-price-final");
                let original_price = original ? (price / original) : Number(price);
                original_price = original_price.toFixed(0)
                let obj = { _id: id, name, header_image, original_price };
                arr.push(obj)
                try {
                    await Game.findOneAndUpdate({ _id: id }, obj, { upsert: true });
                } catch (ex) {
                    next(createHttpError(500, ex))
                }

            });
        res.json(arr);
    }
    catch (ex) {
        next(createHttpError(500, ex));
    }
})

router.post("/loadingcontent", async (req, res, next) => {
    try {

        let body = req.body;
        let apps = await Game.find({ _id: { $nin: body } }).limit(20);
        res.json(apps);
    }
    catch (ex) {
        next(createHttpError(500, ex))
    }
})
export default router;

