const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homePageController')
const aboutController = require('../controllers/aboutPageController')
const contactController = require('../controllers/contactPageController')
router.get('/', homeController)
router.get('/about', aboutController)
router.get('/contact', contactController)
module.exports = router
