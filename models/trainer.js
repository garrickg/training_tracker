export default (sequelize, DataTypes) => {
  const Trainer = sequelize.define(
    'trainer',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
  );

  return Trainer;
};
