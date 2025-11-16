const express = require('express');
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const userRoutes = require("./routes/userRoutes")
const app = express();

app.use("/", userRoutes);
// app.use("/api/v1/posts", postRoutes);

console.log("line 14")
app.use(express.json())


app.listen(8000, () => {
    connectDB();
    console.log("server started")
})