const Category = require('../models/Category')
const Post = require('../models/Post')

const homepageController = async (req, res) => {
  const categories = await Category.findAll()
  const counts = await Post.count()
  const offset = (Number(req.query.page) - 1) * 11 || 0
  const posts = await Post.findAll({
    limit: 11,
    offset,
    order: [['created_at', 'DESC']],
  })
  res.render('index', {
    categories: categories.map((category) => category.name),
    posts: posts,
    activeCategotyId: null,
    counts,
  })
}

module.exports = homepageController
