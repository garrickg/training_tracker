export default (sequelize, DataTypes) => {
  const TrainingRecord = sequelize.define(
    'training_record',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
      },
      revision: {
        type: DataTypes.STRING,
      },
    },
  );

  TrainingRecord.associate = (models) => {
    TrainingRecord.belongsTo(models.QMSProcedure, {
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
    TrainingRecord.belongsTo(models.Trainer, {
      foreignKey: {
        name: 'trainerId',
        field: 'trainer_id',
      },
    });
    TrainingRecord.belongsTo(models.User, {
      foreignKey: {
        name: 'traineeId',
        field: 'trainee_id',
      },
    });
  };

  return TrainingRecord;
};

