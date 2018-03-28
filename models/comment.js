'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    TripId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    date_time: DataTypes.DATEONLY
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};