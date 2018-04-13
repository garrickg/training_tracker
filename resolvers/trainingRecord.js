import shortid from 'shortid';
import formatErrors from '../shared/formatErrors';

export default {
  TrainingRecord: {
    QMSProcedure: ( { QMSProcedureId }, args, { models }) => models.QMSProcedure.findOne({where: { id: QMSProcedureId }}),
    trainer: (parent, args, { models }) => models.User.findOne({where: {id: parent.trainer_id}}),
    trainee: (parent, args, { models }) => models.User.findOne({where: {id: parent.trainee_id}}),
  },
};
 
