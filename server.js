require("dotenv").config()
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/robots.txt", (req, res) => {
    res.sendFile(__dirname + "/robots.txt");
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Server started successfully");
});