export default (sequelize, DataTypes) => {
  const Reviewer = sequelize.define(
    'reviewer',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
  );

  return Reviewer;
};
