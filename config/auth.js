import JWT from 'passport-jwt';
import User from '../models/user.js';
import 'dotenv/config';

const JWTStrategy = new JWT.Strategy({
    secretOrKey: process.env.SECRET,
    jwtFromRequest: JWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
}, async (jwt_payload, done) => {
    let id = jwt_payload.id;
    let user = await User.findById(id).exec();
    if (!user) return done(new Error("User not Found"), false);
    return done(null, user);
})

export default JWTStrategy;