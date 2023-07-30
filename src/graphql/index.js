const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const schema = require('./schema.js');

function buildGraphQLServer(httpServer) {
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/gql',
  });
  const serverCleanup = useServer({ schema }, wsServer);

  return new ApolloServer({
    schema,
    plugins: [
      // Http serverda xatolik bo'lsa serverni to'xtatish uchun plugin
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        // Ws serverda xatolik bo'lsa serverni to'xtatish uchun sozlama
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });
}

module.exports = buildGraphQLServer