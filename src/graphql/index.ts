import 'graphql-import-node';
import { makeExecutableSchema } from '@graphql-tools/schema';

import UserResolvers from './user/resolvers';
import RoleResolvers from './role/resolvers';
import UserRoleResolvers from './userRole/resolvers';

import * as UserGraphql from './user/schema.graphql';
import * as RoleGraphql from './role/schema.graphql';
import * as UserRoleGraphql from './userRole/schema.graphql';

const allResolvers = [UserResolvers, RoleResolvers, UserRoleResolvers];
const allTypeDefs = [UserGraphql, RoleGraphql, UserRoleGraphql];

const schema = makeExecutableSchema({ typeDefs: allTypeDefs, resolvers: allResolvers });

export default schema;
