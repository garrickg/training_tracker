export default (sequelize, DataTypes) => {
  const QMSProcedure = sequelize.define(
    'qms_procedure',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.STRING,
      },
      revision: {
        type: DataTypes.STRING,
      },
      effective_date: {
        type: DataTypes.DATE,
      },
      obsolete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
  );

  QMSProcedure.associate = (models) => {
    QMSProcedure.belongsToMany(models.User, {
      through: models.Trainer,
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
    QMSProcedure.belongsToMany(models.User, {
      through: models.Author,
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
    QMSProcedure.belongsToMany(models.User, {
      through: models.Reviewer,
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
    QMSProcedure.belongsToMany(models.User, {
      through: models.TrainingRequirement,
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
    QMSProcedure.belongsToMany(models.User, {
      through: models.TrainingRecord,
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
  };

  return QMSProcedure;
};

