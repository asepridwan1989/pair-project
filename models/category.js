'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here

    Category.belongsToMany(models.Trip, {
      through: models.TripCategory
    });

    // Category.hasMany(models.TripCategory);
  };
  return Category;
};
