export default (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'author',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
  );

  return Author;
};

