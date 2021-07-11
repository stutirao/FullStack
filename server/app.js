const express = require("express");
const mongoose = require("mongoose");
const app = express();

const db =
  "mongodb+srv://stuti:Stutipanda@1090@cluster0.9zbip.mongodb.net/mernstack?retryWrites=true&w=majority";
mongoose
  .connect(db,{
     useNewUrlParser: true ,
     useCreateIndex: true,
     useUnifiedTopology:true,
     useFindAndModify:false 
  }) 
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });
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

app.listen(3000, () => {
  console.log("server is running at port");
});
