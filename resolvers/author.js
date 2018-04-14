export default {
  Author: {
    QMSProcedure: ({ QMSProcedureId }, args, { models }) => models.QMSProcedure.findOne({ where: { id: QMSProcedureId } }),
    user: ({ userId }, args, { models }) => models.User.findOne({ where: { id: userId } }),
  },
  Query: {
    getAuthorByUser: (parent, { userId }, { models }) => models.Author.findAll({ where: { user_id: userId } }),
    getAuthorById: (parent, { id }, { models }) => models.Author.findOne({ where: { id } }),
    getAuthorsByQMS: (parent, { QMSProcedureId }, { models }) => models.Author.findAll({ where: { qms_procedure_id: QMSProcedureId } }),
  },
};

