const Category = require('../models/Category')
const Post = require('../models/Post')
const categoryController = async (req, res) => {
  const id = Number(req.params.id)
  const categories = await Category.findAll()
  const counts = await Post.count({
    where: {
      category_id: id,
    },
  })
  const offset = (Number(req.query.page) - 1) * 11 || 0
  const posts = await Post.findAll({
    where: {
      category_id: id,
    },
    limit: 11,
    offset,
  })
  res.render('index', {
    categories: categories.map((category) => category.name),
    posts: posts,
    activeCategotyId: id,
    counts,
  })
}

module.exports = categoryController
