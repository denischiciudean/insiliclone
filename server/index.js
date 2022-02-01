const express = require("express")

const body_parser = require("body-parser")

const cors = require("cors")

app = express()

app.use(body_parser.json())
app.use(cors())


const quotes = require("./routes/api/quotes")
app.use('/api/quotes', quotes)

const port = process.env.PORT || 5005

app.listen(port, () => console.log(`Server is runniing on port ${port}`))
