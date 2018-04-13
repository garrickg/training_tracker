export default (sequelize, DataTypes) => {
  const Trainer = sequelize.define(
    'trainer',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
  );

  return Trainer;
};
