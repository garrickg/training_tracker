export default (sequelize, DataTypes) => {
  const QMSProcedure = sequelize.define(
    'QMSProcedure',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
  );

  return QMSProcedure;
};

