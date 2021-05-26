//jshint esversion:6
const request = require("request");
const express = require("express");
const https = require("https");


const app = express();
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function(){
    console.log("Server Running");
  });

  app.get("/", function(req, res){
    res.sendFile(__dirname + "\\index.htm");
  });