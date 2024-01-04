import express from 'express'
import { body } from 'express-validator';
import 'dotenv/config'
import passport from 'passport';
import path from 'path'
import multer from 'multer';
import { editProfile, getPicture, login, register } from '../controllers/user.js';
import { fileURLToPath } from 'url';
const router = express.Router();

const allowedFileTypes = ['image/jpeg', 'image/png'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PICTUREPATH = __dirname + "\\..\\public\\pictures\\";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PICTUREPATH);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname).toLowerCase();
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },

})
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, checkFile) => {
        if (allowedFileTypes.includes(file.mimetype)) {
            checkFile(null, true);
        } else {
            checkFile(new Error('Invalid file type. Only JPG and PNG files are allowed.'), false);
        }
    }
})

router.post("/register",
    body("username").notEmpty().bail({ level: 'request' }).isAlphanumeric().bail({ level: 'request' }).isLength({ min: 4, max: 15 }).bail({ level: 'request' }),
    body("password").notEmpty().bail({ level: 'request' }).isLength({ min: 6, max: 16 }).bail({ level: 'request' }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/, "i").bail({ level: 'request' }),
    body("email").notEmpty().bail({ level: 'request' }).isEmail().bail({ level: 'request' }),
    body("name").notEmpty().bail({ level: 'request' }).isAlphanumeric().bail({ level: 'request' }).isLength({ min: 4, max: 12 }).bail({ level: 'request' })
    , register)

router.post("/login", body("username").notEmpty().isAlphanumeric().isLength({ min: 4, max: 15 }),
    body("password").notEmpty().isLength({ min: 6, max: 16 }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/, "i"),
    login
)
router.use(passport.authenticate("jwt", { session: false }));

router.get("/getpicture", getPicture)

const atLeastOneFieldNotEmpty = (value, { req }) => {
    if (req.body.username || req.body.password || req.body.email || (req.file && req.file != 'null')) {
        return true;
    }
    return false;
};


router.post("/editprofile", body("username").custom(atLeastOneFieldNotEmpty).bail({ level: 'request' }).optional({ checkFalsy: true }).isAlphanumeric().bail({ level: 'request' }).isLength({ min: 4, max: 15 }).bail({ level: 'request' }),
    body("password").custom(atLeastOneFieldNotEmpty).bail({ level: 'request' }).optional({ checkFalsy: true }).isLength({ min: 6, max: 16 }).bail({ level: 'request' }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/, "i").bail({ level: 'request' }),
    body("email").custom(atLeastOneFieldNotEmpty).bail({ level: 'request' }).optional({ checkFalsy: true }).isEmail().bail({ level: 'request' }),
    upload.single('profilePicture'),
    editProfile)
export default router;