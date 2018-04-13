import shortid from 'shortid';
import formatErrors from '../shared/formatErrors';

export default {
  TrainingRequirement: {
    QMSProcedure: ( { QMSProcedureId }, args, { models }) => models.QMSProcedure.findOne({where: { id: QMSProcedureId }}),
    user: (parent, args, { models }) => models.User.findOne({where: {id: parent.user_id}}),
  },
  Query: {
      getTrainingRequirements: (parent, {userId}, { models }) => models.TrainingRequirement.findAll({where: {user_id: userId}}),
  }
};
 
