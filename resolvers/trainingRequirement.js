export default {
  TrainingRequirement: {
    QMSProcedure: ({ QMSProcedureId }, args, { models }) => models.QMSProcedure.findOne({ where: { id: QMSProcedureId } }),
    user: ({ userId }, args, { models }) => models.User.findOne({ where: { id: userId } }),
  },
  Query: {
    getTrainingRequirementsByUser: (parent, { userId }, { models }) => models.TrainingRequirement.findAll({ where: { user_id: userId } }),
    getTrainingRequirementsById: (parent, { id }, { models }) => models.TrainingRequirement.findOne({ where: { id } }),
    getTrainingRequirementsByQMS: (parent, { QMSProcedureId }, { models }) => models.TrainingRequirement.findAll({ where: { qms_procedure_id: QMSProcedureId } }),
  },
};

