const express = require('express')
const router = express.Router()
const homepageController = require('../controllers/homepageController')
const aboutController = require('../controllers/aboutController')
const contactController = require('../controllers/contactController')
const postController = require('../controllers/postController')
const categoryController = require('../controllers/categoryController')
const searchController = require('../controllers/searchController')
const loginController = require('../controllers/loginController')
const signupController = require('../controllers/signupController')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
passport.initialize()

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      const user = await User.findOne({
        where: {
          email: email,
        },
      })
      try {
        if (!user) {
          return done(null, false, { message: 'Incorrect Email.' })
        }
        if (!User.validPassword(user, password)) {
          return done(null, false, { message: 'Incorrect password' })
        }
        return done(null, user)
      } catch (err) {
        done(err)
      }
    }
  )
)

router.get('/', homepageController)
router.get('/about', aboutController)
router.get('/contact', contactController)
router.get('/category/:id', categoryController)
router.get('/post/:id', postController)
router.get('/search', searchController)
router.get('/login', loginController.get)
router.post('/login', loginController.post)

router.get('/signup', signupController.get)
router.post('/signup', signupController.post)

module.exports = router
