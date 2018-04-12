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

  return QMSProcedure;
};

