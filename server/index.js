const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/index");

const app = express();

const productRouter =  require("./routes/productRouter");
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on("error", console.error.bind(console, "MongoDB Connection error"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Food Ordering App!" });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use('/api/',productRouter);
