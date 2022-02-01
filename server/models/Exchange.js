const mongoose = require("mongoose");
const ExchangeSchema = new mongoose.Schema({
    name: String,
    ticker: String,
    value: String,
    base_pair: String,
    counter_pair: String
})

module.exports = mongoose.mongo("Exchange", ExchangeSchema)
