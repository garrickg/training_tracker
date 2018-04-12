export default {
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
  },
  Mutation: {
    addUser: async (parent, args, { models }) => {
      try {
        await models.User.create(args);
        return true;
      } catch (err) {
        return false;
      }
    },
  },
};
