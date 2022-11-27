'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HotelRef extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HotelRef.init(
    {
      refrenceNumber: DataTypes.STRING,
      hotelName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Hotel_Ref',
      timestamps: true,
    },
  );
  return HotelRef;
};
