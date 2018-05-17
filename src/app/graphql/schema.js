import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Mutation {
    allow(roles: [String], resources: [String], permissions: [String]): Boolean
    removeAllow(roles: [String], resources: [String], permissions: [String]): Boolean
    addRoleParents(role: String, parents: [String]): Boolean
    removeRole(role: String): Boolean
    addUserRoles(userId: ID!, roles: [String]): Boolean
    removeUserRoles(userId: ID!, roles: [String]): Boolean
  }

  type Query {
    isAllowed(userId: ID!, resources: String, permissions: [String]): Boolean
    hasRole(userId: ID!, role: String): Boolean
  }
`);

export default schema
