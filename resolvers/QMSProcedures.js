import shortid from 'shortid';
import formatErrors from '../shared/formatErrors';

export default {
  QMSProcedure: {
    trainer: ({ id }, args, { models }) => models.Trainer.findAll({ where: { qms_procedure_id: id } }),
    author: ({ id }, args, { models }) => models.Author.findAll({ where: { qms_procedure_id: id } }),
    reviewer: ({ id }, args, { models }) => models.Reviewer.findAll({ where: { qms_procedure_id: id } }),
    trainingRecords: ({ id }, args, { models }) => models.TrainingRecord.findAll({ order: [['created_at', 'DESC']], where: { qms_procedure_id: id } }),
    trainingRequirements: ({ id }, args, { models }) => models.TrainingRequirements.findAll({ order: [['created_at', 'DESC']], where: { qms_procedure_id: id } }),
  },
  Query: {
    allQMSProcedures: (parent, args, { models }) => models.QMSProcedure.findAll({ order: [['number', 'ASC']] }),
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
