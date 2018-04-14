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
      unique: false,
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
    User.belongsToMany(models.QMSProcedure, {
      through: models.Author,
      unique: false,
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
    User.belongsToMany(models.QMSProcedure, {
      through: models.Reviewer,
      unique: false,
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
    User.belongsToMany(models.QMSProcedure, {
      through: models.TrainingRequirement,
      unique: false,
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
    User.belongsToMany(models.QMSProcedure, {
      through: models.TrainingRecord,
      unique: false,
      foreignKey: {
        name: 'traineeId',
        field: 'trainee_id',
      },
    });
    User.belongsToMany(models.QMSProcedure, {
      through: models.TrainingRecord,
      unique: false,
      foreignKey: {
        name: 'trainerId',
        field: 'trainer_id',
      },
    });
  };

  return User;
};
