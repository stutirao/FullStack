const express = require("express");
const mongoose = require("mongoose");
const dotenv= require("dotenv")
const app = express();
dotenv.config({path:'./config.env'});
require('./db/conn');
const PORT=process.env.PORT; 

app.get("/", (req, res) => {
  res.send(`Hello world`);
});

app.get("/about", (req, res) => {
  res.send(`Hello about`); 
});

app.get("/contact", (req, res) => {
  res.send(`Hello contact`);
});

app.get("/signin", (req, res) => {
  res.send(`Hello signin`);
});

app.get("/signup", (req, res) => {
  res.send(`Hello signup`);
});

app.listen(PORT, () => {
  console.log("server is running at port");
});
