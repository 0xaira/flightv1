'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cities', [
      { name: 'New York', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Los Angeles', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chicago', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Houston', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phoenix', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Philadelphia', createdAt: new Date(), updatedAt: new Date() },
      { name: 'San Antonio', createdAt: new Date(), updatedAt: new Date() },
      { name: 'San Diego', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dallas', createdAt: new Date(), updatedAt: new Date() },
      { name: 'San Jose', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Austin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jacksonville', createdAt: new Date(), updatedAt: new Date() },
      { name: 'San Francisco', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Columbus', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Indianapolis', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Charlotte', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Seattle', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Denver', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Washington', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Boston', createdAt: new Date(), updatedAt: new Date() },
      { name: 'El Paso', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nashville', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Detroit', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Oklahoma City', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Las Vegas', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Louisville', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Baltimore', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Milwaukee', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};
