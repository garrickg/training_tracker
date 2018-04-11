export default (sequelize, DataTypes) => {
  const TrainingRequirement = sequelize.define(
    'trainingRequirement',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
  );

  return TrainingRequirement;
};

