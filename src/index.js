const http = require('http');
const express = require('express');
const cors = require('cors');
const { expressMiddleware } = require('@apollo/server/express4');
const buildGraphQLServer = require('./graphql/index.js');
const config = require('./shared/config/index.js');

const app = express();
const httpServer = http.createServer(app);

app.use(express.json());
app.use(cors());

// GraphQL Serverni sozlash
const server = buildGraphQLServer(httpServer);

server.start().then(() => {
  app.use('/gql', expressMiddleware(server));
})


httpServer.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
