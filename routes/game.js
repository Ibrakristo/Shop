import express from "express";
import Game from "../models/game.js";
import createHttpError from "http-errors";
import { increaseRequests } from "../requests.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        let id = req.query.id;
        if (!Number(id) || id.includes(",")) {
            return;
        }
        id = Number(id);
        let game = await Game.findById(id);
        if (game?.desc) {
            res.json(game);
        }
        else {

            increaseRequests();

            let data = await fetch(`http://store.steampowered.com/api/appdetails?appids=${id}`);

            data = await data.json();
            data = data[id].data;
            const obj = {
                _id: id, name: data.name, original_price: data.is_free ? 0 : data.price_overview.initial, header_image: data.header_image, desc: data.short_description, developers: data.developers, publishers: data.publishers, score: data.metacritic?.score, screenshots: data.screenshots.map(screen => (screen.path_full)), movies: data.movies.map((movie) => (movie.webm.max)), releaseDate: { coming_soon: data.release_date.coming_soon, date: new Date(data.release_date.date) }, genres: data.genres.map(genre => (genre.description))
            }
            await Game.findOneAndUpdate({ _id: id }, obj, { upsert: true });
            res.json(obj);
        }
    }
    catch (ex) {
        next(createHttpError(500, ex.message));
    }
})



export default router;


