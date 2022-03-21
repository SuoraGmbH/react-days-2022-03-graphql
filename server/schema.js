const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type TimeEntry {
    id: ID!
    comment: String!
    start: Date!
    end: Date!
    project: Project!
  }
  
  type Project {
    id: ID!
    name: String!
    timeEntriesConnection: ProjectTimeEntriesConnection
  }

  type ProjectTimeEntriesConnection {
    edges: [ProjectTimeEntriesEdge!]!
  }

  type ProjectTimeEntriesEdge {
    node: TimeEntry!
  }

  type Query {
    timeEntries: [TimeEntry!]!
    project(id: ID!): Project
    projects: [Project!]!
    searchProjects(firstName: String, lastName: String): [Project!]!
  }

  type Mutation {
    addTimeEntry(comment: String!, projectId: String!, start: Date!, end: Date!): TimeEntry!
  }
`;

module.exports = typeDefs;
