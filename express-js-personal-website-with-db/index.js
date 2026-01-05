const express = require('express')
const router = require('./routes')
const morgan = require('morgan')
const flash = require('connect-flash')
const coockieParser = require('cookie-parser')
const session = require('express-session')
const { handeler404, handelerServerErrors } = require('./helpers/errorHandeler')
require('./helpers/passport')
const app = express()

const PORT = 4000

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(
  session({
    secret: 'yourSecretKey',
  })
)
app.use(flash())
app.use(coockieParser())

app.use('/', router)
app.use(handeler404)
app.use(handelerServerErrors)
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
