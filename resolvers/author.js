export default {
  Query: {
    allAuthors: (parent, args, { models }) => models.Author.findAll(),
  },
  Mutation: {
    addAuthor: async (parent, args, { models }) => {
      try {
        await models.Author.create(args);
        return true;
      } catch (err) {
        return false;
      }
    },
  },
};

