'use strict';
module.exports = (sequelize, DataTypes) => {
  var TripCategory = sequelize.define('TripCategory', {
    TripId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {});
  TripCategory.associate = function(models) {
    // // associations can be defined here
    // TripCategory.belongsTo(models.Trip)
    // TripCategory.belongsTo(models.Category)
  };
  return TripCategory;
};
