import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

// List of all GraphQL typeDefs and resolvers
import TaskSchema from './schemas/Task.js';
import TaskResolver from './resolvers/Task.js';

// Merge and export all typeDefs and resolvers
export const typeDefs = mergeTypeDefs([TaskSchema]);
export const resolvers = mergeResolvers([TaskResolver]);
