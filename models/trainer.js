export default (sequelize, DataTypes) => {
  const Trainer = sequelize.define(
    'trainer',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
  );

  Trainer.associate = (models) => {
    Trainer.belongsTo(models.User, {
      foreignKey: {
        name: 'trainerId',
        field: 'trainer_id',
      },
    });
    Trainer.belongsTo(models.QMSProcedure, {
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
  };

  return Trainer;
};
