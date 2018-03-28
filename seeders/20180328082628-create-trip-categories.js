'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Categories', [{
      name: 'Hiking',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Camping',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Diving',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Snorkling',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'City Explore',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Religion',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
