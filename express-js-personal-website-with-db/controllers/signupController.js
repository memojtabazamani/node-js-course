User = require('../models/User')
const get = (req, res) => {
  const flash = req.flash()
  res.render('signup', { flash })
}

const post = async (req, res) => {
  console.log('req', req.body)
  await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    age: 0,
  })
  res.render('signup')
}

module.exports = {
  get,
  post,
}
