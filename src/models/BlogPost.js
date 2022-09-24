"use strict";

const blogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    "BlogPost",
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      updated: DataTypes.DATE,
      published: DataTypes.DATE,
    },
    {
      tableName: "blog_posts",
      timestamps: false,
      underscored: true,
    }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return BlogPost;
};

module.exports = blogPostModel;
