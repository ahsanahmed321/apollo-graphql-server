import UserModel from '../../db/models/user';
import UserHotelRoleModel from '../../db/models/userHotelRole';
import { encryptCredential, validateCredential, JWT_SECRET } from '../../utils/auth';
import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';
import { Resolvers, ResolverTypeWrapper, User } from '../../generated/graphql';

const resolvers: Resolvers = {
  Mutation: {
    register: async (_, ctx) => {
      ctx.user.password = await encryptCredential(ctx.user.password);

      const emailExist = await UserModel.findOne({
        where: {
          email: ctx.user.email,
        },
      });

      if (emailExist) throw new GraphQLError('Email is already taken');

      const user: any = await UserModel.create(ctx.user);
      await UserHotelRoleModel.create({
        UserId: user.id,
        HotelRefId: 1,
        RoleId: 2,
      });
      await UserHotelRoleModel.create({
        UserId: user.id,
        HotelRefId: 2,
        RoleId: 1,
      });

      const token = jwt.sign({ userId: user.id }, JWT_SECRET);
      return {
        user,
        token,
      };
    },
  },
  Query: {
    users: async () => (await UserModel.findAll({})) as ResolverTypeWrapper<User[]>,
    signIn: async (_, ctx) => {
      const user: any = await UserModel.findOne({
        where: {
          email: ctx.user.email,
        },
        include: UserHotelRoleModel,
      });

      if (!user) throw new GraphQLError('User Not Found');

      const validate = await validateCredential(ctx.user.password, user.password);

      if (!validate) throw new GraphQLError('Invalid Credential');

      const token: string = jwt.sign(
        {
          userId: user.id,
        },
        JWT_SECRET,
      );

      return { user, token };
    },
  },
};

export default resolvers;
