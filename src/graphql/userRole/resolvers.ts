import UserRole from '../../db/models/userHotelRole';

const resolvers = {
  Query: {
    roles: async () => await UserRole.findAll({}),
  },
};

export default resolvers;
