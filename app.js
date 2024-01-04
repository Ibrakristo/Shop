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
import passport from 'passport'
import JWTStrategy from './config/auth.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

passport.use(JWTStrategy);

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.disable('x-powered-by')
app.use(apiLimiter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));
app.use(cors({
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200
}))
app.use(passport.initialize());
await mongoose.connect(process.env.MONGODBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

import apiRouter from './routes/api.js'
import multer from 'multer';

app.use("/api", apiRouter)

app.use("*", (req, res) => {
  res.redirect("/")
})
app.use(function (req, res, next) {
  next(createHttpError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page

  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size is too large. Maximum size allowed is 10 MB.' });
    }
  }


  res.status(err.status || 500);
  res.send(err.msg || err.message)
});

export default app;
