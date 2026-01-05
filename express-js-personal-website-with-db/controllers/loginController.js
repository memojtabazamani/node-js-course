const passport = require('passport')
const get = (req, res) => {
  const flash = req.flash()
  res.render('login', {
    flash,
  })
}
const post = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login?failed=true',
  failureFlash: true,
  session: false,
})

module.exports = {
  get,
  post,
}
