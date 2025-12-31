const express = require('express')
const router = require('./routes')
const APP = express()
const PORT = 8000
const morgan = require('morgan')
APP.use(express.static('public'))
APP.use(router)
APP.use(morgan('dev'))
// 404 handler
APP.use((req, res) => {
    res.status(404).send('Not Found')
})

// Error handler
APP.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

APP.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})
