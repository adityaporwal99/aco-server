const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

const API_KEY = process.env.API_KEY

app.get('/news', async (req, res) => {
    const url = `https://gnews.io/api/v4/search?q=example&lang=en&max=10&apikey=${API_KEY}`
    try {
        const response = await axios.get(url)
        res.json(response.data)
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})