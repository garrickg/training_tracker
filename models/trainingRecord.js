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
      obsolete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
  );

  return TrainingRecord;
};

