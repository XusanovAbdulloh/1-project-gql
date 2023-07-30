const { resolvers, typeDefs }= require('../modules');
const { makeExecutableSchema } = require('@graphql-tools/schema');


const schema = makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: [resolvers],
});

module.exports = schema