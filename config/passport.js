const passport = require("passport");
const userModel = require("../models/userModel");
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require("bcrypt")

passport.use(new LocalStrategy(
    async function (username, password, done) {

        try {
            const user = await userModel.findOne({
                username: username
            })
            console.log(user)
            if (!user) {
                done(null, false, { message: "incorrect username" })
                return
            }
            // if (!bcrypt.compare(passport, user.password)) {
            //     return done(null, false, { message: "incorrect password" })
            // }
            if (user.password !== password) {
                return done(null, false, { message: "incorrect password" })
            }

            console.log(user)
            return done(null, user);


        } catch (error) {
            return done(error)
        }

    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userModel.findById(id);
        done(null, user)
    } catch (error) {
        done(error, false)
    }
});