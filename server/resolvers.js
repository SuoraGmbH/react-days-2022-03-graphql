const resolvers = {
  Query: {
    timeEntry: async (node, args, { dataSources }) => {
      return await dataSources.timeEntryApi.getTimeEntry(args.id);
    },
    timeEntries: async (node, _, { dataSources }) => {
      return await dataSources.timeEntryApi.getAllTimeEntries();
    },
    project: async (node, args, { dataSources }) => {
      return await dataSources.projectApi.getProject(args.id);
    },
    projects: async (node, _, { dataSources }) => {
      return await dataSources.projectApi.getAllProjects();
    },
    searchProjects: async (node, args, { dataSources }) => {
      return await dataSources.projectApi.searchProjects(args);
    },
  },
  Mutation: {
    addTimeEntry: async (
      _,
      { comment, projectId, start, end },
      { dataSources }
    ) => {
      return await dataSources.timeEntryApi.addTimeEntry({
        comment,
        projectId,
        start,
        end,
      });
    },
  },
  TimeEntry: {
    project: async ({ dataValues }, _, { dataSources }) => {
      return await dataSources.projectApi.getProject(dataValues.projectId);
    },
  },
  Project: {
    timeEntriesConnection: async ({ dataValues }, _, { dataSources }) => {
      const timeEntries = await dataSources.timeEntryApi.getAllByProjectId(
        dataValues.id
      );
      return {
        edges: timeEntries.map((timeEntry) => ({
          node: timeEntry,
        })),
      };
    },
  },
};

module.exports = resolvers;
