'use strict';

const CategoriesModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName:"categories",
    underscored: true
  }
  );
  return Category;
}

module.exports = CategoriesModel;