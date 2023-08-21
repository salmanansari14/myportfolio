const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const http = require(“http”);

const app = express();
app.use(cors());
app.use(express.json());
// dotenv.config();

mongoose
    // .connect("mongodb://0.0.0.:27017/portfolio", {
    .connect("mongodb+srv://salmanansari1409:Salman1%40@cluster0.t8a6cmf.mongodb.net/portfolio", {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => {
        console.log("db connection successful");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.listen(5000, () => {
    console.log(`server started on port ${5000}`);
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    profession: String,
    message: String,
})
const User = new mongoose.model("user", userSchema)

app.post("/register", (req, res) => {
    const { name, email, profession, message } = req.body;
    const user = new User({
        name,
        email,
        profession,
        message
    })
    console.log(user.name)
    user.save(
    //     err => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     else {
    //         res.send({ message: "data successfully register" });
    //     }
    // }
    )
})
app.post("/", (req, res) => {
    res.send("my api");
})