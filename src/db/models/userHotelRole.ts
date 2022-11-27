import { sequelize } from '../config/database';
import User from './user';
import Role from './role';
import HotelRef from './hotelRef';

const UserHotelRole = sequelize.define('User_Hotel_Role', {});

Role.belongsToMany(HotelRef, { through: UserHotelRole, foreignKey: 'RoleId' });
HotelRef.belongsToMany(Role, { through: UserHotelRole, foreignKey: 'HotelRefId' });
User.hasMany(UserHotelRole);
UserHotelRole.belongsTo(User, { foreignKey: 'UserId' });

UserHotelRole.sync({ force: true });
export default UserHotelRole;
