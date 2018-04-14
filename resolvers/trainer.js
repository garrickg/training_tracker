export default {
  Trainer: {
    QMSProcedure: ({ QMSProcedureId }, args, { models }) => models.QMSProcedure.findOne({ where: { id: QMSProcedureId } }),
    user: ({ userId }, args, { models }) => models.User.findOne({ where: { id: userId } }),
  },
  Query: {
    getTrainerByUser: (parent, { userId }, { models }) => models.Trainer.findAll({ where: { user_id: userId } }),
    getTrainerById: (parent, { id }, { models }) => models.Trainer.findOne({ where: { id } }),
    getTrainersByQMS: (parent, { QMSProcedureId }, { models }) => models.Trainer.findAll({ where: { qms_procedure_id: QMSProcedureId } }),
  },
};

