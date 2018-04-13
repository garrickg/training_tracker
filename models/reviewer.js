export default (sequelize, DataTypes) => {
  const Reviewer = sequelize.define(
    'reviewer',
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

  return Reviewer;
};
