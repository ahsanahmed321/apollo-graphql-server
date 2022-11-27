'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Roles', [
      {
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: 'guest',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Roles', null, {});
  },
};
