export default (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'author',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
  );

  Author.associate = (models) => {
    Author.belongsTo(models.User, {
      foreignKey: {
        name: 'authorId',
        field: 'author_id',
      },
    });
    Author.belongsTo(models.QMSProcedure, {
      foreignKey: {
        name: 'QMSProcedureId',
        field: 'qms_procedure_id',
      },
    });
  };

  return Author;
};

