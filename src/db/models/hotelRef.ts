import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

const HotelRef = sequelize.define('Hotel_Ref', {
  refrenceNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hotelName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default HotelRef;
