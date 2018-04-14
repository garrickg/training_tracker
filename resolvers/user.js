import shortid from 'shortid';
import formatErrors from '../shared/formatErrors';

export default {
  User: {
    trainingRecords: ({ id }, args, { models }) => models.TrainingRecord.findAll({ order: [['created_at', 'DESC']], where: { trainee_id: id } }),
    trainingRequirements: ({ id }, args, { models }) => models.TrainingRequirement.findAll({ order: [['created_at', 'DESC']], where: { user_id: id } }),
    author: ({ id }, args, { models }) => models.Author.findAll({ where: { user_id: id } }),
    trainer: ({ id }, args, { models }) => models.Trainer.findAll({ where: { user_id: id } }),
    reviewer: ({ id }, args, { models }) => models.Reviewer.findAll({ where: { user_id: id } }),
  },
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll({ order: [['username', 'ASC']] }),
    user: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
  },
  Mutation: {
    addUser: async (parent, args, { models }) => {
      try {
        await models.User.create({
          ...args,
          id: shortid.generate(),
        });
        return {
          ok: true,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    },
    addTrainingRequirement: async (parent, args, { models }) => {
      try {
        await models.TrainingRequirement.create({
          ...args,
          id: shortid.generate(),
        });
        return {
          ok: true,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    },
    addTrainingRecord: async (parent, args, { models }) => {
      try {
        await models.TrainingRecord.create({
          ...args,
          id: shortid.generate(),
        });
        return {
          ok: true,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    },
  },
};
