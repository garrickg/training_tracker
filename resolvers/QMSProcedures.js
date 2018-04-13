import shortid from 'shortid';
import formatErrors from '../shared/formatErrors';

export default {
  Query: {
    allQMSProcedures: (parent, args, { models }) => models.QMSProcedure.findAll(),
  },
  Mutation: {
    addQMSProcedure: async (parent, args, { models }) => {
      try {
        await models.QMSProcedure.create({
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
    addAuthor: async (parent, args, { models }) => {
      try {
        await models.Author.create({
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
    addTrainer: async (parent, args, { models }) => {
      try {
        await models.Trainer.create({
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
    addReviewer: async (parent, args, { models }) => {
      try {
        await models.Reviewer.create({
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
