const express = require("express");
const passport = require("passport");
const app = express();

//Init passport on bootup
const initalizePassport = require("./initpassport");
initalizePassport(passport);


//Middlewares 



app.get("/" , (req, res) => {
    res.send("Hello world");
})




app.listen(3000 , function(){
    console.log("Server is live now ")
})