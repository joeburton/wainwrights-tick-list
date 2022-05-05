import { ApolloServer, gql } from 'apollo-server-micro';
import Cors from 'micro-cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const cors = Cors();

const server = new ApolloServer({ typeDefs: typeDefs as any, resolvers });
const startServer = server.start();

const DB_CONNECTION_STRING = process.env.MONGODB || '';

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  try {
    await mongoose.connect(DB_CONNECTION_STRING);
  } catch (error) {
    console.log(`Error: `, error);
  }

  await server.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
