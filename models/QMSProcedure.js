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
      effectiveDate: {
        type: DataTypes.DATE,
        field: 'effective_date',
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
      unique: false,
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
    QMSProcedure.belongsToMany(models.User, {
      through: models.Author,
      unique: false,
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
    QMSProcedure.belongsToMany(models.User, {
      through: models.Reviewer,
      unique: false,
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
    QMSProcedure.belongsToMany(models.User, {
      through: models.TrainingRequirement,
      unique: false,
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
    QMSProcedure.belongsToMany(models.User, {
      through: models.TrainingRecord,
      unique: false,
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
  };

  return QMSProcedure;
};

