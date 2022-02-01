const mongoose = require("mongoose");
const TickerSchema = new mongoose.Schema({
    name: String,
    ticker: String,
    value: String,
    base_pair: String,
    counter_pair: String
})

module.exports = mongoose.mongo("Ticker", TickerSchema)
