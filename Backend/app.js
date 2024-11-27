const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToMongo = require("./config");
const path = require("path");

const addApi = require("./routes/addapi");

// const path = require('path');
dotenv.config();
connectToMongo();


const port = process.env.PORT || 5000;
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({
//   origin: allowedOrigin
// }));
app.use(cors());

app.use("/api", addApi);


app.get("/", (req, res) => {
    console.log("Everything is fine");
    res.send("Server is running");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
