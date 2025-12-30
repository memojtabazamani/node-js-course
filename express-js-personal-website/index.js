const express = require('express')
const router = require('./routes')
const APP = express()
const PORT = 8000
APP.use(router)
APP.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
APP.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})
