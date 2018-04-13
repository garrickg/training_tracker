import shortid from 'shortid';
import formatErrors from '../shared/formatErrors';

export default {
  QMSProcedure: {
    trainer: ({ id }, args, { models }) => models.sequelize.query(
      'select * from users as u join trainers as t on t.user_id = u.id where t.qms_procedure_id = ?',
      {
        replacements: [id],
        model: models.User,
        raw: true,
      },
    ),
    author: ({ id }, args, { models }) => models.sequelize.query(
      'select * from users as u join authors as a on a.user_id = u.id where a.qms_procedure_id = ?',
      {
        replacements: [id],
        model: models.User,
        raw: true,
      },
    ),
    reviewer: ({ id }, args, { models }) => models.sequelize.query(
      'select * from users as u join reviewers as r on r.user_id = u.id where r.qms_procedure_id = ?',
      {
        replacements: [id],
        model: models.User,
        raw: true,
      },
    ),
  },
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
