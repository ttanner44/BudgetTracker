const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000 ;

const app = express();

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect("mongodb://localhost/budget", {
mongoose.connect("mongodb://ttanner:2644zzzz@ds031802.mlab.com:31802/heroku_0z2x62cq", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});