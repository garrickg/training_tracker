export default (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'author',
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

  return Author;
};

