const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
    {

    },
    { timestamps: true }
)

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;