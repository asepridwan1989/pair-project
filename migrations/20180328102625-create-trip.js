'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trip_name: {
        type: Sequelize.STRING
      },
      trip_time: {
        type: Sequelize.DATEONLY
      },
      trip_quota: {
        type: Sequelize.INTEGER
      },
      budget_estimation: {
        type: Sequelize.INTEGER
      },
      trip_type: {
        type: Sequelize.STRING
      },
      itinerary: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trips');
  }
};