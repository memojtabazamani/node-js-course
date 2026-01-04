const { Op } = require('sequelize')
const Category = require('../models/Category')
const Post = require('../models/Post')

const searchController = async (req, res) => {
  const categories = await Category.findAll()
  const counts = await Post.count({
    where: {
      title: {
        [Op.like]: `%${req.query.q}`,
      },
    },
  })
  const offset = (Number(req.query.page) - 1) * 11 || 0
  const posts = await Post.findAll({
    where: {
      title: {
        [Op.like]: `%${req.query.q}%`,
      },
    },
    limit: 11,
    offset,
    order: [['created_at', 'DESC']],
  })
  res.render('search', {
    categories: categories.map((category) => category.name),
    posts: posts,
    activeCategotyId: null,
    counts,
  })
}

module.exports = searchController
