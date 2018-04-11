export default (sequelize, DataTypes) => {
  const TrainingRecord = sequelize.define(
    'trainingRecord',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
  );

  return TrainingRecord;
};

