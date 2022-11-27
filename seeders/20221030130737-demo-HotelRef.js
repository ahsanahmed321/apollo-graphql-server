'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Hotel_Refs', [
      {
        refrenceNumber: '123',
        hotelName: 'Aone',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        refrenceNumber: '456',
        hotelName: 'Bone',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Hotel_Refs', null, {});
  },
};
