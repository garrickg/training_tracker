import shortid from 'shortid';
import formatErrors from '../shared/formatErrors';

export default {
  User: {
    trainingRecords: ({ id }, args, { models, user }) => models.TrainingRecord.findAll({where:{trainee_id: id}}),
    trainingRequirements: ({ id }, args, { models, user }) => models.TrainingRequirement.findAll({where:{user_id: id}}),
    author: (parent, args, { models, user }) => models.sequelize.query(
      'select * from qms_procedures as q join authors as a on a.qms_procedure_id = q.id where a.user_id = ?',
      {
        replacements: [user.id],
        model: models.QMSProcedure,
        raw: true,
      },
    ),
    trainer: (parent, args, { models, user }) => models.sequelize.query(
      'select * from qms_procedures as q join trainers as t on t.qms_procedure_id = q.id where t.user_id = ?',
      {
        replacements: [user.id],
        model: models.QMSProcedure,
        raw: true,
      },
    ),
    reviewer: (parent, args, { models, user }) => models.sequelize.query(
      'select * from qms_procedures as q join reviewers as r on r.qms_procedure_id = q.id where r.user_id = ?',
      {
        replacements: [user.id],
        model: models.QMSProcedure,
        raw: true,
      },
    ),
  },
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
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
