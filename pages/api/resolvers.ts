import { Fell, FellInterface } from './models/Fell';
import { GraphQLScalarType, Kind } from 'graphql';

const ScalarDate = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value: any) {
    return new Date(value).toLocaleDateString(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value: any) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const resolvers = {
  Date: ScalarDate,
  Query: {
    getFells: async () => {
      const fells = await Fell.find();
      return fells;
    },
  },
  Mutation: {
    addFell: async (root: any, args: any) => {
      const newFell = new Fell({
        name: args.name,
        region: args.region,
        metres: args.metres,
        feet: args.feet,
        latitude: args.latitude,
        longitude: args.longitude,
        climbed: args.climbed,
        notes: args.notes,
        date: args.date,
      });
      await newFell.save();
      return newFell;
    },
    addManyFells: async (root: any, args: any) => {
      const result = await Fell.insertMany(args.input);
      return result;
    },
    deleteFell: async (root: any, args: any) => {
      await Fell.findByIdAndDelete(args.id);
      return 'The fell has been deleted.';
    },
    deleteBulk: async (root: any, args: any) => {
      const result = await Fell.deleteMany({ region: args.region });
      return JSON.stringify(result);
    },
    updateFell: async (root: any, args: any) => {
      const {
        id,
        name,
        region,
        metres,
        feet,
        latitude,
        longitude,
        climbed,
        notes,
        date,
      } = args;
      const updatedFell = {} as FellInterface;

      if (name !== undefined) updatedFell.name = name;
      if (region !== undefined) updatedFell.region = region;
      if (metres !== undefined) updatedFell.metres = metres;
      if (feet !== undefined) updatedFell.feet = feet;
      if (latitude !== undefined) updatedFell.latitude = latitude;
      if (longitude !== undefined) updatedFell.longitude = longitude;
      if (climbed !== undefined) updatedFell.climbed = climbed;
      if (notes !== undefined) updatedFell.notes = notes;
      if (date !== undefined) updatedFell.date = date;

      const fell = await Fell.findByIdAndUpdate(id, updatedFell, { new: true });

      return fell;
    },
  },
};

export default resolvers;
