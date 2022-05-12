import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  scalar Date
  type Fell {
    id: ID
    name: String
    region: String
    metres: String
    feet: String
    latitude: String
    longitude: String
    climbed: Boolean
    notes: String
    date: Date
  }
  input FellInput {
    id: ID
    name: String
    region: String
    metres: Int
    feet: Int
    latitude: String
    longitude: String
    climbed: Boolean
    notes: String
    date: Date
  }
  type Query {
    getFells: [Fell]
  }
  type Mutation {
    addFell(
      name: String
      region: String
      metres: Int
      feet: Int
      latitude: String
      longitude: String
      climbed: Boolean
      notes: String
      date: Date
    ): Fell
    addManyFells(input: [FellInput]): [Fell]
    deleteFell(id: ID): String
    deleteBulk(region: String): String
    updateFell(
      id: ID
      name: String
      region: String
      metres: Int
      feet: Int
      latitude: String
      longitude: String
      climbed: Boolean
      notes: String
      date: Date
    ): Fell
  }
`;

export default typeDefs;
