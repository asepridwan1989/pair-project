'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserTrip = sequelize.define('UserTrip', {
    UserId: DataTypes.INTEGER,
    TripId: DataTypes.INTEGER
  }, {});
  UserTrip.associate = function(models) {
    // associations can be defined here
  };
  return UserTrip;
};
