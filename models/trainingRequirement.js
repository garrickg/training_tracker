export default (sequelize, DataTypes) => {
  const TrainingRequirement = sequelize.define(
    'training_requirement',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
  );

  return TrainingRequirement;
};

