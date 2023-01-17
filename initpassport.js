const GoogleStrategy = require("passport-google-oauth20").Strategy;


function init(passport){

    const authenticateUser = function(req, accessToken , refreshtoken , profile , done){
        return done(null , profile);
    }

    passport.use(new GoogleStrategy({
        clientID : "clientId",
        clientSecret : "",
        callbackURL : "" , 
        passReqToCallback : true
    }) , authenticateUser)

    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    
    passport.deserializeUser(function(user, done) {
            done(null, user);
    });

}

module.exports = init;


