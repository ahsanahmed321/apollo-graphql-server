import Role from '../../db/models/role';

const resolvers = {
  Query: {
    roles: async () => await Role.findAll({}),
  },
};

export default resolvers;
