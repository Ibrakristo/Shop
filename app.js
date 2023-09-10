// app.js
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import cors from 'cors'
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors({
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200
}))
await mongoose.connect(process.env.MONGODBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//routers
import gamesRouter from './routes/games.js'
import gameRouter from './routes/game.js'
import searchRouter from './routes/search.js';
app.use("/games", gamesRouter)
app.use("/game", gameRouter)
app.use("/search", searchRouter)
app.use(function (req, res, next) {
  next(createHttpError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page

  res.status(err.status || 500);
  res.send(err.message)
});

export default app;
