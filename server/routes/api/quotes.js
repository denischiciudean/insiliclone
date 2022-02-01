const express = require("express")
// const mongodb = require("mongodb")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/exchange")

const router = express.Router();


router.get('/', async (req, res) => {
    res.send("Hello")
})

module.exports = router;