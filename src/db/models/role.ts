import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

const Role = sequelize.define('Role', {
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Role;
