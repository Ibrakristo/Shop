

import createHttpError from "http-errors";
import { validationResult } from 'express-validator';
import User from '../models/user.js';
import Cart from '../models/cart.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import sharp from "sharp"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PICTUREPATH = __dirname + "\\..\\public\\pictures\\";
const OPTIONS = { root: PICTUREPATH };



const register = async (req, res, next) => {
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let field = result.array()[0];
        next(createHttpError(409, field.path + ":" + field.msg));
        return;
    }
    let userName = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let name = req.body.name;
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.substr(1);
    password = await bcrypt.hash(password, 10);
    try {
        let cart = await Cart.create({});
        await User.create({ username: userName, password, email, name, cart: cart.id });
    } catch (ex) {
        next(createHttpError(409, "username or email is already registered"));
        return;
    }
    res.status(200).send();
};

const login = async (req, res, next) => {
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let field = result.array()[0];
        next(createHttpError(409, field.path + " : " + field.msg));
        return;
    }
    let userName = req.body.username;
    let password = req.body.password;
    let user = await User.findOne({ username: userName }).exec();
    if (!user) {
        next(new createHttpError(401, "Username/password is Wrong!"));
        return;
    }
    let isequal = await bcrypt.compare(password, user.password);
    if (!isequal) {
        next(new createHttpError(401, "Username/password is Wrong!"));
        return;
    }
    let token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 3600 });

    res.json({ token, name: user.name, email: user.email });
};

const getPicture = (req, res, next) => {
    const user = req.user;
    res.sendFile(user.picture, OPTIONS);
};



const editProfile = async (req, res, next) => {
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let field = result.array()[0];
        next(createHttpError(409, field.path + " : " + field.msg));
        return;
    }
    let name = req.body.name;
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.substr(1);
    const email = req.body.email;
    let password = req.body.password;
    const profilePicture = req.file;
    const data = {};
    if (name && name != "") {
        data.name = name;
    }
    if (email && email != "") {
        data.email = email;
    }


    try {
        if (profilePicture && profilePicture != 'null') {
            const compressedImageBuffer = await sharp(req.file.path).resize({ width: 500 }).toBuffer();
            const compressedFilename = profilePicture.filename.replace(/(\.[\w\d_-]+)$/i, '-compressed$1');
            const compressedFilePath = path.join(PICTUREPATH, compressedFilename);
            await fs.unlink(profilePicture.path);
            await sharp(compressedImageBuffer).toFile(compressedFilePath);
            data.picture = compressedFilename;
        }

        if (password && password != "") {
            password = await bcrypt.hash(password, 10);
            data.password = password;
        }
        const user = await User.findById(req.user._id).exec();
        if (profilePicture && user.picture != "user.png") {
            const filepath = PICTUREPATH + user.picture;
            await fs.access(filepath);
            await fs.unlink(filepath);
        }
        await User.findByIdAndUpdate(req.user._id, { $set: data }).exec();
        res.json({ "msg": "success" });
    } catch (ex) {
        console.log(ex);
        next(new createHttpError(500, "unknown error occurred"));
    }
};

export { register, login, getPicture, editProfile };
