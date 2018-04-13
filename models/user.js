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

  User.associate = (models) => {
    User.belongsToMany(models.QMSProcedure, {
      through: models.Trainer,
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
    User.belongsToMany(models.QMSProcedure, {
      through: models.Author,
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
    User.belongsToMany(models.QMSProcedure, {
      through: models.Reviewer,
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
    User.belongsToMany(models.QMSProcedure, {
      through: models.TrainingRequirement,
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
    User.belongsToMany(models.QMSProcedure, {
      through: models.TrainingRecord,
      foreignKey: {
        name: 'traineeId',
        field: 'trainee_id',
      },
    });
    User.belongsToMany(models.QMSProcedure, {
      through: models.TrainingRecord,
      foreignKey: {
        name: 'trainerId',
        field: 'trainer_id',
      },
    });
  };

  return User;
};
