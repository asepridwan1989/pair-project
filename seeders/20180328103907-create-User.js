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
    return queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'johndoe@mail.com',
      phone: '9043928',
      pass: 'johndoe',
      privilage: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Michael Faraday',
      email: 'faraday@mail.com',
      phone: '904392848',
      pass: 'faraday',
      privilage: 'user',
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
