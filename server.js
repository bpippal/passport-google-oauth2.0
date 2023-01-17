const express = require("express");
const passport = require("passport");
const app = express();
const session = require("express-session");

//TODO ---> Implement simple login/logout rendering to show data, preferably using flash as well ! 

//Init passport on bootup
const initalizePassport = require("./initpassport");
initalizePassport(passport);

//Order is important, session middle ware is to be called before passport is initalized
app.use(session({
    secret : "cat",
    resave : false,
    saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session());



function isLoggedIn (req, res, next){
    req.user ? next() : res.sendStatus(401);
}


app.get("/" , (req, res) => {
    res.send('<a href=/oauth/google> Click here to Authenticate via Google </a>');
})

//Endpoint that redirects user to THE GOOGLE LOGIN PAGE
app.get("/oauth/google" , passport.authenticate("google", {
        scope : ["email" , "profile"]
    })
)

//Callback url that google will invoke/call after authentication
app.get("/oauth/google/callback" , passport.authenticate("google" , {
    successRedirect : "/protected",
    failureRedirect : "/auth/failure"
}))

app.get("/auth/failure" , (req, res) => {
    res.send("Something went wrong")
})

app.get("/protected" , isLoggedIn , (req, res) => {
    res.send("You are viewing protected data !!!")
})

app.listen(3000 , function(){
    console.log("Server is live now ")
})