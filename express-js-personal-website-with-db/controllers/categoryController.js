const Category = require('../models/Category')
const Post = require('../models/Post')
const categoryController = async (req, res) => {
  const id = Number(req.params.id)
  const categories = await Category.findAll()

  const posts = await Post.findAll({
    where: {
      category_id: id,
    },
  })
  res.render('index', {
    categories: categories.map((category) => category.name),
    posts: posts,
    activeId: id,
  })
}

module.exports = categoryController
