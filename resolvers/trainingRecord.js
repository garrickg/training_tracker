import shortid from 'shortid';
import formatErrors from '../shared/formatErrors';

export default {
  TrainingRecord: {
    QMSProcedure: ({ QMSProcedureId }, args, { models }) => models.QMSProcedure.findOne({ where: { id: QMSProcedureId } }),
    trainer: ({ trainerId }, args, { models }) => models.User.findOne({ where: { id: trainerId } }),
    trainee: ({ traineeId }, args, { models }) => models.User.findOne({ where: { id: traineeId } }),
  },
  Query: {
    getTrainingRecordsByUser: (parent, { userId }, { models }) => models.TrainingRecord.findAll({ where: { user_id: userId } }),
    getTrainingRecordsById: (parent, { id }, { models }) => models.TrainingRecord.findOne({ where: { id } }),
    getTrainingRecordsByQMS: (parent, { QMSProcedureId }, { models }) => models.TrainingRecord.findAll({ where: { qms_procedure_id: QMSProcedureId } }),
  },
  Mutation: {
    bulkAddTrainingRecords: async (parent, args, { models }) => {
      try {
        await models.sequelize.transaction(() => {
          const { traineeIds, ...newArgs } = args;
          for (const traineeId of traineeIds) {
            models.TrainingRecord.create({
              ...newArgs,
              traineeId,
              id: shortid.generate(),
            });
          }
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

