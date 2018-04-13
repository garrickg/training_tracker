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

  return TrainingRecord;
};

