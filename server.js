const express = require('express');
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const userRoutes = require("./routes/userRoutes");
const authRoutes = require('./routes/authRoutes');
require('dotenv').config({
    quiet: true
});
const app = express();

app.use(express.json())
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v2/comment", commentRoutes);

console.log("line 14")


app.listen(8000, () => {
    connectDB();
    console.log("server started")
})