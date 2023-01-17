const GoogleStrategy = require("passport-google-oauth2").Strategy;


function init(passport){

    const authenticateUser = function(req, accessToken , refreshtoken , profile , done){
        return done(null , profile);
    }

    //Update clientId and clientSecret from the google cloud console

    passport.use(new GoogleStrategy({
        clientID : "",
        clientSecret : "",
        callbackURL : "http://localhost:3000/oauth/google/callback" , 
        passReqToCallback : true
    } , authenticateUser))

    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    
    passport.deserializeUser(function(user, done) {
            done(null, user);
    });

}

module.exports = init;


