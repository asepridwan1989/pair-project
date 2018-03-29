'use strict';
module.exports = (sequelize, DataTypes) => {
  var Trip = sequelize.define('Trip', {
    trip_name: DataTypes.STRING,
    trip_time: DataTypes.DATEONLY,
    trip_quota: DataTypes.INTEGER,
    budget_estimation: DataTypes.INTEGER,
    trip_type: DataTypes.STRING,
    itinerary: DataTypes.TEXT
  }, {});
  Trip.associate = function(models) {
    // associations can be defined here

    Trip.belongsToMany(models.Category, {
      through: models.TripCategory
    });


    Trip.belongsToMany(models.User, {
      through: models.UserTrip
    });

    Trip.hasMany(models.Comment)
  };
  return Trip;
};
