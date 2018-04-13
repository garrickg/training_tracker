import shortid from 'shortid';
import formatErrors from '../shared/formatErrors';

export default {
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
    getTrainer: (parent, args, { models }) => models.sequelize.query(
      'select * from qms_procedures as q join trainers as t on t.qms_procedure_id = q.id where t.user_id = ?',
      {
        replacements: [args.userId],
        model: models.User,
        raw: true,
      },
    ),
    getAuthor: (parent, args, { models }) => models.sequelize.query(
      'select * from qms_procedures as q join authors as a on a.qms_procedure_id = q.id where a.user_id = ?',
      {
        replacements: [args.userId],
        model: models.User,
        raw: true,
      },
    ),
    getReviewer: (parent, args, { models }) => models.sequelize.query(
      'select * from qms_procedures as q join reviewers as r on r.qms_procedure_id = q.id where r.user_id = ?',
      {
        replacements: [args.userId],
        model: models.User,
        raw: true,
      },
    ),
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
  },
};
