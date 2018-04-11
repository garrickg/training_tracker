export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
  );

  // User.associate = (models) => {
  //   User.belongsToMany(models., {
  //     through: models.Member,
  //     foreignKey: {
  //       name: 'userId',
  //       field: 'user_id',
  //     },
  //   });
  // };

  return User;
};
