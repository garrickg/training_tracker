export default (sequelize, DataTypes) => {
  const TrainingRequirement = sequelize.define(
    'training_requirement',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
  );

  TrainingRequirement.associate = (models) => {
    TrainingRequirement.belongsTo(models.QMSProcedure, {
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
    TrainingRequirement.belongsTo(models.User, {
      foreignKey: {
        name: 'traineeId',
        field: 'trainee_id',
      },
    });
  };

  return TrainingRequirement;
};

