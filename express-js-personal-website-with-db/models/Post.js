const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const Post = db.define(
  'posts',
  {
    id: {
      type: DataTypes.INTEGER, // ✅ use INTEGER
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // ✅ correct spelling
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    category_id: {
      type: DataTypes.NUMBER,
    },
  },
  {
    timestamps: false,
  }
)

module.exports = Post
