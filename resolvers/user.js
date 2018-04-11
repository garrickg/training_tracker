export default {
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
  },
};
