import * as dotenv from "dotenv";

dotenv.config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const port = process.env.PORT;
const typeDefs = `
 type Query {
 info: String!
 }`
 ;


const resolvers = {
    Query: {
    info: () => "CSTJEAN NEWS",
    },
   };
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: port },
});

console.log(`� Server ready at: ${url}`);