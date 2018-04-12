export default (sequelize, DataTypes) => {
  const Reviewer = sequelize.define(
    'reviewer',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
  );

  Reviewer.associate = (models) => {
    Reviewer.belongsTo(models.User, {
      foreignKey: {
        name: 'reviewerId',
        field: 'reviewer_id',
      },
    });
    Reviewer.belongsTo(models.QMSProcedure, {
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
  };

  return Reviewer;
};
