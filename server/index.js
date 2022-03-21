const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const createStore = require("./store");
const TimeEntryApi = require("./data-sources/timeEntry");
const ProjectApi = require("./data-sources/project");

const startServer = async () => {
  const store = await createStore();

  const timeEntryApi = new TimeEntryApi(store);
  const projectApi = new ProjectApi(store);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ timeEntryApi, projectApi }),
  });

  const { url } = await server.listen();

  console.log(`Server started at ${url} 🚎`);
};

startServer();
