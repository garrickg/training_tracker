export default {
  Reviewer: {
    QMSProcedure: ({ QMSProcedureId }, args, { models }) => models.QMSProcedure.findOne({ where: { id: QMSProcedureId } }),
    user: ({ userId }, args, { models }) => models.User.findOne({ where: { id: userId } }),
  },
  Query: {
    getReviewerByUser: (parent, { userId }, { models }) => models.Reviewer.findAll({ where: { user_id: userId } }),
    getReviewerById: (parent, { id }, { models }) => models.Reviewer.findOne({ where: { id } }),
    getReviewersByQMS: (parent, { QMSProcedureId }, { models }) => models.Reviewer.findAll({ where: { qms_procedure_id: QMSProcedureId } }),
  },
};

