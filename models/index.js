import Sequelize from 'sequelize';

const sequelize = new Sequelize('training', 'postgres', 'postgres', {
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  define: {
    underscored: true,
  },
});

const models = {
  User: sequelize.import('./user'),
  Author: sequelize.import('./author'),
  Reviewer: sequelize.import('./reviewer'),
  Trainer: sequelize.import('./trainer'),
  TrainingRequirement: sequelize.import('./trainingRequirement'),
  TrainingRecord: sequelize.import('./trainingRecord'),
  QMSProcedure: sequelize.import('./QMSProcedure'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
